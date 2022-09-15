import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealInputForm.module.css";

const MealInputForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;
		if (enteredAmountNumber === 0 || enteredAmount < 1 || enteredAmount > 5) {
			setAmountIsValid(false);
			return;
		}
		props.onAddToCart(enteredAmountNumber);
	};
	const amountInputRef = useRef();
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					type: "number",
					min: "1",
					max: "5",
					defaultValue: "1",
					step: "1",
					id: "amount",
				}}
			/>
			<button>+ ADD</button>

			{!amountIsValid && <p>Enter a Valid number u dumb Ass</p>}
		</form>
	);
};

export default MealInputForm;
