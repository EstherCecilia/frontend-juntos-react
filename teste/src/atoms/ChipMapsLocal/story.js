import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import ChipMapsLocal from './index';

storiesOf('atons/ChipMapsLocal', module)
    .add('Normal', () => <ChipMapsLocal cod="1" nome="Storybook" />)
    .add('Icone Diferente', () => <ChipMapsLocal cod="1" nome="Storybook" icon={faTruck} />)
    .add('Cor diferente', () => <ChipMapsLocal cod="1" nome="Storybook" backgroundColor="#ff6e0d" color="#fff" />)
	.add('Com filho', () => <ChipMapsLocal cod="1" nome="Storybook" filho="Filho" />);
