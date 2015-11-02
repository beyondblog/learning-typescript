interface NamedItem {
	name: string
}

class Item {
	constructor(public name: string, public value: number) {
	}
}

class List<T extends NamedItem> {
	next: List<T> = null;

	constructor(public item: T) {
	}

	insertAfter(item: T) {
		var temp = this.next;
		this.next = new List(item);
		this.next.next = temp;
	}

	log() {
		console.log(this.item.name)
	}
}

var list = new List<Item>(new Item("beyond", 22))

list.insertAfter(new Item("Charlie", 22))

do{
	var temp = list.item;
	if(temp == null){
		break;
	}else {
		list.log();
	}
	list =list.next;
}while(list!= null);
