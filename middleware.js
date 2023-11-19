import * as jose from "jose";
import { NextResponse } from "next/server";

export async function middleware(req, res) {
  const bearerToken = req.headers.get("authorization");

	if (!bearerToken) {
    return new NextResponse(JSON.stringify({ errorMessage: "Unauthorized Request A" }, {status: 401}))
	}

  const token = bearerToken.split(" ")[1];

  if(!token) {
    return new NextResponse(JSON.stringify({ errorMessage: "Unauthorized Request B" }, {status: 401}))
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  try {
    await jose.jwtVerify(token, secret)
  } catch (error) {
    return new NextResponse(JSON.stringify({ errorMessage: "Unauthorized Request C" }, {status: 403}))
  }
}

// middle ware will only be called when webAddress is /api/auth/me
export const config = {
  matcher:["/api/auth/me"],
}