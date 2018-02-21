
import pass from './pass';

export default (...fns) =>
	fns.reverse().reduce((aFn, bFn) => a => bFn(aFn(a)), pass);
