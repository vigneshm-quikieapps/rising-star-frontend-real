import { Box, Typography } from "@mui/material";
import { GradientButton } from "../../components";

const PaymentListHeading = ({ title, description, action }) => (
  <Box sx={{ display: "flex", px: "20px", pt: "20px" }}>
    <Box sx={{ flexGrow: 1 }}>
      <Typography fontSize="28px" fontWeight="Bold" sx={{ height: 38 }}>
        {title}
      </Typography>
      <Typography
        fontSize="12px"
        sx={{ color: (theme) => theme.palette.text.secondary }}
      >
        {description}
      </Typography>
    </Box>
    <GradientButton onClick={action || (() => {})}>Refresh</GradientButton>
  </Box>
);

export default PaymentListHeading;