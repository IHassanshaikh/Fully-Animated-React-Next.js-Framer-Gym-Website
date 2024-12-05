"use client"
import Squad from './squad';
import Duo from './duo';


const ParallaxDuo = () => {
 
  return (
    <section id="parallax-duo" className="section">
      <div className="duoimage"><Duo/></div>
      <div className="squadimage"><Squad/></div>
    </section>
  );
};

export default ParallaxDuo;
