import { PrismaClient } from "@prisma/client";
import CoffeeSection from "./components/CoffeeSection";

const prisma = new PrismaClient();

const getCoffeeData = async () => {
	const coffees = await prisma.coffee.findMany({
		take: 50,
	});

	return coffees;
};

const getBrandData = async () => {
	const brands = await prisma.brand.findMany();

	return brands;
};

export default async function Home() {
	const getCoffees = await getCoffeeData();
	const getBrands = await getBrandData();
	const selectedCoffees = getCoffees.filter((coffee) => coffee.id % 10 === 0);

	return (
		<>
			<div>
				<h1>Home Page</h1>

				<CoffeeSection
					coffeeData={selectedCoffees}
					brandData={getBrands}
				/>
			</div>
		</>
	);
}
