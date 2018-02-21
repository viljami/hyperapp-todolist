
import todos, {actions as todosActions} from './todos';
import viewMode, {actions as viewModeActions} from './viewMode';

export const actions = {
  todos: todosActions,
  viewMode: viewModeActions
};

export default {
  todos,
  viewMode
};
