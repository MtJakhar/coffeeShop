import React from "react";
import Image from "next/image";

const CoffeeCard = (props) => {
	return (
    <>
      <div className="justify-center border-2 border-black text-center">
        <Image
          className="mx-auto"
          src={props.coffee.image[0]}
          width={500}
          height={500}
          alt="Coffee Image"
        />
        <hr />
        <h3>{props.coffee.brand_id}</h3>
        <h1>{props.coffee.name}</h1>
        <p>{props.coffee.price}</p>
      </div>
    </>
	);
};

export default CoffeeCard;
