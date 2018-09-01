export default class Creature extends React.Component
{
	render()
	{
		console.log(this.props);
		return React.createElement('li', null, this.props.name);
	}
}