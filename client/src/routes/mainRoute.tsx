import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Dashboard, SignIn, SignUp } from "../pages";

export const MainRoute = () => {
  return (
    <ScrollToTop>
      <MantineProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MantineProvider>
    </ScrollToTop>
  );
};
