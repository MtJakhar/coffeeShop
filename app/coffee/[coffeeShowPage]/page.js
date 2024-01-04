import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import ReviewSlider from "../../components/ReviewSlider";
import AddReviewModal from "../../components/AddReviewModal";
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

	return (
		<>
			<div className="bg-[#222222]">
				<div className=" lg:flex">
					<div
						className=" lg:w-1/2 position: relative "
						style={{
							backgroundImage: `url(${brand.image})`,
							backgroundSize: "cover",
						}}
					>
						<Image
							className="mx-auto"
							src={coffee.image[1]}
							width={800}
							height={800}
							alt="image of coffee"
						/>
					</div>

					<div className="lg:w-1/2 text-white px-16 py-14">
						<div className="w-full lg:w-[650px]">
							<h1 className="text-5xl font-bold">
								{brand.name}{" "}
								<span className="text-xl">{brand.address}</span>
							</h1>

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
					Reviews
				</h1>
				<ReviewSlider reviewData={reviews} coffee={coffee} />
				<AddReviewModal coffee={coffee.id} />
			</div>
		</>
	);
}
