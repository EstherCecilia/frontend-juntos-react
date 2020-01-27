import styled from 'styled-components';

export const ContentPorcentagem = styled.div`
	height: 7px;
	background-color: #eee;
	box-shadow: rgba(62, 57, 107, 0.2) 0px 3px 10px 0px;
	display: flex;
	height: ${(props) => (props.height ? props.height : 0.5)}rem;
	overflow: hidden;
	font-size: 0.75rem;
	background-color: #e9ecef;
	border-radius: 0.25rem;
	box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
	cursor: ${(props) => (props.hover ? 'pointer' : 'default')};
`;

export const ConteudoPorcentagem = styled.div`
	background-color: ${(props) => (props.color ? props.color : '#fc7242')};
	width: ${(props) => (props.width ? props.width : '0')}%;
	box-shadow: rgba(62, 57, 107, 0.2) 3px 3px 6px 0px;
`;
