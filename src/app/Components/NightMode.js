
import {h} from 'hyperapp';

const doAction = action => () => action();

export default ({viewMode, toggleLights}) => (
	<button onclick={doAction(toggleLights)} >
  		Sun {viewMode.isNight ? 'up' : 'down'}
  	</button>
);
