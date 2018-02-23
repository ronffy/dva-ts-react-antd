import React from 'react';
import { Button } from 'antd';
import request from '../../utils/request';

class Y {
	game: 'string'; // 默认所有的属性和方法都是 public 的
	private name: string = 'whr-name';
	protected age: number = 18;
	public find(): string {
		return this.name;
	}
}

class X extends Y {
	public log(): void {
		console.log(this.name); // Error
		console.log(this.age);
		console.log(this.game);
	}
}

let y1 = new Y();
// 以上是下面的简写：
// let y1: Y = new Y();

console.log(y1.name); // Error
console.log(y1.age); // Error
console.log(y1.game);
console.log(y1.find());
