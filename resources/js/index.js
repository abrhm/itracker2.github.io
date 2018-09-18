import InitiativeList from "./components/initiativeList.js"
import GroupSelect from "./components/groupSelector.js"
import rootReducer from "./rootReducer.js"
import initiativeNext from "./actions/initiativeNext.js"

// TODO: remove this
console.log("initialized");

// Change between the pages
$("a.nav-link").click(function(event){
	$("div.page").hide();
	const template = _.template("div#<%= id %>-page");
	const selector = template({id : event.target.id});
	$(selector).show()
});


let template =
{
	"groupName": {
		"creatures": [],
		"templates": [],
		"settings": {}
	}
};


let defaultState = {
	groups: [
		"allies",
		"enemies",
	],
	order: [
		{ name: "Kenneth" },
		{ name: "Zera" },
		{ name: "Flint" }
	]
};

let store = Redux.createStore(rootReducer, defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let groupSelect = ReactDOM.render(
	React.createElement(GroupSelect, store.getState()),
	document.getElementById("groupList")
);

let component = ReactDOM.render(
	React.createElement(InitiativeList, store.getState()),
	document.getElementById("initiative-list-root")
);


$("#next").click(function(){
	store.dispatch(initiativeNext.action());
});


function handleChange()
{
	component.next(store.getState());
}

const changeListener = store.subscribe(handleChange);
