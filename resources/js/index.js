import InitiativeList from "./components/initiativeList.js"
// import Creature from "./components/creature.js";
import rootReducer from "./rootReducer.js"

import initiativeNext from "./actions/initiativeNext.js"


console.log("initialized");

let defaultState = {
	order: [
		{ name: "Kenneth" },
		{ name: "Zera" },
		{ name: "Flint" }
	]
};

let store = Redux.createStore(rootReducer, defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



var initiativeList = React.createElement(InitiativeList, store.getState());

ReactDOM.render(
	initiativeList,
	document.getElementById('root')
);


$("#counter").click(function(){
	// console.log(INITIATIVE_NEXT);
	store.dispatch(initiativeNext.initiativeNext());
});
