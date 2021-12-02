"use strict";
// es5的类
// 1简单类
// function Person(){
//     this.name = 'xiaoming';
//     this.age = 20;
// }
// let p = new Person();
// console.log(p.name);
// 2构造函数和原型链里增加方法
// function Person() {
//     this.name = 'xiaoming';
//     this.age = 20;
//     this.run = function(){
//         console.log('running');
//     }
// }
// let p = new Person();
// console.log(p.run());
// Person.prototype.sex = 'male';
// p.sex
// 需注意的是 原型链上的属性和方法会被多个实例共享
//3静态方法
// Person.get = function();
// Person.get()
//4继承1 对象冒充继承
// function Student(){
//     Person.call(this);
// }
// let s = new Student();
// 注意:这种对象冒充可以继承构造函数中的属性和方法 但是不能继承原型链上的属性和方法
//4继承2 原型链
// function Web(){}
// Web.prototype = new Person();
// 注意:虽然改进了对象冒充继承 但是实例化子类时无法给父类传参
//4继承3 组合继承模式 有空再学吧 学了也忘
//ts类
class Person {
    constructor(name) {
        this.name = name;
    }
    run() {
        alert(this.name + 'running');
    }
}
let p = new Person('xiaoming');
p.run();
//ts继承
class Web extends Person {
    constructor(name) {
        super(name);
    }
}
let w = new Web('xiaowang');
//类修饰符 public-- 公有 类里 子类 类外都可访问 -- protected-- 类里 子类 可访问 -- private-- 私有 仅类里可访问 ---
class P {
    constructor(name) {
        this.name = 'hi';
        this.name = name;
    }
    get() {
        return this.name;
    }
    //静态属性 静态方法
    static print() {
        console.log('hi');
    }
}
P.sex = 'male';
P.print();
//多态
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        //具体吃什么不知道 每一个子类表现不一样
        console.log('eating');
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    eat() {
        return this.name + 'eating';
    }
}
//abstract 抽象类 抽象方法
class Animals {
    constructor(name) {
        this.name = name;
    }
}
class Dogs extends Animals {
    constructor(name) {
        super(name);
    }
    eat() {
        console.log('eating');
    }
}
