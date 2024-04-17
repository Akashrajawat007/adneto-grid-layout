import './App.css';
import Card from './Card';

function App() {
  const elements = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
  return (
    <div className="App">
      {elements.map((item, index) => (<Card key={index}>{item}</Card>))}
    </div>
  );
}

export default App;
