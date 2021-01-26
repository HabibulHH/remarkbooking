import "../styles/App.css";
import { showDetails } from "../actions";
import RoomList from "./room-list";

function App() {
  return (
    <div className="App">
      <RoomList />
    </div>
  );
}

export default App;
