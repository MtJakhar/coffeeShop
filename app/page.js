import { PrismaClient } from "@prisma/client";
import CoffeeSection from "./components/CoffeeSection";
import Banner from "./components/Banner";
import BannerTwo from "./components/BannerTwo";
import IntoSection from "./components/IntoSection";

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
			<Banner />
			<IntoSection />
			<BannerTwo />
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
