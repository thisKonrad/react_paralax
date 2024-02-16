/* :::: ImageTwo :::: */
import { Parallax } from 'react-scroll-parallax';

export default function ImageTwo() {
  return (
    <Parallax speed={-10}>
      <img src={'./beduines_on_camel.jpg'} />
    </Parallax>
  );
}
