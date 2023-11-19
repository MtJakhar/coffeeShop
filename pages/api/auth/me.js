import { PrismaClient } from "@prisma/client";
import * as jose from "jose"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();

export default async function me(req, res) {
	const bearerToken = req.headers["authorization"];
  const token = bearerToken.split(" ")[1];

  const payload = jwt.decode(token)

  if(!payload.email) {
    return res.status(401).json({ errorMessage: "Unauthorized Request" });
  } 

  const user =  await prisma.user.findUnique({
    where: {
      email: payload.email
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
    }
  })

  return res.json({ user });
}
