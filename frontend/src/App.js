import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import LoadingScreen from "./pages/LoadingScreen";
import AddPlayerPage from "./pages/AddPlayerPage";
import NewGamePage from "./pages/NewGamePage";
import PlayerInfo from "./components/PlayerInfo";
import RaceCar from "./components/RaceCar";
import MonopolyTimer from "./components/MonopolyTimer";
import Board from "./components/Board";

//import MonopolyPage from "./MonopolyPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/add-player" element={<AddPlayerPage />} />
        <Route path="/new-game" element={<NewGamePage />} />
        {/* <Route path="/"element={<PlayerInfo/>}/>
        <Route path="" element={<PlayerInfo />}/>
         <Route path="" element={<RaceCar />}/>
         <Route path="" element={<MonopolyTimer />}/> */}
        <Route
          path="/game-board"
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
