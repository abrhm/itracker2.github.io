const type = "INITIATIVE_NEXT";

function action()
{
	return {
		type: type,
	};
}

function resolve(state, action)
{
	let prevOrder = state.order;
	let newOrder = [];

	for (let newIdx = 0; newIdx < prevOrder.length; ++newIdx)
	{
		const prevIdx = (newIdx + 1) % prevOrder.length;
		newOrder[newIdx] = prevOrder[prevIdx];
	}



	let copy = Object.assign({}, state, {order: newOrder});
	return copy;
}

export default {
	type,
	action,
	resolve
};