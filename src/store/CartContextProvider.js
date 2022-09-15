import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	//adding items into the cart [name, price of the item,]
	if (action.type === "ADD_ITEM") {
		const updateTotalAmount =
			state.totalAmount + action.item.amount * action.item.price;
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);
		const existingCartItem = state.items[existingCartItemIndex];
		let updateItems;
		if (existingCartItem) {
			const updateItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};
			updateItems = [...state.items];
			updateItems[existingCartItemIndex] = updateItem;
		} else {
			updateItems = state.items.concat(action.item);
		}
		return { items: updateItems, totalAmount: updateTotalAmount };
	}
	if (action.type === "REMOVE_ITEM") {
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);
		const existingItem = state.items[existingCartItemIndex];
		const updateTotalAmount = state.totalAmount - existingItem.price;
		let updatedItems;
		if (existingItem.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			const updateItem = {
				...existingItem,
				amount: existingItem.amount - 1,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updateItem;
		}
		return {
			items: updatedItems,
			totalAmount: updateTotalAmount,
		};
	}
	return defaultCartState;
};

const CartContextProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemHandler = (item) => {
		dispatchCartAction({ type: "ADD_ITEM", item: item });
	};

	const removeItemHandler = (id) => {
		dispatchCartAction({ type: "REMOVE_ITEM", id: id });
	};

	const cartContextItems = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};
	return (
		<CartContext.Provider value={cartContextItems}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
