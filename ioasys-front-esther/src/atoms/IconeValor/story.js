import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconeValor from './index';

storiesOf('atons/IconeValor', module)
	.add('Normal', () => <IconeValor valor={1500} texto="Item" />)
	.add('Valor 0', () => <IconeValor valor={0} texto="Item" />)
	.add('Com Ação', () => (
		<IconeValor valor={1500} texto="Item" tipo="teste" cor="#E53935" onClick={action('clicked')} />
	));
