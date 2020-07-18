import _ from 'lodash';
export const createLoadingSelector = (actions) => (state) => {
	//console.warn(_(actions).some((action) => _.get(state, `loading.${action}`)));

	// returns true only when all actions is not loading
	return _(actions).some((action) => _.get(state, `loading.${action}`));
};
