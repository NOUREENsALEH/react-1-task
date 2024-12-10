import React from "react";
import Navbar from "../navbar/Navbar";
import BannerContent from "../bannerContent/BannerContent";
import "../../styles/components/banner/banner.css"

export default function Banner() {
  return (
    <section className="banner_section">
      <div >
        <Navbar />
      </div>
      <div className="banner_content">
        <BannerContent />
      </div>
    </section>
  );
}






