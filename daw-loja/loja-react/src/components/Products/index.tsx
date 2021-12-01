import { Product } from "../../@types"
import "./style.css"

type ProductsProps = {
    items: Array<Product>
}

export function Products(props: ProductsProps) {
    return (
        <div className="products">
          {props.items.map(items => {
                    return (
                                  <div className="card">
              <img src={`assets/images/${items.photo}`} />
              <div className="card-body">
                <h5>{items.name}</h5>
                <div className="details">
                  <div className="star-rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <div className="price">
                    <h3>{items.price}</h3>
                    <p>Em até 10x sem juros</p>
                  </div>
                </div>
              </div>
            </div>                        
          )}
         )}
        </div>
    )
}
