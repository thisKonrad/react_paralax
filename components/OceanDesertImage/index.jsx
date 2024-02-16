/* :::: OceanDesertImage :::: */
import { Parallax } from 'react-parallax';
import OceanDesert from '/ocean_desert.jpg';

export default function OceanDesertImage() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={OceanDesert}
      bgImageAlt="ocean meets desert"
      strength={120}
    >
      <div className="imageContent"></div>
    </Parallax>
  );
}
