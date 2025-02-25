
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import WelcomeScreen from "./pages/WelcomeScreen";
import SignUp from "./pages/Signup";
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword";
import LoadingScreen from "./pages/LoadingScreen";
import AddPlayerPage from "./pages/AddPlayerPage";
import NewGamePage from "./pages/NewGamePage"
//import MonopolyPage from "./MonopolyPage"


function App() {
  return (
  
      <Router>
        <Routes>
          <Route path='/' element={<WelcomeScreen/>}/>
          <Route path='/Signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="forgot-password" element={<ForgotPassword/>}/>
         <Route path='/loading' element={<LoadingScreen/>}/>  
          <Route path='/add-player' element={<AddPlayerPage/>}/>
         <Route path='/new-game' element={<NewGamePage/>}/> 
        </Routes>
      </Router>



  
  );
}

export default App;
