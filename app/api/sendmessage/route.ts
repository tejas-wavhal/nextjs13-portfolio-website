import { errorHandler } from "@/utils/error";
import sendEmail from "@/utils/sendEmail";
import { NextResponse } from "next/server";

export async function POST(req: any) {

  try {
    const { name, email, messages } = await req.json()

    if (!name || !email || !messages)
      return errorHandler(400, "Please Enter All fields");

    const message = `This Form was Submitted on Portfloio Website:\n\n
    Name: ${name} \n
    Email: ${email} \n
    Message: ${messages} \n\n
    `;

    await sendEmail({
      email: process.env.STREET_COFFEE_MAIL,
      subject: `Enquiry Message by ${name}`,
      message,
    });

    return NextResponse.json({
      success: true,
      message: `Form send successfully`,
    }, {
      status: 200
    })
  } catch (error) {
    return errorHandler(500, "Something Went Wrong")
  }

}