import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiStrapi, SiNextdotjs, SiRedux, SiGit, SiGithub } from 'react-icons/si'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import Link from 'next/link';

const About = () => {
  return (
    <div className='dark:bg-black dark:text-white border-t-2 ' id='About'>
      <div className='mx-5 md:mx-32 lg:mx-72'>
        <h1 className='text-center py-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500 text-4xl'>ABOUT</h1>
        <h2 className='text-center my-3 font-semibold text-2xl font-rubik'>Let me introduce Myself</h2>
        <div className='flex flex-col my-10 text-xl dark:bg-gray-500/30 bg-gray-500/10 font-base p-14 rounded-full space-y-5'>
          <p className='text-center text-gray-700 dark:text-gray-300'>I am Tejas Wavhal from Pune. I code Web Apps beautifully simple, and i love what i do.</p>
          <p className='text-center text-gray-700 dark:text-gray-300'>I am a highly motivated individual who is eager to learn and grow as a NEXT JS & MERN stack developer. I am confident that my skills and passion for web development make me a strong candidate for full stack developer position.</p>
        </div>
        <h1 className='text-center text-4xl'>Skills</h1>
        <div className='flex justify-center items-center flex-wrap'>
          <div className='border py-2 px-3 flex justify-center items-center rounded-2xl space-x-2 hover:scale-110 duration-200 shadow-lg shadow-pink-600/60 bg-white/10 m-5'>
            <FaReact className='text-sky-500 spin text-3xl' />
            <span className='text-xl'>React Js</span>
          </div>
          <div className='border py-2 px-3 flex justify-center items-center rounded-2xl space-x-2 hover:scale-110 duration-200 shadow-lg shadow-pink-600/60 bg-white/10 m-5'>
            <SiNextdotjs className=' text-3xl' />
            <span className='text-xl'>Next Js 13</span>
          </div>
          <div className='border py-2 px-3 flex justify-center items-center rounded-2xl space-x-2 hover:scale-110 duration-200 shadow-lg shadow-pink-600/60 bg-white/10 m-5'>
            <SiJavascript className='text-yellow-400 text-3xl' />
            <span className='text-xl'>Javascript</span>
          </div>
          <div className='border py-2 px-3 flex justify-center items-center rounded-2xl space-x-2 hover:scale-110 duration-200 shadow-lg shadow-pink-600/60 bg-white/10 m-5'>
            <SiTailwindcss className='text-sky-500 text-3xl' />
            <span className='text-xl'>Tailwind CSS</span>
          </div>
          <div className='border py-2 px-3 flex justify-center items-center rounded-2xl space-x-2 hover:scale-110 duration-200 shadow-lg shadow-pink-600/60 bg-white/10 m-5'>
            <SiTypescript className='text-blue-600 text-3xl' />
            <span className='text-xl'>Typescript</span>
          </div>
          <div className='border py-2 px-3 flex justify-center items-center rounded-2xl space-x-2 hover:scale-110 duration-200 shadow-lg shadow-pink-600/60 bg-white/10 m-5'>
            <FaNodeJs className='text-lime-500 text-3xl' />
            <span className='text-xl'>Node Js</span>
          </div>
          <div className='border py-2 px-3 flex justify-center items-center rounded-2xl space-x-2 hover:scale-110 duration-200 shadow-lg shadow-pink-600/60 bg-white/10 m-5'>
            <SiRedux className='text-purple-500 text-3xl' />
            <span className='text-xl'>Redux</span>
          </div>
          <div className='border py-2 px-3 flex justify-center items-center rounded-2xl space-x-2 hover:scale-110 duration-200 shadow-lg shadow-pink-600/60 bg-white/10 m-5'>
            <SiMongodb className='text-lime-500 text-3xl' />
            <span className='text-xl'>Mongo DB</span>
          </div>
          <div className='border py-2 px-3 flex justify-center items-center rounded-2xl space-x-2 hover:scale-110 duration-200 shadow-lg shadow-pink-600/60 bg-white/10 m-5'>
            <SiExpress className='text-white p-2 bg-black rounded-full text-3xl' />
            <span className='text-xl'>Express Js</span>
          </div>
          <div className='border py-2 px-3 flex justify-center items-center rounded-2xl space-x-2 hover:scale-110 duration-200 shadow-lg shadow-pink-600/60 bg-white/10 m-5'>
            <SiStrapi className='text-purple-600 text-3xl' />
            <span className='text-xl'>Strapi</span>
          </div>
          <div className='border py-2 px-3 flex justify-center items-center rounded-2xl space-x-2 hover:scale-110 duration-200 shadow-lg shadow-pink-600/60 bg-white/10 m-5'>
            <SiGit className='text-orange-500 text-3xl' />
            <span className='text-xl'>Git</span>
          </div>
          <div className='border py-2 px-3 flex justify-center items-center rounded-2xl space-x-2 hover:scale-110 duration-200 shadow-lg shadow-pink-600/60 bg-white/10 m-5'>
            <SiGithub className='text-black bg-white rounded-full p-0.5 text-3xl' />
            <span className='text-xl'>GitHub</span>
          </div>
        </div>
        <div className="flex justify-center space-x-5 md:space-x-16 py-14">
          <Link href="#Contact">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 hover:scale-125 duration-150">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                Hire Me
              </span>
            </button>
          </Link>
          <a href='/Resume.pdf' download className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 hover:scale-125 duration-150">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
              Download Resume
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About;