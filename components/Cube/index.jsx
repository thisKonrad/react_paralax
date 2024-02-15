/* :::: CUBE :::: */
import { useParallax } from 'react-scroll-parallax';
import styles from './styles.css';

export default function Cube() {
  const parallax = useParallax({
    speed: -10,
  });
  return <div className={styles.cube} ref={parallax.ref} />;
}
