import React from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6"
import { Spotlight } from './ui/Spotlight'
import { SparklesPreview } from './SparklesPreview'
import MagicButton from './MagicButton'


const Hero = () => {
    return (
        <section id="home" className='pb-20 pt-36'>
            <div>
                <Spotlight 
                className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
                fill='pink'
                />
                <Spotlight 
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

                {/* Background Grid */}
                <div className="w-full absolute left-0 -top-72 min-h-96 z-50">
                    <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                    />
                </div>
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    {/** Spark Preview */}
                    <SparklesPreview />

                    {/** Magic Button */}
                    <div className='mt-9'>
                        <a href="https://wa.me/529711018065">
                        <MagicButton 
                        icon={<FaLocationCrosshairs />}
                        title='Contactanos'
                        position='right'
                        />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero