import { Fragment } from "react";
import Available from "./Available";
import MealsSummary from "./MealsSummary";

const Meals = () => {
	return (
		<Fragment>
			<MealsSummary />
			<Available />
		</Fragment>
	);
};

export default Meals;
