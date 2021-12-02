"use strict";
//对json的约束 以引入接口
function printLabel(LabelInfo) {
    console.log('print');
}
let labelJson = { label: 'zhangsan' };
printLabel(labelJson);
function print(name) {
    console.log(name.firstName + '-----' + name.lastName);
}
print({ firstName: 'hi', lastName: 'hi2' });
function print2(name) {
    console.log(name.firstName);
}
print2({ firstName: 'hi' });
function ajax(config) {
    let xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('success');
            if (config.dataType == 'json') {
                JSON.parse(xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
let md5 = function (key, value) {
    return key + value;
};
//可索引接口 数组的约束 不常用
let arr = [1, 2, 3];
let arr1 = ['a', 'b'];
let arr2 = ['a', 'b'];
let obj = { 'name': 'liming' };
class Panda {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('eat');
    }
}
class C {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('eat');
    }
    word() {
        console.log('word');
    }
}
let c = new C('li');
