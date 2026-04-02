import Button from "./UI/Button";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";

const MealItem = (props) => {
    const cartCxt = useContext(CartContext);

    const handleAddMealToCart = () => {
        cartCxt.addItem(props.meal);
    }

    const price = Number(props.meal.price);

    const formattedPrice = new Intl.NumberFormat("et-EE", {
        style: "currency",
        currency: "EUR"
    }).format(price);

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{formattedPrice}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p className="meal-item-action">
                    <Button onClick={handleAddMealToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem