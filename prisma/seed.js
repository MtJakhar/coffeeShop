const { brands } = require('./brands.js');
const { coffees } = require('./coffees.js');
const { countries } = require('./countries.js');
const { regions } = require('./regions.js');
const { roasts } = require('./roasts.js');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  //delete previous table data
	console.log("Deleting previous table data...")
	await prisma.coffee.deleteMany();
	await prisma.brand.deleteMany();
	await prisma.country.deleteMany();
	await prisma.region.deleteMany();
	await prisma.roast.deleteMany();
	

  //create new table data
	console.log("Creating new table data...")
	console.log("Creating brand table data...")
	await prisma.brand.createMany({
		data: brands,
	});

	console.log("Creating new country data...")
	await prisma.country.createMany({
		data: countries,
	});

	console.log("Creating new region data...")
	await prisma.region.createMany({
		data: regions,
	});

	console.log("Creating new roast data...")
	await prisma.roast.createMany({
		data: roasts, 
	});

	console.log("Creating new coffee data...")
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
