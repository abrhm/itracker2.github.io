import { INITIATIVE_NEXT, initiativeNext } from "./actions/initiativeNext.js"

export default function rootReducer(state = {}, action)
{
	switch (action.type)
	{
		case INITIATIVE_NEXT: return {};
		default:
			return state;
	}
}