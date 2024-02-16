/* :::: IMAGE ONE :::: */
import { Parallax } from 'react-parallax';
import Sahara from './sahara_sun.jpg';

export default function ImageOne() {
  return (
    <Parallax blur={10} bgImage={Sahara} bgImageAlt="sahara sun" strength={200}>
      <div className="imageContent">
        <p>sun over sahara</p>
      </div>
    </Parallax>
  );
}
