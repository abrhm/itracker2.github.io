import InitiativeList from "./components/initiativeList.js"
import rootReducer from "./rootReducer.js"
import initiativeNext from "./actions/initiativeNext.js"


console.log("initialized");


let template =
{
	"groupName": {
		"creatures": [],
		"templates": [],
		"settings": {}
	}
};


let defaultState = {
	order: [
		{ name: "Kenneth" },
		{ name: "Zera" },
		{ name: "Flint" }
	]
};




let store = Redux.createStore(rootReducer, defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let component = ReactDOM.render(
	React.createElement(InitiativeList, store.getState()),
	document.getElementById('root')
);


$("#counter").click(function(){
	store.dispatch(initiativeNext.action());
});


function handleChange()
{
	component.next(store.getState());
}

const changeListener = store.subscribe(handleChange);
