import "./App.css";
import Navbar from "./component/Navbar";
import RecursiveComponent from "./component/RecursiveComponent";
import { data } from "./data";

function App() {
  console.log(data);
  return (
    <div className="App">
      <Navbar />
      <br />
      <RecursiveComponent data={data} />
    </div>
  );
}

export default App;
