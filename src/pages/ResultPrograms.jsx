import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Finder from "../components/Finder";
import CardProgram from "../components/CardProgram";
import Footer from "../components/layout/Footer";
import Pagination from "../components/Pagination";
import { useLocation } from "react-router-dom";
import logo from "../assets/ipb.png";
import Hero from "../components/Hero";
import logoBannerResult from "/banner-programs.webp";
import SkeletonCardProgram from "../components/skeleton/SkeletonCardProgram";
import usePagination from "../hooks/usePagination";

const data = [
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
  {
    title:
      "Bachelor’s Program of Applied Bio Technology Scholar Program | Agriculture Study",
    logoPT: logo,
    namePT: "Bogor Institute of Agriculture",
    location: "Jawa Barat",
    levelStudy: "Undergraduate",
    typeOfPT: "Public College",
    cost: "2000USD",
    link: "https://youtube.com",
  },
];

const ResultPrograms = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const keyword = searchParams.get("keyword");
  const programType = searchParams.get("programType");
  const levelOfStudy = searchParams.get("levelOfStudy");
  const province = searchParams.get("province");

  const topRef = useRef(null);

  useEffect(() => {
    fetchAPI({ keyword, programType, levelOfStudy, province });
  }, [keyword, province, programType, levelOfStudy]);

  const fetchAPI = (params) => {
    // console.log("Cari dengan Parameter:", params);
  };

  // Pagination
  const itemsPerPage = 10;
  const {
    currentPage,
    pageCount,
    handlePageChange,
    startItem,
    endItem,
    paginatedData,
  } = usePagination(data, itemsPerPage);

  // Scroll to topRef element when currentPage changes
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  // make a fake loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [keyword, programType, levelOfStudy, province]);

  return (
    <div className="bg-[#F0F3F6]">
      <Navbar />
      <Hero imgBanner={logoBannerResult} />
      <div ref={topRef}></div>
      <Finder />
      <div className="max-w-6xl w-full mx-auto my-8 px-5 space-y-6">
        <div>
          <strong>Keyword :</strong> {keyword ? keyword : ""}, <strong>Program Type :</strong>{" "}
          {programType ? programType : "-"}, <strong>Level Study :</strong> {levelOfStudy ? levelOfStudy : "-"}
          , <strong>Location :</strong> {province ? province : "-"}
        </div>
        {isLoading ? (
          <SkeletonCardProgram count={3} />
        ) : (
          paginatedData.map((data, index) => (
            <CardProgram
              key={index}
              title={`${data.title} ${currentPage * itemsPerPage + index + 1}`}
              logoPT={data.logoPT}
              namePT={data.namePT}
              location={data.location}
              levelStudy={data.levelStudy}
              typeOfPT={data.typeOfPT}
              cost={data.cost}
              link={data.link}
            />
          ))
        )}
      </div>
      <Pagination
        pageCount={pageCount}
        onPageChange={handlePageChange}
        startItem={startItem}
        endItem={endItem}
        totalItem={data.length}
      />

      <Footer />
    </div>
  );
};

export default ResultPrograms;
