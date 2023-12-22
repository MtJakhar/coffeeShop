"use client";

import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
	const shopList = [
		"Shop",
		"All Coffee",
		"Equipment",
		"Plans",
		"Coffee Gifts",
		"Redeem a Gift",
		"Refer a Friend",
		"Coffee for Teams",
	];

	const learnList = [
		"Learn",
		"Brewing How-To's",
		"Blog",
		"Our Roasters",
		"Take the Quiz",
	];

	const supportList = [
		"Support",
		"FAQs",
		"Email Us",
		"(888) 123-1234",
		"Mon-Fri: 9-5PM ET",
	];

	const companyList = ["Company", "About Us", "Careers"];

	const copyRightList = [
		"Accessibility",
		"Accessible View",
		"Terms",
		"Privacy",
		"CCPA",
		"Do Not Sell My Personal Information",
	];

	const lists = [shopList, learnList, supportList, companyList];

	return (
		<>
			<div className="sm:py-16 md:py-32 sm:px-8 md:px-40 text-2xl text-white bg-black">
				<div className="grid sm:grid-cols-2 md:grid-cols-5 ">
					{lists.map((list) => {
						return (
							<ul>
								{list.map((listItem) => {
									if (list.indexOf(listItem) === 0) {
										return (
											<li className="font-bold px-6 sm:py-4 md:py-6">
												{listItem}
											</li>
										);
									} else {
										return (
											<li className="font-thin px-6 sm:py-4 md:py-8">
												<span className="hover:text-red-600 cursor-pointer">
													{listItem}
												</span>
											</li>
										);
									}
								})}
							</ul>
						);
					})}
					<div className="py-8 sm:pl-6 md:px-0 sm:col-span-2 md:col-span-1">
						<p className="font-semibold text-5xl">
							Stay Caffeinated
						</p>
						<div className="flex pt-8">
							<FacebookRoundedIcon className="hover:text-blue-400 my-4 mr-6 text-4xl" />
							<InstagramIcon className="hover:text-pink-400 my-4 mr-6 text-4xl" />
							<TwitterIcon className="hover:text-sky-600 my-4 mr-6 text-4xl" />
							<YouTubeIcon className="hover:text-red-500 my-4 mr-6 text-4xl" />
						</div>
					</div>
				</div>

				<div className="px-6 pt-8">
					<ul className="md:flex">
						{copyRightList.map((listItem) => {
							return (
								<li className="font-thin pr-4 py-2">
									<span className="hover:text-red-600 underline underline-offset-1 cursor-pointer">
										{listItem}
									</span>
								</li>
							);
						})}
					</ul>
					<p className="italic font-thin pt-8">
						Copyright © Muizz Jakhar Inc. 2023 All Rights Reserved
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
