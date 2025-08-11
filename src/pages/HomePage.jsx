import React from "react";
import Hero from "../components/Hero";
import JobCategories from "../components/JobCategories";
import NewJobs from "../components/NewJobs";
import JobGallery from "../components/JobGallery";
import CareerTips from "../components/CareerTips";
import Testimonials from "../components/Testimonials";
import Subscription from "../components/Subscription";

const HomePage = () => (
  <>
    <Hero />
    <JobCategories />
    <NewJobs />
    <JobGallery />
    <CareerTips />
    <Testimonials />
    <Subscription />
  </>
);

export default HomePage;
