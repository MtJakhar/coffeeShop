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
		take: 5,
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
						<p>One Time Purchase -----${coffee.price}</p>
						<div>
							<AddCartBtn coffee={coffee} />
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
			<CoffeeSlider coffeeData={relatedCoffeeRoasts} brandData={brand} />
			<ReviewSlider reviewData={reviews} coffee={coffee} />
			<AddReviewModal coffee={coffee.id} />
		</>
	);
}
