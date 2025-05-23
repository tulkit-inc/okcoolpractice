import Navbar from "@/components/navbar";
import "../styles/sections/_hero.scss";
import "../styles/sections/_big-type.scss";
import "../styles/components/_scroll-down.scss";
import "../styles/abstracts/_animations.scss";
import "../styles/components/_banner-location.scss";

export default function Home() {

  

  return (
   <div className="home">
    <Navbar />
    <section className="hero">
      <h1 className="h2">
        Strategic and (very) creative partners to the world&apos;s leading brands. Built for social. <br />
        We humanize brands. We connect them to (sub)cultures. We make cool content that converts. <br />
        Campaigns, content, creators. Global af. <br />
      </h1>
      <div className="button-container">
        <button className="button-primary">Get in touch</button>
        <button className="button-secondary">View work</button>
      </div>

      <div className="scroll-down bounce">
         <div className="scroll-down-text">SCROLL</div>
      </div>

      <div className="banner-location">
        <div className="location"> London</div>
        <div className="location"> Amsterdam</div>
        <div className="location"> New York</div>
        <div className="location"> Los Angeles</div>
      </div>
      
    </section>

    
   </div>
  );
}
