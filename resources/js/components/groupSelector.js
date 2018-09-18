class Group extends React.Component
{
	render()
	{
		return React.createElement("option", {value: this.props.name}, this.props.name);
	}
}

export default class GroupSelector extends React.Component
{
	constructor(props)
	{
		super();
		this.state = {
			groups: props.groups
		};
	}

	render()
	{
		const groups = this.state.groups.map((name) => React.createElement(Group, {name, key: name}));
		return React.createElement("select", null, groups);
	}
}