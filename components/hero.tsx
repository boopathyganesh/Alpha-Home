import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-8xl h-[700px] flex items-center justify-center gap-2 rounded-3xl bg-blue-100 p-10 shadow-2xl'>
            <div className='w-1/2 text-left'>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <h1>One Stop solution with Latest Cutting Edge Technologies</h1>
                    <h3>Discover premier Software Development Solutions with Alpha Solutions.</h3>
                    <p>Our expert developers understand your unique business needs and are committed to delivering excellence worldwide. Let us turn your vision into reality.</p>
                </div>
            </div>
            <div className='w-1/2 h-full rounded-3xl overflow-hidden'>
                <Image className='w-full h-auto' width={800} height={800} src={'https://i.pinimg.com/originals/8f/e4/a2/8fe4a2e147327dfd381785ea3980f752.png'} alt={'Hero Image'} />
            </div>
        </div>
    )
}

export default Hero
