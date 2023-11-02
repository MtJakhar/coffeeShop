import Image from "next/image";
import { Button } from "@mui/material";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchCoffeeData = async (coffeeAddress) => {
	const coffee = await prisma.coffee.findUnique({
		where: {
			webAddress: coffeeAddress
		}
	});

	return coffee;
};

const fetchBrandData = async (brand_id) => {
	const brand = await prisma.brand.findUnique({
		where: {
			id: brand_id
		}
	})
	return brand
}


export default async function CoffeeShowPage({ params }) {
	const coffee = await fetchCoffeeData(params.coffeeShowPage);
	const brand = await fetchBrandData(coffee.brand_id)
	console.log({ coffee })

	return (
		<>
			<h1>{brand.name}</h1>
			<div className="flex">
				<Image
					src={coffee.image[1]}
					width={800}
					height={800}
					alt="image of coffee"
				/>
				<div className="text-center justify-center p-7">
					<h1>{coffee.name}</h1>
					<p>{coffee.description}</p>
					<div className="text-center justify-center">
						<p>One Time Purchase -----{coffee.price}</p>
						<div>
							<Button
								className="m-2 bg-slate-600"
								variant="contained"
							>
								Add to Cart
							</Button>
						</div>
					</div>
				</div>
			</div>
			<Image 
				src={brand.image}
				width={800}
				height={800}
				alt="brand image"
			/>
		</>
	);
}
