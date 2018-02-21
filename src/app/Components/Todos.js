
import {h} from 'hyperapp';
import Todo from './Todo';
import './Todos.css';


const newestFirst = (a, b) => a.createdAt <= b.createdAt;
const isDone = a => !!a.isDone;
const isNotDone = a => !isDone(a);

export default ({todos, actions}) => (
	<ul className="todos">
		{
			todos
			.filter(isNotDone)
			.sort(newestFirst)
			.concat(
				todos
				.filter(isDone)
				.sort(newestFirst)
			)
			.map(todo => (
				<Todo
					{...todo}
					{...actions}
					key={`todo-${todo.id}`}
					remove={actions.remove}
				/>
			))
		}
	</ul>
);
