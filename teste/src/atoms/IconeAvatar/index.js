import React from 'react';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AvatarStyled } from './style';
import Color from 'color';
const IconeAvatar = ({ icon, cor, hover, iconSize, sizes }) => {
	return (
		<AvatarStyled backgroundColor={cor ? cor : '#ccc'} hover={hover} sizes={sizes}>
			<FontAwesomeIcon icon={icon ? icon : faFile} size={iconSize ? iconSize : 'xs'} color={cor ? cor : '#ccc'} />
		</AvatarStyled>
	);
};
export default IconeAvatar;
