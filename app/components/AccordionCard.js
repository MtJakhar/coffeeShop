"use client"

import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const summaryName = (name) => {
  if(name === "brand") return "Brands";
  if(name === "country") return "Countries";
  if(name === "region") return "Regions";
  return "Other"
}


const AccordionCard = ({ name, data, handleCheckBox }) => {
  return (
    <>
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <p>{summaryName(name)}</p>
        </AccordionSummary>
        <AccordionDetails>
          {data.map((element) => {
            return (
              <div>
                <FormControlLabel
                  control={<Checkbox />}
                  label={capitalize(element.name)}
                  labelPlacement="end"
                  onClick={() => handleCheckBox(name, element.name)}
                />
              </div>
            )
          })}
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default AccordionCard