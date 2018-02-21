
# Hyperapp Todo List

This application is exercise in [Hyperapp](https://github.com/JorgeBucaran/hyperapp).

```
# install
npm install

# Run
npm start
```


## Notes

Some findings while building todo list.

  * No refs
  * Store supports only root objects (at the time of writing)


### No refs

In same component it is not possible to reference to the elements. For example if you need the value of an input element when you click a button you have two uptions. Traversing the dom tree in rather none maintainable way or storing the input way to store. The second option is more code and I still would do it in an larger app cause maintaining those references can turn out a pain.

The first uption was to find the input relative to the button's click event's target.

```
// Looks brittle, eh?
const actionOnClick = action => e => create(e.target.parentElement.children[0].value);
const actionOnEnter = action => e => e.keyCode === ENTER_KEY_CODE && action(e.target.value);

const createTodoInput = ({create}) => (
	<div className="createTodoInput">
		<input type="text" onkeyup={actionOnEnter(create)} />
		<button onclick={actionOnClick(create)}>Create</button>
	</div>
);
```

The second option is to always store a shared state into store. Not just shared state between components but also shared state between inputs.

```jsx
// Store

const state = {newTodoText: '', todos: []};
const actions = {
	updateInputText: newTodoText => state => ({...state, newTodoText}),
    create: text => state => ({
    	newTodoText: '',
    	todos: state.todos.concat(state.newTodoText)
    })
};

// CreateTodoInput

const actionOnclick = (create) => e => state.newTodoText;
const actionOnKeyup = (action, text) => () => action(text);

const createTodoInput = (state, actions) => (
	<div className="createTodoInput">
		<input type="text" onkeyup={actionOnKeyup(actions.updateInputText)} />
		<button onclick={actionOnClick(create, state.newTodoText)}>Create</button>
	</div>
);
```


### Store supports only root objects

At the time of writing store supports only root level objects. No arrays. Try to do it and you end up with:

```
const state = [{a: 1}]; // After one mutable operation => {'0': {a: 1}}
```
