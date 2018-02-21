
let counter = 0;
const getId = () => counter++;

export const actions = {
  create: text => state => {
  	const now = Date.now();

	return {
		items: state.items.concat({
			id: getId(),
			text,
			isDone: false,
			isEditing: false,
			createdAt: now,
			updatedAt: now
		})
	};
  },

  remove: id => state => ({
  	items: state.items.filter(a => a.id !== id)
  }),

  updateText: (id, text) => state => ({
  	items: state.items.map(a => a.id !== id ? a : ({...a, text, updatedAt: Date.now()}))
  }),

  toggleComplete: id => state => console.log(id, state) || ({
  	items: state.items.map(a => a.id !== id ? a : ({...a, isDone: !a.isDone}))
  }),

  toggleEditing: id => state => ({
  	items: state.items.map(a => a.id !== id ? a : ({...a, isEditing: !a.isEditing}))
  })
};

export default {items: []};
