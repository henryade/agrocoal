import React from 'react';
import { 
  CompanyLogo,
  LandEffect,
  SecondSectionIcon,
  EightSectionIcon,
  FourthSectionIcon,
  ThirdSectionIcon,
  HomeBackGround,
  Ellipsis1,
  SixthFrame,
  CompanyLogoGreen,
  SeventhSectionImage,
  Card,
  FaceBookIcon,
  InstagramIcon,
  FirstSectionImage,
  Ellipsis2,
TwitterIcon
} from "../../Components";
import "./font/index.css";

import data from "./homePageData";

const HomePage = () => {
  return (
    <div>
      <section>
        <div className="background">
        <HomeBackGround width={"100%"} height={"100%"} />
        </div>
        <nav className="flex row navbar">
          <div className="company-logo">
            <CompanyLogo />
          </div>
          <div className="flex navlinks">
            <a href="/" className="active">Vision</a>
            <a href="/">Technology</a>
            <a href="/">Experience It</a>
            <a href="/">Sign in</a>
          </div>
        </nav>
        <div className="box first-section flex row">
          <div className="f-50 first-section-text-container flex column">
            <div className="flex column first-section-text">
              <p className="first-section-header">Welcome To AgroCola</p>
              <p className="first-section-body">Digital Agriculture for tomorrows leaders</p>
            </div>
          </div>
          <div className="first-section-image flex column f-50">
            <div className="flex column">
              <FirstSectionImage width={"80%"} />
            </div>
          </div>
        </div>
        <div>
          <LandEffect width={"100%"} height={"100%"} />
        </div>
      </section>

      <section className="section">
        <div className="f-50-s flex section2 section-left-text">
          <div>
            <p className="section-header section2-header">Our Commitment</p>
            <p className="section2-body">The AgroCola’s commitment is to create opportunities for the youth to thrive by engaging in agriculture and various agribusinesses. AgroCola is the integrated agricultural production platform that is built on digital technology.</p>
          </div>
        </div>
        <div className="f-50-b secondSectionIcon">
          <SecondSectionIcon width="92%" />
        </div>
      </section>
      <div className="relative-position">
        <div className="semi-circle semi-circle-right"></div>
      </div>
      <div className="spacer"></div>
      <section className="section">
        <div className="f-50 flex section3 section-left-text">
          <div className="flex column section3-first-div">
            <div className="flex column section3-mini-container">
              <p className="section-header section3-header-first">Our</p>
              <p className="section-header section3-header">Policies and Resolution</p>
              <div className="section3-body-parent">
                <p className="section3-body">AgroCola provides Nigeria’s young farmers and agriculture value chain participants with an opportunity to create market influence, improve productivity, improve returns, and rightly position to compete in a national and international marketplace.</p>
              </div>
              <div className="flex right almost-wide">
                <p className="readMore">Read more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="f-50 thirdSectionIcon">
          <ThirdSectionIcon width={"100%"} />
        </div>
      </section>

      <div className="relative-position">
        <div className="semi-circle semi-circle-left"></div>
      </div>

      <div className="spacer-1"></div>

      <section className="section">
      <div className="f-60 flex section4 section2 section-left-text">
            <div className="flex column section3-mini-container">
              <p className="section-header section3-header">Our Sustainable Agriculture Philosophy</p>
              <div className="section4-body-parent">
                <p className="section2-body">Our sustainable agriculture approach is anchored on the use of best available knowledge, technologies, and practices to ensure that intensification delivers more with minimal environmental impacts.</p>
              </div>
              <div className="flex right almost-wide">
                <p className="readMore">Read more</p>
              </div>
            </div>
          </div>
        <div className="f-40">
          <FourthSectionIcon width="97%" />
        </div>
      </section>

      <div className="relative-position">
        <div className="ellipsis">
          <Ellipsis1 />
        </div>
      </div>

      <div className="relative-position">
        <div className="rectangle"></div>
      </div>

      <div className="spacer-2"></div>

      <section className="card-container">
        <div className="section-header card-container-header"><p>A Closer Look</p></div>
        <div className="section card-section">
          {data.map((field) => (
            <Card data={field} />
          ))}
        </div>
      </section>

      <div className="relative-position">
        <div className="quadrant">
        </div>
      </div>
      
      <section className="section">
        <div className="wide">
          <SixthFrame width={"100%"} height={"100%"} />
        </div>
      </section>

      <section className="flex column">
        <div className="seventh-section">
          <p>Hear Our story</p>
          <div className="line"></div>
        </div>
        <div className="seventh-section-container">
            <div className="seventh-section-image-container">
              <div className="seventh-section-image">
                <SeventhSectionImage width={"100%"} />
              </div>
            </div>
        </div>
      </section>

      <div className="spacer-4"></div>

      <div className="relative-position">
        <div className="ellipsis-2">
          <Ellipsis2 />
        </div>
      </div>


      <section className="section eight-section">
        <div className="f-60 flex column">
          <p className="text">Let's reshape the future of agriculture, one crop at a time.</p>
          <button>Join Us</button>
          </div>
        <div className="f-40">
          <EightSectionIcon width="100%" />
        </div>
      </section>

      <div className="relative-position">
        <div className="semi-circle semi-circle-left semi-circle-left-2"></div>
      </div>
      <div className="spacer-3"></div>

      <footer className="flex row footer">
        <div>
          <div className="footer-logo">
          <CompanyLogoGreen />
          </div>
          <p className="footer-text-color small-text">Copy right 2019 AgroMall Discovery and Extension Limited</p>
          <p className="footer-text-color small-text">All rights reserved</p>
        </div>
        <div>
          <p className="footer-text-color big-text">Links</p>
          <p className="footer-text-color small-text">Users</p>
          <p className="footer-text-color small-text">State</p>
          <p className="footer-text-color small-text">Media</p>
          <p className="footer-text-color small-text">Experience It</p>
          <p className="footer-text-color small-text">Join us</p>
        </div>
        <div className="footer-social">
          <p className="footer-text-color big-text">Follow us</p>
          <div className="flex row footer-social-links">
<FaceBookIcon />
<InstagramIcon />
<TwitterIcon />
          </div>
        </div>
      </footer>
    </div>
  );
}
 
export default HomePage;