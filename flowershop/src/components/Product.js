import '../assets/CSS/layout.css';
export default function Product({flowers}){
    
    return(
        <>
        {flowers.map((flower)=>(
        <div className="grid-item">
            <div class="card">
                <img  src={require(`../assets/image/`+flower.img)} className="card img"/>
                <div class="card-body">
                    <h5 class="card-title">{flower.name}  price: {flower.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" />
                    </div>
                    <button class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
        ))}
        </>
    );
}