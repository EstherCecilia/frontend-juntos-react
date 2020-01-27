import React from 'react';

const LabelNiveis = ({ niveis }) => {
	return <div>{niveis.map((nivel,index) => <span key={index}>{nivel.key} {index < (niveis.length -1) && <span>  > </span>}</span>)}</div>;
};
export default LabelNiveis;
