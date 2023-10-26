import { ROAST } from "@prisma/client";

export const coffee = [
	{
		name: "Black Apple Espresso",
		brand: "Airship",
		country: "Ethiopia",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcwxu7wf7AdcEiIdH6eswxTy8_mKMkeiMrnrqjWv46u2izKiomYqfzB0UdwegNQTh8t1TB3bzXy9J9aZspdOPWs0NO3AfNLF4koWoCIDjTEfz4pycU=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHc4OwbTDac5V4cxCYbgqf1UNMwajlBjZnTXMxqwV9MleMCa31lOcUnd7D9SNq2Kq72T6Vqd6FgdesIZga9ok-uZ4ArSxwnL0MrrpcmA9eFqq6QqBak=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "23.50",
		webAddress: "black-apple-espresso",
		description:
			"With its syrupy body, tons of chocolaty sweetness, and splash of juicy cherry acidity, this one's ready to become your new favorite espresso.",
	},
	{
		name: "Black Bear Blend",
		brand: "Airship",
		country: "El Salvador",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHc4DcJhE3md-w4zfuMVhQWgoQgyzwQaNbX49SZH-oSM5Ds2fFebulbEUKtDWWt7_s8UdfNkGM9Uf_OEbgLpJPW6YqanlpNsIZM4KuZSEUPDE0TUZvk=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdIdpKm0dzbxUm7OykPTaCsxTn4uQ0DTA2btw-_k0j1GgUTpjZoRSwbj_QE7Sh4xkvBxcLfGULUeGqo5xaA8ZjsTevoiqVNV9fpKeqnI8H3DCSV0Pg=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "18.50",
		webAddress: "black-bear-blend",
		description:
			"Deeply sweet and chocolaty, with a kiss of roastiness pairing beautifully with notes of toasted walnut.",
	},
	{
		name: "Colombia Sugar Cane Decaf",
		brand: "Airship",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdhzycNiRWHffgtGPQWfuu_3wcZYiUaJELoSD5C92aI0o6JP_UaAq2UPj8ayVomGIPcRkJBIJC6qYFvuyR7GRw9UHoE-wc6l4zuDqkBy8pAf10d8vs=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcKb4seRH3_sR83RDZ9RqhbNf4U6ozd8LVGiVTQQ7G5CRDGeIGncH4ftfgfkb6EaG-naq-rq8VbZDR6MbSUyl-KYx3-oK9_Hj80OZ1axh-ftU0RdB8=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "colombia-sugar-cane-decaf",
		description:
			"Like its name suggests, a sugar cane-based process removes the caffeine here—but leaves this coffee’s superior integrity, and drinkability, totally intact.",
	},
	{
		name: "Ethiopia Kochere",
		brand: "Airship",
		country: "Ethiopia",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdx69LdEYv94dGD8Wk0wCkBK-ARdIST36MvUowxUk-9z1IJOqLxmP6RYFFBxt5r5FP_VAjlRsqB4chK4HlFjEGAGnQbzRkPmudrA86ZGMAtg94vLB8=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfuvGvrZgGLasPpW9APUkXkPNQ8V5tMK2yMcGXRPNdohYe0JL99YKkOh0RtsALTmfFgPqhJ3MWs3gDhBkAF48FCteFqHHiURvGeeaQKIJtSLx5DS9o=w1920-h1080",
		],
		roast: ROAST.LIGHT,
		price: "$23.50",
		webAddress: "ethiopia-kochere-airship",
		description:
			"How about starting your day with sugared berries and sunshine? This Ethiopian summer stunner delivers lush berry sweetness in a rich, smooth body.",
	},
	{
		name: "Night Moves",
		brand: "Airship",
		country: "El Salvador",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcwA1FKoM7I9d-Z1v_NLHXaQkm1nPZ1GGdMBmAwUYGSUmM3hlHllbfwwLeT4flrvA3J_K39uUvOSaQdKDhxxtpn1oTlxKpo8LcVwiQv98QNIt1HoQ4=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHduPv88Ki-Cx-jQ6YOtJKt1Baqd0Qa9rAktPyiZ3K68l-RfSZpMiqn8oWB4T_K1aOMVLQiXnwWQNTFPC7gHW5k7SNof2ofO7dhcKHON7se7dhflhpc=w1920-h1080",
		],
		roast: ROAST.DARK,
		price: "$18.50",
		webAddress: "night-moves",
		description:
			"A rich body and dense, roasty sweetness are complimented by notes of cocoa and a hint of zesty orange aromatics.",
	},
	{
		name: "Sumatra Kerinci",
		brand: "Airship",
		country: "Indonesia",
		region: "Asia",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHffb7TbWZSWKsZu-mjPR5Z5jFvYvn6wKvpKS40ybErnvfWtBLij0dyRqBaZMBvSLkvvNS1I6EjWov9IjqzTG9QgC8Q_i5U6NXWXsYx4RMSUlYonUGk=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHeKPq2WrczSzKSq9quri7yR_8oSvhIvxHi9I-vOxvl2PFoJJmFQQ-yH3kc72hiL2psplJdFMPBpB_7_q7Apyy7YYF03QcFM6JdikybTb8xdBuimQ34=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$18.50",
		webAddress: "sumatra-kerinci",
		description:
			"Plenty of bright grapefruit acidity and deep plum sweetness rounds out a comforting earthiness in this satisfying cup.",
	},
	{
		name: "Black Velvet",
		brand: "Atomic",
		country: "Honduras",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdMEJwctfm22DV6nFo1--Hcum8Lg6EvQ4fo08NVsrHeMce8kBbU_81WQJDGWtTfILZk_MFjoZQb-Pw_eQtaqZzigBgO0993xDu8mALtjq_qmZnpd6c=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHd2KJQQ8HWG4MRrCY4IzErksWY5gh--NcyLah0TXTgt0OHGQoTl_XIYjiMLq7mGkmk-Pc3CmlrJQMs2WyMzxl-tprgm4ikkAAeojbkUV-yCwHI8iQ4=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$18.50",
		webAddress: "black-velvet",
		description:
			"Silky smooth and dark as night, this blend features a hint of spice and a nutty sweetness that'll pair beautifully with a splash of your favorite milk, but is just as delicious on its own.",
	},
	{
		name: "Cabot Street",
		brand: "Atomic",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHeO3EaItVD_oQVyJzwI8E3TNbaLQaVdqBrqK0g_q4OG8KVPnHnENbNKrORIPZgpszypW1U-YGwP4vdN8dT8qGf6e7v_ryqyRACl34jUa5BwjoWPE4U=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdRPg6mConmrXyRwxI6rIZY8RJZvuLmY3acwksQMNu8D6-THCuyHtJyVBieiGD4hwD-ZitsbeFbP9q7hKzsQyhbSAYI6Nid3MN2EfkhtYKkbslAi4c=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$18.50",
		webAddress: "cabot-street",
		description:
			"Sticky-bodied and jam-packed with fruity flavors, this coffee features a bright apple acidity that cools to reveal notes of fresh green grapes.",
	},
	{
		name: "Diesel",
		brand: "Atomic",
		country: "Honduras",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHe98BmDuJyBWFlDtCvuLpHCaC9qrz7ABZ1CB39sqczPDyGZakKuU9h07C2XVax0faxVKgd7HaTOS4I1z3hOSttCiW_-DNDQxDffMpJU6DhXzRU4CPE=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdHa0b5_71zNU8xwpowBKuahuO0P_vWCr511wJjVv_98XDQtnShWNTmSHyWPn3mNj5wjGPiotl5Ns8HdNSJhfXt8NsE7GZN9i6z3ezJKtscQSUkfvc=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$18.50",
		webAddress: "diesel-coffee",
		description:
			"Dark, rich and energizing, here’s fuel for your morning (or afternoon, or evening). A bit of earthy smokiness gives it extra oomph.",
	},
	{
		name: "Ethiopia Kochere",
		brand: "Atomic",
		country: "Ethiopia",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfj8JnEb79xP1hXwH3mRs1Tlp0HqczdVohUxcHbOQUDWUd-Rq1F-GH6abDI54ZzsT4Z9YOhrly5ItfS3Xvt3yRie3LDEOWPTjblYPp8wJRy9t3Uhgo=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHf1kx1cjaOKLw2BY4cWcdI2WL7XYu65WFx1sTors8Pt7mI-JP3NBy7wUFu6fSyUVquyDSc-wHgBDIBKvL5zn3TOqBQgrVgQ2DPsxCif2LG8JJo8ytk=w1920-h1080",
		],
		roast: ROAST.LIGHT,
		price: "$23.50",
		webAddress: "ethiopia-kochere-atomic",
		description:
			"What keeps us coming back to coffees from this region? Case-in-point: this one, with citrus acidity and spicy accents—bold flavor in an otherwise delicate cup.",
	},
	{
		name: "House Blend",
		brand: "Atomic",
		country: "Honduras",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfC8nPTXTRIzS4JE7_JfI27sIspftkAJWzvIV0j9w77RnTZ24kRqVuC0u65mxPyT6YAwD9Zc-fXkDhMXqgfjZDbrBoa1mWnWvuJlPruYxLxbX_jkis=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdSCii_hf6j4eZ3j0khZClfZmMNACpWGZ8eDfXmh2X4zyRJ4ks_kDwnBmaM2VvqPTUz-zhHRfVHXEt00p3iBRfYID_vJSApkL8hYQ7UdTOIAPcraJc=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "house-blend",
		description:
			"Keep it smooth with a blend that won’t make waves. Well balanced and rich, this is uncontroversially superb coffee.",
	},
	{
		name: "Rocketeer",
		brand: "Atomic",
		country: "Nicaragua",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHd2go-ah9ngs2IPl0tEgX1ExD1Tqh-eE3eGyM8uid368j1PVK1eeIgJ7p3shDUMBRCiyUUkoYKpd4oDeuIpW3M51-Sh3p3BQGlQlIjbXmZwRtlbva4=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfksNLHF7Dw-ttgg4a9ob3IZnTVF8YBV4ZBBVxRFnxYdFdDDmJB1frc76qCpReaNaFrQtOB3EFmOMZrKnnQ1542_biUiI6ZNDrqin7nNcF8QoIix2I=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "rocketeer",
		description:
			"Ground control, this coffee needs to land in everyone’s lineup. Smooth and rich, spicy with a bit of citrus—it’s just a people pleaser.",
	},
	{
		name: "Space Cadet",
		brand: "Atomic",
		country: "Ethiopia",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdRo52UJ2PqJ0ra_Yxnivz24AJLL1E7F8YcBJh2oUcErfCIF8IqPud59qGBb-nqf9J47vHV_zOwx7L268Sdt2VjfCOUQTWFgLd9l-qE27GkfdqUkOo=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHc21ASqlo_nqDdhg4rDTCh53tmK5hrBDC6X9a_M4a5i2SfiKVgN9rgKNc7tQQsIPY9EcscE1U7ylNyR1PqroLnuJNPCjIWgfdiJlOAYlAuGLbBK0n8=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "space-cadet",
		description:
			"Extra smooth, extra chocolaty-sweet, and dare we say...extraterrestrial? A splash of ripe cherry juiciness makes this crowd-pleasing cup every bit as delicious hot as it is cold.",
	},
	{
		name: "Witch City",
		brand: "Atomic",
		country: "Costa Rica",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHde0Xfm7E8Z-fL_weyY6oIh_ELhPSEVDf48KRVJpQc5LFgG8xygn1uukRe0_0G333pL-swaYrFSjyH34zS3QWP7vkGvoUq1NgdY0v5nwcxyRdXjuvg=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHf-3Zi2nPA2I2TTQ9Eu20SARypezV12Rv2cM-udvgqstroUQtQEFKAn4HGa7s6ChbWUJwzFcZCbdLO7tkBup1NpUDxeSHsmLN7RIFYwJJCdrHXyshY=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "witch-city",
		description:
			"For the fourth year in a row, Atomic is collaborating with Georgia Wrenn, a 12-year-old artist from Salem who creates Salem-themed artwork under her brand 'Georgia Made This'. This blend is more comforting than scary, but it'll taste delicious throughout the fall.",
	},
	{
		name: "Brazil",
		brand: "Bean & Bean",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcPD3uTZ5MGKW247euOBZB_LBhP911xluXi3t6IQW6JVdDEyqeGdHQP-ohH-s4x9K3VeAgddhggqwr9r478IdE2ErISHdg-BqzPVP7Iu0HGIP3nrw4=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHeoPUmyCEY2Klv2D9TzHd_9cwGd1-xI4gDwjpxa5fnLuXsddJ7sxAFr4Htt3plR1ThwNCvj8GSin7P-4CUYp1UQAKVg7xC7SeG-eyuckHuQHoGDZ_8=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "brazil-coffee-b&b",
		description:
			"Everything you could ask for from a classic Brazilian coffee, this one features a rich body and tons of fudgy sweetness - combining in a way that reminds us of dark chocolate peanut butter cups.",
	},
	{
		name: "Costa Rica",
		brand: "Bean & Bean",
		country: "Costa Rica",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHc08r9zlqZnohvoSvEvpmh9VmwPPXI0VsINT2S2qQizM6_Y27tZqcANM_-y_YRdRs1vbFMJ7k2iutyWnHScfWwUvxQD_29XWO6ceraO0mYiv3_QUng=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHeNxTDb8iic5qb0fE2U55EiTMja6FHvANtmNkRzh3aHJjRkAbsGtc9xtFK02TRVbHHtcEpZ5cn73ph6SC4CxBcWy2W_nUe1jiJkHBHrBEWRB-2b8_k=w1920-h1080",
		],
		roast: ROAST.LIGHT,
		price: "$23.50",
		webAddress: "costa-rica-coffee-b&b",
		description:
			"Unique and delicious, this tropical Costa Rican cup reminds us tiki cocktails with notes of ripe strawberry and juicy pineapple complemented by a lingering nutty sweetness.",
	},
	{
		name: "Decaf Single Origin",
		brand: "Bean & Bean",
		country: "Mexico",
		region: "North America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfrHjtfru7MNgVk5jpdTflVG8KuPsmWnuw3HRgnrCbRATnamGFB7TqDJFbcU2JTPrnm4LXk-zML65weP4Y8cdvTOfNhtygnpSktUaP307pQvO7hPM4=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcIivvyhyo96GuSuGf-CzbQzyBQP9iRsqSHCkMnECOMynxzN71ybT2Q-V7G85sLVELCcbdGle3f10JhPhO1R-rgVjORYzqo_czrL_ouFW_foUNm25A=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "decaf-single-origin",
		description:
			"Velvety smooth and plenty sweet, this fabulous single origin decaf features notes of honey, apples, and caramel.",
	},
	{
		name: "Downtown Blend",
		brand: "Bean & Bean",
		country: "Congo",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHf_pfoMJ0a-B-qTUK6G3FPrLC5EW5ExEo3yph1Db45yPcE5Mxbk19ECYiumDEAT7f-e07U-ABvCYP2AQlYDZWs9lDFuXt5E4POK3QKvfVALffSVyhI=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdWTZB3wPl4w_ffxr1Mqe_9QIGWt37QaBa6aWtwKun4Sr05XYWUCEw3mty5P12KofXVkWJRRYk6mUUB4l6DQxRadqTs5QQzApqFQto6fFIgNV3j0hw=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "downtown-blend",
		description:
			"Silky smooth and plenty sweet, this luxurious blend features notes of toasted nuts and dense brown sugar in addition to hints of cocoa on the finish.",
	},
	{
		name: "Ethiopia Sidamo",
		brand: "Bean & Bean",
		country: "Ethiopia",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfJOYoEXre-lYTKyMpDnbNWpf5slN4A7qML8yvbMIR3zSK_aeGWL0hHXltZGTeQu_-WE_ZViUsN9HWMH9xQkHybViOstqTpmZMkaJRCVVqadE-TlNU=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdcQJTbMr0mefNbk6yzLD0sPMVQ18M4qbly3-asE3_oXKfh4sK-h8rPpAVtsFm4BvE61t8c1M4yKkTBJ_eIskMaVA-D3LpBgGpGcsqaplsyY4IstWc=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "ethiopia-sidamo-b&b",
		description:
			"This elegant washed Ethiopian coffee shines with a bouquet of floral notes and succulent peach tea sweetness.",
	},
	{
		name: "Fancy Diner Coffee",
		brand: "Bean & Bean",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdy19jl6i-XwiS65X8UPToWZmMIJuzufYYLVfxonfb8XOBJKbK4aYn4DCJQdbEBwcByHT2J1-iBpTSmOqmm2wQRAu_-PztfgRI1z8T-tULLdxxZ6TA=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdm57z7K5iVgbygLzOJfGWuN1p3YT9A6Kmxxm5Bwxv2JkM1EP-9R-wtMJFSbWNYwd0iVmr9lqLSR35X4cwQq3DI77KE-SGUakMbSSV-x5xD6bhuiiw=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$18.50",
		webAddress: "fancy-diner-coffee",
		description:
			"If you're looking for memories of the all night fluorescent dining rooms in which you first fell in love with coffee, but made with much higher quality beans, these beans are for you.",
	},
	{
		name: "Hawaii Kona Extra Fancy",
		brand: "Bean & Bean",
		country: "United States",
		region: "North America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHeWjKfTDnWVysINU_sMV0znTNB8hfoYFC801U3PEYVOx13dkwCjqxQUYGgTJMOYoulMMyqV1f33io-WeqpfB14Kj4Ha3lcV_2lah9vNtX5tPtPHIvw=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHeneEPLGqHonBnMsMEV1aikX8KKYl9ITlMaTAzYzxRcCFkNdJn5I5KsmMElP8Uu_FAduhJz623IOtg_bbI_CEVMmDiIzGSwciGdMZUqPaIWUT5kx_M=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$18.50",
		webAddress: "hawaii-kona-extra-fancy",
		description:
			"This real deal Kona coffee is super smooth, with notes of brown sugar and sweet walnut balanced by gorgeous green apple acidity. 10% of proceeds go to the Hawaii Wildfire Relief Campaign.",
	},
	{
		name: "Indonesia Sumatra",
		brand: "Bean & Bean",
		country: "Indonesia Sumatra",
		region: "Asia",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfqVwR6kPXYhNDNrW0Edr12QiVc34BS_9MCAOhHu_PzzV3TVkEU71S-JNtsSjiF3jPSbbsUfo8tWIP6gdBIP3KTmZJ2FSEQvEge-vnhHE0yJEIoexw=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfzYmQhXTuZu6JulkjnmM43XtddCkXr4EPw6nLp2ZzmcWjEtab-lCFeI_FMMUzo0GgVBI2UybcHg9rB2xhfP8P-trSSfLPMTju9cSMLSRDlDjY3sg4=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "indonesia-sumarta-b&b",
		description:
			"Pleasantly sweet and round, this coffee features dense notes of brown sugar, juicy cherries, and a hint of earthy cedar sweetness.",
	},
	{
		name: "Peru Las Damas",
		brand: "Bean & Bean",
		country: "Peru",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcCMl4PIHLpNIrld6iX1iOgAMYMrv4Q290qPjxeDffTpGg7VtwxUHM24StxGeGlThGlZ0lqVyPei6Vs9AgilhhYD5nlVDWgc0tNL7LY84E3Dn_adtE=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcN-mA8aM8skbwF6Smry_bYe2i2Jj2gx6kfbHY9bZuPqcv5skiJENCHQ0A0fR5N3r8EdUcrmRh06kFrl17fi2jw7tZcI-Fa2mjiNlI3xP2-YwLrMTE=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "peru-las-damas",
		description:
			"A creamy body and plenty of bittersweet chocolaty richness combine with zesty orange aromatics and a hint of nutty sweetness.",
	},
	{
		name: "Tanzania Peaberry Kilimanjaro",
		brand: "Bean & Bean",
		country: "Tanzania",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfNYS5lsh47HS9Ox-oIADahB9sovQs6bDSw8zsK30qD58sydntvrI6lZLqVTDSNNLIQ7WDUh_JHTHNhIW7GwdlL01bzcO3fOKRcaNbNB45TCdsl7Zw=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHeHPGD21um2lbrEmvmYmQUzkSKIWBxjRi8unQcrpdkdYPFdptBsc2LIH9Wg2_Srj2zHAcJAR4q32LwIs07PI5a05mZsyrmyxhRHf7z3Nv7db_py3wI=w1920-h1080",
		],
		roast: ROAST.LIGHT,
		price: "$23.50",
		webAddress: "tanzania-peaberry-kilimanjaro",
		description:
			"Grown at the base of Kiliminjaro, this coffee features a rich caramel sweetness that perfectly pairs with notes of juicy green apple and zesty citrus.",
	},
	{
		name: "El Retiro",
		brand: "Bird Rock",
		country: "Guatemala",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHeDPGGib4E_C_VomeE2YZNFCxDxrh-zwPUCRcodA2fo0uYXECGIbIkHBlovntkKw4oJRQnsr4j4K2rk0Ejr0nXJTR_kYH7G_YOEJPvDM48mVME5W6E=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdGwztR0dKo-vR0-69HomHviKCw_bhqUOpuowi04oSeGKVhdoJ2r3Y1uqXN2XqqoN4ZIJ8jc4dJX_Unr0YhX-ihOnAZe0Uk5SYUZfNqwoybFcPir7g=w1920-h1080",
		],
		roast: ROAST.LIGHT,
		price: "$23.50",
		webAddress: "el-retiro",
		description:
			"This natural process Bourbon variety from the Chimaltenango region of Guatemala tastes like ripe, dark grapes with a hint of cocoa.",
	},
	{
		name: "El Triunfo Decaf",
		brand: "Bird Rock",
		country: "Mexico",
		region: "North America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHel7GRmb0wNEc5mQMtw43wl64WxgUQJM_WVVLAyHfOv4evbjWCXd7jvtjTDcuP4pQgZW9rYPSh67aQnRECfwJRNEfXQYfOAoSu0m5m9pKN3ISx3Kto=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdh99BFaK5mqIrBv_mCPDlb2zdtlv241AlD9atYvwv0hjZwpjUjnv8RhX7SZfyX6HDXlDgq_sF4SE9kfkr0Cyr4MWn8rUDbV42txRljiyss7EI1g8w=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "el-triunfo-decaf",
		description:
			"Classic and delicious, this delightful decaffeinated cup feaures notes of sweet milk chocolate, rich caramel, and syrupy molasses.",
	},
	{
		name: "French Roast",
		brand: "Bird Rock",
		country: "Guatemala",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcsmhhWxefoa9fCXhmSHdMhkEaO5EUBmQxoGg1mi329-fOMcQJMStUXgGzLJUgTzWHuZijcvHPB27EaDRHXq1jccMOLuUCMsYr1xP9MXlaiKvunBfs=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcmKaOkz9YanAb-5nNeCKEFekr1B9ZNe9ae0xDqdp4wceZ6ELj57y8VEfg204xuyQ6NbubJ1zrM8a0B8Dc7FiAcI4EOpRJvTO4NaG4OL9HNUJ05wUg=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$23.50",
		webAddress: "french-roast",
		description:
			"The sweetness of dark chocolate and cherry gets a kiss of roastiness in this deep, rich, full-bodied cup.",
	},
	{
		name: "Monkey Bite",
		brand: "Bird Rock",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHenwba72FKeeb51oFpKaVPW_c55Plt0i7gGmP7kgAZshEwgGx2aFrgi2WzVNmAyUoHLpwRUrZv-dHVB6BqLe5w-MZ7siEfyPWz-b5wz4NqdBIggB3Y=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcDtuNMyHhDysnmAgMOzUUwYb62kzyWlEzYVcl7YHEEk5dOQL3UtDGT3_jDHgXwUxyxqljf8FxdErwrfAApiDVRRgVPhgJvPi7pQeKb0W0VsHVmM2c=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "monkey-bite",
		description:
			"The sweetness of dark chocolate and cherry gets a kiss of roastiness in this deep, rich, full-bodied cup.",
	},
	{
		name: "Pump House",
		brand: "Bird Rock",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHctzWZZyIExQx2DC3PstzhqKEObKLYdxC7CW-TXzlOEm0QxcSG5eRM1yfE21Y4Z9lHmqi6SGnKYadtERIn1P4jCnQJE1jVc_QeqPySTZpVvjwEi_Cg=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHclH9d-s3UyU1aoF6bhIQhJgfDAW-xbvJnQYf6D1u01M3Jh4VzwTPaoxoGb97gMEciNsRu2lRAtwz5Jw1gUI3JTnIVG8fGfGt7cBCUKQsciBv4lXFw=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "pump-house",
		description:
			"Big caramel sweetness and just a hint of fruity acidity make this coffee perfect for espresso (or really, any way you want to brew it).",
	},
	{
		name: "Wate Gogugu",
		brand: "Bird Rock",
		country: "Ethiopia",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfkC-TGJWMXQUqq5UZNqZvndd53iycxt2IF-_dZ7oYkwOHGs7Z6-_5ig_vQTW1Ra8Wro6EhV6jV-na4fybMUixTh8vH65ghNb5fo4xzhIIXnJxiZsY=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfcfGXSzoEnC-8reCd6Re-cxNMoLwZHxLpiVIbXYtHJg53UhEsxNdU4ixxYg_0SGbpOmY4amDjlJKhRmgdQWkM3zDdQBZ1VSvOSavxOFwubKnl7Aco=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "wate-gogugu",
		description:
			"Tons of floral aromatics and notes of sweet honeysuckle make this the perfect coffee for spring, complemented by delicate notes of black tea and zesty lemon.",
	},
	{
		name: "Agua",
		brand: "Common Voice",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHf4A07R7MB_1bMbgDuVUJLq3cX7Lmuqd9qXMExGwdm4ALVJRXxBhPZXJZacdpr3JpVOFjpLsjI3_c_RrfCkKsioFuGlN4bq7eIpY0EFo4sm0XRHzDA=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcF1u0SMypdap_BqHaFhdne1GrRIqlcdODB_mnMZC0zhGyzjDaIz_KPSJxanKzIiUJs51DlMO34COU2oNRsZribCyFH-cjmHOodJvJ_IC3f82rSFVM=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$18.50",
		webAddress: "agua",
		description:
			"This fruity-sweet cup offers a juicy citrus acidity upfront, then balances it beautifully with a lingering nutty sweetness.",
	},
	{
		name: "Canopy",
		brand: "Common Voice",
		country: "Columbia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHeeMsAy_ywBQiKSZ0Croyww8tsxyVh5EUbWYvnAMzf2nZ5rJK3Q6vhkRjSEh9bXwgEekEM7r6vjM6i-JFPqvdDPQKXffzPjU5Pd9UzOSWQhfwfj_TA=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcLc8a5vvPaXLglE68uMNz-LSQJiAouXIfi6hqb7qPZCK-eO5acXrNe9988rnAVMRhuhptyNPGTByNf_grhD5Amtq899gLUh_uCfGk7LbON6iE6PT4=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "canopy",
		description:
			"A deep black cherry sweetness peeks through this coffee's pronounced dark chocolate and cinnamon notes.",
	},
	{
		name: "Heirloom",
		brand: "Common Voice",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdNU8X_4ynyOPEEE7rj3md0zQXBcBCPxAI06i0FxqChvcyBLEw81auqsCDSvkegAOGHRxdTJWKhGeutLxm23w6GaCqYWheMiUfgzz-jQ2zl51-z27E=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcnkGKqSAmgnZj8CddW0F_x_2dnkPPvaqbs_d0YKPbdOEl9ciKDzN2jD7w7On7aeDOzoB0E6TakDAXwB2G98kWqd7Gbs170jrA2xb0hMWNXAXc8uuc=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$18.50",
		webAddress: "heirloom",
		description:
			"Chocolate and almond butter sweetness for days - this cup offers that classic candy bar profile, with a hint of juicy tangerine acidity.",
	},
	{
		name: "Sunbeam",
		brand: "Common Voice",
		country: "Honduras",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdLB3D0676IqYBsjz_bmFby7wVXVh9dhiX88Bn1Yk6afVKXWV0aTuWwqHefCvgDOsfQHCZ4T8DIoPR7D0TgsLtvHld86vOxosbA_oi8pkJ-M6i8HrE=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHeK1jxPWAFS6qZTRlNHxrmafihvNeoA2bxjQOY1cP6GDqlGPA0z3QIr5m968Z2w1x37AD8Lwmbng3OuEm-aemstIo5VUnBtthh3b7QlJlJWfFDC1QA=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "sunbeam",
		description:
			"As bright and joyful as its namesake, Sunbeam delivers a shining citrusy acidity alongside a gentle chocolate and roasted almond sweetness.",
	},
	{
		name: "Terra",
		brand: "Common Voice",
		country: "Mexico",
		region: "North America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHez-Lai9GO2-tuO6-ANAUX31962S6csGtVaLUE1y-TrJYfxnjf_ZlcnQlAESnF8iX1TYnOt0rdBf8QiXRMZbXElobxdd6htnZsO3VLjp03i8c7P1uM=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdfWCceafWIA8lYb0SlMCU4DCT3LEvDI_vddhWnbonSPdiS6qS4-ECuOTU543nGeHUH_keuCsWkv0SOyEp-u2l5RrtPxA6weoxjS23s6TJQqK5ZY3A=w1920-h1080",
		],
		roast: ROAST.DARK,
		price: "$18.50",
		webAddress: "terra",
		description:
			"Terra's deep, dark chocolaty sweetness and kiss of roastiness pair beautifully with your milk of choice - its gentle orange acidity makes it just as delicious black.",
	},
	{
		name: "Karmadillo Bold Espresso Blend",
		brand: "Cuvee",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHd9bwFBfGqyQH9BBn4yD438VB2x3hn2mhZPNBL-TCBnm9KDAo2RmtAJLzQwFEtBZQ5tbqNrS1_2U-zGGoLPNVVgKTnG29TSXw-gudGYfPsFrmja57I=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdu6x7bLzv9bgbFM4mHx5IOth42h7ZHkNgfpkO_eZD6O29iej6FUMTgYa8D2ot61yFL0l_P4JFgPExjsg8l202TZ4DbmvoGubNuzpdW9W8ZHVUkfFA=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$23.50",
		webAddress: "karmadilo-bold-espresso-blend",
		description:
			"For those among us who live la vida mocha: here's your go-to. With incredible depth and chocolaty sweetness, this one packs a wallop you won't soon forget.",
	},
	{
		name: "Ecuador Hacienda La Papaya",
		brand: "Dune",
		country: "Ecuador",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfBK_rRmOX15ED2jyYWnKuUyAtMjI-BGixisoMX9DSqONw-cY-DPC-SXpRbxg0SIplKX45sFyvbijkpFg0_siEzWvIMepjYFqcsX88GjuK--eJxl5U=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfBH3BaY0tCSkrk8hrTRzXJMeNO37Nu4t-AdeGkOoXxYzz4RShVqi_Hkb0KkHEHxzKD0pPYNnMem-NZZPfXAkIRy468E-ax-5YFG4wQNR5_r7ktzxo=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "ecuador-hacienda-la-papaya",
		description:
			"From one of the most oft-praised farms in specialty coffee, experience a cup filled with a special combination of fresh raspberry flavor and floral aromas.",
	},
	{
		name: "Ethiopia Yaye Natural",
		brand: "Dune",
		country: "Ethiopia",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHd8pl3U5rS0kV4lL9mjOHNEOvq7TUDkSkktn4TO-buvSbO1Ugn6SQmZ_G6pGDwLoxcXpYreAzrtcDb_b8eywyd-AiTqcqFgi_ItobwOz_e2QSWfsJE=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHevf0OUP1bBQSNR5A8QgQhTbqaFzxJ1NKKvbAA9gZGoYIqAk5-XIWHwVuaN2TK8pstpx_kV7H6DY0zmx7nhekDYGtdD44NwWJflyVMDshHQoOfNMyI=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "ethiopia-yaye-natural",
		description:
			"Lush, ripe red strawberries star in this juicy natural, featuring intense flavors of black tea and a deep plum sweetness.",
	},
	{
		name: "Guatemala Martin Lopez Alvarado",
		brand: "Dune",
		country: "Guatemala",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcgpX2CoS9O8aV50quMfFN36UAluU1tiBxY4pDlvjYRANL8qXL0SYApdWlWVEdAbpKzxduvL0yNcgjCfdhff4bkT7R1HaKJEh9ffsUXDx14LkpTvPs=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHczYu1LlBk90I5YhL18PFpTmuzL5NwLFpR5_3UB5c7mw4Cx5ssS3bljJfM4X2lTRKGq22N8coi2C4OJdjLqCJzPvZ-DvA_woerZ4Ap5baBrtP6tV9M=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "guatemala-martin-lopez-alvarado",
		description:
			"This late-summer gem features lovely fruit notes like nectarine and grapefruit, with accents of baking spice for good measure.",
	},
	{
		name: "Honduras Pablo Cruz",
		brand: "Dune",
		country: "Honduras",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdb4EfpkFm1LGfYey28NlmfvMRcaPClHKQUtvHDiXhtZ98suybDFpOvJCIYX9aO0CGIcpiH2AaoK7Bz3VfTDhq3uUOHwXnzypYAudJHDxGzkYcSBxg=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfZumBOq9ZK5SIhIFb4-wyDSU-YE3Xw21CoApzI_b8XRjtE30bXkH4s9EILnqk8b_8LNl_u_P-DDjx0Mk1J6-7lZ-ovQvfNeCTteRroJvamjxOPyLk=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "honduras-pablo-cruz",
		description:
			"Balanced and delicious, this Honduran coffee features crisp and lingering notes of green apple, complemented by a rich sweetness and creamy notes of toasted nuts.",
	},
	{
		name: "House Blend",
		brand: "Dune",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHezyyoWI33XvrFQvGVof9oFwDy3NY8vYB6RLch9QnAKiwFzYeNRohC3L3oOdrdQr3iFIc0JPNdlxakXjXxpwpOgHRhKmJNfn_oXWkhLX8B2ZeQEp9o=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdULygwL5alFrbCuCApdO1oBrR8A8Dg65h9BDt8lqVKKDrgR89fwqOBIBRbtgtd9w9LvfvcbNreoubwzyPcFV8MT4psq0jj_W_9ynAcOkfZjuajbdY=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "house-blend-dune",
		description:
			"This excellently executed house blend is an absolute crowd-pleaser with tons of sweetness, a velvety smooth body, and subtle hints of fresh fruit.",
	},
	{
		name: "Presidio Decaf",
		brand: "Dune",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHchEPtW2kQRBPMBCt64O82BYMC7nHNDkwa3oXX9yOus79nJNOR9qxWjk9FNhbulz2wDJ2kK5Djvg8PduIsEVtFfZNEmKHOQIdchcxjeYOeY-8uwoMg=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHedN1d26D2EqNqv-XyqaHyknTvzPMnpMcZIGh7sxgdGU-Kzngjh2vmJXdiKhtDjwIjfcMSJnPOr4WBCvf3u218UbrhHU5Xjch-d8p-RMTQHgm-cMBM=w1920-h10800",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "presidio-decaf",
		description:
			"Caffeine-free, flavor-full. Sums up this easy-to-love decaf that's plenty sweet with notes of juicy cherry and bright grapefruit.",
	},
	{
		name: "Santarossa Blend",
		brand: "Dune",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHe6ijAOQSS7_j2jkZqRJus15JBWvbObWkJaLN3uc_63lIJ8H5G2BYequR-EAiIFyCLFCMykcAatnhwdrJB-PhFwetWEVQgyxAPGoqbM22CQ0DWu9mI=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdLqsRlKqLSQzTt10mB4LcVCAV4ATN8AApE2EvFNmNT9M3B-g2ULywySOQw_rdwNzuEHhDjxH7t_bFRVdNKV4V2XWc7nuCi2igG1elXTLN_FTmc3lk=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "santarossa-blend",
		description:
			"Sweet, decadent, and just plain tasty - this blend features syrupy caramel sweetness, with cozy notes of toasted nuts and rich cocoa.",
	},
	{
		name: "Zip Zinger",
		brand: "Dune",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHe68OU4HeHEqKMUh0gFlI7spIzv8KTdY-VvMjqd4Xmu-V-rI16cXgYmrUThrhsWpU3sKWcJA6QQ14kQffITtkAc9TgCrAUnnqbe7NDmwRvdRY6WqzA=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHePrqMaza6OX7yqFxOmw_ufa7LS8OpimecHqbmn1rOv3TKeZRkS9vdP09PtbV6t6Wd6YaqXYX_4fHTwjna2XpwbBO0XSH8hdadfJuxT6BJWeIhD0Sw=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "zip-zinger",
		description:
			"This versatile blend likes to mix it up. Whether as a sweet and fruity drip coffee or a richer and more chocolaty espresso this coffee is just plain delicious.",
	},
	{
		name: "Dipsea Espresso",
		brand: "Equator",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcWXPv1qgESPPnA8ycIyPim9vxKalxmoNgEfex6M7GoxJjFCM6nbRp0S2kVdNjXFI9BEt9UpUga7HL9DlRF6qTDtbAMCOl2EGEYKNbyvbt9HLwRk64=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfMCxWVH8Nw0jim5q_sUwtLB4Xu9FPqSxq09po16xoW0RQrnGkt6Y4DBXsN4FN_sfqlQggep8VewW-IbbBZWNIJlBZfUsXfTiDwHsrUWdre6JYNl6g=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "dipsea-espresso",
		description:
			"Brazilian coffees often make up the base of an espresso blend, but this coffee, named after a hiking trail in Marin County, proves they can more than stand on their own in straight shots or with milk.",
	},
	{
		name: "Ethiopia Ardi Natural",
		brand: "Equator",
		country: "Ethiopia",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfSMkSdCkO-i0bDQZ9_sN9GwdtHvTg7AAhTh4Bs0qVnh6vSZ9BKeLfzh-6a0H3y6_S8hzhdeEQpnFWUwyFFriaSolA4nR9y4bZcLD8veQeCGEDfpMY=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHeeUZyXKBxNGNFcu7h1w9aWUb87MmwVyc8XLifzJTnG6PCvwTF_Rj8aMGwJBHYdeSH5gae2tbbsModFpRQvXmrdoZ1aC0WKCiSOOdIEHpctEqFVR64=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "ethiopia-ardi-natural-equator",
		description:
			"Smooth, fruity and sweet, with notes of vanilla, lavender and meyer lemon. This naturally processed coffee may change your whole perception of what coffee can be.",
	},
	{
		name: "Eye Of The Tiger Espresso",
		brand: "Equator",
		country: "Honduras",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHf8byNU4sZRLxTuiv7IAqHy-zB79EsTMTvXwDUQ3HvkrfPceG6Rd6iOVC5mxPQgA9FmUhGZSTOrSIIgeGDADHKg_Kg1Lmdf8bDcNzXvb2_9epomNqM=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHeRFtItNLqXkj-HYxg8ADm-aA10SaB4HRuIb5gwh5kATZx97SGU4tUZxHEg_OYv-BtDmpmuGv6KWKJc5IKNaQIT-aFgAEDoWRmumTN8o6MdE0dW0Ok=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "eye-of-tiger-espresso",
		description:
			"Juicy cherry acidity paired with incredible chocolaty depth and nutty sweetness will have you running up and down flights of stairs in the blink of an eye.",
	},
	{
		name: "Nicaragua Las Hermanas Fair Trade",
		brand: "Equator",
		country: "Nicaragua",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHd3s8UOFkfYCdhn19zsTOtCImWLVWzmt5lCY2qNAEivY_KHe2Xs07yiiPzwNoMw5sjpY2S8rLfp4ey4rFK2rxSEHOhWrxuaHO4XB4lFf7vLEP6U1E4=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHe2XQVvzThScbGDYWNWnwYCF5qCtHau6e4401OTho3KD8Ada5X2Wa5Ym8_orkmZL1wK33kCEl4BEQ777QQgi5ydkQs0LJzo-qtwcAIZM5MDY7aFYno=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "nicaragua-las-hermanas-fair-trade",
		description:
			"This lot from the women of the SOPPEXCCA Co-op in the Jinotega region of Nicaragua brings together ripe plum and tangerine sweetness with an intriguing note of cedar in the background.",
	},
	{
		name: "Nicaragua Sacaclí",
		brand: "Equator",
		country: "Nicaragua",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfg_pBD5mGJ13TmSNEMvE3WEnyHFct5jGwVdZ_gaqYIAUoNhhLWGRtERN-iGb5wlQkw4_UoP6uAi0tvH11Erf34cCkdpHg6UMiYYUM5D9kjt161UjQ=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdupMGXAghBHGneCmY3OMa0xWCSR5NLloI09t-71lOZ0EVPSHm0AbmVzRRkfWTyGfTH1SWJsSn00-0Q3pldaQ_krXp7RawAz8CQR1AnY2oZY-1Uumc=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "nicaragua-sacacli-equator",
		description:
			"This Nicaraguan coffee is the first to receive a regenerative agriculture certification and tastes fantastic to boot! We're tasting a delightful balance of crisp and juicy notes of green apple with plenty of creamy sweetness that reminds us of toasted nuts and well-made chocolate.",
	},
	{
		name: "Prime Meridian",
		brand: "Equator",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHd8jKYLdS-ITWX5i1xOubC3kaUg1nuTUpCr79m-wQTqQeCo68Tb-w6WQS6nkPlD9z1K-ldvAoZPQHvPzePOjDibO0J_HxbDHTUEFoVej8BMeQHI37A=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHc6KPGLyzvOO0-uoAzwWBykncRBcfeh-M2dvXnpDl8OiImqCrma9fXgcNpOATbsDkSsm-4wrM_QJUIon5r7sdWbYMp404bYuzHRsSZIybg7G2PKc3A=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "prime-meridian",
		description:
			"Big bodied and plenty sweet, this comforting cup features notes of dark chocolate and roasted walnuts alongside a dark caramel sweetness.",
	},
	{
		name: "Sumatra Queen Ketiara",
		brand: "Equator",
		country: "Indonesia",
		region: "Asia",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfzuN_r5H5WDHkcCPZWMFMndrNCkx_yxF3T-i-YEOarqY0xtBmQf_pHLDMTkQU2_CPotXamRlqZXXbj1mjVfX0-p7D-f_iCCF9DjDVMVi0a-TNH6z4=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHd1XT5BxTbe7ybLCfN72ylu3QB8C-loyaRN5uYStBaKznZi-AeZf5Wq_v5p-Sp6STbgxnEUi6SmNIlOZmGpX4IlE2PTumCueGVDj5wkFEM-cC9W384=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "sumatra-queen-ketiara",
		description:
			"Sumatran coffees are known for their earthiness: this lot, sourced exclusively from women farmers, transforms that trademark note into a sweet tobacco, accented by baking spice and chocolate.",
	},
	{
		name: "Alberto Mamani",
		brand: "Feast",
		country: "Panama",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHeJKFxEnVqxf10Bb9wX62iCknw3QKpDOF7D1RvKeFay77ILvsqRFnIDt9qGYhCYS788sYi-M0cVZ96o6d8NQ2DG3ozYlUaJDXZpvW1rJmQh2LxOwMc=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfMJwYqNj5gZ3mHxSFn7NcGiiyVJW31XfUm2p_8EJ64cQwoGICchtMNCeMB1brNYBH09MeEiQjtiMV9BK9dRzYpldTgMSDw730SXW_wvHSBJwU0jZs=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "alberto-mamani",
		description:
			"From the famously steep cliffs of Bolivia: this comforting coffee that reminds us of the flavors of apple pie.",
	},
	{
		name: "Huellas",
		brand: "Feast",
		country: "Peru",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdYCBkxRfLmybfz0iLI4WIK3EOPlO7mh1kdal4tHRWMC5k2QTQRUDnjyGnQSyf8hv71Xarkf3G7pY5SnTBw8ng71JP8o9qp56CFOAQ5eAOAwRGOF-A=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHeKis2Zc_Rxag_p8vW0FBhyDAQfuM_6ZcX92N4byxFrCeqF0vzSkJQcf6bLgEkEnx1kfCUHlO-D1KvIiXndd4siDoK7GUCVS827Wm8zO3LFLKBCHB0=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "huellas",
		description:
			"Complex aromatics, a big body and tons of flavor–this coffee, from 14 small family farms in Peru, really has it all.",
	},
	{
		name: "Milk & Honey Blend",
		brand: "Feast",
		country: "Ethiopia",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHexWLnWa27XGegJxtLAaCypcFtlyg702q8SLDxj6lcB-_lgBhNnG79j0ksuQSRnQjPPKLGzy0OChlL_IgneWm_6mAD9l649aCiGGATOeWQKvLYW-50=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHc_o5bzUclLxvXAJvT7pGStytVytyIvd1rWbisiW_wpCg8damUUa2y2r6_osyzlEo1dnxCiuN2hjww-X1vNg2ia8pKJfMaEPTm5L56Vc2aKUmFAhYc=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$23.50",
		webAddress: "milk-honey-blend",
		description:
			"With notes of bittersweet caramel, creamy milk chocolate, and a rich, roasty body - this luxurious blend lives up to its name.",
	},
	{
		name: "Njowa",
		brand: "Feast",
		country: "Kenya",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcT4kzJaPFchQckMwrTxenSaiyDrBpJ9QRaIqN4gENgiryK9axK4gyi8ITRvyJtBSoqHSlsmDUkmkXhvv5HJgqxQId5zkQBZGYCxKMMuE3ec_LTcys=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHe4yVoc6_rZceGLAAZDBvDtitRYNG3IgIfuBRLC_-Q-3AOVNSU4q982DHYHDqTIwH0w6pqOx_cr3oudLtfhFhMVHiMfxVGpw2EDXflzICiEIIP_4so=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "njowa",
		description:
			"Funky blood orange acidity makes this big-bodied Kenya a unique treat.",
	},
	{
		name: "Power & Glory Blend",
		brand: "Feast",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHewQ5Yxc2L7uY-d2Bh4i2oiViJRjpro8hwx7SFDRPle2my0wDC0zH8DyOmlWFY61H3eJ0yzXCFJY5VjH4pzSp4X9qDU1hf48Db2lxVL-ZeNlqPbg6E=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcLYOtnYeN-JsEdTZuOjzm9mz-_zLqOVq8nxLI7SqH_u9yuzMuKRRrv41GuMQv7ESDC3PtqN8pZxNP2DqBV22b9wvlso20kMsM112aYh224dwf3P_E=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "power-glory-blend",
		description:
			"Feel the power of hazelnutty sweetness and a hefty body meet the glory of citrus aromatics and notes of fresh fruit.",
	},
	{
		name: "Good Vibes",
		brand: "Greater Goods",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfbfgtwA0okW4ymmX1KmJNm8Qa7vj4oLDrmw983i1Bj2bH5pF2tnomHHxDu6G0YrSztVBsI2GJaKjaRNWrw8KPOmwBxeLs3IqEJmjGMpv2MnPt17jU=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfWwbkdCbP3xka2mdqKBNS4n6hvADfWL-Z75W6E4s6Hi6RpQPUEm-mgLDuaQLr4AEqGeMfyOCuAeKlbl35E43rnKP2slxviwcVO4YEVRlcuGMW5YjQ=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "good-vibes",
		description:
			"A really complex and clean natural Brazil, this appropriately named coffee tastes like cocoa and peanut butter with a big and luxuriously smooth body.",
	},
	{
		name: "Kickstart",
		brand: "Greater Goods",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcCVfxZFVgH-wLr9YciOEyKLlNnFsAfCVdGkWotZ4JJZXxuugVlraE8YcSpBM53mY5S24y2JM5OA3pCIq0UTSJhjz5Y8qAU8O2zApxhJKMITObWEaY=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcvn18Xbak6z4RT4tG_dOUXP2Pqx97P_IDXPx7iojnx7qEr6mKFmYa6OfRjxrlerQJwvcWONRWWblhFYZEa-bPthqdKTfh5ZHB4DjsApqaXSqHilOk=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "kickstart",
		description:
			"Dark chocolate and brown sugar sweetness are front and center in this easy-drinking coffee, with a surprising (and delightful) note of rose throughout.",
	},
	{
		name: "Rise and Shine",
		brand: "Greater Goods",
		country: "Nicaragua",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdtjIgF1OdKgjoAzlJhx190iuBne4PWPUZ-KXTW4pl9xoHwUuxMVh1Rh1XXGSARDcxT6wlzTLPG78kMqMRzB2IJSfDICJXJ745_SJf4w0vK7X_jG60=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHd_DsIuEayGK8liA-tD3AScCbZUGcuZ8IbnjC9qNgv0brdZ-w8ytmpx3xFYuagsQc1Gtv0ipHuY1y0hhFxQFZVHb9F_P_3OabrgW9LKSo8VyhU6TsY=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$18.50",
		webAddress: "rise-and-shine",
		description:
			"Dark and bold and super sweet, with noticeable notes of dark chocolate. This is the kind of cup that starts off a very good day.",
	},
	{
		name: "After Hours",
		brand: "Highwire",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdvLSuEFUKZf8zcXsLDs26Ug_QVECSJCKAHWJxtzXP156zDGKCUrTmuT6quPhYi7B2EmsJeiDNiCOW1tvn6SMoPaqDvbkClVBS-VboGSgFVgSkrBAI=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHeKgM0Csvs0NzxVFCgq-Wlkkv_qoe2AX93NbWBGRoMswS5LcZmNyiyklpXid22JoKB-m-ru6UQiKK22AgglcTV824kl0AFgkQQsLkq_nEbrLNqBymw=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "after-hours",
		description:
			"With a level of brightness higher than most decafs, After Hours provides an actually exciting caffeine-free drinking experience.",
	},
	{
		name: "Bauhaus",
		brand: "Highwire",
		country: "Guatemala",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdVB32bUCisWZSyqS-sF2S10r8yBpf6NB7L8nTy7HIckiZ1Ji7uM7Ah82MMI02PuqMgqYhgVSD6Dowrx5ND5sqHjZMhdgZrEP_ImViXt7A5oowa-JQ=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdpmhBLJc3Q0UaCtRoVqn8Fk5zZqhI_DuU-oGvN5bHI0rJKl8dDyiMiBHm62ZXrs-kKTohrefV76jJl29JCuo_SukimzplAJNJyXSiRIPDUFKFK2K8=w1920-h1080",
		],
		roast: ROAST.DARK,
		price: "$23.50",
		webAddress: "bauhaus",
		description:
			"A sticky body and the tell-tale tolls of a big ol' dark roast are front and center in this blend that's not just for goths and art students.",
	},
	{
		name: "Carrier Wave",
		brand: "Highwire",
		country: "El Salvador",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcFZDwbT4iW8jBYt3TCjiQpKrgB9rvVSrDj1BW56LSGCLKyyRZZAUUBQVRuLK1KOdpCLXNoB2NkUTbxMW_FwYqBYi7XqakeaQfA7L1YB4q4xz0f1qQ=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfTSXOCtykSz41L4NaIgIVLt49BCyTFPET9QXRJS-RQFwNJFSch2ulKlPOz7LIi8OU4YcMaJgpC3-CicMUYDbF9iMgHQ7XFJJeRZYOwJPvLYIZaBsw=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "carrier-wave",
		description:
			"Approachable yet complex and delightfully balanced, this coffee features notes of creamy milk chocolate and sweet caramel in addition to a touch of ripe stonefruit.",
	},
	{
		name: "Darkroom",
		brand: "Highwire",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfyYvo4n2EuYrgAOUXrgmuOEPVj4bobbIumCBUGLgDoGTj2KgYrsfVD8REAx6E5zBP2ViroCORWJgMqfrZZA4Wyx-XpfbsPy3C9-dynw_4FYd7kuX4=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdv1215RlsCFrRec1AAaagOYRa2YQD_WKNriiSxkob-DJMIcn6Nz5P9nr3UiUEfyzB-rhOidAVHAH5iyyEmzGOrnk7eZWpMa88HLU_vZa5gt7jhSZk=w1920-h1080",
		],
		roast: ROAST.DARK,
		price: "$23.50",
		webAddress: "darkroom",
		description:
			"This dark roast features a rich, syrupy body with a pleasantly balanced roastiness and bittersweet chocolaty aftertaste.",
	},
	{
		name: "Shadow Play",
		brand: "Highwire",
		country: "Papua New Guinea",
		region: "Asia",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdQILo9ujTdcyAWYMp1yVUo5172ysphK6_9BKRVi2uJo4DiyJgtMiF5HQ39iy_q-0H-B0Qx0mSKPWUCrWCLZdbldN-cb-KC0-foHciw4ndVa0XQnFs=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfsf2pA-a5ybYXX5bK5X0TE0SDlNC0Rb78yTkY09h30fk6XbuYa2C3-VlsbfEWyS89JbJE3C4-31TvCKTqqFpG9zPCVf7t9ZSQwlXq23_OlsSLn1yQ=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$23.50",
		webAddress: "shadow-play",
		description:
			"Roasty, caramelized sweetness combines with a delectably smooth body and hints of chocolate to make this coffee downright slurpable.",
	},
	{
		name: "The Core",
		brand: "Highwire",
		country: "Ethiopia",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfvDFe62BzwnxcQHSlGbH-FVang4iSR-xLH4tK8U23M8n8Uo2vpOMXdO86UWzVTq9IPqZH0WddxWoQUVqLo5PsQQHNmukrC84hyD6cnMz-uQ3HxUMQ=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdFOG4lBVDydll8m8rRDvD0PqCvngWw0i4a2_ufGOocevj-ciJ-x25DOKI-f4v34KuhVTuVMzahBNk8Z-UlQ1iq-4rITRjFcEZr8heL_Ia_HDwCh3M=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "the-core",
		description:
			"Straight shots, lattes, even a nice little mocha - put this blend at the center of your espresso repertoire.",
	},
	{
		name: "Bom Senso",
		brand: "Huckleberry",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdRSjHeYSFWght3SinPop0ol4aPhiv0PX5IZNSOqkkEZyDQCSNCtPpt19yhpQfst3C0uq7SC0jWqV_NmDHPJOu-jNFMFPuIqwztY0pUiV_My0pnnqQ=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfOSnGrfN9ZkPkrwFSSuuKjPBLXS8zSVCxTKAwieqRlYwBDhUHmFeSoHPzO3Xl3GyUz6WkcO78PEaVRvakoPWBBodnJxbQsxvenwqL2NZWY6jxEMno=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$18.50",
		webAddress: "bom-senso",
		description:
			"With a big, chocolaty body, cozy roasted almond nuttiness and tons of balanced caramel sweetness, this Trade-exclusive cup is just about as comforting as you can get.",
	},
	{
		name: "Civitas",
		brand: "Huckleberry",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHewWFv_6v0jd_hSkNaucy3BOPrSVooAGsU7qyKImt65wyj59rJKXM8XybT_laUKhanuDGhTTxH-Nd6QAGjcJZMDW0A3IU5zN9HfdWuSDoqIwS_bYP8=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHeRtKijHufOLv2llhD--kdGIwUKT2FEMbdd5MH02wuf_LEyZzhn4Vn1pVTHJ_1AB4QN_iOXaAi2f3o3pDQkzrxG1Pw0lEAB9vnT5yv-wigtbXF-3EE=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$23.50",
		webAddress: "civitas",
		description:
			"Truly one for the people: this tremendously comforting blend features perfectly integrated notes of dark chocolate and roast, balanced by a raisin-like sweetness.",
	},
	{
		name: "Flores Belas",
		brand: "Huckleberry",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfx-rA0gvPspOgYcW6YGc5RENUyiLk6w3rKz2dfWcTb7dd5Gr6OGIBr34RupaQASDXzc-RUYVp7g6nyXSLMUtZruMmILHlIq_Avrld8IotGzqi6CFA=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHe8YfGBG-sIbYbMaR1oy-CvBvpxXPzGxYVwH8HakbC1wm_PmGIgdTAn5y2tKUuAUGFSFcTpDr_0NykvssZCmkNlZxo_qO9RMbCrQ6MHA7MifDWIg1Q=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "flores-belas",
		description:
			"This gorgeously balanced cup is a Trade exclusive! Rich chocolate flavors pair beautifully with just a splash of orange acidity, and a deep caramel sweetness that lingers past the last drop.",
	},
	{
		name: "Mexico Mazateca",
		brand: "Huckleberry",
		country: "Mexico",
		region: "North America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfIbQ_FC-3fu1agTXQ0mEZ2v5ePwvxF4pqHIdNZP2oOfBezhDCiYkJQc-yGrHuDufqx-WahWyw2CicOdpfPi9hhDDQFf2nDc2AjE-bScpxadsyfwXM=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfcYNtT3DhDTpXHQ4a6DDLY99OOoJh27ABbesR2qJT3QgylkeWYUIOJUkj2YIMSfrq6q5Ie3z0k9n_KNZIQQ4gvNdbjcJj0KjlWEFsOMUj4_s630PM=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "mexico-mazateca",
		description:
			"The washed process coffees coming out of Mexico are getting more and more varied and delicious. In this one: a tasty mix of cherry and citrus flavors.",
	},
	{
		name: "Amersterdam",
		brand: "Joe",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHc0CyQ31krReAMRwCuzY83jvF3K6TUUnVesvg7reb5LvsTdg1LCObSj0XyX76QiB4ouMfkQSlqnNJiC60eZJQUeBSGKvf-RQJg11fN7cr1u3ii52W8=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcxz1_k2qBa8uo9CmKTO0-lvobPlobJyuORYzxCLHhaMaIUibyYO4G9M6HuOsWvD54SDhXhEOkS0QTreGXjrlrKxeePWpW0kPGEjtJUb9FDASLaThY=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "amersterdam",
		description:
			"Rich, sweet, smooth - this comforting cup reminds us of chocolaty fudge with a toffee swirl. Perfect on its own or with a splash of your favorite milk, we're pretty sure you'll love this one.",
	},
	{
		name: "Great Heights",
		brand: "Joe",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHeHLKBNN8GMpgTBfsM1EEJ6-OsbQirXaXwK89AiRCLuPBLgteVpHkf6lYT7y89EuOGA48rEHdNYfjIEBnLUVBG3B0k0QyS0W5xyi6Y9_uBhyUNiilM=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcewnN5rwv8lX4TNroxxJ29XIO31f3dV6pm5_FzyuwkrahOmYFRR13d8rXkUq494yrQ6iqJc8vjamH4Uw3zekpF1p2FK08tzKjb0VcWmRHDcYTSoAQ=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "great-heights",
		description:
			"Dark chocolate and peanut butter flavors always work well together. You'll find those flavors and more in this big-bodied, gently roasty treat.",
	},
	{
		name: "The Village",
		brand: "Joe",
		country: "Congo",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdwpNSAOgHMJHkX2993AquJKmtYhq4HSiXcfMx2q1JXYm6X26fjB_xhjHdWbGXs9PDOSQsC2uAisO4ZD9vDy-dfSEDxbfp7bsJnzyB8peSB3ZYkouc=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcPahz5cfADyX6-cDVM6k4qjXZtyrw36ZH8Iwb8HMegHRVCfMiLClOxS3yk-_CGLh_rj2MTnlckfi5JYt8H9JpvqKIDZv46Vq-8360NEGyP5GPStMQ=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "the-village",
		description:
			"Composed of seasonally-rotating coffees from female producers and cooperatives, the newest version of The Village comes from the women of the smallholder farms in the Kalehe region of the Congo. It balances gentle notes of Earl Grey tea with a sturdy body and brown sugar sweetness.",
	},
	{
		name: "Crazy Goat",
		brand: "Klatch",
		country: "Various",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfkrIeH7NhWTeIhhI5RNIXQKarMbeYTbGwv1i1av9MGU8SzpLma8sM_ySxU1XL99cqFYUDrCARS6Vj1jQoaN3fumDr_dhxs5dIgnoGTcdYi79B0iNA=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfUxCmzYm2pAH_0eBLq7bNaoIFXIgY378rJ-KtY4CcokeMSemYvj3MCc74fVkMMoifZYV9iZ7SyjWYc8NKHxAH41uty5ZYcGk662JMM3VxLI-pprIw=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$23.50",
		webAddress: "crazy-goat",
		description:
			"High on a hill with a lonely goatherd...sums up the tale behind this complex blend that keeps things balanced but isn’t afraid to get a little crazy.",
	},
	{
		name: "Dark Thunder",
		brand: "Klatch",
		country: "Indonesia",
		region: "Asia",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfGZj33bGETvSUV244wS3q18Akm-gAfF4yxZZu_Sd9otgtoMDkGRzlRZTnW1_J8M7ziIluEwBDYepy1SzeQm_8I5OzeCLezjjFOX_hxVMQLd8XVNPw=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfUbb3XFC8cvwCaD-HOQrbkuwRXypM8EYGQ10HE8cUZSi5KLsZTQ3L8RIKlB4bsXsZAAMtQF2nFtOjSqpiqkPrPVCfrCauCHEaFny-mlqVZGO3pchQ=w1920-h1080",
		],
		roast: ROAST.DARK,
		price: "$18.50",
		webAddress: "dark-thunder",
		description:
			"There's a storm a-brewin', and so are we: a fresh pot of this rich, deep, smoky-sweet blend. Bold and full-bodied, this one will weather anything you add to it.",
	},
	{
		name: "Old World Venezia",
		brand: "Klatch",
		country: "El Salvador",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHefUD48x4ps2_N5xradqkPNFlNVJVO5VMBsTnJx2N7zmIog4VYsV9fVHVKqHsYUllDvTqnOSu7_kPvCRSv2J4v3QIPPEOWp4O-nKzftDqrCkcrI-tU=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdfnGAAcs9Nlha0rw-z1SqPEo3UWYnciZo4h6bLaMmo5Lxg6BbA-DJDGS6y-WkPFitmmdLjbJXpY13CaLv6HGHSOqKy1RjJddi0k8jY9RH-IoPWApM=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "old-world-venezia",
		description:
			"Rich, robust, and nostalgic: this full-bodied cup's hints of spice and dark chocolate invoke an old-world romance.",
	},
	{
		name: "Bella Vista",
		brand: "Mother Tongue",
		country: "Mexico",
		region: "North America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfW0Dz-4H9vcBmStVDeGOS-_FeMuBCnaOt7mGuvySkfaAfWPdB9J--z4hOtYv6-y91r_v-s7ETLYh31uYypbJmIZEUrDbbQ9FzprIPGM3OOEoh16NM=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHea9V5urD-alSxqTooVMA40OKs9Y57qoHnNokv1c_nOCbKkrKkMmj7RJizcJHn9tWD7Qy_eE-knZiNIssyshj7UzC5Wao3dpRmZLMjEECR_FRcjm-E=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "bella-vista",
		description:
			"Lingering chocolaty-hazelnut sweetness defines this comforting Mexican cup, with notes of dried fruit highlighting all that candy bar goodness.",
	},
	{
		name: "Bunum Wo Estate Peaberry",
		brand: "Mother Tongue",
		country: "Papua New Guinea",
		region: "Asia",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdUmB7yGc26PJ6fcdP8wWS3EvZ2p5YYGyMzr1kxEN_AbQQfbYCPEu3wHrdEWfTNj0FjHAS2kIl2tOLSSyx9x6ceSn5C-k5sYTHz0tq12kNwc7kZNB4=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHegDN6ALeM3JR35JqPst0t-xOojDjf9lSXmNLSXrZySP8Z_Z4ngQ8zDr4EgHfS6wjtSM5wRhmz96lJ9WhrIzugbsKD2Cbr6VXb_A28ax8TfolwjJtw=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "bunum-wo-estate-peaberry",
		description:
			"Deliciously sweet and unique, this Indonesian coffee features sweet tobacco aromatics with hints of toasted hazelnuts and a touch of juicy cherry notes.",
	},
	{
		name: "Nebula",
		brand: "Mother Tongue",
		country: "Costa Rica",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfFlUnqS3BhxcCyJEYGB4w_OH1ce4NyCVsxppcUrKajoreiN838wzcAlowioaEpWKNfy5amwjTtwdgwnLbSOnvR81EskcEnw3q5F4idSCJwL1HLSEg=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcd9ba5nsO2gJH7T5qcwvotvailiep8EZF_yGOBgngLqYj9ca7nXWjSo5hF3X1Jn2GWTkAojxaR7Vk8c_LTqlFzjWjZZ9hPoS1C0ES8LCZJroXPYvs=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$18.50",
		webAddress: "nebula",
		description:
			"Super honey-sweet and full-bodied, this comforting cup's rich chocolaty notes and hint of roast will satisfy any sweet tooth.",
	},
	{
		name: "Yummy Decaf",
		brand: "Mother Tongue",
		country: "Peru",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfCosfbujEhTf-6ZrB2z3Ipf-WcNwnTVajq10QLLNfH9rC-ub7rKMZKwDcDHvsIKigBowmMhDOW9hGZDkC-k9sqCSmk6-78ckpgdibTH8fzypfv5aw=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHe37HrBFyOYoOnBNkUY22Rk1FJn9TDzheQVu3ZQVyMIJIn1Mr-a42PSxEHffGPg0VC02m737vkkzPQHQaoXu0Rl_WilJ2YBD93l-EXbBn4NTy6cVcQ=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "yummy-decaf",
		description:
			"This decaf's pleasant brown sugar sweetness is the perfect accompaniment to juicy orange acidity and notes of fresh stone fruit.",
	},
	{
		name: "Beowulf Blend",
		brand: "Oren's",
		country: "Kenya",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfQO6juiT9FI7-bDWjWtdTIqDBcVIBpz-RLKdjhBdieAM9hJHs_Fmnq0he3bV3nx-KKMFCB56ZCoDLCN0AItGmzN-qs5X_Yk5p3Ik0ndlgSU7sic34=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfRg4Jep6EHhY5z4Sy5dbBK0fIIFYeYuyQ7Q483rzJTrn9rOIWSjCebPiyZy-7dFT7qLb24yD_3O6pG1tTcTO9CGbklR2BganRnbR3N67eM0LWLIYw=w1920-h1080",
		],
		roast: ROAST.EXTRA_DARK,
		price: "$23.50",
		webAddress: "beowolf-blend",
		description:
			"Intensely chocolaty and surprisingly sweet. This full-bodied cup is bold enough to help you slay any monster that gets in your way.",
	},
	{
		name: "City Blend",
		brand: "Oren's",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHda34YSA-Joyb98ozEjEgEf2-gpAhh62sM86BKY_Nqz12LCJ4bHoDk8-YmQuN5AYtsMMETgy-po_LG9ehT8xFuFW0UtsxaGDpJuPME60cqEVpVFNSM=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcPWLyG78EukstNTqhQDLKT3ypq86HmvqIOeVhDHWhMcpyKcBnyU5B4dMqUESlklTFF1eBUY31TuEbi2iLWQqJcR4tBjM2HhA2_VIkko012-AOhNsc=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$18.50",
		webAddress: "city-blend",
		description:
			"Sweet balance found in soft citrus acidity and toffee sweetness. So smooth and poetic, we had to write a haiku.",
	},
	{
		name: "Colombian",
		brand: "Oren's",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHeoicOfuEedXp3_c4pmrEe6UsocCGX2PSoNjEF7rs7ejTq55FSA0vvKuBjf-DI0obnKUM0SIZx_Ys4vxZHKylfS5WyuXG_cWeb2pjOwMXqpPYYo5gM=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfv12WQ_8ZDA6bVKd23jPu8pKsxnCX8A18kE7FUYfTWga2a2_C-xVYFgNmcprySKmmtqZqOKHV6ZFFmQyUyVg_39e_La6NkPk7Gtpq311HvjxXGuqc=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "colombian",
		description:
			"Smooth and clean, with a crisp green apple acidity and herbaceous notes of pine. Its full body carries a deep fruit sweetness that lingers until the last sip.",
	},
	{
		name: "Costa Rica La Minita",
		brand: "Oren's",
		country: "Costa Rica",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHeTkEqFyOV1LLOmxFtwCu4CyleOqE1DsHvz3FLB1gYzn5uZbuUdYHAAbDZjYz2TjwEfcY-b-Rc2864odflunpilTrOHAUc0OA9nMJ1fVdwNC-SqNe4=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdoPmQZ2wXqSgbit8jmGJouVtXki6myZG1ESti7ZsAJSuC2wHehSxGEncpJJU0tWWzHhlPyQJ-KZNDWsbRbJnzvaySKCBzkP8eEGZMAZK_5mHqDdqc=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "costa-rica-la-minita",
		description:
			"Full-bodied and easy-drinking, this coffee's notes of milk chocolate work in harmony with a plum and honey sweetness to make a cup of coffee that anyone can enjoy.",
	},
	{
		name: "Italian Roast",
		brand: "Oren's",
		country: "Guatemala",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdBa94_w0hYa3eYOMjsKi3b8Z6cZ92A5szK2EGNr727bKDRxskDO0s-2aMEN0M0RJ05Be3C1p7yZob5fZ-m2hPm4_xABN05lAuDSsygMkK6GAjuaGg=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfBrbWVCgVzSkZ0qK1Tjkj0QKlYvglcjJUKpaOCz9csO7G85-x_g0G8YLApfpkpTr77wWZ0gsH7Z9fm0j_mbfsT6pX8XfTc2x6qWKBq1Bl42WIesic=w1920-h1080",
		],
		roast: ROAST.EXTRA_DARK,
		price: "$23.50",
		webAddress: "italian-roast",
		description:
			"This bold cup gives you all the deep, dark roastiness you want, while keeping everything sweet and pleasant with flavors of chocolate and raisin.",
	},
	{
		name: "Oren's Special Blend",
		brand: "Oren's",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcYCu001UfutkWdylVURmgcQ5C0XP4Gt5FpjNunROarqqrvhQY5JzHEJDQyp4IrUEGpk4R0o80DwekRIP--RnvT1OMLMRNXOBBxH7Uus8MBAlcHN6I=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHe-P2fJH8sUDl7FsBtcrAza1guNy2_CUCaRKaOpugEiisSTXJOQct4-qy5xts4YCLqZCI39-uX1idmbt2RzGoXWF4Hczq_xG2OrYczKYefQO_Ov8wE=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$18.50",
		webAddress: "orens-special-blend",
		description:
			"Comforting and rich, with a full body and a deep molasses sweetness. Notes of milk chocolate and dried plum stand out in this supremely cozy cup.",
	},
	{
		name: "East Coast",
		brand: "Panther",
		country: "Brazil",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdZGIUtkzlfeyRVi7Rw-GVtbhAzi51M_3OUp80nWW2Ca1vn2zMBAvtM151AFeLfJ-5rk_kr_0Y1Dlhg1KkKkstzmAr7DwS1xFv8xLgn-IqZ80jGbVA=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHe2zlAoADpfEFw1PZlsENu5J4Id-LPmFFy8AhTGyZ7MDO-_FvYuuDlCIjvTlaaNam3fxEhHnknJo8ULZi1_TAZq1xSXuhhsZB5noZiYyVlc31vAxMw=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "east-coast",
		description:
			"Cream rises to the top of an espresso blend as multifaceted as its eponymous coast. Sweet, yet serious. Confident, yet comforting.",
	},
	{
		name: "Finca La Amistad",
		brand: "Panther",
		country: "Nicaragua",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcivcgTHzJu8Z11wyWLz-IFeSX-zlHNUkw9XoI7ZhAtEgX5_TEwDM6f5CZtym7XE-EXRjsPkpu6dWD454G0_aqa3ks-LejbSraADmiuTGe3QPiWYnE=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHeroHUX9I1HCT2oa6hUhO1kfrKW78cMfxhURW4ppZsi5AYjGneiUdcQNhDRcDREW1mjMJefyHccRhbC_RrX4lCbyrbNDcNIfpStUymyvoJonRJEggc=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "finca-la-amistad",
		description:
			"Five years into their relationship with the Valle family in Nicaragua, Panther's Finca La Amistad keeps getting more and more delicious. It's a smooth, everyday cup with tons of caramel notes and a bit of apple to boot.",
	},
	{
		name: "Isreal Salazar",
		brand: "Panther",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHc8pZa-z1d7XbI__MMVPh762g-_frjALmfgWX43C8wVHfAZwcVVvLlvnrnoivuDjFvkjZdH1NKkpenOVE-h-54fqmpnnwz2n8j3OZV1N32RkFwLxO0=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcMIoYXpTIi6aOb6hx65aCJFA_O4gTa5KOH2-tZ9TWkVUk1Ew4lH_p86lsb7Mfi1CoEw34sqWUVVgGaLkv_SlT_i8rPYPr1t8xfky9bTdCdyF_DfGY=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "isreal-salazar",
		description:
			"Huge, juicy acidity is the highlight in this exciting coffee from high above the mountains of Cauca in Colombia. We taste big flavors of citrus with a little bit of raisin to boot–a unique and tasty combination.",
	},
	{
		name: "Mejor",
		brand: "Panther",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcYEwcBVvCy3DdGoCpiiUNDnsWghWFAv6-twUnImC_QIXMuUG-damRpQDjAPH4DiHkWoFFUIItAS2yAG4HzY67pvo_82YUaRcN-bVCwC5yAfBnZic8=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcPYleueDymYA5uXy7400B-1wDZpAZtxItvNPNUiiaiHOeYQURyqAP-JtkeSHi-RvpE98AsEF1STMXW5aTZX1g__e-x_qiU41IODUxnsl8TJHRKCms=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "mejor",
		description:
			"Fruity and sweet, with a juicy note of cherry bolstered by a deep, nutty sweetness.",
	},
	{
		name: "Rayos Del Sol",
		brand: "Panther",
		country: "Peru",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHetql7q3kYapoO16P90B4IwgwKQzUuO31lsL42qJGeeItPV9uZOAqTWH6j7hsqCRinuaBcfcLPnA3wIvZDq4pWZrpZ1jHdDck_3CWmnwLuTKphpXDI=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcvW5ieciudc0STiAiNBujmgLLVIbDDC3IBiAl5K6ggLVvYiGezeRaKStMmFpDk8pa7egmhpUiGBVQYC_COeeJodU6akqCp2F5E0v78kFDX5LQPqck=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "rayos-del-sol",
		description:
			"Notes of apricot and juicy mango up front give way to a pervasive sweetness with notes of smooth milk chocolate, fragrant vanilla, and rich caramel.",
	},
	{
		name: "West Coast",
		brand: "Panther",
		country: "Ethiopia",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdiO22c6O_YvwEgevRQyV8feRro_MFvackHSnutBik2ls_i3Ejzs4HZngsheJKM6Rj6xZG8qjgK_ToumvzoRr5DpnyhgtXcFPUy8fa9i2AD39yVD3g=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHejXpo9FGr8P4FI_Ovr_eZjTq5e97QyHo2Q0N4eAXlRQwEdcphbJNJJTkxp1H3vBeJhioRAQgc3XFje77-dFXZRQ6cJS2gPxb7w7cgLmCqDvrMBWdU=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "west-coast",
		description:
			"Light, bright and carefree, an espresso blend with an airy sweetness and weightless body (much like the ones in Malibu).",
	},
	{
		name: "4 & 20 French Roast",
		brand: "Red Rooster",
		country: "Nicaragua",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHeq0D5kMizegwHXpfGV_Gjgd8vUHLQVUZgcsOA4g0_qajoIuiGsmZiidJNSrHC_xVXqEghH0RTAk9V5URSTiZDa696uEqkzXfSXRZn754e5J1f2jDo=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHc0_RLcG5jly8RdvuiVNlvmlEGsgSNEDBbvGrBfz-ehIiDMSV5sSeVBojjcrFH3gigkA_TWiVkEP4YHcoto9xHP2uCzrBkAT9aFhEu0bgWz3PMau6Q=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$18.50",
		webAddress: "4-20-french-roast",
		description:
			"No blackbirds here, but you'll find plenty of cinnamon sweetness and rich smokiness baked into this full-bodied cup.",
	},
	{
		name: "Bolivia Aprocafe",
		brand: "Red Rooster",
		country: "Bolivia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHciFXETPG6qfKnAM_i1H53CjzLjVgaMypQs_4vBK-CdA4BeEqeksYsfeKSiow9trYBkesqgmS4qM1Be0lH62qFa_2UmrFFV3t0gq8SYzNi42eGO1GM=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHff1V0jfRPbS-0WAWlspLWopQxp1a-nQQC6FqbmfENuGymDTafUrqTV_vPQVwdHxDWlLXc21tghlPvotmpqDarkGPuddrvHgnAuVHAOE4ftqi7129U=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "bolivia-aprocafe",
		description:
			"Lovers of coffees with a huge, smooth body: can we interest you in a Bolivia with tons of chocolate flavor a little accent of cherry?",
	},
	{
		name: "El Salvador Finca Hungria",
		brand: "Red Rooster",
		country: "El Salvador",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHdtrV1XT5lWCzq3a40gb-l-4f7MOeK4i2JTysnaVvQ4cjns36FjhKY3kadK1Q2fiQZPbHahWdGlc7E4tB1Q7jh6V3eKGAj-LhNFAJ0DSqOeAD31_SU=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHe3NjYe5yfpvSrVPHVsg-whw8m44AuNH3kcunKYDtm_4kiFm8yHfy07DpyFsZBTfeBn0rdTC0XdgC8U7bmTfTyVi3MMGgkipBaW8YY-1Q0vZY-gBPw=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "el-salcador-finca-hungria",
		description:
			"A sweet, smooth cup, featuring a rich chocolaty body and a honeycomb sweetness. Prepare for maximum coziness.",
	},
	{
		name: "Farmhouse Breakfast Blend",
		brand: "Red Rooster",
		country: "Honduras",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHeckCR4mF_NXOky7GWOqPZHnUZ0YsBegjz9kGF3lwKGqYgpMi_WoHdiL55ArRY-mwtmrNNkOu5LEcbk2HEShMmsIoyR9Oi68M6IBLoifCTnTKtSR4g=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfRkR0JMc7UTV_-n49isItodR3RjQNtYHiMnEvu9qOX9PKTIAWSdFFiEJuqQhzOiathphWL2bB5nzTUpYGm37FhpaAOwiPTFQMweoHwF2n15yH7pfc=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$18.50",
		webAddress: "farmhouse-breakfast-blend",
		description:
			"Caramel sweetness stars in this tremendously drinkable blend, brightened by a meyer lemon acidity and a nutty-sweet finish.",
	},
	{
		name: "Funky Chicken",
		brand: "Red Rooster",
		country: "East Timor",
		region: "Asia",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHc1bRJHzwdhpAQvZMj82MRupvOK9LRQdbKvYlAWoiawONh5ByIG-dTj6Nwyg_ss77UucqU4VP3ROjuM0Tj5X8E5SIx11TnmGtOkmHgyvVwErq-_fZQ=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfkufKO0alXeLgLaqcZqzzRaexPkMagppDoBH_EVDYSIVflaUR0mjOZ-BAj9YMtP-DNe6NgP1FFUU0El-8rzRMjD2-PVKt01oow1fuBr-_JMCOvLoM=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "funky-chicken",
		description:
			"Don't be surprised if you flap your arms and your feet start kickin' – this balanced blend brings together gently earthy flavors with notes of stonefruit and sugary sweetness.",
	},
	{
		name: "Honduras COSMA",
		brand: "Red Rooster",
		country: "Honduras",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHcEkk0Dd3OEHyNe2pCigbuMVQ5_1h78cb0O1NxsQfV5195UMZcxxsVIC_drNPhKlLnxU4LZY6GqbaQxXly7n7Pzl6ukYwyiHBVOQXWfHypzk5NbZKc=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHed86GsbnbcqyFH45WMOEO4w6YXlBLm5j6VogwVFFMV4CAsprP0CZiX9t9DObOCj_ayw2Mhljt3klhBGJVcKSPmtNscXavilaTKXCyQf_-Iqx_uhiw=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "honduras-cosma",
		description:
			"This bold, sweet cup, produced by a women's co-op, offers up a comforting walnutty sweetness among notes of smooth dark chocolate.",
	},
	{
		name: "Old Crow Cuppa Joe",
		brand: "Red Rooster",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHe0OBqXWYmToa1MEZ1lb25FGtd0thJTbGyhNt7wIf4oyPDjnhbE9eRmdsWyYfVoWNKwa9pERYVmkY4PTJC_zavtt8pM41Fs2POpgkHjL7wEzpBlbN0=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHd8b0SFtwbfgmUhA8e51gg6MgYVjzEK1ZGIYSTbZ2-0HDwSt6m2PeYS_b0ipyvJHuYuzRIpQNI3_5VtVuNx43BegaAcBveuXHJGRht8tgvZm9S8o7A=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$18.50",
		webAddress: "old-crow-cuppa-joe",
		description:
			"Rich, chocolaty, and very berry sweet - this full bodied blend offers a little bit of something for everyone to enjoy.",
	},
	{
		name: "Star Hill Stout Blend",
		brand: "Red Rooster",
		country: "East Timor",
		region: "Asia",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHeALorUo_O1yzCZQ6OBhmLXsAhDZ6dUFpzb30ShXJ2U2UhcAN5xRdMLVN-Oh3oDXj5AcoU3lFd-WWeV-QkQx_1Y4XQ2L59c1t5SxwiHecWBtY8CMs8=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHcurzVePehEBNcjs_rKg3mqNH-5-fnwGXAeS2fGy7EQrLYFj1Sqyf-La9M7OKyGhr_9CrVLQky05f3ky8k5EF1BGjjxyy6sX4jl0H9XH6buJTffTOk=w1920-h1080",
		],
		roast: ROAST.MEDIUM_DARK,
		price: "$23.50",
		webAddress: "star-hill-stout-blend",
		description:
			"Sweet, rich, and creamy as a cozy cup of hot cocoa, this coffee features a hint of roast that'd stand up nicely to a splash of milk.",
	},
	{
		name: "Waxwing",
		brand: "Red Rooster",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHf10WHC8cs_gvNubQRE1mwGg7CwIpbfzjejX3kHcoKncGQCSzkPUCVlSwQdfhLCLiCKrvChGs089qyJllXHbWw6MMq_Z4tI2R6fXl3XvItkmBPjV8Q=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHf9lf9uHfPDctCXO9kySenWAEF_GYcSdGyAwiW9opva11rYvdmZmBMJaHWULWgcBJ18Z6Vp5pFOvak-w6sQjRKKM1S-OuQoh5Hf1hDNCr2Kpjnl1zg=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$18.50",
		webAddress: "waxwing",
		description:
			"Earthy depth meets a juicy berry sweetness in a rich, chocolaty body - this blend is ready to be the wind beneath your wings.",
	},
	{
		name: "Hellacious",
		brand: "Sightseer",
		country: "Guatemala",
		region: "Central America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHfzHV_6RRrfgfa6zjYHKzHUIob7eTAXSR-AMKKx1QRODUY0Ti_f2iFYqaCYseYSfqFHpG5vDAtuR_dUz-mzS2CoTDylxhfh75Splwz88MUxkv2EBJk=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfmHc0V10WSPeQ1NAlbpi2AzWCB6HppXNm6aUrw55b1AAqj6CEEAnrzv3f21E4fSMncUVxi2yLBSw8ftgBZKCpyNEFYASR1lmGOWUT7FOJoBylPirs=w1920-h1080",
		],
		roast: ROAST.MEDIUM,
		price: "$23.50",
		webAddress: "hellacious",
		description:
			"Hellacious has plenty of the deep chocolate and brown sugar sweetness you expect from a specialty espresso blend, and it throws in a smidge of fun acidity to make those cappuccinos really sing.",
	},
	{
		name: "Las Viudas",
		brand: "Sightseer",
		country: "Colombia",
		region: "South America",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHf_HDUjVvdFrNeAFy7UwPs0MkXXiIDIbCKieJ9hTsqJjyWa2e3e2AOMeHi-Bp2rv03ETu2sqOEEchBE66crfHNg1cjCOrGnCku3WxYvh1g1ia_4hM4=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHdKGZfdOG-BmNdKwDG76QJlfdfP2yS-n81s3bk-M0Oq7YaXkZJp4bUw6FXFrt_CMWa1jEcdWM3NXTbDtKtFejvYSy3ZPnr4T_lTeg8oEtirzoGm7PY=w1920-h1080",
		],
		roast: ROAST.LIGHT_MEDIUM,
		price: "$23.50",
		webAddress: "las-viudas",
		description:
			"This Colombian stunner mixes bright citrus flavors with a sticky dried fruit sweetness. It's sourced exclusively from women producers in Huila, Colombia.",
	},
	{
		name: "Space Cowboy",
		brand: "Sightseer",
		country: "Ethiopia",
		region: "Africa",
		image: [
			"https://lh3.googleusercontent.com/pw/ADCreHeeFVuqgt_43SDAHZz4_Ky2ppJKxGLcvvIsUE7Hx68bzpzkPTwK72m0X8CEdXR5B72JBpDBQwfh1kdAO6PAsz1eLZAfG087c5siRNKtS7pKHMzJBFA=w1920-h1080",
			"https://lh3.googleusercontent.com/pw/ADCreHfzhgmp13nAyP3ceuJOVoDhoiZMXsGpI6qmZr19ZQ4q5PPLTlfYxtjHFhXeBUAb69f0JYNEopnDs1u2rExPYZlyD8clNFHGThTApA9ZLP1DhW9QKPw=w1920-h1080",
		],
		roast: ROAST.LIGHT,
		price: "$23.50",
		webAddress: "space-cowboy",
		description:
			"Blast off with this delightfully soft and fruity coffee sourced from Mrs. Zenebech Ageze's small farm in the famous Yirgacheffe region of Ethiopia.",
	},
];
