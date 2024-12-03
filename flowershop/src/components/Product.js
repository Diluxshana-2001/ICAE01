import '../assets/CSS/layout.css';
import {useState} from 'react';
export default function Product({flowers}){
    const [quantity,setQuantity] = useState(0);
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
                    <button class="card-button" 
                    onClick={()=>{
                        const changeQuantity = (e) =>{
                            setQuantity(parseInt(e.target.value,10));
                        } 
                    }}>Add to Cart</button>
                </div>
            </div>
        </div>
        ))}
        </>
    );
}