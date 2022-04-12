import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)(({ width }) => ({
  width: width || "auto",
  boxShadow: "0 2px 0 rgb(0 0 0 / 2%)",
  textTransform: "none",
  fontSize: 14,
  fontWeight: "normal",
  padding: "6px 12px",
  border: "1px solid hsl(0, 0%, 82%)",
  lineHeight: 1.5,
  backgroundColor: "transparent",
  color: "rgba(0, 0, 0, 0.85)",
  fontFamily: [
    "-apple-system",
    
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "#40a9ff",
    color: "#40a9ff",
  },
  "&:active": {
    backgroundColor: "transparent",
    borderColor: "##096dd9",
    color: "#096dd9",
  },
}));

export default CustomButton;
