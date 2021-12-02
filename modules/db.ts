let dbUrl = 'xxxx';
let aaaa:string = '123';

export function getData():any[]{
    console.log('get data of database');
    return [
        {
            title:'123'
        },
        {
            title:'456'
        }
    ];
}

export{dbUrl,aaaa};

//only use once
export default dbUrl;