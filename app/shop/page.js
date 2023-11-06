import CoffeeCard from "../components/CoffeeCard";
import { PrismaClient } from "@prisma/client";
import AccordionShop from "../components/AccordionShop";

const prisma = new PrismaClient();

const getCoffeeData = async () => {
	const coffees = await prisma.coffee.findMany();

	return coffees;
};

const getBrandData = async () => {
	const brands = await prisma.brand.findMany();

	return brands;
};

export default async function Shop() {
	const coffeeData = await getCoffeeData();
	const brandData = await getBrandData();

	return (
		<>
			<div>
				<h1>SHOPPING</h1>
				<div className="flex">
					<div>
						<AccordionShop />
					</div>
					<div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 m-4">
						{coffeeData.map((coffee) => {
							return (
								<CoffeeCard
									coffee={coffee}
									brandName={brandData.find(
										(brand) => brand.id === coffee.brand_id
									)}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
