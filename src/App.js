import './App.css';
import Header from "./components/Header/Header";
import CardComponent from "./components/CardComponent/CardComponent";
import Footer from "./components/Footer/Footer";
import image2 from './images/blog-post-3.jpeg'
import image3 from './images/blog-post-4.jpeg'
import image4 from './images/blog-post-5.jpeg'

function App() {
  return (
      <div><Header></Header>
          <div className={"divContent"}>
              <CardComponent content={"commando poppenreuth shirt"} content1={"20€"} image={image2}/>
              <CardComponent content={"commando poppenreuth shirt"} content1={"15€"} image={image3}/>
              <CardComponent content={"commando poppenreuth schal"} content1={"10€"} image={image4}/>
          </div>
          <footer><Footer/></footer>
      </div>





  );
}

export default App;
