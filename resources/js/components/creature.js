export default class Creature extends React.Component
{
	render()
	{
		return React.createElement('li', { className: "list-group-item" }, this.props.name);
	}
}