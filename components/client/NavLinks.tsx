"use client";

import React from 'react'
import Link from "next/link";
import { useState } from "react"
import { usePathname } from "next/navigation"

const NavLinks = () => {
  const [nav, setNav] = useState<Boolean>(true)

  const pathname = usePathname()

  return (
    <>
      <input onClick={() => setNav(!nav)} className="hidden" type="checkbox" id="menu-toggle" />
      <div className={`${nav ? 'hidden' : 'block'} lg:flex lg:items-center lg:w-auto w-full order-3 lg:order-1 font-semibold`} id="menu">
        <nav>
          <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
            <li className={`${pathname == "/" ? "underline underline-offset-8" : ""}`}><Link onClick={() => setNav(!nav)} className={`text-maincolor2-100 inline-block hover:scale-125 transition duration-100 py-2 px-4`} href="/">Home</Link></li>
            <li className={`${pathname == "/menu" ? "underline underline-offset-8" : ""}`}><Link onClick={() => setNav(!nav)} className={`text-maincolor2-100 inline-block hover:scale-125 transition duration-100 py-2 px-4`} href="#About" scroll={true}>About</Link></li>
            <li className={`${pathname == "/about" ? "underline underline-offset-8" : ""}`}><Link onClick={() => setNav(!nav)} className={`text-maincolor2-100 inline-block hover:scale-125 transition duration-100 py-2 px-4`} href="#Portfolio">Portfolio</Link></li>
            {/* <li className={`${pathname == "/contact" ? "underline underline-offset-8" : ""}`}><Link onClick={() => setNav(!nav)} className={`text-maincolor2-100 inline-block hover:scale-125 transition duration-100 py-2 px-4`} href="/blogs">Blogs</Link></li> */}
            <li className={`${pathname == "/franchise" ? "underline underline-offset-8" : ""}`}><Link onClick={() => setNav(!nav)} className={`text-maincolor2-100 inline-block hover:scale-125 transition duration-100 py-2 px-4`} href="#Services">Services</Link></li>
            <li className={`${pathname == "/contact" ? "underline underline-offset-8" : ""}`}><Link onClick={() => setNav(!nav)} className={`text-maincolor2-100 inline-block hover:scale-125 transition duration-100 py-2 px-4`} href="#Contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavLinks