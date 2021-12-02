//简单的类型 不赘述
let bool:boolean = true;
let num:number = 123;
let str:string = 'this is ts';

//数组类型两种声明
let arrN:number[] = [1,2,3,4];
let arrS:string[] = ['i','love','you'];
let arrN2:Array<number> = [1,2,3]; //第二种方法 使用泛型

//tuple类型 数组类型的一种
let tup:[string,number,boolean] = ['a',1,false];

//枚举类型
enum Flag  {success=1,error=-1} //不进行赋值则默认索引值 0 1 2 ...
let f:Flag = Flag.success

//任意类型 any
let an:any = 'a';
an =12;
let arrA:any = [1,true,'sss'];
//任意类型有啥用啊？
let oBox:any = document.getElementById('box');//不用any的话 下一行会有警告（虽然能运行 但红色很不舒服）
oBox.style.color = 'red';

//null undefined
let und:undefined;
console.log(und); //若不指定undefined 则会报错
let numn:number|undefined;//可以这样用
let nul:null;
nul =null;

//void 用于方法无返回值
function run():void{
    console.log('run');
}
run();

//never类型
let nev:never;
//nev = 1; 报错
nev =(()=>{
    throw new Error('this is an error');
})()