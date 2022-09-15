import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
	return <div className={classes.backdrop} onClick={props.hideCartTab} />;
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const PortalElement = document.getElementById("overlay");

const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<BackDrop hideCartTab={props.hideCartTab} />,
				PortalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				PortalElement
			)}
		</Fragment>
	);
};

export default Modal;
