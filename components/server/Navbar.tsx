import Link from "next/link";
import NavLinks from "../client/NavLinks";
import Toggle from "../client/Toggle";

const Navbar = () => {

  return (
    <>
      <nav id="header" className="w-full top-0 py-0 bg-black text-white relative z-50 shadow-2xl shadow-pink-200/50 dark:shadow-none">
        <div className="w-full container mx-auto flex flex-wrap flex-row-reverse items-center justify-between mt-0 px-6 py-3">
          {/* <div className="flex items-center"> */}
          <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block mx-2 sm:mx-5">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          <Toggle />
          {/* </div> */}
          <NavLinks />
          <div className="order-1 lg:order-2 lg:mr-28">
            <Link className="flex items-center tracking-wide no-underline hover:no-underline font-semibold text-base sm:text-lg " href="/">
              <img className='h-10 w-10 lg:h-14 lg:w-14 rounded-2xl' src='https://i.postimg.cc/Z0tnHB0J/Picsart-22-12-04-18-51-21-952.jpg' alt="logo" />
              <h1 className='mx-2 uppercase font-semibold'>Tejas Portfolio</h1>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar