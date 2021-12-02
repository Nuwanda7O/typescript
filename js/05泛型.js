"use strict";
//泛型函数
function getData(value) {
    return value;
}
getData(2);
getData('a');
//泛型类
class MinClass {
    constructor() {
        this.list = [];
    }
    add(num) {
        this.list.push(num);
    }
    min() {
        let minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
let m1 = new MinClass();
let m2 = new MinClass();
let f1 = function (value1) {
    return value1;
};
f1('a');
f1(1);
//把类作为参数类型的泛型类
class User1 {
}
class MysqlDb1 {
    add(info) {
        return true;
    }
}
let u = new User1();
u.username = 'xiaoming';
u.password = '123';
let md = new MysqlDb1();
md.add(u);
