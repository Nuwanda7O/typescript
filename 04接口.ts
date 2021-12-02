//对json的约束 以引入接口
function printLabel(LabelInfo:{'label':string}):void {
    console.log('print');
    
}
let labelJson = {label:'zhangsan'};
printLabel(labelJson);

interface fullName{
    firstName:string; //注意;结束
    lastName:string;
}
function print(name:fullName) {
    console.log(name.firstName+'-----'+name.lastName);
}
print({firstName:'hi',lastName:'hi2'})
//接口 可选属性
interface fullName1{
    firstName:string; //注意;结束
    lastName?:string;
}
function print2(name:fullName1) {
    console.log(name.firstName);
}
print2({firstName:'hi'})

//封装AJAX
interface Config{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}
function ajax(config:Config) {
    let xhr = new XMLHttpRequest();
    xhr.open(config.type,config.url,true);
    xhr.send(config.data);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status==200){
            console.log('success');
            if(config.dataType=='json'){
                JSON.parse(xhr.responseText)
            }else{
                console.log(xhr.responseText);
            }
            
        }
    }
}

//函数类型接口
interface encrypt{
    //定义传参类型和返回值类型
    (key:string,value:string):string;
}
let md5:encrypt=function(key:string,value:string):string{
    return key+value;
}

//可索引接口 数组的约束 不常用
let arr:number[] = [1,2,3];
let arr1:Array<string> = ['a','b'];

interface UseArr{
    [index:number]:string;
}
let arr2:UseArr=['a','b'];
//可索引接口 对对象约束
interface UserObj{
    [index:string]:string;
}
let obj:UserObj={'name':'liming'};

//类类型接口
interface Animal{
    name:string;
    eat(str:string):void;
}
class Panda implements Animal {
    name: string;
    constructor(name:string) {
        this.name = name;
    }
    eat(){
        console.log('eat');
        
    }
}

//接口的继承
interface A{
    eat():void;

}
interface B extends A{
    word():void;
}
class C implements B{
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    eat(): void {
        console.log('eat');
        
    }
    word(): void {
        console.log('word');
        
    }
}
let c = new C('li');