import { brands, brands } from "./brands";
import { coffees } from "./coffees";
import { countries } from "./countries";
import { regions } from "./regions";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
	await prisma.brand.deleteMany();
	await prisma.country.deleteMany();
	await prisma.region.deleteMany();
	await prisma.coffee.deleteMany();

	await prisma.brand.createMany({
		data: brands,
	});

	await prisma.country.createMany({
		data: countries,
	});

	await prisma.region.createMany({
		data: regions,
	});

	await prisma.coffee.createMany({
		data: coffees,
	});
}

main()
	.catch((e) => {
		console.log(e);
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});
