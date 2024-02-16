/* :::: DesertRockImage :::: */
import { Parallax } from 'react-parallax';
import Rock from '/rock.jpg';

export default function DesertRockImage() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={Rock}
      bgImageAlt="rock in a desert"
      strength={120}
    >
      <div className="imageContent"></div>
    </Parallax>
  );
}
