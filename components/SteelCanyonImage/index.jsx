/* :::: SteelCanyonImage :::: */
import { Parallax } from 'react-parallax';
import SteelCanyons from '/canyon_steels.jpg';

export default function SteelCanyonImage() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={SteelCanyons}
      bgImageAlt="canyon pillars"
      strength={800}
    >
      <div className="imageContent"></div>
    </Parallax>
  );
}
