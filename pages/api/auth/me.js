import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function me(req, res) {
	const bearerToken = req.headers["authorization"];
	const token = bearerToken.split(" ")[1];

	const payload = jwt.decode(token);

	if (!payload.email) {
		return res.status(401).json({ errorMessage: "Unauthorized Request" });
	}

	const user = await prisma.user.findUnique({
		where: {
			email: payload.email,
		},
		select: {
			id: true,
			first_name: true,
			last_name: true,
			email: true,
			phone: true,
			address: true,
		},
	});

	if (!user) {
		return res.status(401).json({
			errorMessage: "User not found",
		});
	}

	return res.json({
		id: user.id,
		firstName: user.first_name,
		lastName: user.last_name,
		phone: user.phone,
		address: user.address,
		email: user.email,
	});
}
