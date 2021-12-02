//泛型函数
function getData<T>(value:T):T {
    return value;
}
getData<number>(2);
getData<string>('a');

//泛型类
class MinClass<T> {
    list:T[]=[];
    add(num:T):void{
        this.list.push(num);
    }
    min():T{
        let minNum = this.list[0];
        for(let i=0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
let m1 = new MinClass<number>();
let m2 = new MinClass<string>();

//泛型接口
interface ConfigFn{
    <T>(value:T):T;
}
let f1:ConfigFn = function<T>(value1:T):T{
    return value1;
}
f1<string>('a');
f1<number>(1);

//把类作为参数类型的泛型类
class User1 {
    username:string|undefined; //防止不赋值
    password:string|undefined;
}
class MysqlDb1<T> {
    add(info:T):boolean{
        return true;
    }
}
let u = new User1();
u.username = 'xiaoming';
u.password = '123';
let md = new MysqlDb1<User1>();
md.add(u);