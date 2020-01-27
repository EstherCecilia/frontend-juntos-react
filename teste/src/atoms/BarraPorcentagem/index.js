import Color from 'color';
import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { ContentPorcentagem, ConteudoPorcentagem } from './style';
const BarraPorcentagem = ({ porcentagem, color, height, onClick, hover }) => {
	return (
		<Tooltip title={`Porcentagem ${porcentagem}%`}>
			<ContentPorcentagem height={height} onClick={onClick} hover={hover}>
				<ConteudoPorcentagem color={color} width={porcentagem} />
			</ContentPorcentagem>
		</Tooltip>
	);
};
export default BarraPorcentagem;
