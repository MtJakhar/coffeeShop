import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import ReviewSlider from "../components/ReviewSlider";
import AddCartBtn from "../components/AddCartBtn";
import CoffeeSelectionSection from "../components/CoffeeSelectionSection";

const prisma = new PrismaClient();

const fetchCoffeeData = async (coffeeAddress) => {
	const coffee = await prisma.coffee.findUnique({
		where: {
			webAddress: coffeeAddress,
		},
	});

	return coffee;
};

const fetchRelatedCoffeeData = async (brand_id) => {
	const coffees = await prisma.coffee.findMany({
		where: {
			brand_id: brand_id,
		},
		take: 6,
	});

	return coffees;
};

const fetchBrandData = async (brand_id) => {
	const brand = await prisma.brand.findUnique({
		where: {
			id: brand_id,
		},
	});
	return brand;
};

const fetchReviewData = async (coffee_id) => {
	const reviews = await prisma.review.findMany({
		where: {
			coffee_id: coffee_id,
		},
	});
	return reviews;
};

export default async function CoffeeShowPage({ params }) {
	const coffee = await fetchCoffeeData(params.coffeeShowPage);
	const brand = await fetchBrandData(coffee.brand_id);
	const reviews = await fetchReviewData(coffee.id);
	const relatedBrands = await fetchRelatedCoffeeData(coffee.brand_id);

	const relatedCoffeeRoasts = relatedBrands.filter(
		(coffeeElement) => coffeeElement.id !== coffee.id
	);
	// backgroundImage via style doesn't work cause google is blocking the url, but doesn't when in image component

	return (
		<>
			<div className="bg-[#222222]">
				<div className="lg:flex">
					<div
						className="lg:w-1/2 relative z-0"
						style={{
							// backgroundImage: `url(${brand.image})`,
							backgroundColor: "#F5F5F5",
							backgroundSize: "cover",
						}}
					>
						<Image
							className="mx-auto relative z-50"
							src={coffee.image[1]}
							width={600}
							height={600}
							priority={true}
							alt="image of coffee"
						/>
						<Image
							className="object-cover"
							fill={true}
							src={brand.image}
							alt="brand image"
						/>
					</div>

					<div className="lg:w-1/2 text-white px-14 pt-10 pb-8">
						<div className="w-full">
							<h1 className="text-4xl font-bold">
								{brand.name}{" "}
								<span className="text-lg">{brand.address}</span>
							</h1>

							<p className="py-4">{brand.description}</p>

							<h1 className="text-2xl pt-4">{coffee.name}</h1>
							<p className="py-4">{coffee.description}</p>

							<div className="bg-[#30302e] rounded p-8 px-6 mt-10">
								<div className="flex justify-between text-2xl">
									<p>One Time Purchase</p>
									<p>${coffee.price}/bag</p>
								</div>

								<div className="pt-4">
									<AddCartBtn coffee={coffee} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<CoffeeSelectionSection
					coffeeData={relatedCoffeeRoasts}
					brandData={brand}
				/>
			</div>
			<div>
				<h1 className="mt-24 mb-10 font-bold text-4xl drop-shadow text-center">
					Reviews for {coffee.name}
				</h1>
				<ReviewSlider reviewData={reviews} coffee={coffee} />
			</div>
		</>
	);
}
