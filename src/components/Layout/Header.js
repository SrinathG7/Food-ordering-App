import React from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>Order Now</h1>
				<HeaderCardButton onClick={props.showCartTab} />
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImage} />
			</div>
		</React.Fragment>
	);
};

export default Header;
