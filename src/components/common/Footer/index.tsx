import { Box, Theme, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  footerWrapper: {
  },
  footerDetails: {
    [theme.breakpoints.down("md")]: {
      paddingTop: "20px",
    },
  },
  footerContainer: {
    padding: "0 15px",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        background:"#112743",
        color: "#ffffff",
      }}
    >
      <Box sx={{ padding: "20px 0px" }}>
        <Box
          className={classes.footerWrapper}
          sx={{ display:"flex",alignItems:"center",justifyContent:"center" }}
        >
          <Box className={classes.footerContainer}>
            <Typography
              variant="h4"
              noWrap
              className={classes.footerDetails}
              sx={{
                mr: 2,
                display: "flex",
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
                paddingBottom: "10px",
              }}
            >
              Footer
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
