import { createTheme } from "@mui/material/styles";

// Define the custom styles for Accordion
const accordionStyles = {
  root: {
    margin: 0,
    borderRadius: 0,
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
  },
};

// Define the custom styles for AccordionSummary
const accordionSummaryStyles = {
  root: {
    minHeight: 0,
  },
};

// Define the custom styles for AccordionDetails
const accordionDetailsStyles = {
  root: {},
};

// Create the custom Accordion theme
const customAccordionTheme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: accordionStyles,
    },
    MuiAccordionSummary: {
      styleOverrides: accordionSummaryStyles,
    },
    MuiAccordionDetails: {
      styleOverrides: accordionDetailsStyles,
    },
  },
});

export default customAccordionTheme;
