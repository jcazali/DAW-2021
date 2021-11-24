import { Brands } from "./components/Brand";
import { Collection } from "./components/Collection";
import { Header } from "./components/Header";


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

          <div className="products">
            <div className="card">
              <img src="assets/images/product1.jpg" />
              <div className="card-body">
                <h5>Conjunto de casaco e calça preto</h5>
                <div className="details">
                  <div className="star-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <div className="price">
                    <h3>R$:600,00</h3>
                    <p>Em até 10x sem juros</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="assets/images/product2.jpg" />
              <div className="card-body">
                <h5>Conjunto de casaco e calça jeans</h5>
                <div className="details">
                  <div className="star-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <div className="price">
                    <h3>R$:600,00</h3>
                    <p>Em até 10x sem juros</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="assets/images/product3.jpg" />
              <div className="card-body">
                <h5>Vestido preto e vermelho </h5>
                <div className="details">
                  <div className="star-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div className="price">
                    <h3>R$:600,00</h3>
                    <p>Em até 10x sem juros</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="newsletter">
          <div className="container">
            <h2>Newsletter</h2>
            <p className="fw-light">Assine nossa Newsletter para receber atualização sobre ofertas especiais, novos produtos ou informações de desconto!</p>
            <form>
              <input className="form-control form-control-lg" type="text" placeholder="Informe o seu e-mail" />
              <button className="btn btn-primary btn-lg">Inscreva-se</button>
            </form>
          </div>
        </div>
        <div className="container">
        <Brands items={brands} />
        </div>
      </main >
    </div>
  )
}

export default App;
