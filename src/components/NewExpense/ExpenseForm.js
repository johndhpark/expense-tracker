import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onIsEditingClick, onSaveExpenseData }) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const cancelClickHandler = (event) => {
		event.preventDefault();
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
		onIsEditingClick(false);
	};

	const titleChangeHandler = (event) => {
		// setUserInput((prevInput) => ({
		// 	...prevInput,
		// 	enteredTitle: e.target.value,
		// }));
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		// setUserInput((prevInput) => ({
		// 	...prevInput,
		// 	enteredAmount: e.target.value,
		// }));
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		// setUserInput((prevInput) => ({
		// 	...prevInput,
		// 	enteredDate: e.target.value,
		// }));
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
		onIsEditingClick(false);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						value={enteredTitle}
						type="text"
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						placeholder="0.00"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
						value={enteredDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={cancelClickHandler} type="button">
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
