import React from 'react';
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import {mens_shirts} from "../../../MockData/mens_shirts";
import {women_dresses} from "../../../MockData/women_dresses";
import {mens_pants} from "../../../MockData/mens_pants";
import {women_jeans} from "../../../MockData/women_jeans";

function HomePage() {
  return (
    <div>
      <MainCarousel/>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_shirts} sectionName={"Men`s shirts"}/>
        <HomeSectionCarousel data={mens_pants} sectionName={"Men`s pants"}/>
        <HomeSectionCarousel data={women_jeans} sectionName={"Women`s jeans"}/>
        <HomeSectionCarousel data={women_dresses} sectionName={"Women`s dresses"}/>

      </div>
    </div>
  );
}

export default HomePage;