"use client";

import React, { useState } from "react";

import Navigation, { Option } from "./components/Navigation";
import Content from "./components/Content";

const ReportPage = () => {
  const [activeOption, setActiveOption] = useState<Option>({
    label: "DNS Zone",
    name: "dns-zone",
  });

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
