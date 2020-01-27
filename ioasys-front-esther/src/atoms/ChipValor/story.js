import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ChipValor from './index';

storiesOf('atons/ChipValor', module)
	.add('Normal', () => <ChipValor valor={1500} texto="Item" />)
	.add('Com Ação', () => (
		<ChipValor valor={1500} texto="Storybook" tipo="teste" cor="#E53935" onClick={action('clicked')} />
	));
