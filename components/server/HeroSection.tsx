import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook, AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <>
            <div className='text-center text-white dark:bg-black relative flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen lg:space-x-20 mx-3 lg:-mt-10' id='Home'>
                <div>
                    <div className='relative z-30'>
                        <h1 className={`text-transparent bg-clip-text  bg-gradient-to-br from-purple-500 to-pink-600 text-7xl font-extrabold md:text-7xl lg:text-7xl uppercase mt-10`}
                        >Teja&apos;s</h1>
                        <h2 className={`text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-yellow-300 text-5xl font-extrabold md:text-7xl lg:text-7xl uppercase`}
                        >Portfolio</h2>
                        <p className="my-6 text-2xl dark:text-white text-black z-50 dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-semibold font-rubik"
                        >I am Full Stack Web Developer</p>
                    </div>
                    <Link href="#About"> <button className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 hover:scale-125 duration-150 relative z-30">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 inline-flex">
                            More About Me
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </span>
                    </button></Link>
                    <div className='blur-2xl h-16 mx-auto w-72 transition-all ease-in-out bg-gradient-to-br from-orange-600/80 to-yellow-300/80 relative bottom-20 z-10 '>
                    </div>
                    <div className="flex text-3xl space-x-9 justify-center -mt-10 pb-5 ">
                        <a href=" https://www.instagram.com/tejas_7514/?__coig_restricted=1" target="_blank">< AiFillInstagram className='text-gray-700 dark:text-gray-300 hover:scale-125 duration-150' /></a>
                        <a href="https://twitter.com/WavhalTejas" target="_blank">< AiFillTwitterCircle className='text-gray-700 dark:text-gray-300 hover:scale-125 duration-150' /></a>
                        <a href="https://www.facebook.com/tejas.wavhal.9" target="_blank">< AiFillFacebook className='text-gray-700 dark:text-gray-300 hover:scale-125 duration-150' /></a>
                        <a href="https://github.com/tejas-wavhal" target="_blank">< AiFillGithub className='text-gray-700 dark:text-gray-300 hover:scale-125 duration-150' /></a>
                    </div>
                </div>

                <div className='relative group mt-5 lg:mt-0'>
                    <Image src={'/profile.png'} alt="logo" height={300} width={300} className='rounded-full mx-0 lg:m-0 relative z-20 hover:scale-110 duration-700' />
                    <div className='hidden lg:block rounded-full top-3 right-3 h-[300px] w-[300px] bg-gradient-to-br from-purple-500 to-pink-600 absolute z-10 group-hover:scale-125 duration-500 delay-200' />
                    <div className='hidden lg:block rounded-full top-2 right-1 h-[300px] w-[300px] bg-gradient-to-br from-orange-600 to-yellow-300 absolute z-10 group-hover:-right-1 group-hover:top-3 group-hover:scale-125 duration-500 delay-300' />
                </div>

            </div>
        </>
    )
}
export default HeroSection