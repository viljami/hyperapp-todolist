
import {h} from 'hyperapp';
import './UpdateTodoInput.css';

const doActionWithArgsAndTargetValue = (action, ...args) => e => action(...args, e.target.value);

export default ({id, text, updateText}) => (
	<input
		className="updateTodoInput"
		type="text"
		value={text}
		onkeydown={doActionWithArgsAndTargetValue(updateText, id)}
	/>
);
