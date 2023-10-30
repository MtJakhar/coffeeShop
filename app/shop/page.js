import CoffeeCard from "../components/CoffeeCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getCoffeeData = async () => {
  const coffees = await prisma.coffee.findMany()

  return coffees
}

export default async function Shop() {
  const coffeeData = await getCoffeeData();

  return (
    <>
      <div>
        <h1>SHOPPING</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 m-4">
          {coffeeData.map((coffee) => {
           return <CoffeeCard coffee={coffee} />
          })}
        </div>
      </div>
    </>
  );
}
