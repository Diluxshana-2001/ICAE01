import '../assets/CSS/layout.css';
export default function Product({key,product,setCart,setTot}){
    const [quantity,setQuantity]=useState(0);

    const addToCart = () => {
        if (quantity > 0) {
          setCart((prev) => [
            ...prev,
            {
              product: product.name,
              quantity,
              price: product.price,
            },
          ]);
    
          setTot((prevTotal) => prevTotal + product.price * quantity);
        }
      };

    return(
        <div className="grid-item" key={key}>

            <div class="card">
                <img  />
                <div class="card-body">
                    <h5 class="card-title">Price:</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" />
                    </div>
                    <button class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}