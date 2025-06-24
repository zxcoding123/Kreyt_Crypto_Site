import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Aurora from '../blocks/Backgrounds/Aurora/Aurora';

function Header() {
    return (
        <section className='w-screen h-screen  blurry-bg overflow-hidden text-white figtree-font relative header'>
         
  <div className="arc-gradient" /> 
            <div className='grid grid-cols-2 gap-50 h-full items-center px-20 figtree-font z-100'>
                <div>
                    <span className='bg-gray-700 pl-2 pr-2 pt-1 pb-1 rounded-full opacity-55'>Top AI for growing your business</span>
                    <h1 className='text-7xl leading-tight'>
                        Automate &<br />
                        manage your<br />
                        business with ease.
                    </h1>
                </div>
                <div className='mr-50'>
                    <p>
                        Discover cutting-edge AI solutions designed to elevate your business
                        towards new insights and drive new results towards growing your business.
                    </p>
                    <div className='flex gap-5 mt-5 align-middle'>
                        <button className='bg-white text-black p-3 pl-7 pr-7 rounded-full font-semibold'>Free consultation</button>
                        <span className='flex ml-0.5 mt-1.5'>
                            <Avatar className='border-white border'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className='border-white border'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className='border-white border'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Header
