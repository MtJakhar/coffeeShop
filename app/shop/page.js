import CoffeeCard from "../components/CoffeeCard";

export default function Shop() {
  return (
    <>
      <div>
        <h1>SHOPPING</h1>
        <div className="grid grid-cols-4 gap-6 m-4">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </div>
    </>
  );
}
