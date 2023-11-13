"use client"

import React, { useState } from 'react'
import CoffeeCard from './CoffeeCard';
import AccordionShop from './AccordionShop';

const ShopComponent = ({ brandData, coffeeData, countryData, regionData }) => {
  const [userInput, setUserInput] = useState({
		brand: [],
		country: [],
		region: [],
		roast: [],
	});

  const filterCoffeeData = (data, userInput) => {
    return data.filter((coffee) => {
      // Check if each user input category is not an empty array and matches the coffee data
      return (
        (!userInput.brand.length || userInput.brand.includes(coffee.brand_id)) &&
        (!userInput.country.length || userInput.country.includes(country_id)) &&
        (!userInput.region.length || userInput.region.includes(coffee.region_id)) &&
        (!userInput.roast.length || userInput.roast.includes(coffee.roast))
      );
    });
  }

  let newCoffeeData = filterCoffeeData(coffeeData, userInput)

  return (
    <div className="flex">
    <div>
      <AccordionShop coffeeData={coffeeData} brandData={brandData} countryData={countryData} regionData={regionData} userInput={userInput} setUserInput={setUserInput}/>
    </div>
    {/* <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 m-4">
      {newCoffeeData.map((coffee) => {
        return (
          <CoffeeCard
            key={coffee.id}
            coffee={coffee}
            brandName={brandData.find(
              (brand) => brand.id === coffee.brand_id
            )}
          />
        );
      })}
    </div> */}
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 m-4">
      {coffeeData.map((coffee) => {
        return (
          <CoffeeCard
            key={coffee.id}
            coffee={coffee}
            brandName={brandData.find(
              (brand) => brand.id === coffee.brand_id
            )}
          />
        );
      })}
    </div>
  </div>
  )
}

export default ShopComponent