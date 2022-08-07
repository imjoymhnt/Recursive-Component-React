import './App.css';
import RecursiveComponent from './component/RecursiveComponent';
import {data} from './data'

function App() {
  console.log(data);
  return (
    <div className="App">
      <RecursiveComponent data={data} />
      
    </div>
  );
}

export default App;
