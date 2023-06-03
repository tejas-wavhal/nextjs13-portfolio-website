import Link from "next/link"

type Navigation = {
  name: string;
  to: string
}

const Footer = () => {
  const navigation: Navigation[] = [
    { name: 'Home', to: '#Home' },
    { name: 'About', to: '#About' },
    { name: 'Portfolio', to: '#Portfolio' },
    { name: 'Services', to: '#Services' },
    { name: 'Contact', to: '#Contact' },
  ]
  return (
    <>
      <footer className="p-4  shadow md:px-6 md:py-8 bg-black">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src="https://i.postimg.cc/Z0tnHB0J/Picsart-22-12-04-18-51-21-952.jpg" className='h-9  rounded-xl px-2' alt="logo" />
            <span className='text-center my-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500 text-2xl'>Tejas Wavhal</span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
            {
              navigation.map((e, i) => {
                return <li key={i}>
                  <Link href={e.to} className="mr-4 hover:underline md:mr-6 ">{e.name}  </Link>
                </li>
              })
            }
          </ul>
        </div>
        <hr className="my-6 text-center border-gray-700 lg:my-8" />
        <span className="block text-sm text-center text-gray-400">© 2022 <p className="">www.tejaswavhal.com™ . All Rights Reserved.</p>
        </span>
      </footer>
    </>
  )
}

export default Footer