import React from "react";

export const Card = () => {
	return (
		<div className="card text-center card-custom">
			<img
				src="http://via.placeholder.com/500x325"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					ipsa, ipsam, eligendi, in quo sunt.
					<br />
					<br />
				</p>
			</div>
			<div className="card-footer">
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
