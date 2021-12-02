interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}

//定义一个操作mysql的类 要实现泛型接口 类也应该是泛型类
class MysqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log(info);
        return true;
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
}

class MoogoDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log(info);
        return true;
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
}


class User {
    username:string|undefined; //防止不赋值
    password:string|undefined;
}

let user = new User();
user.username = 'xiaoming';
user.password = '123';
let mysql = new MysqlDb<User>();
mysql.add(user);