enum Color {
	Red,
	Green,
	Blue
}

var red = Color.Red;

console.log(Color[red]);



enum Test{
	A,      //0
	B=10,   //10
	C,      //11
	D=20,   //20
	E,      //21
	F       //22
}

console.log(Test)


enum Style {
    None = 0,
    Bold = 1,
    Italic = 2,
    Underline = 4,
    Emphasis = Bold | Italic,
    Hyperlink = Bold | Underline
}

console.log(Style.Emphasis);  //3