import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BtnPadrao from './index';
import { faChevronCircleDown, faEraser } from '@fortawesome/free-solid-svg-icons';


storiesOf('atons/ButtonSistema/BtnPadrao', module)
	.add('Normal', () => <BtnPadrao texto={'StoryBook'} title={'Teste StoryBook'} icon={faEraser}/>);
