import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	let [selectedColor, setColor] = useState("red");

	if (props.color !== undefined) {
		selectedColor = props.color;
	}

	if (props.hasPurple) {
		nlights = 4;
		return (
			<div>
				<div className="row">
					<div className="col-12 d-flex w-100 justify-content-center align-items-center">
						<div className="traffic-light">
							<div
								onClick={(e) => setColor("red")}
								className={
									"light red " +
									(selectedColor == "red" ? "glow" : "")
								}></div>
							<div
								onClick={(e) => setColor("yellow")}
								className={
									"light yellow " +
									(selectedColor == "yellow" ? "glow" : "")
								}></div>
							<div
								onClick={(e) => setColor("green")}
								className={
									"light green " +
									(selectedColor == "green" ? "glow" : "")
								}></div>
							<div
								onClick={(e) => setColor("purple")}
								className={
									"light purple " +
									(selectedColor == "purple" ? "glow" : "")
								}></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 d-flex w-100 justify-content-center align-items-center py-4">
						<div
							className="btn btn-danger"
							style={{ width: "150px" }}
							onClick={(e) => toogle(false)}>
							REMOVE LIGHT
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 d-flex w-100 justify-content-center align-items-center">
						<div
							className="btn btn-primary"
							style={{ width: "150px" }}
							onClick={(e) => startCycle()}>
							CYCLE
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		nlights = 3;
		return (
			<div>
				<div className="row">
					<div className="col-12 d-flex w-100 justify-content-center align-items-center">
						<div className="traffic-light">
							<div
								onClick={(e) => setColor("red")}
								className={
									"light red " +
									(selectedColor == "red" ? "glow" : "")
								}></div>
							<div
								onClick={(e) => setColor("yellow")}
								className={
									"light yellow " +
									(selectedColor == "yellow" ? "glow" : "")
								}></div>
							<div
								onClick={(e) => setColor("green")}
								className={
									"light green " +
									(selectedColor == "green" ? "glow" : "")
								}></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 d-flex w-100 justify-content-center align-items-center py-4">
						<div
							className="btn btn-success"
							style={{ width: "150px" }}
							onClick={(e) => toogle(true)}>
							ADD LIGHT
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 d-flex w-100 justify-content-center align-items-center">
						<div
							className="btn btn-primary"
							style={{ width: "150px" }}
							onClick={(e) => startCycle()}>
							CYCLE
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	hasPurple: PropTypes.bool,
	color: PropTypes.string,
};

export default Home;

function toogle(param) {
	ReactDOM.render(<Home hasPurple={param} />, document.querySelector("#app"));
	counter = 0;
}

let nlights = 3;
let intervalID;
let counter = 0;
let actualColor = "red";

function startCycle(param) {
	counter = 0;
	let intervalID = setInterval(changeLight, 1000);
}

function changeLight() {
	let colors;
	if (nlights === 4) {
		colors = ["red", "yellow", "green", "purple"];
	} else {
		colors = ["red", "yellow", "green"];
	}

	ReactDOM.render(
		<Home hasPurple={nlights === 4} color={colors[counter]} />,
		document.querySelector("#app")
	);
	counter = (counter + 1) % nlights;
}
