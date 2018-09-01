import Creature from "./creature.js";

export default class InitiativeList extends React.Component
{
	constructor(props)
	{
		super();
		this.state = {
			order: props.order
		};
	}

	next(obj) {
		this.setState(obj);
	}

	render()
	{
		var creatureList = this.state.order.map(function(obj, i) {
			const newObj = {key: i, ...obj};
			return React.createElement(Creature, newObj);
		});
		return React.createElement('ul', null, creatureList);
	}
}