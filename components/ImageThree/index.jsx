/* :::: ImageThree :::: */
import { Parallax } from 'react-parallax';
import StoneDesert from './stone_desert.jpg';

export default function ImageTwo() {
  return (
    <Parallax
      blur={10}
      bgImage={StoneDesert}
      bgImageAlt="black rock desert"
      strength={200}
    >
      <div className="imageContent">
        <p>black rock desert</p>
      </div>
    </Parallax>
  );
}
