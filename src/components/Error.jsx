import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const Error = ({ title, message, description, backHome, refresh }) => {
  if (!message) return null;
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex-grow flex items-center justify-center min-h-96">
        <div className="text-center max-w-md mx-auto p-6">
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
          <p className="text-gray-600 mt-2">{message}</p>
          {description && (
            <p className="text-gray-500 text-sm mt-4">{description}</p>
          )}
          <div className="gap-2 flex justify-center">
            <button
              onClick={backHome}
              className="mt-6 px-6 py-3 text-blue-600 text-sm font-medium rounded border-blue-600 hover:bg-blue-600 hover:text-white border transition-all"
            >
                Back to Home
            </button>
            <button
              onClick={refresh}
              className="mt-6 px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded shadow hover:bg-blue-600 transition-all"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
