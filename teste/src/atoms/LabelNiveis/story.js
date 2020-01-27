import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import LabelNiveis from './index';

const niveis = [
	{
		key: 'MG'
	},
	{
		key: 'Sul de Minas'
	},
	{
		key: 'Juiz de Fora'
	},
	{
		key: 'Rota Principal'
	}
];

storiesOf('atons/LabelNiveis', module).add('Normal', () => <LabelNiveis niveis={niveis} />).addDecorator(withKnobs);
