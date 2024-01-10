const brands = [
	{
		name: "Airship",
		description:
			"Love the smell of coffee? Airship is right there with you! Mark Bray’s Northwest Arkansas roaster seeks peak aroma in every coffee for an enticing and invigorating fragrance. In partnering with a local culinary center, it’s spreading that delightfully pungent message throughout the region.",
		address: "Bentonville, AR",
		webAddress: "airship-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV8588l6wU0otLJw2yDhVuyGLzIMw6uJ1UfOgn6nOOTiI-lVSlPzTXQ35QuFA7cVe5rYHaHARCphiYx9Q5ytBDUFqwcquxY069UzdBXTpJA8yihrsT7U=w1920-h1080",
	},
	{
		name: "Atomic",
		description:
			"Atomic is on a mission to spread positive energy. Led by brothers Spencer and Logan Mahoney, this second-generation family business uses coffee as a catalyst for inspiring community, relationships, and adventures.",
		address: "Peabody, MA",
		webAddress: "atomic-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV87S-dUP9G9NTrn7kGPcqvDapPnsA-qMpQ_TH5OeV41ksbhpTmmnGWfYeqIJaJa11CeRQgbSuP_bcE2RYpax3TMRROU5EUfKJGK8KLKmcR6ioE_RzoQ=w1920-h1080",
	},
	{
		name: "Bean & Bean",
		description:
			"Amidst the 2008 economic crisis, Bean & Bean Coffee Roasters opened shop at Rector and Broadway in Manhattan’s financial epicenter. Fourteen years and four locations later, this mother-daughter team is driven by a clear commitment to gender equity — with over half the coffee they source female-powered and all of it cupped and curated by founders and Q Graders Rachel and Jiyoon Han.",
		address: "New York, NY",
		webAddress: "bean-and-bean-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV86hIwozimFLXztWmUIz8V9mXODBrAYF3UqdQgCGtdXS-2WI52Ajg3YXxuu7nEQ5mJ6V6SLAHd8eoYqPikW4fBqkc3Bj9Pf58EF0QBMEsUBRvUWYHDI=w1920-h1080",
	},
	{
		name: "Bird Rock",
		description:
			"To be the best, you have to work with the best. Roast Magazine’s 2012 Micro Roaster of the Year, Bird Rock is truly farm-to-cup. Since 2006, this San Diego roaster not only sources from top-tier growers, but takes pride in fostering true collaboration, building long-term relationships, and showcasing its partners.",
		address: "San Diego, CA",
		webAddress: "bird-rock-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV84UQc1PsLY-LnLZ3RSHtL-8GlscLen-zgHNTF_TOD2wCwGHYoHdGL-gRb5JrgBbumBT0KgMFdC5R-6v1-3X99ACmBBOLea6GK4wUoPe1KjgjI8OauA=w1920-h1080",
	},
	{
		name: "Common Voice",
		description:
			"Common Voice Coffee Co’s actions speak volumes. This Nashville roaster brings accessible coffee to its community and helps support farmers by purchasing more than just their highest scoring lots. Paying an additional five percent above the cost of green coffee, Common Voice invests back into the land and reinforces its goal of making a difference for the earth.",
		address: "Nashville, TN",
		webAddress: "common-voice-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV84LjY0yR3hq4aXY6GEX9s7LGd8z2jJjastbCFmlUYHbNetZCiBJKIMUt-hGFuFT2KgRZALAPiD464pYqeUU01p4DuZ56XR5HoXyRjd5cgnsY2mKrmQ=w1920-h1080",
	},
	{
		name: "Cuvee",
		description:
			"Cuvée brings big Lone Star flavor to its coffee while embracing the simplicity of its Texas landscape. Founded in 1998, US Navy Veteran Mike McKim’s roastery is one of the oldest in the state, but it stands ahead of the pack with a drive and spirit for experimentation that comes through in its innovative nitro cold brew canning facility.",
		address: "Austin, TX",
		webAddress: "cuvee-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV87vrVGnte3IVkJX3VaogKnLvSm43nSiE2D3dChFxdFYWfsWnhLbPZQMQx7_W_MMSkiTx-jH20BLaoQAOkT9hxlslYDJ_3PEwEMuvSMNy74czs1xXwY=w1920-h1080",
	},
	{
		name: "Dune",
		description:
			"Though Dune travels the world creating strong relationships with farmers, its heart remains in Santa Barbara. Married co-founders Julia Mayer and Todd Stewart have a driving passion for sharing great coffee with its community and are equally committed to its partnerships across the entire supply chain.",
		address: "Santa Barbara, CA",
		webAddress: "dune-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV85HnEsAPrgNPBVBvd9jBARrz8XbdVlrbti0_VYkmGlTq1Kq5RghQfqXLrRtIUCGHsTGYH19cqGj-kxVohZW6gJ2WZSUIblsGN-p8I5eveZ-U-Spedo=w1920-h1080",
	},
	{
		name: "Equator",
		description:
			"In 1995, when partners Brooke McDonnell, Maureen McHugh, and Helen Russell began roasting coffee from a garage, they set out to build a high-impact company focused on quality, sustainability, and social responsibility. As a Certified B Corporation, Equator supports quality of life initiatives in coffee-growing regions, including its founding of Panama’s Finca Sophia farm and partnering with World Bicycle Relief.",
		address: "San Rafael, CA",
		webAddress: "equator-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV8413Al2WYk5XcweoVx2B0-2dYTyK59mbLwAJVQx1U5XalnC1EpWNY2MwX5c12m34DGx-3eIIk6gRxYG4sOq7cZMRqWfhC1j6fnMValelJSvW1FHw_o=w1920-h1080",
	},
	{
		name: "Feast",
		description:
			"Like a big, welcoming meal, Feast Coffee & Culture is a celebration of coffee in all its variety. This craft-driven roaster was founded in 2016 when it was dreamt up around a table on Washington’s Bainbridge Island. Serving the community of Redding, California, Feast thrives on engaging with and cultivating local culture through popular food gatherings and welcoming conversation.",
		address: "Redding, CA",
		webAddress: "feast-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV86LIi289bg7vi5GT0y3QJONOzjhKt4xw0waHPJZdejg1wNe7PRxJxeSY8ZDQgPNSrO-pxXD0CIdbydTdDG_LwGbr3WHPJlQUHt_mOukApMgeb4rLkw=w1920-h1080",
	},
	{
		name: "Greater Goods",
		description:
			"While Greater Goods Coffee Co. travels the globe sourcing its unique single origins and laid-back blends, this Austin roaster’s heart is in Texas. Founded in 2015 with the determination to please every palate, Trey Cobb and Khanh Trang’s team has since been named the state’s best coffee by Food & Wine. This roaster represents with more than just great coffee by partnering with local charitable organizations to give back with every bag.",
		address: "Austin, TX",
		webAddress: "greater-goods-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV84XBeLz6atdwnQPe9JFefjhV_68vq7Yo_qr0_9r2USy0CWmPd8Fog64bzzrMOAXdtTPGtpa_xSgkwxtpplkmyLTRTH587CtRClsVvtry4N3WrLzkQM=w1920-h1080",
	},
	{
		name: "High Wire",
		description:
			"Walking a high-wire takes balance, and that’s what Rich Avella, Eric Hashimoto, and Robert Myers’s brainchild is all about. Founded in 2011, Oakland’s Highwire is not only intensely focused on detail and experimenting with roast levels, it’s also incredibly committed to education and fostering the next generation of roasters.",
		address: "Oakland, CA",
		webAddress: "high-wire-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV85aBi3PosZlt2-7qa3BGqH4dhr_g8fERNOGuW_Q-9sDAEneUY7-HdFiFnOOXZRZDCkQSC7qKmGA9WAHaYW4u6sFgZbQgK-RSIUEst5zWBqBPb5UmK4=w1920-h1080",
	},
	{
		name: "Huckleberry",
		description:
			"Huckleberry is all about people (well, coffee people). Founded in 2011 by friends Koan Goedman and Mark Mann in a backyard garage adjacent to a chicken coop, this Denver-based roaster has grown into a complex global network, turning out some equally complex flavors.",
		address: "Denver, CO",
		webAddress: "huckleberry-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV86R7Aapg-K58DHhB-WYAn5eULiLKWiQ-OQN6TxV3Osg5khlsu0i4i1RlljvUbA54-mKK377Fo_U6hvij8uk5wCwcp49PJCwG64zrLfQWUNsKfVAZGY=w1920-h1080",
	},
	{
		name: "Joe",
		description:
			"Founded in 2003 in New York’s West Village, Joe Coffee helped pioneer the city’s third-wave movement. As it has grown, Joe’s shops remain welcoming gathering places for the community, while principles of quality, integrity, collaboration, and ethics come through in everything it does.",
		address: "New York, NY",
		webAddress: "joe-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV86Y8mETgzwoOL7AN4H4r0nAYDxHddo3RCInXIKbTqO5y7qXtoa4fDjefI9pQIv8WzgJaAS_huoStVhdKbA8qr8Ehw-7nRHgUNeQcVirBsK4Jkjgt0I=w1920-h1080",
	},
	{
		name: "Klatch",
		description:
			"Coffee is in the Perry family’s blood. The team behind Klatch has been bringing their flavorful coffee to SoCal since 1993. But there’s more than just innate knowledge – thanks to roastmaster and green buyer Mike Perry’s chemical engineering degree, real science goes into this team’s award-winning coffee.",
		address: "Rancho Cucamonga, CA",
		webAddress: "klatch-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV86Lkn26tIwoTT8_9q8Uy59RiwjyH33hb6-p3r0wXOQYsbe9675FFJ8T6yJmQWsQeAjwovVxL01Pelw-B7I3_B1XlzI-I8vU7QavAxGuIHG692HodbQ=w1920-h1080",
	},
	{
		name: "Mother Tongue",
		description:
			"After roasting for coffee’s biggest names and winning the US Cup Tasters Championship, Jen Apodaca set out to launch Mother Tongue Coffee in 2019. With an equal emphasis on how coffee tastes and how it makes you feel, the Oakland, California-based roaster builds relationships based on mutual values of creating sustainable communities near and far, paying better-than-fair prices to producers and connecting with the Bay Area through its work with public radio and local food banks.",
		address: "Oakland, CA",
		webAddress: "mother-tongue-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV84bh65wFIy2QJmmZvfiN72gB66TpDfLVCOH7X_p6S1TZbZDKWvd7tRKFqPCQO9VyaV7zJhCLhcTW4PRqHdQ_0nnlx6gD2LfOhcput4_M5EWbWOChPk=w1920-h1080",
	},
	{
		name: "Oren's",
		description:
			"Discovering his love for coffee while frequenting a small NYC shop, Oren Bloostein left his corporate job to found Orens Coffee in 1986. The Long Island native had a hands-on approach from the start, including roasting on site — a rarity at the time — and manning the growing café. Today, this New York institution is known for the highest standards for freshness and sourcing through its Oren’s at Origin program.",
		address: "New York, NY",
		webAddress: "orens-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV85TungduFumczUn5YcXubr2e0f2Mfq79YSNUGhaSUrn_LvoU6-1KuwO17BZHPvhan20uRUyGdJFRapbMxthto--tWa3ZDIGv1ZPgerLEXnLgEEGgdc=w1920-h1080",
	},
	{
		name: "Panther",
		description:
			"Miami has as much to do with Panther’s success as the coffee it brews. Founded by Joel and Leticia Pollock in 2010, the roaster made its home in the city’s Wynwood neighborhood where it became a gathering spot for the local artists and embraced Southern Florida’s global tastes.",
		address: "Miami, FL",
		webAddress: "panther-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV86stMgZnwADEsQQKD51VTArFbrcUODWb92xH_vkZctQBzvrJ7ACn2oMwCk6SC6WFdR2SBqPG7-v-_V63rZ8LIsSxqLbM_Fy-s84-4yVeDEwi2KGwrw=w1920-h1080",
	},
	{
		name: "Red Rooster",
		description:
			"Red Rooster Coffee doesn’t do things by the book. When Rose McCutchan approached then fiancé Haden Polseno-Hensley about supplying coffee for her Floyd, Virginia café, the duo began roasting from a small space in the back of her mother’s bookstore. Guided by principles of sustainability and gender equality since 2010, this family-run company takes pride in inclusive hiring practices and making onsite childcare available for all of its employees.",
		address: "Floyd, VA",
		webAddress: "red-rooster-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV84hwVT8QnBfcUTYc0U-r_SIxUYofcEx5e7kq4v6-FUgD8dcF2qoXgEOEmJz8_fYlVWv4EhgaeS9jkF0_WOREA41ILXqVPQDVhaTSUAEWC5DHvgPBm8=w1920-h1080",
	},
	{
		name: "Sightseer",
		description:
			"As friends and coffee roasters, Kimberly and Sara shared both a love for coffee and concerns about the state of its supply chain. While it was easy to find women doing manual labor on farms and working as baristas they felt, when it came to positions of power, suddenly everything was male. They took matters into their own hands in 2021 and formed Sightseer which sources 100% from women producers.",
		address: "Austin, TX",
		webAddress: "sightseer-brand",
		image: "https://lh3.googleusercontent.com/pw/ABLVV85vZVpWLWpS1W53Aiq_E1q3DH4vzl0QvMtTEm1DPAwwY9wH0LvH4P1lkWb1fcuEjVe5NJfZ5drWa9giJNj2JPPKBr6pjhooJqAvI6qcjekD3xP_Eso=w1920-h1080",
	},
];

module.exports = {
	brands,
};
