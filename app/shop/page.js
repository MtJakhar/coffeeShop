
import { PrismaClient } from "@prisma/client";
import ShopComponent from "../components/ShopComponent";



const prisma = new PrismaClient();
//crate state in this shop page

const getCoffeeData = async () => {
	const coffees = await prisma.coffee.findMany();

	return coffees;
};

const getBrandData = async () => {
	const brands = await prisma.brand.findMany();

	return brands;
};

const getCountryData = async () => {
	const countries = await prisma.country.findMany();

	return countries;
}

const getRegionData = async () => {
	const regions = await prisma.region.findMany();
	
	return regions
}

const getRoastData = async () => {
	const roasts = await prisma.roast.findMany();
	
	return roasts
}

export default async function Shop() {
	const coffeeData = await getCoffeeData();
	const brandData = await getBrandData();
	const countryData = await getCountryData();
	const regionData = await getRegionData();
	const roastData = await getRoastData();
	
	return (
		<>
			<div>
				<h1>SHOPPING</h1>
				<ShopComponent coffeeData={coffeeData} brandData={brandData} countryData={countryData} regionData={regionData} roastData={roastData}/>
			</div>
		</>
	);
}
