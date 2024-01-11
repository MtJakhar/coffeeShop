import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import ReviewSlider from "../../components/ReviewSlider";
import AddCartBtn from "../../components/AddCartBtn";
import CoffeeSlider from "../../components/CoffeeSlider";

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
				<div className="xl:flex">
					<div
						className=" xl:w-1/2 relative z-0"
						style={{
							// backgroundImage: `url(${brand.image})`,
							backgroundColor: "#F5F5F5",
							backgroundSize: "cover",
						}}
					>
						<Image
							className="mx-auto relative z-50"
							src={coffee.image[1]}
							width={800}
							height={800}
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

					<div className="xl:w-1/2 text-white px-16 pt-14 pb-8">
						<div className="w-full xl:w-[650px]">
							<h1 className="text-5xl font-bold">
								{brand.name}{" "}
								<span className="text-xl">{brand.address}</span>
							</h1>

							<p className="text-xl py-4">{brand.description}</p>

							<h1 className="text-3xl pt-4">{coffee.name}</h1>
							<p className="text-xl py-4">{coffee.description}</p>

							<div className="bg-[#30302e] rounded py-8 px-6 mt-10">
								<div className="flex justify-between text-3xl">
									<p>One Time Purchase</p>
									<p>${coffee.price}/bag</p>
								</div>

								<div className="pt-8">
									<AddCartBtn coffee={coffee} />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mx-auto pt-20">
					<div className="flex justify-between text-white text-3xl font-semibold px-14">
						<p>Other {brand.name} Coffees</p>
						<p className="hover:cursor-pointer hover:text-[#dc2626] underline">
							View Entire Collection
						</p>
					</div>
					<CoffeeSlider
						coffeeData={relatedCoffeeRoasts}
						brandData={brand}
					/>
				</div>
			</div>
			<div>
				<h1 className="mt-24 font-bold text-5xl drop-shadow text-center">
					Reviews for {coffee.name}
				</h1>
				<ReviewSlider reviewData={reviews} coffee={coffee} />
			</div>
		</>
	);
}
