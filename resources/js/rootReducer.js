import initiativeNext from "./actions/initiativeNext.js"

export default function rootReducer(state = {}, action)
{
	switch (action.type)
	{
		case initiativeNext.type: return initiativeNext.resolve(state, action);
		default:
			return state;
	}
}