import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
	const [showCart, setShowCart] = useState(false);
	const showCartTab = () => {
		setShowCart(true);
	};

	const hideCartTab = () => {
		setShowCart(false);
	};

	return (
		<CartContextProvider>
			{showCart && <Cart hideCartTab={hideCartTab} />}
			<Header showCartTab={showCartTab} hideCartTab={hideCartTab} />
			<main>
				<Meals />
			</main>
		</CartContextProvider>
	);
}

export default App;
