import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendRequests = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4'>

        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
            <span className='text-gray-500 '>Friend Requests</span>
            <Link href="/" className='text-blue-500 text-xs'>See all</Link>
        </div>

        {/* USER */}
        <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">
                <Image src="/faceavi.jpg" width={48} height={48} alt='' className='w-10 h-10 object-cover rounded-full'  />
                <span>Wayne Burton</span>
            </div>

            <div className="flex gap-3 justify-end">
                <Image src="/accept.png" width={20} height={20} alt='' className='cursor-pointer'  />
                <Image src="/reject.png" width={20} height={20} alt='' className='cursor-pointer'  />
            </div>


        </div>

        <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">
                <Image src="/faceavi.jpg" width={48} height={48} alt='' className='w-10 h-10 object-cover rounded-full'  />
                <span>Wayne Burton</span>
            </div>

            <div className="flex gap-3 justify-end">
                <Image src="/accept.png" width={20} height={20} alt='' className='cursor-pointer'  />
                <Image src="/reject.png" width={20} height={20} alt='' className='cursor-pointer'  />
            </div>


        </div>

        <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">
                <Image src="/faceavi.jpg" width={48} height={48} alt='' className='w-10 h-10 object-cover rounded-full'  />
                <span>Wayne Burton</span>
            </div>

            <div className="flex gap-3 justify-end">
                <Image src="/accept.png" width={20} height={20} alt='' className='cursor-pointer'  />
                <Image src="/reject.png" width={20} height={20} alt='' className='cursor-pointer'  />
            </div>


        </div>

    </div>
  )
}

export default FriendRequests