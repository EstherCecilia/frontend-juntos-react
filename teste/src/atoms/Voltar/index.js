import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButtonStyled } from './style';
const Voltar = ({ onVoltar }) => {
	return (
		<IconButtonStyled onClick={onVoltar}>
			<FontAwesomeIcon icon={faArrowLeft} size="xs" />
		</IconButtonStyled>
	);
};
export default Voltar;
