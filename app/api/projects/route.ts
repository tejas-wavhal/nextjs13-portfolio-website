import { errorHandler } from "@/utils/error";
import { NextResponse } from "next/server";


export async function GET() {

  try {
    return NextResponse.json({
      success: true,
      projects: [
        {
          "title": "www.itsstreetcoffee.com",
          "description": "Builded a complete Full Stack Web Application from scratch to Production using Next Js 13 App Directory with 100% SEO Score and with a good performance. Its Street Coffee Official Website with beautiful UI/UX.",
          "utils": [
            "NEXT Js 13",
            "Tailwind CSS",
            "Mongo DB"
          ],
          "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1685729777/Screenshot_138_ah1vft.png",
          "webUrl": "https://www.itsstreetcoffee.com/",
          "gitUrl": "https://github.com/tejas-wavhal"
        },
        {
          "title": "Sneko - Ecommerce",
          "description": "Builded a complete Full Stack Buisiness Ready Shoes Ecommerce Website from scratch using Next Js 13 with Strapi (Headless CMS) Dashboard. For Payment Integration Stripe has been used. Beautiful UI/UX has been implemented.",
          "utils": [
            "NEXT Js 13",
            "Tailwind CSS",
            "Sprapi",
            "Redux",
            "TypeScript",
            "Stripe Payment"
          ],
          "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1685729776/Screenshot_136_my5tng.png",
          "webUrl": "https://shoe-store-frontend-livid.vercel.app/",
          "gitUrl": "https://github.com/tejas-wavhal/sneko-ecommerce"
        },
        {
          "title": "E-Commerce Website",
          "description": "Builded a complete Full Stack Startup Ready E-commerce Website from scratch using MERN stack. CRUD Operations and Stripe Payment Gateway has been used. The Design is made made using Tailwind CSS and Material UI",
          "utils": [
            "React Js",
            "Tailwind CSS",
            "Node Js",
            "Express Js",
            "Redux",
            "Mongo DB",
            "JWT",
            "Stripe Payment"
          ],
          "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1677825906/Personal/Screenshot_108_fqzcm2.png",
          "webUrl": "https://shopie-k64e.onrender.com/",
          "gitUrl": "https://github.com/tejas-wavhal/E-Commerce_Full_Stack"
        },
        {
          "title": "Course Streaming Website",
          "description": "Full Stack Website where user can see the courses by buying Subscription with GooglePay, PhonePay and Card. RazorPay Payment Gateway has been used. Admin has access to Admin Dashboard where admin can create the courses and add lectures to it.",
          "utils": [
            "React Js",
            "Razorpay Payment",
            "Tailwind CSS",
            "Mongo DB",
            "Node Js",
            "Redux",
            "Express Js",
            "JWT",
            "Cors"
          ],
          "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1677826134/Personal/Screenshot_109_zjjxaf.png",
          "webUrl": "https://coursefinite.vercel.app/",
          "gitUrl": "https://github.com/tejas-wavhal/coursefinite-backend"
        },
        {
          "title": "Real Time Chat App",
          "description": "Real Time Chat App made using React, Node Js, Socket IO where users can login and add lectures to it. The design is made using Tailwind CSS.",
          "utils": [
            "React Js",
            "Tailwind CSS",
            "Node Js",
            "Express Js",
            "Socket IO"
          ],
          "imgUrl": "https://res.cloudinary.com/dmjxbvcz2/image/upload/v1677826478/Personal/Screenshot_110_vqbruq.png",
          "webUrl": "https://messanger-real-time-chat.netlify.app/",
          "gitUrl": "https://github.com/tejas-wavhal/Real-Time-Chat-App-BACKEND"
        },
        {
          "title": "NFT-Exchange",
          "description": "NFT-Exchange made using HTML, CSS, BOOTSTRAP, REACT JS where you can buy and sell your NFT with Bitcoin and make you Profit as per you trading stratergy.",
          "utils": [
            "React Js",
            "Bootstrap"
          ],
          "imgUrl": "https://i.postimg.cc/gksFQxLV/Screenshot-2022-12-05-at-14-04-08-NFT-Exchange.png",
          "webUrl": "https://nftexchange01.netlify.app",
          "gitUrl": "https://github.com/tejas-wavhal/NFT-Exchange"
        }
      ]
    }, {
      status: 200
    })
  } catch (error) {
    return errorHandler(500, "Something Went Wrong")
  }
}