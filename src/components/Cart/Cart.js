import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartCtx = useContext(cartContext);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;
	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};
	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};
	const CartItems = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map((item) => (
				<li>
					<CartItem
						key={item.id}
						amount={item.amount}
						price={item.price}
						name={item.name}
						onRemove={cartItemRemoveHandler.bind(null, item.id)}
						onAdd={cartItemAddHandler.bind(null, item)}
					/>
				</li>
			))}
		</ul>
	);

	return (
		<Modal hideCartTab={props.hideCartTab}>
			{CartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button
					className={classes["button--alt"]}
					onClick={props.hideCartTab}
				>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
