import React from "react";
import styles from './style';



const Icon = ({ component }) => {
	const classes = styles();

	return <div className={classes.container}>{component}</div>;
};

export default Icon;