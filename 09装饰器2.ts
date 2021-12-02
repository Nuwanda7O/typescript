//方法装饰器
/*
三个参数：
    对于静态成员来说是类的构造函数 对于实例成员来说是类的原型对象
    成员名字
    成员的属性描述符
*/
{


function get(params:any){
    return function(target:any,methodName:any,desc:any){
        console.log('hi');
        target.apiUrl = 'xxx';
        target.run = function(){
            console.log('run');
        }
        //修改方法装饰器绑定的方法 使传参改为string类型
        let oMethod = desc.value;
        desc.value = function(...args:any[]){
            args = args.map((value)=>{
                return String(value);
            })
        }
    }
}


class HttpClient {
    public url:any | undefined;
    constructor() {
    }
    @get('http://www.baidu.com')
    getData() {
        console.log(this.url);
    }
}
let http: any = new HttpClient();
console.log(http.apiUrl);
http.run();











}