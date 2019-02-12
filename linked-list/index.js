/*
    Linked List
    Node (value , next)
 */

function Node(value) {
	this.value = value;
	this.next = null;
}

function LinkedList() {
	this.head = null;
}

LinkedList.prototype.traverse = function(cb) {
	let current = this.head;
	while (current !== null) {
		cb(current.value);
		current = current.next;
	}
};
LinkedList.prototype.addFront = function(value) {
	if (!this.head) {
		this.head = new Node(value);
		return;
	}

	const node = new Node(value);
	node.next = this.head;
	this.head = node;
};
LinkedList.prototype.insertAfter = function(prevNode, value) {
	if (!prevNode) return;
	const node = new Node(value);
	node.next = prevNode.next;
	prevNode.next = node.next;
};
/*
	append node to the end
 */
LinkedList.prototype.append = function(value) {
	if (!this.head) {
		this.head = new Node(value);
		return;
	}
	let last = this.head;
	while (last.next !== null) {
		last = last.next;
	}
	last.next = new Node(value);
};

/*
delete the first occupancy of a specific vlaue
 */

LinkedList.prototype.deleteValue = function(value) {
	let temp = this.head,
		prev = null;
	if (temp !== null && temp.value === value) {
		this.head = temp.next;
		return;
	}
	while (temp !== null && temp.value !== value) {
		prev = temp;
		temp = temp.next;
	}
	if (!temp) {
		return -1;
	}
	prev.next = temp.next;
	return temp;
};
