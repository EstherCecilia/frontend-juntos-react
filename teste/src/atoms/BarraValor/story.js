import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BarraValor from './index';

storiesOf('atons/BarraValor', module)
  .add('Normal', () => <BarraValor valor={1500} texto="Exemplo 1"/>)
  .add('Full', () => <BarraValor valor={1500} texto="Exemplo 1" full/>)
