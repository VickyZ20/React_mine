var a = 1;
b = 2;
function func() {
    var c = 3;
    d = 4;
    if (d == 4) {
        var e = 6;
        f = 7;
    }
    console.log(b);
    console.log(window.b);
}
func();



var arr = ['a', 'b', 'c', 'd'];

for (var i= 0; i < 4; i++) {
    console.log(arr[i]);
}

for (var index in arr) {
    console.log((arr[index]));
}

arr.forEach(function (item) {
    console.log(item);
})

var arr = [1,2,3];
var f = function (v) {
    return v * 2;
}

arr.map(f);
arr.map(function(v) {
    return v * 2;
});



function f() {
    var a = 5;
}
f();
console.log(a);



function example1() {
    var a = 5;
    function inner() {
        console.log(a);
    }
    inner();
}

example1();





function example1() {
    var a = 5;

    function inner() {
        console.log(a++);
    }
    function inner1() {
        console.log(a++);
    }
    inner();
    inner1();
}
example1();

function generate(num) {
    var message = "num is: ";
    var func = function () {
        console.log(message + num);
    }
    return func;
}

function example2() {
    var fArr = [];
    for (var i = 0; i < 5; i++) {
        var f = generate(i);
        fArr.push(f);
    }

    for (i= 0; i < 5; i++) {
        fArr[i]();
    }
}




























