/* :::: APP :::: */
import SaharaSunImage from '../components/SaharaSunImage';
import BeduinesImage from '../components/BeduinesImage';
import StoneDesertImage from '../components/StoneDesertImage';
import Jumbo from '../components/Jumbo';
import DesertSongTextOne from '../components/DesertSongTextOne';
import DesertSongTextTwo from '../components/DesertSongTextTwo';
import './App.css';

export default function App() {
  return (
    <main>
      <h1>In The Desert</h1>
      <SaharaSunImage />
      <Jumbo>
        <DesertSongTextOne />
      </Jumbo>
      <BeduinesImage />
      <StoneDesertImage />
      <Jumbo>
        <DesertSongTextTwo />
      </Jumbo>
    </main>
  );
}
