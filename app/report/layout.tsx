import React from "react";

const ReportLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto p-4 h-full flex flex-col">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Public Report | example.com</h1>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default ReportLayout;
