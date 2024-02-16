/* :::: ColorCanyon :::: */
import { Parallax } from 'react-parallax';
import ColorCanyon from '/colorcanyon.jpg';

export default function ColorCanyonImage() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={ColorCanyon}
      bgImageAlt="colorful sky with canyons"
      strength={120}
    >
      <div className="imageContent"></div>
    </Parallax>
  );
}
