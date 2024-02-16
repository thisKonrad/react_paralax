/* :::: SunCanyonImage :::: */
import { Parallax } from 'react-parallax';
import SunCanyon from '/canyon_sun.jpg';

export default function SunCanyonImage() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={SunCanyon}
      bgImageAlt="desert canyon sundown"
      strength={120}
    >
      <div className="imageContent"></div>
    </Parallax>
  );
}
