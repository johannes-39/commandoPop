import './App.css';
import Header from "./components/Header/Header";
import CardComponent from "./components/CardComponent/CardComponent";
import Footer from "./components/Footer/Footer";

import image1 from './images/blog-post-2.jpeg'
import image2 from './images/blog-post-3.jpeg'
import image3 from './images/blog-post-4.jpeg'
import image4 from './images/blog-post-5.jpeg'

function App() {
  return (
      <div><Header></Header>
          <div className={"divContent"}>
              <CardComponent content={"20 €"} image={image2}/>
              <CardComponent content={"15 €"} image={image3}/>
              <CardComponent content={"12 €"} image={image4}/>
              <CardComponent content={"30 €"} image={image1}/>
          </div>
          <footer><Footer/></footer>
      </div>





  );
}

export default App;
