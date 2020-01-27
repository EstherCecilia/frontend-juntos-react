import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import BarraPorcentagem from './index';

storiesOf('atons/BarraPorcentagem', module)
	.addDecorator(withKnobs)
	.add('Normal', () => <BarraPorcentagem porcentagem={number('porcentagem', 65)} />, {
		notes: 'Notas aqui'
	})
	.add('Porcentagem 100%', () => <BarraPorcentagem porcentagem={number('porcentagem', 100)} />)
	.add('Cor diferente', () => (
		<BarraPorcentagem porcentagem={number('porcentagem', 55)} color={text('color', 'green')} />
	))
	.add('Altura', () => (
		<BarraPorcentagem
			porcentagem={number('porcentagem', 85)}
			color={text('color', 'red')}
			height={number('height', 1)}
		/>
	));
