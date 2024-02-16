/* :::: APP :::: */
import { ParallaxProvider } from 'react-scroll-parallax';
import ImageOne from '../components/ImageOne';
import ImageTwo from '../components/ImageTwo';
import ImageThree from '../components/ImageThree';
import './App.css';

export default function App() {
  return (
    <main>
      <ParallaxProvider>
        <h1 style={{ color: 'white' }}>hello world!</h1>
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </ParallaxProvider>
    </main>
  );
}
