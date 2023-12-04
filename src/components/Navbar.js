import PropTypes from "prop-types";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const navItems = [
  { label: "DASHBOARD", to: "/" },
  { label: "CREATE ADS", to: "/create-ads" },
];

const DrawerAppBar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color={"#000"}
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              "@media (max-width: 600px)": {
                fontSize: "18px",
              },
            }}
          >
            <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
              APP LOGO
            </Link>
          </Typography>
          <Box>
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="nav-items">
                {item.label}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
