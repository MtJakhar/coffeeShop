const brands = [
  {
    name: "Airship",
    description: "Love the smell of coffee? Airship is right there with you! Mark Bray’s Northwest Arkansas roaster seeks peak aroma in every coffee for an enticing and invigorating fragrance. In partnering with a local culinary center, it’s spreading that delightfully pungent message throughout the region.",
    address:"Bentonville, AR",
    webAddress: "airship-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHcxyIL_p1Dttnw6kVi2zijBL2-OygNyA-8OI81Ldw2kCL9ZaijgVGB-dSwYzWe8yWi0vQCyp0XeWJX2fOC_GQpGELETPrDde3BzDM8Ik6iPzDdcou0=w2400"
  },
  {
    name: "Atomic",
    description: "Atomic is on a mission to spread positive energy. Led by brothers Spencer and Logan Mahoney, this second-generation family business uses coffee as a catalyst for inspiring community, relationships, and adventures.",
    address: "Peabody, MA",
    webAddress: "atomic-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHf0oHlMP-1JMJVNjRJBJwTnf3efFx-jEcWCU0uSDv2xGi0NOTNUmNYQHOHWNeVdU-BKF5aWzcdVRzlBcCrrMopuhbbJUmUNjFuZ7uC0zuW3aPoSzNs=w2400"
  },
  {
    name: "Bean & Bean",
    description: "Amidst the 2008 economic crisis, Bean & Bean Coffee Roasters opened shop at Rector and Broadway in Manhattan’s financial epicenter. Fourteen years and four locations later, this mother-daughter team is driven by a clear commitment to gender equity — with over half the coffee they source female-powered and all of it cupped and curated by founders and Q Graders Rachel and Jiyoon Han.",
    address: "New York, NY",
    webAddress: "bean-and-bean-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHf1vbDFkh5lrv0yJYjCl9rqN9HDElILO-NChON2mOtYviSqiFqKhgO-dpWCKvPcXfRcnDlVipxLxzSNjq_orkj7jaP4QbcoFFWqBbVqMYJlNORU49o=w2400"
  },
  {
    name: "Bird Rock",
    description: "To be the best, you have to work with the best. Roast Magazine’s 2012 Micro Roaster of the Year, Bird Rock is truly farm-to-cup. Since 2006, this San Diego roaster not only sources from top-tier growers, but takes pride in fostering true collaboration, building long-term relationships, and showcasing its partners.",
    address: "San Diego, CA",
    webAddress: "bird-rock-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHdIL71c-NhGKYxE4ssTylxTnnr65V_nh9laO6eQYnZedJL2YcUbgcQrmyvFD_fB_kO_DniXNPQ6lTkUlm6ODI8EcB5yyafTQa10Q-RTKweK5MeIDcg=w2400"
  },
  {
    name: "Common Voice",
    description: "Common Voice Coffee Co’s actions speak volumes. This Nashville roaster brings accessible coffee to its community and helps support farmers by purchasing more than just their highest scoring lots. Paying an additional five percent above the cost of green coffee, Common Voice invests back into the land and reinforces its goal of making a difference for the earth.",
    address: "Nashville, TN",
    webAddress: "common-voice-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHeSaAtwsnYW5dTkQoS1iNr53tXoai-LQl481ekUEM8mIcLnb-4Xx24ybj8YvYRfEPnPHo2OX34KPp2KG_Ru35rhwW7cibVcNc0QXYrIi9srrCye-_k=w2400"
  },
  {
    name: "Cuvee",
    description: "Cuvée brings big Lone Star flavor to its coffee while embracing the simplicity of its Texas landscape. Founded in 1998, US Navy Veteran Mike McKim’s roastery is one of the oldest in the state, but it stands ahead of the pack with a drive and spirit for experimentation that comes through in its innovative nitro cold brew canning facility.",
    address: "Austin, TX",
    webAddress: "cuvee-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHdzbiPBOL82URDe1gJrIPigKXbRS8k8L9rV2SbVdFo2Tc1TgdBsURONg30tQJiQt-9AsGexiIIsyHzDfa56iwflmtGFhRPXehpYd0FPlOQCb0AMkZI=w2400"
  },
  {
    name: "Dune",
    description: "Though Dune travels the world creating strong relationships with farmers, its heart remains in Santa Barbara. Married co-founders Julia Mayer and Todd Stewart have a driving passion for sharing great coffee with its community and are equally committed to its partnerships across the entire supply chain.",
    address: "Santa Barbara, CA",
    webAddress: "dune-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHdqz1oRp_BVQpTayxlmsBoejmx3WUkF588l9U7ZKqrzkbWqapb6_-tJmhAT38DMv0oziXR2bB3q2BC_r6vXIsuKrDkKHJxzG85QLWRf8m8c6tpn15Q=w2400"
  },
  {
    name: "Equator",
    description: "In 1995, when partners Brooke McDonnell, Maureen McHugh, and Helen Russell began roasting coffee from a garage, they set out to build a high-impact company focused on quality, sustainability, and social responsibility. As a Certified B Corporation, Equator supports quality of life initiatives in coffee-growing regions, including its founding of Panama’s Finca Sophia farm and partnering with World Bicycle Relief.",
    address: "San Rafael, CA",
    webAddress: "equator-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHeLTXyzy8BW6MSZEPprbMkOrfM8d2wCjYliDHnPHoRblZWeCRAevJi-2eVNIK0WjQEROjlznmmqrQ4e_V82HU-e_LGzsipE1QSIWum1F94_ihhEZPE=w2400"
  },
  {
    name: "Feast",
    description: "Like a big, welcoming meal, Feast Coffee & Culture is a celebration of coffee in all its variety. This craft-driven roaster was founded in 2016 when it was dreamt up around a table on Washington’s Bainbridge Island. Serving the community of Redding, California, Feast thrives on engaging with and cultivating local culture through popular food gatherings and welcoming conversation.",
    address: "Redding, CA",
    webAddress: "feast-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHctYLwmMfJEw0g57UMSDa2OMlAerIdAWPH8jf1Amf1mK6fwvAMVrqihk7AVkisNiDOQk_MGOscwo0l-WFC7eu9t1h9WdUK-6TSB8Xydp2Dpzw_94WU=w2400"
  },
  {
    name: "Greater Goods",
    description: "While Greater Goods Coffee Co. travels the globe sourcing its unique single origins and laid-back blends, this Austin roaster’s heart is in Texas. Founded in 2015 with the determination to please every palate, Trey Cobb and Khanh Trang’s team has since been named the state’s best coffee by Food & Wine. This roaster represents with more than just great coffee by partnering with local charitable organizations to give back with every bag.",
    address: "Austin, TX",
    webAddress: "greater-goods-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHeRbJKi6wDY_YosaVEIBQa1u2yyIKFloL5GAdOw_JXlDGSZi7pg5KYtByi4ZybuUCvB0kAn1_RaG5dlBkgU36za133Ltu2ploNA3w0Q_HJ_X7isstc=w2400"
  },
  {
    name: "High Wire",
    description: "Walking a high-wire takes balance, and that’s what Rich Avella, Eric Hashimoto, and Robert Myers’s brainchild is all about. Founded in 2011, Oakland’s Highwire is not only intensely focused on detail and experimenting with roast levels, it’s also incredibly committed to education and fostering the next generation of roasters.",
    address: "Oakland, CA",
    webAddress: "high-wire-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHdehZhc9t-SjtSa3gxCWWeH0wSM_PVzBDMe1ijJO0oIZC_-Wqbb1ZspovBfWJp5KuaQpeivtpSw9x7n5J1NtdBUnAzk4uPfNctZDpThjTexb9D4FR8=w2400"
  },
  {
    name: "Huckleberry",
    description: "Huckleberry is all about people (well, coffee people). Founded in 2011 by friends Koan Goedman and Mark Mann in a backyard garage adjacent to a chicken coop, this Denver-based roaster has grown into a complex global network, turning out some equally complex flavors.",
    address: "Denver, CO",
    webAddress: "huckleberry-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHeGSpQGXvGdnrFh2T6x-HnUlCXve5s5vcBJMRj0TBGbUpl0cjG-sirbNjB1dO9PnAx2Jj_4Fd9WjLRLb0NjFjS7vF0PpiC1pHH_p_Pzc8J10XT42gs=w2400"
  },
  {
    name: "Joe",
    description: "Founded in 2003 in New York’s West Village, Joe Coffee helped pioneer the city’s third-wave movement. As it has grown, Joe’s shops remain welcoming gathering places for the community, while principles of quality, integrity, collaboration, and ethics come through in everything it does.",
    address: "New York, NY",
    webAddress: "joe-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHdBLvo_ZBNcU-COboor0xmLLkVXl_paWT1biRz_GyRmJ5jvCTSzDljr2a_VI2eGJctI-GjWOP66ea3bXVSd77FHd7_QL_p7UMFX7aLp0MAL04M02t8=w2400"
  },
  {
    name: "Klatch",
    description: "Coffee is in the Perry family’s blood. The team behind Klatch has been bringing their flavorful coffee to SoCal since 1993. But there’s more than just innate knowledge – thanks to roastmaster and green buyer Mike Perry’s chemical engineering degree, real science goes into this team’s award-winning coffee.",
    address: "Rancho Cucamonga, CA",
    webAddress: "klatch-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHcgim0xKbBV0WX2g_C30qmzQzTsMlQQ1j7b7Hb_9mtecTA0I-k7AThMw9NjKarP2sHyNafIVUKk_3V_V_H04TlbclpmpSVtFL7akm4MGtyEjD0K9FI=w2400"
  },
  {
    name: "Mother Tongue",
    description: "After roasting for coffee’s biggest names and winning the US Cup Tasters Championship, Jen Apodaca set out to launch Mother Tongue Coffee in 2019. With an equal emphasis on how coffee tastes and how it makes you feel, the Oakland, California-based roaster builds relationships based on mutual values of creating sustainable communities near and far, paying better-than-fair prices to producers and connecting with the Bay Area through its work with public radio and local food banks.",
    address: "Oakland, CA",
    webAddress: "mother-tongue-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHedUiHaJhxnqvzN91UMRtgzeQ60jJk04rU0Es7lCwvsHNax9_OnX4ZMlAP1zGXcBiI68d8Qt4XQATnv5i0BRZK1wD-9kMDOiNLRb1_26_0Ac_r7HAY=w2400"
  },
  {
    name: "Oren's",
    description: "Discovering his love for coffee while frequenting a small NYC shop, Oren Bloostein left his corporate job to found Orens Coffee in 1986. The Long Island native had a hands-on approach from the start, including roasting on site — a rarity at the time — and manning the growing café. Today, this New York institution is known for the highest standards for freshness and sourcing through its Oren’s at Origin program.",
    address: "New York, NY",
    webAddress: "orens-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHc5B6oIMPfpiJ_HdllngRfbj_LaxL0tWINhm5UNFDCNyocDOTyVvbqD_GcG-WQgu75_peiLfGwEu-xDbrIG"
  },
  {
    name: "Panther",
    description: "Miami has as much to do with Panther’s success as the coffee it brews. Founded by Joel and Leticia Pollock in 2010, the roaster made its home in the city’s Wynwood neighborhood where it became a gathering spot for the local artists and embraced Southern Florida’s global tastes.",
    address: "Miami, FL",
    webAddress: "panther-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHf5yB2x6qoW_o9Aq7Y62BJnAoIZf9w_MRneTv58YHGaCrBfl8iXpawJNVy9P7xhwvK3n8npd-mLb5_inSuORWTjeC5vvSeLivnTR3o2LN_JE6pxqyg=w2400"
  },
  {
    name: "Red Rooster",
    description: "Red Rooster Coffee doesn’t do things by the book. When Rose McCutchan approached then fiancé Haden Polseno-Hensley about supplying coffee for her Floyd, Virginia café, the duo began roasting from a small space in the back of her mother’s bookstore. Guided by principles of sustainability and gender equality since 2010, this family-run company takes pride in inclusive hiring practices and making onsite childcare available for all of its employees.",
    address: "Floyd, VA",
    webAddress: "red-rooster-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHdG9cbPbn6DkSYTpo3xTVQikfPImfAqCZS06NsOYladQygODbTyPAOQZQ_b2zav3OlA615Y-YipES0VlRSmpQYFJCO2VHjaaK3_AL0ef-chpEURcRk=w2400"
  },
  {
    name: "Sightseer",
    description: "As friends and coffee roasters, Kimberly and Sara shared both a love for coffee and concerns about the state of its supply chain. While it was easy to find women doing manual labor on farms and working as baristas they felt, when it came to positions of power, suddenly everything was male. They took matters into their own hands in 2021 and formed Sightseer which sources 100% from women producers.",
    address: "Austin, TX",
    webAddress: "sightseer-brand",
    image: "https://lh3.googleusercontent.com/pw/ADCreHeZ4gD0O6yYjObEI-zpaSAD5SupyIaTknkakZMqB4gn-laCUJ4nyv2yPrkJ4i4QBkXU7Xoe5A3KNbEWLYBeBVuIAKAxeH34PKtL9u7h7Af44TuqZDE=w2400"
  },
]

module.exports = {
	brands
}