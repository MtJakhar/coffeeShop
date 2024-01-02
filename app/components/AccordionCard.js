"use client";

import React from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Checkbox,
	FormControlLabel,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

const summaryName = (name) => {
	if (name === "brand") return "Brands";
	if (name === "country") return "Countries";
	if (name === "region") return "Regions";
	if (name === "roast") return "Roast Level";
	return "Other";
};

const AccordionCard = ({ name, data, handleCheckBox }) => {
	return (
		<>
			<Accordion className="font-bold text-xl py-3 pl-3">
				<AccordionSummary expandIcon={<ExpandMore />}>
					<p>{summaryName(name)}</p>
				</AccordionSummary>
				<AccordionDetails>
					{data.map((element) => {
						return (
							<div key={element.name}>
								<FormControlLabel
									control={<Checkbox color="error" />}
									label={element.name}
									labelPlacement="end"
									onClick={() =>
										handleCheckBox(name, element.id)
									}
								/>
							</div>
						);
					})}
				</AccordionDetails>
			</Accordion>
		</>
	);
};

export default AccordionCard;
