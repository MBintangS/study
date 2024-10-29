import React from "react";
import Navbar from "../components/layout/Navbar";
import HeroCampusUpdate from "../components/HeroCampusUpdate";
import Footer from "../components/layout/Footer";
import CardCampusUpdate from "../components/CardCampusUpdate";

const CampusUpdate = () => {
  return (
    <div className="bg-[#F0F3F6]">
      <Navbar />
      <HeroCampusUpdate />
      <div className="max-w-6xl w-full mx-auto my-8 px-5">
        <h1 className="text-4xl font-semibold text-center">Campus Update</h1>
        <div className="w-full bg-white rounded-lg shadow-md px-8 py-8 my-8 space-y-4">
            <CardCampusUpdate />
            <CardCampusUpdate />
            <CardCampusUpdate />
            <CardCampusUpdate />
            <CardCampusUpdate />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampusUpdate;
