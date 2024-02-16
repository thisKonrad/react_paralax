/* :::: ImageThree :::: */
import { Parallax } from 'react-scroll-parallax';

export default function ImageThree() {
  return (
    <Parallax speed={-10}>
      <img src={'./stone_desert.jpg'} />
    </Parallax>
  );
}
