/* :::: IMAGE ONE :::: */

import { Parallax } from 'react-scroll-parallax';

export default function ImageOne() {
  return (
    <Parallax speed={-10}>
      <img src={'./sahara_sun.jpg'} />
    </Parallax>
  );
}
