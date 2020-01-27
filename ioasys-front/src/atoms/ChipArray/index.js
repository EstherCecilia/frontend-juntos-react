import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import grey from '@material-ui/core/colors/grey';
import Chip from '@material-ui/core/Chip';
import Popover from "@material-ui/core/Popover";
import FormControl from "@material-ui/core/FormControl";
const styles = (theme) => ({
	chip: {},
	avatar: {
		background: '#00000014'
	}
});

const ChipArray = ({ dados, classes }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	let texto = ``;
	Array.isArray(dados)
		? dados.forEach((valor, index) => {
				texto += `${valor} ${index < dados.length - 1 ? ' , ' : ''}`;
			})
		: typeof dados == 'object' ?
			texto = Object.keys(dados)			
		: (texto = dados);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const open = Boolean(anchorEl);

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (<>
		<Tooltip title={texto}>
			<Chip
				label={texto ? `${String(texto).substring(0, 15)}${texto.length > 15 ? '...' : ''}` : ''}
				classes={{ root: classes.chip, avatar: classes.avatar }}
				onClick={dados.length > 1 ? handleClick : () => {}}
			/>
		</Tooltip>

		<Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
            >
                <FormControl className={classes.formControl}>
					<div style={{ padding: '15px' }}>
						{ dados.map((item) => {
							return (<h4>{item}</h4>)
						})}
					</div>
                </FormControl>
        </Popover>
	</>);
};

ChipArray.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChipArray);
