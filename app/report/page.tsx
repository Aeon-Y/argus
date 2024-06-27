"use client";

import React, { useState } from "react";

import Navigation from "./components/Navigation";
import Content from "./components/Content";
import { Child } from "./data/module";

const ReportPage = () => {
  const [activeOption, setActiveOption] = useState<Child | undefined>();

  return (
    <>
      <Navigation
        activeOption={activeOption}
        clickOption={(option) => {
          setActiveOption(option);
        }}
      />
      <Content activeOption={activeOption} />
    </>
  );
};

export default ReportPage;
