import styled from 'styled-components';

export const ContentBarraValor = styled.div`
	display: flex;
	justify-content: space-between;
	width: ${(props) => (props.full ? '100%' : 'auto')};
`;
