
import {h} from 'hyperapp';
import CreateTodoInput from './Components/CreateTodoInput';
import Todos from './Components/Todos';
import NightMode from './Components/NightMode';
import './view.css';


export default ({todos, viewMode}, actions) => (
  <main className={viewMode.isNight ? 'night' : ''}>
  	<div className="content">
	  	<NightMode toggleLights={actions.viewMode.toggle} viewMode={viewMode} />

	  	<h1>Todos</h1>

	    <CreateTodoInput create={actions.todos.create} />

	    <p>Count {todos.items.length} </p>

	    <Todos todos={todos.items} actions={actions.todos} />
    </div>
  </main>
);
