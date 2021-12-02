"use strict";
//简单的类型 不赘述
let bool = true;
let num = 123;
let str = 'this is ts';
//数组类型两种声明
let arrN = [1, 2, 3, 4];
let arrS = ['i', 'love', 'you'];
let arrN2 = [1, 2, 3]; //第二种方法 使用泛型
//tuple类型 数组类型的一种
let tup = ['a', 1, false];
//枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {})); //不进行赋值则默认索引值 0 1 2 ...
let f = Flag.success;
//任意类型 any
let an = 'a';
an = 12;
let arrA = [1, true, 'sss'];
//任意类型有啥用啊？
let oBox = document.getElementById('box'); //不用any的话 下一行会有警告（虽然能运行 但红色很不舒服）
oBox.style.color = 'red';
//null undefined
let und;
console.log(und); //若不指定undefined 则会报错
let numn; //可以这样用
let nul;
nul = null;
//void 用于方法无返回值
function run() {
    console.log('run');
}
run();
//never类型
let nev;
//nev = 1; 报错
nev = (() => {
    throw new Error('this is an error');
})();
