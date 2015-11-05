namespace M {
    export interface P { x: number; y: number; }
	export var a = 1;
}
class P {
	constructor(public x: number, public y: number) {

	}
}

var b = M.a; 
var c = new P(100, 200);

var d: M.P;  //使用M的命名空间访问
d = c;
console.log(b);
console.log(d.x)