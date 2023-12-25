import { PrismaClient } from "@prisma/client";
import CoffeeSection from "./components/CoffeeSection";
import IntoSection from "./components/IntoSection";
import Image from "next/image";
import coffeeBgHero from "../public/coffeeBgHero.jpeg";
import coffeeFarmers from "../public/coffeeFarmers.jpeg";
import { Button } from "@mui/material";

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
			<div className="overflow-hidden position: relative w-full sm:h-[70rem] md:h-[65rem]">
				<Image
					className="object-cover transform scale-x-[-1]"
					fill={true}
					src={coffeeBgHero}
					alt="from freepik.com"
				/>
				<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
					<div className="w-[40rem] h-[30rem] text-white">
						<h1 className="font-bold drop-shadow-xl text-8xl mb-3 text-center">
							The Best Coffee is Artisanal
						</h1>
						<p className="drop-shadow-xl text-3xl mt-12 mb-5 text-center">
							We'll match you to coffee that's personalized to
							your taste and delivered to your door.
						</p>
						<div className="text-center">
							<Button
								variant="contained"
								className="bg-red-600 hover:bg-red-800 px-3 py-2 m-5"
							>
								Button
							</Button>
							<Button
								variant="contained"
								className="bg-red-600 hover:bg-red-800 px-3 py-2 m-5"
							>
								Button
							</Button>
						</div>
					</div>
				</div>
			</div>
			<IntoSection />
			<div className="overflow-hidden position: relative w-full sm:h-[45rem] md:h-[40rem]">
				<Image
					className="object-cover"
					fill={true}
					src={coffeeFarmers}
				/>
				<div className="absolute sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2 md:transform-none md:left-[5rem] md:top-1/4">
					<div className="w-[40rem] h-[30rem] sm:text-center md:text-left text-white">
						<h1 className="font-bold drop-shadow-xl text-7xl mb-4">
							Meet America's Best roasters.
						</h1>
						<p className="drop-shadow-xl text-3xl">
							We bring the best in the US together for you. They
							pour their craft into the 100+ unique coffees you
							can try with Trade.
						</p>
						<Button
							variant="contained"
							className="bg-red-600 hover:bg-red-800 px-3 py-2 mt-4"
						>
							Button
						</Button>
					</div>
				</div>
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
