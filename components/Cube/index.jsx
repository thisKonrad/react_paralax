/* :::: CUBE :::: */
import { useParallax } from 'react-scroll-parallax';
import styles from './styles.module.css';

export default function Cube() {
  const { ref } = useParallax < HTMLDivElement > { speed: 10 };
  return <div className={styles.cube} ref={ref} />;
}
