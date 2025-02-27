import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PlayerInfo from "./components/PlayerInfo";
import RaceCar from "./components/RaceCar";
import MonopolyTimer from "./components/MonopolyTimer";
import Board from "./components/Board";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PlayerInfo />
              <RaceCar />
              <MonopolyTimer />
              <Board />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
