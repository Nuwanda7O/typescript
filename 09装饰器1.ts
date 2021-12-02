//定义装饰器
function logClass(params: any) {
    console.log(params);
    //params就是当前类

    params.prototype.apiUrl = '动态拓展的属性';

    params.prototype.run = function () {
        console.log('running');

    }
}

//调用装饰器
@logClass
class HttpClient {
    constructor() {

    }
    getData() {

    }
}
let http: any = new HttpClient();

console.log(http.apiUrl);
http.run();


//装饰器工厂
function logClass1(params: string) {
    return function (target: any) { //target是当前类
        console.log(target);
        console.log(params);
        target.prototype.apiUrl = params;
    }
}

@logClass1('str')
class HttpClient1 {
    constructor() {

    }
}
let http1: any = new HttpClient1();
console.log(http1.apiUrl);


//类装饰器替换类构造函数
function logClass2(target:any){
    console.log(target);
    return class extends target{
        apiUrl:any = 'i am modified data';

        //重载
        getData(){
            console.log(this.apiUrl);
        }
    }
}

@logClass2
class HttpClient2 {
    public apiUrl: string | undefined;
    constructor() {
        this.apiUrl = 'i am in constructor';
    }
    getData() {
        console.log(this.apiUrl);
    }
}
let http2 = new HttpClient2();
http2.getData();


//属性装饰器
function logProperty(params:any){
    return function(target:any,attr:any){
        console.log(target); //类的原型对象 与类修饰器不同 类修饰器是当前类
        console.log(attr); //apiUrl
        
    }
}
@logClass1('apiUrl')
class HttpClient3 {
    @logProperty('http')  //装饰apiUrl属性
    public apiUrl: string | undefined;
    constructor() {
        this.apiUrl = 'i am in constructor';
    }
    getData() {
        console.log(this.apiUrl);
    }
}