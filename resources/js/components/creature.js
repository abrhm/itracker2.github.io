export default class Creature extends React.Component
{
	render()
	{
		return React.createElement('li', null, this.props.name);
	}
}