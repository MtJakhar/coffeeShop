import { PrismaClient } from "@prisma/client";
import CoffeeSection from "./components/CoffeeSection";
import IntoSection from "./components/IntoSection";
import Image from "next/image";
import coffeeImage from "../public/coffeeImage.jpeg";
import coffeeFarmers from "../public/coffeeFarmers.jpeg";

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

const getLightRoasts = async () => {
	const lightRoasts = await prisma.coffee.findMany({
		where: {
			roast_id: 1,
		},
		take: 5,
	});

	return lightRoasts;
};

const getMedRoasts = async () => {
	const medRoasts = await prisma.coffee.findMany({
		where: {
			roast_id: 2,
		},
		take: 5,
	});

	return medRoasts;
};

const getDarkRoasts = async () => {
	const darkRoasts = await prisma.coffee.findMany({
		where: {
			roast_id: 4,
		},
		take: 5,
	});

	return darkRoasts;
};

export default async function Home() {
	const getCoffees = await getCoffeeData();
	const getBrands = await getBrandData();
	const lightRoast = await getLightRoasts();
	const medRoast = await getMedRoasts();
	const darkRoast = await getDarkRoasts();
	const selectedCoffees = getCoffees.filter((coffee) => coffee.id % 10 === 0);

	return (
		<div>
			<div className="overflow-hidden position: relative w-full h-96">
				<Image className="object-cover" fill={true} src={coffeeImage} />
			</div>
			<IntoSection />
			<div className="overflow-hidden position: relative w-full h-96">
				<Image
					className="object-cover"
					fill={true}
					src={coffeeFarmers}
				/>
			</div>
			<CoffeeSection
				coffeeData={selectedCoffees}
				lightRoasts={lightRoast}
				medRoasts={medRoast}
				darkRoasts={darkRoast}
				brandData={getBrands}
			/>
		</div>
	);
}
