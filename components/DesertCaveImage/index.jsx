/* :::: DesertCaveImage :::: */
import { Parallax } from 'react-parallax';
import Cave from '/desert_cave.jpg';

export default function DesertCaveImage() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={Cave}
      bgImageAlt="cave in a desert"
      strength={800}
    ></Parallax>
  );
}
