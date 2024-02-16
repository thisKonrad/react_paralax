/* :::: ImageTwo :::: */
import { Parallax } from 'react-parallax';
import Beduines from './beduines_on_camel.jpg';

export default function ImageTwo() {
  return (
    <Parallax
      blur={10}
      bgImage={Beduines}
      bgImageAlt="bduines on a trail"
      strength={200}
    >
      <div className="imageContent">
        <p>beduines on a trail</p>
      </div>
    </Parallax>
  );
}
