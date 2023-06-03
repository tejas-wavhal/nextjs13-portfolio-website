import { BsPencilSquare } from 'react-icons/bs'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { BsFillChatTextFill } from 'react-icons/bs'

const Services = () => {
  return (
    <div className='dark:bg-black' id='Services'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className='text-center my-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500 text-4xl'>SERVICES</h1>
          <h2 className='mb-8 text-center text-black font-semibold text-2xl dark:text-white font-rubik' >What can i do for You ?</h2>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 mb-4 flex-shrink-0">
                <BsPencilSquare className='text-4xl' />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2 dark:text-white">UI & UX / WEB DESIGN</h2>
                <p className="leading-relaxed text-base dark:text-gray-300">I can design Responsive Web Pages with beautiful UI & UX using Tailwind CSS and other Modern Technologies.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 mb-4 flex-shrink-0">
                <HiOutlineDesktopComputer className='text-4xl' />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2 dark:text-white">FULL STACK WEBSITES & SEO</h2>
                <p className="leading-relaxed text-base dark:text-gray-300">I can build SEO friendly Full Stack Web Applications using Next Js 13, MONGO DB, NODE JS, EXPRESS JS, REACT JS.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-pink-500 mb-4 flex-shrink-0">
                <BsFillChatTextFill className='text-4xl' />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2 dark:text-white">FREE CONSULTANCY</h2>
                <p className="leading-relaxed text-base  dark:text-gray-300">I can teach you & consult and guide you to make a carrier in Web Development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services