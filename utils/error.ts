import { NextResponse } from "next/server";

export const errorHandler = (
  statusCode = 500,
  message = "Internal Server Error"
) => {
  return NextResponse.json({
    success: false,
    message
  }, {
    status: statusCode
  })
};