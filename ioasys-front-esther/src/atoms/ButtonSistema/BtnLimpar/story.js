import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BtnLimpar from './index';

storiesOf('atons/ButtonSistema/BtnLimpar', module)
	.add('Normal', () => <BtnLimpar title="Teste Normal" />);
