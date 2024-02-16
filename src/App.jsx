/* :::: APP :::: */
import BeduinesImage from '../components/BeduinesImage';
import StoneDesertImage from '../components/StoneDesertImage';
import CanyonDesertImage from '../components/CanyonDesertImage';
import BigDunesImage from '../components/BigDunesImage';
import SaharaSunImage from '../components/SaharaSunImage';
import DesertCaveImage from '../components/DesertCaveImage';

import Jumbo from '../components/Jumbo';
import DesertSongVerseOne from '../components/DesertSongVerseOne';
import DesertSongVerseTwo from '../components/DesertSongVerseTwo';
import DesertSongVerseThree from '../components/DesertSongVerseThree';
import DesertSongVerseFour from '../components/DesertSongVerseFour';
import DesertSongVerseFive from '../components/DesertSongVerseFive';
import DesertSongVerseSix from '../components/DesertSongVerseSix';
import './App.css';

export default function App() {
  return (
    <main>
      <h1>In The Desert</h1>

      <BigDunesImage />

      <Jumbo>
        <DesertSongVerseOne />
      </Jumbo>

      <BeduinesImage />
      <StoneDesertImage />

      <Jumbo>
        <DesertSongVerseTwo />
      </Jumbo>

      <CanyonDesertImage />

      <Jumbo>
        <DesertSongVerseThree />
      </Jumbo>

      <SaharaSunImage />
      <DesertCaveImage />

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
