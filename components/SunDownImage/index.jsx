/* :::: SunDownImage :::: */
import { Parallax } from 'react-parallax';
import SunDown from '/sundown.jpg';

export default function SunDownImage() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={SunDown}
      bgImageAlt="sundown in desert"
      strength={800}
    >
      <div className="imageContent"></div>
    </Parallax>
  );
}
