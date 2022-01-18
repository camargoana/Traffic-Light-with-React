import React from "react";

export const Jumbotron = () => {
	return (
		<div className="p-xs-2 p-md-5 mb-4 bg-light rounded-3">
			<div className="container-fluid py-2">
				<h1 className="display-5 fw-bold">A Warm Welcome!</h1>
				<p className="col-md-12 fs-5">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					ipsa, ipsam, eligendi, in quo sunt possimus non insudunt
					odit vero aliquid similique nam nobis illo aspernatur vitae
					fugiat numquam repellat.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Call to action!
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
