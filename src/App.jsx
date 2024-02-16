/* :::: APP :::: */
import SaharaSunImage from '../components/SaharaSunImage';
import BeduinesImage from '../components/BeduinesImage';
import StoneDesertImage from '../components/StoneDesertImage';
import Jumbo from '../components/Jumbo';
import DesertSongVerseOne from '../components/DesertSongVerseOne';
import DesertSongVerseTwo from '../components/DesertSongVerseTwo';
import DesertSongVerseThree from '../components/DesertSongVerseThree';
import DesertSongVerseFour from '../components/DesertSongVerseFour';
import DesertSongVerseFive from '../components/DesertSongVerseThree';
import DesertSongVerseSix from '../components/DesertSongVerseFour';
import './App.css';

export default function App() {
  return (
    <main>
      <h1>In The Desert</h1>
      <SaharaSunImage />
      <Jumbo>
        <DesertSongVerseOne />
      </Jumbo>
      <BeduinesImage />
      <StoneDesertImage />

      <Jumbo>
        <DesertSongVerseTwo />
      </Jumbo>

      <Jumbo>
        <DesertSongVerseThree />
      </Jumbo>

      <Jumbo>
        <DesertSongVerseFour />
      </Jumbo>

      <Jumbo>
        <DesertSongVerseFive />
      </Jumbo>

      <Jumbo>
        <DesertSongVerseSix />
      </Jumbo>
    </main>
  );
}
