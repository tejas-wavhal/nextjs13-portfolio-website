import { errorHandler } from "@/utils/error";
import { NextResponse } from "next/server";


export async function GET() {

  try {
    return NextResponse.json({
      success: true,
      projects: [
        {
          "title": "wowvenues.in",
          "description": "As a Full Stack Developer intern at WowVenues (wowvenues.in), I contributed to the development of their web application, working collaboratively with a dynamic team. Using React, HTML, CSS, Node.js, Nest.js, and PostgreSQL, I built and maintained features like venue searching, wishlists, filters, and reviews. My role included learning from senior developers to ensure code quality and maintainability, ultimately improving the user experience on the platform.",
          "utils": [
            "React Js",
            "Nest JS",
            "Node JS",
            "Tailwind CSS",
            "TypeORM",
            "PostgresSQL",
          ],
          "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1697190655/Screenshot_316_yqx87v.png",
          "webUrl": "https://wowvenues.in/",
          "gitUrl": ""
        },
        {
          "title": "itsstreetcoffee.com",
          "description": "Builded a complete Full Stack Web Application from scratch to Production using Next Js 13 App Directory with 100% SEO Score and with a good performance. I have also increased the franchise sales of Street Coffee 30% by Optiziming the Franchise Page. Its Street Coffee Official Website with beautiful UI/UX.",
          "utils": [
            "NEXT Js 13",
            "NODE JS",
            "Tailwind CSS",
            "Mongo DB",
          ],
          "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1685729777/Screenshot_138_ah1vft.png",
          "webUrl": "https://www.itsstreetcoffee.com/",
          "gitUrl": ""
        },
        {
          "title": "Modern Web Design",
          "description": "I have created an award-winning level, mind-blowing modern web design that offers an exceptional user experience. This design is built using a combination of cutting-edge technologies, including HTML, CSS, JavaScript, GSAP (GreenSock Animation Platform), and Shery JS. The result is a seamless, contemporary web design that sets new standards for excellence.",
          "utils": [
            "HTML",
            "CSS",
            "Javascript",
            "GSAP",
            "SHERY JS"
          ],
          "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1697190654/Screenshot_315_ewa6st.png",
          "webUrl": "https://rayban-bytejas.netlify.app/",
          "gitUrl": "https://github.com/tejas-wavhal/Modern_Funky_Web_Design"
        },
        {
          "title": "Course Streaming Web App",
          "description": "Full Stack Website where user can see the courses by buying Subscription with GooglePay, PhonePay and Card. RazorPay Payment Gateway has been used. Admin has access to Admin Dashboard where admin can create the courses and add lectures to it.",
          "utils": [
            "React Js",
            "Razorpay Payment",
            "Tailwind CSS",
            "Mongo DB",
            "Node Js",
            "Redux",
            "Express Js",
            "Chart Js",
            "JWT",
            "Cors"
          ],
          "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1697192846/Screenshot_317_evhchc.png",
          "webUrl": "https://coursefinite.vercel.app/",
          "gitUrl": "https://github.com/tejas-wavhal/Coursefinite-Course_Streaming_Web_App-MERN"
        },
        {
          "title": "Award Winning Web Design Clone",
          "description": "Cynthia Ugwu's award-winning web design has been expertly replicated using a skillful combination of HTML, CSS, JavaScript, GSAP (GreenSock Animation Platform), and Locomotive for smooth scrool. This meticulous replication captures the essence and quality of the original design, ensuring that it remains as exceptional as the original award-winning creation.",
          "utils": [
            "HTML",
            "CSS",
            "Javascript",
            "GSAP",
            "LOCOMOTIVE"
          ],
          "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1697190651/Screenshot_181_jvisnj.png",
          "webUrl": "https://cynthia-ugwu-clone.netlify.app/",
          "gitUrl": "https://github.com/tejas-wavhal/Cynthia-Ugwu-Clone"
        },

        {
          "title": "Ecommerce Web App",
          "description": "Builded a complete Full Stack Startup Ready E-commerce Website from scratch using MERN stack. CRUD Operations and Stripe Payment Gateway has been used. The Design is made made using Tailwind CSS and Material UI. Admin has access to Admin Dashboard, where admin have all control over the app",
          "utils": [
            "React Js",
            "Tailwind CSS",
            "Node Js",
            "Express Js",
            "Redux",
            "Mongo DB",
            "JWT",
            "Chart Js",
            "Stripe Payment"
          ],
          "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1697190649/Screenshot_115_s6hmvl.png",
          "webUrl": "https://shopie-k64e.onrender.com/",
          "gitUrl": "https://github.com/tejas-wavhal/Shopie-Ecommerce_Web_App-MERN"
        },
        // {
        //   "title": "Real Time Chat App",
        //   "description": "Real Time Chat App made using React, Node Js, Socket IO where users can login and add lectures to it. The design is made using Tailwind CSS.",
        //   "utils": [
        //     "React Js",
        //     "Tailwind CSS",
        //     "Node Js",
        //     "Express Js",
        //     "Socket IO"
        //   ],
        //   "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1677826478/Personal/Screenshot_110_vqbruq.png",
        //   "webUrl": "https://messanger-real-time-chat.netlify.app/",
        //   "gitUrl": "https://github.com/tejas-wavhal/Real-Time-Chat-App-BACKEND"
        // },
        // {
        //   "title": "NFT-Exchange",
        //   "description": "NFT-Exchange made using HTML, CSS, BOOTSTRAP, REACT JS where you can buy and sell your NFT with Bitcoin and make you Profit as per you trading stratergy.",
        //   "utils": [
        //     "React Js",
        //     "Bootstrap"
        //   ],
        //   "imgUrl": "https://i.postimg.cc/gksFQxLV/Screenshot-2022-12-05-at-14-04-08-NFT-Exchange.png",
        //   "webUrl": "https://nftexchange01.netlify.app",
        //   "gitUrl": "https://github.com/tejas-wavhal/NFT-Exchange"
        // },
        // {
        //   "title": "Sneko - Ecommerce",
        //   "description": "Builded a complete Full Stack Buisiness Ready Shoes Ecommerce Website from scratch using Next Js 13 with Strapi (Headless CMS) Dashboard. For Payment Integration Stripe has been used. Beautiful UI/UX has been implemented.",
        //   "utils": [
        //     "NEXT Js 13",
        //     "Tailwind CSS",
        //     "Sprapi",
        //     "Redux",
        //     "TypeScript",
        //     "Stripe Payment"
        //   ],
        //   "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1685729776/Screenshot_136_my5tng.png",
        //   "webUrl": "https://shoe-store-frontend-livid.vercel.app/",
        //   "gitUrl": "https://github.com/tejas-wavhal/sneko-ecommerce"
        // },
      ]
    }, {
      status: 200
    })
  } catch (error) {
    return errorHandler(500, "Something Went Wrong")
  }
}