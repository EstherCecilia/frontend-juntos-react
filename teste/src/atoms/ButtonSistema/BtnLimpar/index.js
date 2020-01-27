import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { Button, FabSty, FabTeste } from './style';

//passar por parametro (title, onClick)
const BtnLimpar = ({ onClick, title }) => {
	const handleClick = () => {
		onClick();
	};
	return (
		<div>
			<Tooltip title={title} disableHoverListener={title ? false : true}>
				<FabSty size="small" id={FabSty} aria-label="Add" onClick={handleClick}>
					<FontAwesomeIcon icon={faEraser} />
				</FabSty>
			</Tooltip>
		</div>
	);
};
BtnLimpar.propTypes = {
	classes: PropTypes.object.isRequired
};
export default BtnLimpar;
