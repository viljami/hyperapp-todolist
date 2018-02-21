
import {h} from 'hyperapp';
import UpdateTodoInput from './UpdateTodoInput';
import './Todo.css';

const isToday = date => {
	const today = new Date();
	return date.getYear() === today.getYear() &&
		date.getMonth() === today.getMonth() &&
		date.getDate() === today.getDate();
};

const getDate = timestamp => {
	const d = new Date(timestamp);
	return isToday(d) ?
		`${d.getHours()}:${d.getMinutes()}` :
		(d).toISOString().split('T')[0];
};

const doActionWithArgs = (action, ...args) => () => action(...args);

export default ({
	id,
	text,
	isDone,
	isEditing,
	createdAt,
	updatedAt,
	remove,
	updateText,
	toggleComplete,
	toggleEditing
}) => (
	<li className={`todo ${isDone ? 'done' : ''}`}>
		{
			!isDone &&
			<button class="makeDone" onclick={doActionWithArgs(toggleComplete, id)}>Do</button>
		}

		<p onclick={doActionWithArgs(toggleEditing, id)}>
			{!isEditing || isDone ? text : <UpdateTodoInput text={text} updateText={updateText} />}
		</p>

		<span class="details">
			Created: {getDate(createdAt)}
			{createdAt === updatedAt ? '' : `, Updated: ${getDate(updatedAt)}`}
		</span>

		<button class="remove" onclick={doActionWithArgs(remove, id)}>x</button>
	</li>
);
