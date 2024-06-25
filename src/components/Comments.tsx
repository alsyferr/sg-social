import Image from 'next/image'
import React from 'react'


const Comments = () => {
  return (
    <div>
        {/* WRITE */}
            <div className="flex items-center gap-4">
            <Image src="/feedavi.jpg" width={32} height={32} alt='' className='w-8 h-8 rounded-full'  />

            <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input type='text' placeholder='Write a comment...' className='bg-transparent outline-none flex-1' />
                <Image src="/emoji.png" width={16} height={16} alt='' className='cursor-pointer'  />
            </div>
        </div>

        {/* COMMENT */}
        <div className="">

        

        <div className="flex gap-4 justify-between mt-6">
                {/* AVATAR */}
                <Image src="/feedavi.jpg" width={40} height={40} alt='' className='w-10 h-10 rounded-full'  />
                {/* DESC */}
             <div className="flex flex-col gap-2 flex-1">
                <span className='font-medium'>Bernice Spencer</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, expedita dolore eos, necessitatibus quia hic voluptas fugiat quo dicta sit recusandae itaque dolorum molestiae doloribus ad odit! Nobis, repellendus odit.</p>

                <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                    <div className="flex items-center gap-4">
                    <Image src="/like.png" width={16} height={16} alt='' className=' cursor-pointer'  />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123 <span className='hidden md:inline'> Likes</span></span>
                    </div>

                    <div className="">Reply</div>

                </div>


             </div>
                {/* ICON */}
            <Image src="/more.png" alt='' width={16} height={16}  className="cursor-pointer w-4 h-4" />

        </div>
        </div>

    </div>
  )
}

export default Comments