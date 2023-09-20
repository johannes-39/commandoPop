import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent/ButtonComponent'
import Header from "./components/Header/Header";
import TextComponent from "./components/TextComponent/TextComponent";
import CardComponent from "./components/CardComponent/CardComponent";

function App() {
  return (
      <div><Header></Header>
          <div className={"divContent"}>
              <CardComponent content={"test"}/>
              <CardComponent content={"test12345"}/>
          </div>
      </div>





  );
}

export default App;
