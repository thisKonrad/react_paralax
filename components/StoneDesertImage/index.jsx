/* :::: ImageThree :::: */
import { Parallax } from 'react-parallax';
import StoneDesert from '/stone_desert.jpg';

export default function StoneDesertImage() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={StoneDesert}
      bgImageAlt="black rock desert"
      strength={800}
    >
      <div className="imageContent">
        <p className="imageMsg">black rock desert</p>
      </div>
    </Parallax>
  );
}
