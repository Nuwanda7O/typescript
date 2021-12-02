/*
    内部模块==命名空间 外部模块==模块
    模块在自身作用域里执行 不是在全局作用域
*/
import {getData as get} from './modules/db'
get();