import Cookie from './components/Cookie';
import Cursor from './components/boosters/Cursor';
import Grandma from './components/boosters/Grandma';

import CookieProvider from './context/CookieContext';

import styled from '@emotion/styled';

const Game = styled.main`
  width: 100%;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`;

const Grid = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) { 
        display: grid;
        align-items: initial;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    }
`;

function App() {
  return (
      <CookieProvider>
        <Game>
          <Grid>
              <Cookie />

              <div id="boosters">
                <Cursor />
                <Grandma />
              </div>

          </Grid>
        </Game>
      </CookieProvider>
  );
}

export default App;
