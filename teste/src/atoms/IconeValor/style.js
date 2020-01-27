import styled, { css } from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography';
import Color from 'color';
export const ContentStyled = styled.div`
	cursor: ${(props) => (props.action ? 'pointer' : 'default')};
`;
export const ContentTypography = styled(Typography)`
 ${(props) => props.cor && css`color: ${(props) => props.cor};`}
	
`;
