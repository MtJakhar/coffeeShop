import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const AccordionShop = ({ brandData, coffeeData, countryData, regionData }) => {
  const roastData = [
    {
      name: "Light",
    },
    {
      name: "Light Medium",
    },
    {
      name: "Medium",
    },
    {
      name: "Medium Dark",
    },
    {
      name: "Dark",
    },
    {
      name: "Extra Dark",
    },
  ]

	const listedItems = [
		{
			name: "Brand",
			data: brandData,
		},
		{
			name: "Country",
			data: countryData,
		},
		{
			name: "Region",
			data: regionData,
		},
		{
			name: "Roast Level",
			data: roastData,
		},
	];
	console.log(countryData);
	return (
		<div>
			{listedItems.map((item) => {
				return (
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<p>{item.name}</p>
						</AccordionSummary>
						<AccordionDetails>
							{item.data.map((element) => {
								return (
									<div>
										<FormControlLabel
											control={<Checkbox />}
											label={element.name}
											labelPlacement="end"
										/>
									</div>
								);
							})}
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
};

export default AccordionShop;
