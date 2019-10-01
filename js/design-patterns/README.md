# js 设计模式

## 面向对象

### 概念

* 类

```js
// 类，即模板
class People {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    eat(){
        alert(`${this.name} eat something `)
    }
    speak(){
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}
```
* 对象（实例）
```js
// 创建实例(zhang)
let zhang = new People('zhang',20)
zhang.eat()
zhang.speak()

// 创建实例(wang)
let wang = new People('wang',21)
wang.eat()
wang.speak()
```

### 面向对象三要素

#### 继承: 数据的权限和保密

```js
// 父类(人)
class People(){
    constructor(name,age){
        this.name = name 
        this.age = age
    }
    eat(){
        alert(`${this.name} eat something `)
    }
    speak(){
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}
// 子类(学生))继承父类(人)
class Student extends People{
    constructor(name,age,number){
        super(name,age) // 继承父类的 name 和 age
        this.number = number
    }
    study(){
        alert(`${this.name} study`)
    }
}

// 创建使用实例
let xiangming = new Student('xiangming',10,'A1')
xiangming.study()
console.log(xiangming.number)
xiangming.eat()

let xianghong = new Student('xinaghong',11,'A2')
xianghong.study()
xianghong.speak()
```
总结：
> `People` 是父类，公共的，不仅仅服务于 `Student`
> 继承可将公共的方法抽离处理，提高复用，减少冗余

#### 封装: 子类继承父类
    
> 三个关键字（ES6尚不支持，暂时使用 `typeScript` 举例）

* `public` 完全开放
* `protected` 对子类开放
* `private` 对自己开放

```typeScript
// 父类
class People{
    name // 定义 public 属性（不写public，默认就是public）
    age // 定义 public 属性（不写public，默认就是public）
    protected weight // 定义 protected 属性（对子类公开）
    constructor(name,age){
        this.name = name
        this.age = age
        this.weight = 120
    }
    eat(){
        alert(`${this.name} eat something`)
    }
    speak(){
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}
// 子类
class Student exends People(){
    number // 定义 public 属性（不写public，默认就是public）
    private girlFriend // 定义 private 属性 （私有，父类子类都不能访问，只有本身可以访问）
    constructor(name,age,number){
        super(name,age)
        this.number = number
        this.girlFriend = 'xiaoli'
    }
    study(){
        alert(`${this.name} study`)
    }
    getWeight(){
        alert(`${this.weight}`)
    }
}
//实例
let xiaoming = new Student('xiangming',10,'A1')
xiangming.getWeight()   // xiangming获取自己女朋友的 weight（体重）
// console.log(xiangming.girlFriend)  // 注意：直接编译会报错，女朋友是私有的（private）
```
 总结：
> 减少耦合，不该外漏的不外漏
> 利于数据，接口的权限管理
> ES6目前不支持(ES9中支持 `#` )，js里一般认为 `_` 开头的属性是 `private`

#### 多态: 同一接口不同实现
> 同一接口，不同表现
> js 应用极少
> 需要结合 Java 等语言的接口 重写 重载等功能

```js
// 父类（人）
class People{
    constructor(name){
        this.name = name
    }
    saySomething(){ }
}
// 子类 A
class A extends People{
    constructor(anme){
        super(name)
    }
    saySomething(
        alert('I am ' + this.name) // I am a
    )
}
// 子类 B
class B extends People{
    constructor(name){
        super(name)
    }
    saySomething(){
        alert('I am ' + this.name) // I am b 
    }
}
let a = new A('a')
a.saySomething() // 子类里的 saySomething 并没有将父类或前一个子类里的 saySomething 覆盖掉
let b = new B('b')
b.saySomething() // 子类里的 saySomething 并没有将父类或前一个子类里的 saySomething 覆盖掉
```
总结：
> 保持子类的开放性和灵活性
> 面向接口编程
> (js 使用极少，了解即可)


#### jQuery 应用举例

> `jQuery` 是一个 `class`
> `$('p')` 是一个 `jQuery` 的一个实例

```js
// 创建 jQuery 类，即模板
class jQuery{
    constructor(selcetor){
        let slice = Array.prototype.slice,
            dom = slice.call(document.querySelectorAll(selector)),
            len = dom ? dom.length : 0
            
            for(let i = 0; i < len; i++){
                this[i] = dom[i]
            }

            this.length = len
            this.selector = selector || ''
    }
    append(node){}
    addClass(name){}
    html(data){}
    // 此处省略 n 个 API
}
window.$ = function(selector){
    // 工厂模式
    return new jQuery(selector)
}

// 实例
let $p = $('p')
console.log($p)
console.log($p.addClass())
```

####  为何使用面向对象？

程序的执行有 **顺序，判断，循环** —— 结构化
而 **面向对象** —— 数据结构化
对技算机，结构化的才最简单
编程应 **简单&抽象** ——面向对象解决的就是这个问题

程序的执行顺序一般主要有判断（if，else，switch，case……）和循环（for……）。使用面像对象主要是使 **数据结构化** ——松本行弘（日本人，ruby语言作者），数据结构化才能使代码简单&抽象，简单&抽象的代码更利于计算机识别

### js 面向对象应用举例

### 面向对象的意义

## 设计原则

### 何为设计？

* 描述何为设计

> 按照一种设计或者标准来实现功能

> 功能相同，可以有不同的方案来实现

> 伴随着需求的增加，设计的作用才能体现出来
 

* 结合《UNIX/LINUX设计哲学》

《UNIX/LINUX设计哲学》小准则：
    
1. 小即是美
2. 让每个程序只做好一件事
3. 快速建立原型
4. 舍弃高效率而取可移植性
5. 采用纯文本来存储数据
6. 充分利用软件的杠杆效应（软件复用）
7. 是用 shell 脚本来提高杠杆效应和可移植性
8. 避免强制性的用户界面
9. 让每个程序都称为过滤器

1. 允许用户定制环境
2. 尽量使用操作系统内核小而轻量化
3. 使用小写字母并尽量简短
4. 沉默是金
5. 各部分之和大于整体
6. 寻求 90% 的解决方案

### 五大设计原则（ S O L I D ）

* S（single） - 单一职责原则
    - 一个程序只做好一件事情
    - 如果功能过于复杂就拆分开，每个部分保持独立

* O（open） - 开放封闭原则
    - 对扩展开放，对修改封闭
    - 增加需求时，扩展新代码，而非修改已有代码

* L（lee） - 李氏置换原则
    - 子类能覆盖父类
    - 父类能出现的地方子类就能出现
    - js中使用较少（主要是js弱类型&继承使用较少）

* I（interface） - 接口独立原则
    - 保持接口的单一独立，避免出现"胖接口"
    - js中没有接口（typeScript例外），使用较少
    - 类似于单一设计原则，这里更关注接口
     
* D（depend） - 依赖导致原则
    - 面向接口编程，依赖于抽象而不依赖于具体
    - 使用方只关注接口而不关注具体类的实现
    - js中使用较少（没有接口&弱类型）

总结：

S O 体现较多，重点学习
L I D 体现较少，但是要了解其用意

<img src="./imgs/promise-demo.png" title="用promise来说明SO" alt="用promise来说明SO">
<img src="./imgs/promise-result-demo.png" title="用promise来说明SO结果" alt="用promise来说明SO结果用法">

* 单一职责原则： 每个 `then` 中的逻辑只做好一件事
* 开发封闭原则： 如果需求增加，扩展 `then`
* 对扩展开发，对修改封闭


### 从设计到模式

* 设计

* 模式

* 分开

* 从设计到模式

### 介绍23种设计模式

> 三大类型 23种设计模式

* 创建型
    - 工厂模式（工厂方法模式，抽象工厂模式，建造者模式）
    - 单例模式
    - 原型模式

* 结构型（组合型）
    - 适配器模式
    - 装饰器模式
    - 代理模式
    - 外观模式
    - 桥接模式
    - 组合模式
    - 享元模式

* 行为型
    - 策略模式
    - 模板方法模式
    - 观察者模式*
    - 迭代器模式*
    - 职责连模式
    - 命令模式
    - 备忘录模式
    - 状态模式
    - 访问者模式
    - 中介者模式*
    - 解释器模式

如何讲解设计模式？

> 介绍和举例（生活中易于理解的示例） 
> 画 UML 类图写 demo 代码 
> 结合经典应用场景，讲解该设计模式如何被使用 

如何学习设计模式？

> 明白每个设计的道理和用意 
> 通过经典应用体会它的真正使用场景 
> 自己编码时多思考，尽量模仿，举一反三 

下次学习—— 面试示例1