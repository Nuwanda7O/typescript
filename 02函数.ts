//函数声明
function run0():string {
    return 'i am running';// return 123; 则报错
}

//匿名函数
let run2 = function():string {
    return '...';
}

//定义方法传参
function getInfo(name:string,age:number):string{
    return `${name} is ${age} old`;
}
getInfo('xiaoming',11);
//匿名函数传参同上... 不赘述

//可选参数 即调用函数时参数可以传可以不传 可选参数必须配置到参数列表最后面
//定义方法传参
function getInfo1(name:string,age?:number):string{
    if(age){
        return `${name}----${age}`;
    }else{
        return `${name} --- 年龄保密`;
    }
}
getInfo1('xiaoming');
getInfo1('xiaoming',12);

//默认参数
function go(name:number=20):void{
    console.log(name);
}

//剩余参数 用到拓展运算符接收形参
function sum(...res:number[]):number{
    let sum = 0;
    for(let i = 0;i < res.length;i++){
        sum+=res[i];
    }
    return sum;
}
sum(1,2,3);
sum(1,2,3,4,5,5,6,7,8,1,0);

//函数重载 手动重载...xswl 但是可以限制传参类型 比如传一个boolean类型就报错
function overload(str:string):string;
function overload(num:number):string; 
function overload(an:any):any{
    if(typeof an === 'string'){
        return an;
    }else{
        return 'my age is' + an;
    }
}

function overload2(str:string):string;
function overload2(str:string,num:number):string;
function overload2(str:any,num?:any):any{ //这里最好全写成any
    if(num){
        return str + num;
    }else{
        return str;
    }
}

//箭头函数
//this指向上下文
setTimeout(()=>{
    alert('1s past');
},1000)