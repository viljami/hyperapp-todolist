
import {h} from 'hyperapp';
import compose from '../lib/compose';

const ENTER_KEY_CODE = 13;

const getInputValueAndClear = inputElement => {
	const value = inputElement.value;
	inputElement.value = '';
	return value;
};

const getTarget = e => e.target;

const actionOnEnter = action => {
	const fn = compose(action, getInputValueAndClear, getTarget);
	return e => e.keyCode === ENTER_KEY_CODE && e.target.value !== '' && fn(e);
};

const actionOnClick = action => e => {
	// Reference to an input. Britle method.
	// Should the shared state always be stored in store?
	const input = e.target.parentElement.children[0];
	return input.value === '' || action(getInputValueAndClear(input));
};

export default ({create}) => (
	<div className="createTodoInput">
		<input type="text" onkeyup={actionOnEnter(create)} />
		<button onclick={actionOnClick(create)}>Create</button>
	</div>
);
