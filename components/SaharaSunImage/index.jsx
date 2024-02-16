/* :::: IMAGE ONE :::: */
import { Parallax } from 'react-parallax';
import Sahara from '/sahara_sun.jpg';

export default function SaharaSunImage() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={Sahara}
      bgImageAlt="sahara sun"
      strength={800}
    >
      <div className="imageContent"></div>
    </Parallax>
  );
}
