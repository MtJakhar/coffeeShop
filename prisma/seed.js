import { brands } from "./brands.js";
import { coffees } from "./coffees.js";
import { countries } from "./countries.js";
import { regions } from "./regions.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //delete previous table data
	await prisma.brand.deleteMany();
	await prisma.country.deleteMany();
	await prisma.region.deleteMany();
	await prisma.coffee.deleteMany();

  //create new table data
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
