import "../styles/App.css";
import { showDetails } from "../actions";
import RoomList from "./RoomList";
import CreateRoom from "./CreateRoom";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/search" excat component={RoomList} />
        <Route path="/create" excat component={CreateRoom} />
      </BrowserRouter>
    </div>
  );
}

export default App;
