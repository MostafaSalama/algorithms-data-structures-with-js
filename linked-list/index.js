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
let linkedList = new LinkedList();
