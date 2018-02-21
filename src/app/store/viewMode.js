
export const actions = {
	toggle: () => ({isNight}) => ({isNight: console.log(isNight) || !isNight})
};

export default {
	isNight: false
};
