/* :::: BigDunes :::: */
import { Parallax } from 'react-parallax';
import BigDunes from '/big_dunes.jpg';

export default function BigDunesImage() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={BigDunes}
      bgImageAlt="big_dunes"
      strength={800}
    >
      <div className="imageContent"></div>
    </Parallax>
  );
}
