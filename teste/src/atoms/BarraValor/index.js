import Color from 'color';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ContentBarraValor } from './style';

const BarraValor = ({ texto, valor, full }) => {
	return (
		<ContentBarraValor full={full}>
			<Typography variant="caption">{texto} </Typography>
			<Typography variant="caption">{valor} </Typography>
		</ContentBarraValor>
	);
};
export default BarraValor;
