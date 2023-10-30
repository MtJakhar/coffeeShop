import React from "react";
import Image from "next/image";

const CoffeeCard = () => {
	return (
    <>
      <div className="justify-center border-2 border-black text-center">
        <Image
          className="mx-auto"
          src="https://lh3.googleusercontent.com/pw/ADCreHfbfgtwA0okW4ymmX1KmJNm8Qa7vj4oLDrmw983i1Bj2bH5pF2tnomHHxDu6G0YrSztVBsI2GJaKjaRNWrw8KPOmwBxeLs3IqEJmjGMpv2MnPt17jU=w1920-h1080"
          width={500}
          height={500}
          alt="Coffee Image"
        />
        <hr />
        <h3>Brand name</h3>
        <h1>Coffee Name</h1>
        <p>$18.50</p>
      </div>
    </>
	);
};

export default CoffeeCard;
