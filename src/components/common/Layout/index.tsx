import { Box } from "@mui/material";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div>
      <Header />
      <Box sx={{minHeight: "calc(100vh - 160px)"}}>{children}</Box>
      <Footer />
    </div>
  );
};

export default Layout;
