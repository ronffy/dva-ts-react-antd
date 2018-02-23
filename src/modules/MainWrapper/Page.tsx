import * as React from 'react'
import { connect } from 'dva'
import { DatePicker, Button, Card, List, Avatar, Icon } from 'antd'
import classnames from 'classnames'
import { Link, withRouter } from 'dva/router'
import { LAYOUT_NAMESPACE } from 'configs/ConstConfig'
import WithCommonProps from 'domainComponents/WithCommonProps'
import Demo from './demo'
const styles = require("./styles.less")

function thefn(cb: (n: number) => number): number {
  return cb(3)
}

thefn(() => 3)

type ns = number | string;
let n: ns = 'name';

type cb = (n: string) => void;
let fn:cb = (n: string): void => { /**/ }


type effects = 'scroll' | 'routate' | 'scale';
function animate(effect: effects) { /**/ }
animate('routate')


class C3{
  public name: string;
  constructor(name){
    this.name = name
  }
}




// TS环境下：¨
// let n = 0;
// 等同于：
// let n: number = 0;
// n = []; // Error



// 尽可能地使用--strictNullChecks

interface Person{
  name: string,
  age: number;
  readonly childs: Array<number>,
  friends: string[],
  shoes?: string, // 默认每项都是必传项，？指非必传项 
  other: any, //any 可以指定任意数据类型，单不能不传
}

function greeter(person: Person): string {
  let { name, age, childs, friends, other } = person;
  // friends.push(3); //Error
  // console.log(person.name2); //Error
  // person.childs = []; //Error
  person.childs.push(3);
  
  other = 123 //OK
  let strLength: number = (name as string).length; //类型断言， 当使用JSX时，只有 as语法断言是被允许的
  return `${name}: ${age} - ${childs.join()} - ${friends.join()} - ${other}`
}

function hello(params: { name: string }): any {
  return name
}
hello({ name: '12' })



// 一个函数没有返回值时， 用void
function returnUndefined(params:any): void {
  console.log(params);
  // return 't'; // Error
}


// 泛型  ： 使返回值的类型与传入参数的类型是相同的
// function identity(arg: any): any { //无法确定传入参数和返回数据类型一致
//   return arg;
// }
function identity<T>(arg: T): T { //T： 类型变量
  return arg;
}

// let a = identity<number>(3); //一般使用下面的简写
let a = identity(3);
console.log(a);

let arr: Array<number> = [1, 2];

let x: (number | string) = 3;


class C {
  public x: number;
  a: string;
  constructor(x: number, a: string, public b: number  = 3) {
    this.x = x;
    this.a = a;
    this.b = b;
  }
}

let c = new C(1, '2')
console.log(c);
// console.log(c.c); //Error 属性c是私有属性，只能在类C中访问


let d: ReadonlyArray<number> = [1, 3, 5];
// d.push(7); //Error ReadonlyArray把数组所有可变方法去掉了，确保数组创建后再也不能被修改

interface N{
  n1: number,
  n2: string
}
function fn1(params:N) { /**/ }
fn1({ n1: 3 } as N)



class C2 {
  private c: boolean;
  readonly d: boolean;
  constructor(c = false, d = true) {
    this.c = c; //外界无法通过实例访问c属性
    this.d = d; // 只读属性必须在声明时或构造函数里被初始化
  }
}

const mapStateToProps = state => {
  return {
  }
}
interface G2{
  name?: string
}
@withRouter
@WithCommonProps
@connect(mapStateToProps)
class IndexPage extends React.Component<any, any>{
  constructor(props) {
    super(props)
  }
  render() {
    const { dispatch, children, theme } = this.props;
    const pageClasses = classnames({
      [styles["page"]]: true,
      [styles[theme]]: true
    })
    
    return (
      <div className={pageClasses}>
        {children}
        <Demo />
        <DatePicker />
        <Icon type="link" />
        <Button type="primary">{greeter({ name: 'whr', age: 3, childs: [1, 2], friends: ['she', 'he'], other: '哈哈' })}</Button>
      </div>
    );
  }
}




// 1，限制参数有且必须有哪些属性及类型？
// interface N {
//   n1: number,
//   n2: string,
// }

// 2，使用上述接口N的部分参数限制，在传参时使用断言
// fn({ n1: 3 } as N); //绕开了n2的类型限制

// 3，限制参数哪些是必须，但允许有固定选传参数
// interface N {
//   n1: number,
//   n2?: string
// }

// 4，限制参数哪些是必须，但允许有任意选传参数 （大部分时候不应该这样用）
// interface N {
//   n1: number,
//   [propName: string]: any,
// }

// 关于类，几个好用的技能点：


export default IndexPage