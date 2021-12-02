"use strict";
//定义一个操作mysql的类 要实现泛型接口 类也应该是泛型类
class MysqlDb {
    add(info) {
        console.log(info);
        return true;
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
class MoogoDb {
    add(info) {
        console.log(info);
        return true;
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
class User {
}
let user = new User();
user.username = 'xiaoming';
user.password = '123';
let mysql = new MysqlDb();
mysql.add(user);
