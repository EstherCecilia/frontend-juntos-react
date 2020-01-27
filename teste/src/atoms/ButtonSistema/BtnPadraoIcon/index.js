import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Button, FabSty, FabTeste } from './style';
// import { faChevronCircleDown, faEraser } from '@fortawesome/free-solid-svg-icons';

const styles = (theme) => ({
	ButtonBuscar: {
		borderRadius: '20px',
		padding: '1px 20px',
		background: '#ff6e0d',
		color: 'white',
		margin: '10px 0px',
		textTransform: 'uppercase',

		letterSpacing: '.16em',
		fontSize: '12px',
		fontWeight: '400',
		lineHeight: 'normal',
		height: 'auto',
		'&:hover': {
			textDecoration: 'none',
			backgroundColor: '#ffa86e'
		}
	},
	icon: {
		margin: '0px',
		marginRight: '7px'
	}
});

//passar por parametro (texto, icon, title, onClick)
const BtnPadraoIcon = ({ classes, onClick, texto, icon, title, children, className, ...props }) => {
	const handleClick = () => {
		onClick();
	};
	return (
		<div>
			<Tooltip title={title} disableHoverListener={title ? false : true}>
				<Button
					size="large"
					color="primary"
					className={`${classes.ButtonBuscar} ${className}`}
					onClick={handleClick}
					aria-label="Add"
					variant="extended"
					{ ...props }
				>
					<div className={classes.icon}>
						<FontAwesomeIcon icon={icon} className="m-2" />
					</div>
					{children ? children : texto}
				</Button>
			</Tooltip>
		</div>
	);
};

BtnPadraoIcon.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(BtnPadraoIcon);
