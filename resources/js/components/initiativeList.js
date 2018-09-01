import Creature from "./creature.js";

export default class InitiativeList extends React.Component
{
	next(list) {
		this.setState(list);
	}

	render()
	{
		var creatures = this.props.order;

		var creatureList = creatures.map(function(obj, i) {
			const newObj = {key: i, ...obj};
			console.log(newObj);
			return React.createElement(Creature, newObj);
		});
		return React.createElement('ul', null, creatureList);
	}
}