import MealInputForm from "../MealInputForm";
import classes from "./MealItem.module.css";
import cartContext from "../../../store/cart-context";
import { useContext } from "react";

const MealItem = (props) => {
	const cartCtx = useContext(cartContext);

	const price = `$${props.price}`;
	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealInputForm onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;