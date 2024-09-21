import logo from './logo.svg';
import './App.css';
import background from "./background.svg";

const mystyle = {
  backgroundImage: `url(${background})`,
  width: "100%",
  height: "100%",
  position: "fixed",
  padding: "0",
  margin: "0"
};

function App() {
  return (
    <main>
      <div style={mystyle}>
        Hello World
      </div>
    </main>
  );
}

export default App;
