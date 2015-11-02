class Point {
	constructor(public x: number, public y: number) {

	}

	public distance(p: Point) {
        var dx = this.x - p.x;
        var dy = this.y - p.y;
        return Math.sqrt(dx * dx + dy * dy);
	}
	static origin = new Point(0, 0);
	static distance(p1: Point, p2: Point) { return p1.distance(p2); }
}

class ColoredPoint extends Point {
	constructor(x: number, y: number, public color: string) {
		super(x, y); // must
	}
}



class A {
	a = 1;
    static create() {
        return new this();
	}
}
class B extends A {
    b = 2;
}
var x = A.create();  // new A()
var y = B.create();  // new B()