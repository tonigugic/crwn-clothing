import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
	const sizeMenu = size ? size : "";
	const navigate = useNavigate();
	return (
		<div
			className={`menu-item ${sizeMenu}`}
			onClick={() => navigate("/shop/hats")}>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}></div>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<h3 className="subtitle">SHOP NOW</h3>
			</div>
		</div>
	);
};

export default MenuItem;
