/* :::: ImageTwo :::: */
import { Parallax } from 'react-parallax';
import Beduines from '/beduines_on_camel.jpg';

export default function BeduinesImage() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={Beduines}
      bgImageAlt="beduines on a trail"
      strength={800}
    >
      <div className="imageContent"></div>
    </Parallax>
  );
}
