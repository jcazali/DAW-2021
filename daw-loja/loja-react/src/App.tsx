import { Brands } from "./components/Brand";
import { Collection } from "./components/Collection";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { NewsLetter } from "./components/NewsLetter";
import { Footer } from "./components/Footer";

function App() {
  const brands = [
    {alt: 'imagem1', source:'assets/images/brand1.png'},
    {alt: 'imagem2', source:'assets/images/brand2.png'},
    {alt: 'imagem3', source:'assets/images/brand3.png'},
    {alt: 'imagem4', source:'assets/images/brand4.png'},
    {alt: 'imagem5', source:'assets/images/brand5.png'}
  ];

  return (
    <div className="App"> 
      <Header />
      <main>
        <div className="container">
          <div className="carousel">
            <div className="carousel-item">
              <div className="carousel-caption">
                <h5>Coleção</h5>
                <h4>Feminina <span>2021</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button> Conheça essa coleção</button>
              </div>
            </div>
          </div>
          <Collection />|
          <Products />
          <NewsLetter />       
        </div>

        <div className="container">
        <Brands items={brands} />
        </div>
      </main >
      <div>
          <Footer />      
      </div>
    </div>
  )
}

export default App;
