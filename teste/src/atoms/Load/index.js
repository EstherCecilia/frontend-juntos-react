import React from 'react';
import PropTypes from 'prop-types';
import { Button, FabSty, FabTeste } from './style';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
	root: {
		flexGrow: 1
	}
};
//passar por parametro (title, onClick)
const Load = ({ onClick, title, classes }) => {
	const handleClick = () => {
		onClick();
	};
	return (
		<div >
			<br />
			<LinearProgress color="primary" />
		</div>
	);
};
Load.propTypes = {
	classes: PropTypes.object.isRequired
};
export default Load;
