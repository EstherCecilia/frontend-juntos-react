import React from 'react';

import { storiesOf } from '@storybook/react';


import IconeAvatar from './index';

storiesOf('atons/IconeAvatar', module)
	.add('Normal', () => <IconeAvatar />)
	.add('Com Ação', () => <IconeAvatar cor="#E53935" hover />)
	.add('Com Tamanho Diferente', () => <IconeAvatar cor="#E53935" hover iconSize="1x" sizes={5} />);
