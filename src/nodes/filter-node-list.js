export function filterNodeList(nodeList, filter) {
	let d = Array.from(nodeList);

	if (typeof filter === 'string') {
		//Predefined filter by name

		//filter = this[filter];
		throw new Error('Not Implemented');
	}

	return d.filter(filter);
}
