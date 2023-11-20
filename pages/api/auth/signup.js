import { PrismaClient } from "@prisma/client";
import validator from "validator";
import bcrypt from "bcrypt"
import * as jose from "jose"

const prisma = new PrismaClient();

export default async function signup(req, res) {
	if (req.method === "POST") {
		const { firstName, lastName, address, phone, email, password } =
			req.body;

		const errors = [];

		const validationSchema = [
			{
				valid: validator.isLength(firstName, {
					min: 1,
					max: 20,
				}),
				errorMessage: "First name is invalid",
			},
			{
				valid: validator.isLength(lastName, {
					min: 1,
					max: 20,
				}),
				errorMessage: "Last name is invalid",
			},
			{
				valid: validator.isEmail(email),
				errorMessage: "Email is invalid",
			},
			{
				valid: validator.isMobilePhone(phone),
				errorMessage: "Phone number is invalid",
			},
			{
				valid: validator.isLength(address, { min: 1 }),
				errorMessage: "City is invalid",
			},
			{
				valid: validator.isStrongPassword(password),
				errorMessage: `Error: Password Requirements Not Met`,
			},
		];

		validationSchema.forEach((check) => {
			if (!check.valid) {
				errors.push(check.errorMessage);
			}
		});

		if (errors.length) {
			return res.status(400).json({ errorMessage: errors[0] });
		}

    const userWithEmail = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if(userWithEmail){
      return res.status(400).json({ errorMessage: "Email is associated with another account." })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        address: address,
        email: email,
        phone: phone,
        password: hashedPassword
      }
    });

    const alg = "HS256"
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new jose.SignJWT({ email: user.email })
			.setProtectedHeader({ alg })
			.setExpirationTime("24h")
			.sign(secret);

		return res.status(200).json({
			token: token,
		});
	}
  return res.status(404).json("Unknown Endpoint")
}
