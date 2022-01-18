import React from "react";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";
import { Navbar } from "./navbar.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
						<Card />
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
						<Card />
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
						<Card />
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
						<Card />
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<table className="bg-dark text-white text-center w-100 footerPage">
				<tbody>
					<tr>
						<td className="align-middle">
							Copyright &#169; Your Website 2019
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Home;
