import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Groups from "./components/Groups";
import Expenses from "./components/Expenses";
import Balances from "./components/Balances";
import Activity from "./components/Activity";
import Settings from "./components/Settings";
import Stats from "./components/Stats";
import TrackNavBar from "./components/TarckNavBar";

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/groups" element={<Groups/>} />
        <Route path="/:id" element={<TrackNavBar/>} >
          <Route path="expenses" element={<Expenses/>}/>
          <Route path="balances" element={<Balances/>}/>
          <Route path="activity" element={<Activity/>}/>
          <Route path="settings" element={<Settings/>}/>
          <Route path="stats" element={<Stats/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
