import Image from 'next/image'
import React from 'react'

const Ad = ({ size }: { size: "sm" | "md" | "lg"}) => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg text-sm'>

        {/* TOP */}
        <div className="flex items-center justify-between text-gray-500 font-medium">
            <span>sponsored Ads</span>
            <Image src="/more.png" width={16} height={16} alt=''  />
        </div>


         {/* BOTTOM */}
         <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
            <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
            <Image src="/flower.jpg" fill alt='' className='rounded-lg object-cover'  />
            </div>

            <div className='flex items-center gap-4'>
            <Image src="/face2.jpg" width={24} height={24} alt='' className='w-6 h-6 rounded-full object-cover'  />
            <span className='text-blue-500 font-medium'>BigChef Lounge</span>
            </div>

            <p className={size === "sm" ? "text-xs" : "text-sm"}>
                { size === "sm"
                    ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                    : size === "md"
                    ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                    : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit."

                }
            </p>

            <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn more</button>

         </div>

    </div>
  )
}

export default Ad