
import Navbar from "./components/Hero/heroanimation"
import Download from "./components/Download/Download";
import BannerAd from "./components/BannerAd/BannerAd";
import PhoneCarousel from "./components/PhoneCarousel/PhoneCarousel";
import SubscriptionPlans from "./components/SubscriptionPlans/SubscriptionPlans";
import ScrollingText from "./components/ScrollingText/ScrollingText"
import Review from "./components/Review/Review";
import Triplex from "./components/FooterDownload/Download";
import Footer from "./components/Footer/Footer";
import StickyNav from "./components/StickyNav/StickyNavbar";
import Quote from "./components/Quote/Quote";
import Heromobile from "./components/Hero/heroMobile";
import ResponsiveTextCarousel from "./components/Wrapper/ResponsiveTextCarousel"
import banner1Image1 from "../../public/images/bannerimg1.png";
import banner1Image2 from "../../public/images/bannerimg2.png";
import banner2Image1 from "../../public/images/bannerimg3.png"
import banner2Image2 from "../../public/images/bannerimg4.png"

if (process.env.NODE_ENV === "development") {
  console.log = function() {};
  console.warn = function() {};
  console.error = function() {};
}

export default function Home() {
  return (
    <>
      <main id="main">
        <div className="framer-ZfaKR framer-d1MIn framer-9hciL framer-DvTtZ framer-Gn9ul framer-A6T8P">
          <div className="framer-ar0t6c">
            <Navbar />
            <Heromobile />
            <Download />
            <StickyNav />
            <BannerAd
              id="banner1"
              bannerImage1={banner1Image1}
              bannerImage2={banner1Image2}
              text1="Personal training & tracking like never before"
              text2="The only fitness app you'll ever need"
            />
            <ResponsiveTextCarousel/>
            <Quote />
            <PhoneCarousel />
            <SubscriptionPlans />
            <Review />
            <BannerAd
              id="banner2"
              bannerImage1={banner2Image1}
              bannerImage2={banner2Image2}
              text1="Personal training & tracking like never before"
              text2="Anytime, anywhere & everyone is invited"
            />
            <Triplex />
            <ScrollingText />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}