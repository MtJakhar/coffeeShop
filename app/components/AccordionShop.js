import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionShop = () => {
	return (
		<div>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p>Brand</p>
				</AccordionSummary>
				<AccordionDetails>This is the brand details</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p>Country</p>
				</AccordionSummary>
				<AccordionDetails>This is the Country details</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p>Region</p>
				</AccordionSummary>
				<AccordionDetails>This is the Region details</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<p>Roast</p>
				</AccordionSummary>
				<AccordionDetails>This is the Roast details</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default AccordionShop;
