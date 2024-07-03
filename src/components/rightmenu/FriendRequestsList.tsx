"use client"


import { acceptFollowRequest, declineFollowRequest } from '@/lib/actions';
import { FollowRequest, User } from '@prisma/client'
import Image from 'next/image'
import { decl } from 'postcss';
import React, { useOptimistic, useState } from 'react'

type RequestWithUser = FollowRequest & {
    sender: User;
  };

const FriendRequestsList = ({ requests }: { requests: RequestWithUser[] }) => {
    const [requestState, setRequestState] = useState(requests);

    const accept = async (requestId:number, userId:string) => {
        removeOptimisticRequests(requestId)
        try {
            await acceptFollowRequest(userId)
            setRequestState((prev) => prev.filter((req) => req.id !== requestId));
        } catch (err) {
            
        }
    }

    const decline = async (requestId:number, userId:string) => {
        removeOptimisticRequests(requestId)
        try {
            await declineFollowRequest(userId)
            setRequestState((prev) => prev.filter((req) => req.id !== requestId));
        } catch (err) {
            
        }
    }

    const [optimisticRequests, removeOptimisticRequests] = useOptimistic(
        requestState,
        (state, value: number) => (state.filter((req) => req.id !== value))
         );


  return (
    <div>

        {optimisticRequests.map((request) => (

       
        <div className="flex items-center justify-between" key={request.id}>
            <div className="flex items-center gap-4">
                <Image 
                    src={request.sender.avatar || "/noAvatar.png"} 
                    width={48} height={48} 
                    alt='' 
                    className='w-10 h-10 object-cover rounded-full'  
                />
                <span>
                    {request.sender.name && request.sender.surname
                    ? request.sender.name + "" + request.sender.surname
                    : request.sender.username}
                </span>
            </div>

            <div className="flex gap-3 justify-end">
                <form action={() => accept(request.id, request.sender.id)}>
                  <button>
                    <Image 
                        src="/accept.png" 
                        width={20} 
                        height={20} 
                        alt='' 
                        className='cursor-pointer'  
                    />
                  </button>

                </form>
              
                <form action={() => decline(request.id, request.sender.id)}>
                    <button>
                        <Image 
                            src="/reject.png" 
                            width={20} 
                            height={20} 
                            alt='' 
                            className='cursor-pointer'  
                        />
                    </button>
                </form>
            </div>
        </div>
        ))}

    </div>
  )
}

export default FriendRequestsList