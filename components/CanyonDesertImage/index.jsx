/* :::: CanyonDesertImage :::: */
import { Parallax } from 'react-parallax';
import Canyons from '/canyon_desert.jpg';

export default function CanyonDesertImage() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={Canyons}
      bgImageAlt="canyons"
      strength={800}
    >
      <div className="imageContent"></div>
    </Parallax>
  );
}
