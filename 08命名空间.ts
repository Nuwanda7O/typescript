//避免各类变量名相冲突
namespace A{
    class Person{
        name:string;
        constructor(name:string){
            this.name = name;
        }
        run():void{
            alert(this.name + 'running');
        }
    }
    let p = new Person('xiaoming');
    p.run();
    class Web extends Person{
        constructor(name:string){
            super(name);
        }
    }
    let w = new Web('xiaowang');
}


namespace B{
    class Person{
        name:string;
        constructor(name:string){
            this.name = name;
        }
        run():void{
            alert(this.name + 'running');
        }
    }
    let p = new Person('xiaoming');
    p.run();
    export class Web extends Person{
        constructor(name:string){
            super(name);
        }
    }
    let w = new Web('xiaowang');
}

//外部调用命名空间内变量 方法
let ww = new B.Web('dou');

//命名空间同模块一样引入
// import {A} from './08命名空间'