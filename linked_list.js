class ListNode {
	constructor(val, next) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
	}
}

class linkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	addAtStart = function (element) {
		var node = new ListNode(element);

		if (this.head == null) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
		return;
	}

	addAtEnd = function (element) {

		var node = new ListNode(element);

		var current;
		if (this.head == null) {
			this.head = node;
		} else {
			current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
		return;
	}

	addAtPosition = function (element, position) {
		if (position > this.size + 1) {
			console.log(`Position does not match size. Current size:${this.size}`);
			return;
		}

		var node = new ListNode(element);
		var current;
		var prev;

		if (this.head == null) {
			console.log('List empty');
		} else {
			current = this.head;
			prev = this.head;
			let i = 1;
			while (current.next) {
				if (position == i) {
					if (position == 1) {
						node.next = this.head;
						this.head = node;
					} else {
						node.next = current;
						prev.next = node;
					}
					break;
				}
				prev = current;
				current = current.next;
				i++;
			}
		}
		this.size++;
		return;
	}

	view = function () {
		var current;
		if (this.head == null) {
			console.log('List empty');
		} else {
			current = this.head;
			let list = "";
			while (current.next) {
				list += current.val + "-->";
				current = current.next;
			}
			list += current.val;

			console.log(list);
		}
		return;
	}

	removefromStart = function () {
		if (!this.size) {
			console.log('List empty');
			return;
		}

		var current = this.head;
		this.head = current.next;

		this.size --;
		return;
	}

	removeFromEnd = function () {
		var current;
		if (this.head == null) {
			console.log('List empty');
		} else {
			current = this.head;
			while (current.next && current.next.next) {
				current = current.next;
			}
			current.next = null;
		}
		return;
	}

	removeFromPosition = function (position) {

	}
}