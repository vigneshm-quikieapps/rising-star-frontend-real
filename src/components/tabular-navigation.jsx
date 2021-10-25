import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavButton = styled(Button)(({ theme }) => ({
  whiteSpace: "nowrap",
  backgroundColor: "#fff",
  "&.active-link": {
    backgroundColor: theme.palette.highlight.main,
    color: theme.palette.text.primary,
  },
  height: "48px",
  padding: 0,
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.highlight.main}`,
  borderRadius: theme.shape.borderRadiuses.ternary,
  fontSize: "16px",
  textTransform: "none",
}));

const TabNav = ({ items }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "stretch",
        "&>*": { mr: "10px", flex: 1 },
        "&>*:last-child": { mr: 0 },
      }}
    >
      {items.map(({ id, to = "#", exact = true, title }, index) => (
        <NavButton
          key={id || index}
          LinkComponent={NavLink}
          activeClassName="active-link"
          to={to}
          exact={exact}
        >
          {title}
        </NavButton>
      ))}
    </Box>
  );
};

export default TabNav;
