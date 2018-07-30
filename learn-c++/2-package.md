# 	C++ 远征之封装篇

<a href="README.md">目录</a>



构造函数&析构函数

对象复制&对象赋值

对象数组&对象指针

this 指针

### 类的定义

> 数据成员&成员函数

<img src="imgs/class-definition.png" alt="类的定义" />

访问限定符：

- public： 公共的
- protected： 受保护的
- private： 私有的

#### 实例化类对象

类可以实例化多个对象，实例化对象的方式一般有两种：

1、 从栈中实例化

```C++
class TV{
public:
	char name[20];
	int type;

	void changeVol();
	void power();
};

int main(void){
	TV tv;
	TV tv[20];

	return 0;
}
```

2、 从堆中实例化

```C++
class TV{
public:
	char name[20];
	int type;

	void changeVol();
	void power();
};

int main(void){
	TV *p = new TV();
	TV *q = new TV[20];

	// todo

	delete p;
	delete []q;

	return 0;
}
```

#### 对象成员访问

```C++
// 单一成员
int main(void){
	TV tv;
	tv.type = 0;
	tv.changeVol();
	return 0;
}

int main(void){
	TV *p = new TV();
	p->type = 0;
	p->changeVol();
	delete p;
	p = NULL;
	return 0;
}
```

```C++
// 数组成员
int main(void){
	TV tv;
	tv.type = 0;
	tv.changeVol();
	return 0;
}

int main(void){
	TV *p = new TV[5];
	for (int i = 0; i < 5; i++){
		p[i]->type = 0;
		p[i]->changeVol();
	}
	delete []p;
	p = NULL;
	return 0;
}
```

#### 实例化类对象

```C++
#include <iostream>
#include <stdlib.h>
using namespace std;

class Coordinate{
public:
	int x;
	int y;

	void printX(){
		cout << x << endl;
	}
	void printY(){
		cout << y << endl;
	}
};

int main(void){
	// 栈
	Coordinate Coor;
	Coor.x = 10;
	Coor.y = 20;
	Coor.printX();
	Coor.printY();

	// 堆
	Coordinate *p = new Coordinate();  // 申请内存失败，返回NULL
	if (NULL == p){
		// failed 申请内存失败，直接返回
		return 0;
	}
	p->x = 100;
	p->y = 200;
	p->printX();
	p->printY();
	// 清空内存
	delete p;
	p = NULL;

	system("pause");
	return 0;
}
```

### string 类型

```C++
#include <iostream>
#include <string>
using namespace std;

int main(){
	string name = "roy";
	string hobby("football");
	cout << name << hobby << endl;
	return 0;
}
```

| 				初始化 string 对象的方式:	|				|
|-----------------------|-------------------------------|
| string s1; 			| s1 为空字符串 					|
| string s2("ABC"); 	| 用字符串字面值初始化s2 			|
| string s3(s2); 		| 将s3初始化为s2的一个副本 		|
| string s4(n,'c'); 	| 将s4初始化为字符'c'的n个副本 	|

|				string 的常用操作:		|				|
|---------------|---------------------------------------|
| s.empty() 	| 若s为空字符串，则返回true，否则返回false	|
| s.size() 		| 返回s中字符的个数 						|
| s[n] 			| 返回s中位置为n的字符，位置从0开始 		|
| s1+s2 		| 将来两个串连接成新串，返回新生成的串 		|
| s1 = s2 		| 把s1得内容替换为s2的副本 				|
| v1 == s2 		| 判定相等，相等返回true，否则返回false 	|
| v1 != s2 		| 判定不等，不等返回true，否则返回false 	|

```C++
#include <iostream>
#include <stdlib.h>
using namespace std;

/*****
 * 题目描述：
 *          1. 提示用户输入姓名
 *          2. 接收用户的输入
 *          3. 向用户问好： hello name
 *          4. 用户名字的长度
 *          5. 告诉用户名字首字母是什么
 *          6. 如果用户直接输入回车，那么告诉用户的输入为空。
 *          7. 如果用户输入的是admin，告诉用户的角色是一个管理员账户
 *****/

int main(void){
    cout << "请输入用户名：";
    string username;
    getline(cin,username);

    if(username.empty()){
        cout << " enter name cannot be empty X" << endl;
        return 0;
    }
    if(username == "admin"){
        cout << "you is a admin !" << endl;
    }
    cout << "hello " + username << endl;
    cout << "your name length is : "  <<  username.size() << endl;
    cout << "your name isitials is : " << username[0] << endl;
    return 0;
}

```

### 数据的封装

```C++
#include <iostream>
#include <stdlib.h>
#include <string>
using namespace std;

/****
	* 	 数据的封装
	* 定义一个Student类，含有如下信息：
	* 1、姓名： name
	* 2、性别： gender
	* 3、学分（只读）： score
	* 4、学习： study
	*
 ****/

class Student{
// 公共的
public:
	// 设置姓名
	void setName(string _name){
		m_strName = _name;
	}
	// 获取姓名
	string getName(){
		return m_strName;
	}
	// 设置性别
	void setGender(string _gender){
		m_strGender = _gender;
	}
	// 获取性别
	string getGender(){
		return m_strGender;
	}
	// 获取学分
	int getScore(){
		return m_iScore;
	}
	// 初始化学分 0
	void initScore(){
		m_iScore = 0;
	}
	// 增加学分
	void study(int _score){
		m_iScore += _score
	}
// 私有的
private:
	string m_strName;
	string m_strGender;
	int m_iScore;
};
int main(void){
	Student stu;
	stu.initScore();
	stu.setName("roy");
	stu.setGender("男");
	stu.study(30);
	stu.study(50);

	cout << stu.getName() << " " << stu.getGender() << "" << stu.getScore() << endl;

	return 0;
}
```

#### 类外定义

类内定义与内联函数

1、 内联函数

关键字: `inline`

```C++
inline void fun(){
	cout << "Hello" << endl;
}
```

> 内联函数与普通函数的区别

- 普通函数

	main() --> 调用fun() --> 寻找函数的入口 --> 运行函数相关的代码 --> 运行完以后回到fun()，然后去执行其它代码 --> 结束

- 内联函数

**编译时将函数体代码和实参代替函数调用语句**

__内联函数只执行比较简单的函数，编辑器会拒绝按照内联的方式编译复杂的函数__

2、 类内定义

> 成员函数在类的内部(里边)


```C++
class Student{
public:
	void setAge(int _age){ // 这三个函数就是类内定义。由于函数比较简单，编译器会自动将其编译为内联函数。
		age = _age
	}
	int getAge(){ // 这三个函数就是类内定义。由于函数比较简单，编译器会自动将其编译为内联函数。
		return age;
	}
	void study(){ // 这三个函数就是类内定义。由于函数比较简单，编译器会自动将其编译为内联函数。
	// todo
	}

private:
	string name;
	int age;
}
```

3、 类外定义

> 成员函数在类的外部(外边)
> 类外定义分为： 同文件类外定义、分文件类外定义

- 同文件类外定义

```C++
// Car.cpp
class Car{
public:
	void run();
	void stop();
	void changeSpeed();
};
void Car::run(){}
void Car::stop(){}
void Cat::changeSpeed(){}
```

- 分文件类外定义

```C++
// Car.h 头文件
class Car{
public:
	void run();
	void stop();
	void changeSpeed();
};

// Car.cpp
#include "Car.h"
void Car::run(){}
void Car::stop(){}
void Car::changeSpeed(){}
```

例子：

1. 同文件类外定义

```C++
// demo.cpp
#include <iostream>
#include <stdlib.h>
using namespace std;

/*
	定义一个 Teacher类， 要求分别采用同文件类外定义和分文件类外定义的方式完成，具体要求如下：
	数据成员：
		名字
		年龄
		性别
	成员函数：
		数据成员的封装函数
		授课teach
 */

class Teacher{
public:
	void setName(string _name);
	string getName();
	void setGender(string _gender);
	string getGender();
	void setAge(int _age);
	int getAge();
	void speak();

private:
	string m_strName;
	string m_strGender;
	int m_iAge;

};

void Teacher::setName(string _name){
	m_strName = _name;
}
string Teacher::getName(){
	return m_strName;
}

void Teacher::setGender(string _gender){
	m_strGender = _gender;
}
string Teacher::getGender(){
	return m_strGender;
}

void Teacher::setAge(int _age){
	m_iAge = _age;
}
int Teacher::getAge(){
	return m_iAge;
}

void Teacher::speak(){
	cout << "現在上課……" << endl;
}

int main(void){
	Teacher t;
	t.setName("孔子");
	t.setGender("男");
	t.setAge(30);
	cout << t.getName() << "" << t.getAge() << "" << t.getGender() << endl;
	t.speak();
	return 0;
}
```
2. 分文件类外定义

```C++
// demo.h
#include <iostream>
#include <stdlib.h>
using namespace std;

class Teacher{
public:
	void setName(string _name);
	string getName();
	void setGender(string _gender);
	string getGender();
	void setAge(int _age);
	int getAge();
	void speak();

private:
	string m_strName;
	string m_strGender;
	int m_iAge;

};
// demo.cpp
#include <iostream>
#include <stdlib.h>
#include <demo.h>
using namespace std;

/*
	定义一个 Teacher类， 要求分别采用同文件类外定义和分文件类外定义的方式完成，具体要求如下：
	数据成员：
		名字
		年龄
		性别
	成员函数：
		数据成员的封装函数
		授课teach
 */

void Teacher::setName(string _name){
	m_strName = _name;
}
string Teacher::getName(){
	return m_strName;
}

void Teacher::setGender(string _gender){
	m_strGender = _gender;
}
string Teacher::getGender(){
	return m_strGender;
}

void Teacher::setAge(int _age){
	m_iAge = _age;
}
int Teacher::getAge(){
	return m_iAge;
}

void Teacher::speak(){
	cout << "現在上課……" << endl;
}

int main(void){
	Teacher t;
	t.setName("孔子");
	t.setGender("男");
	t.setAge(30);
	cout << t.getName() << "" << t.getAge() << "" << t.getGender() << endl;
	t.speak();
	return 0;
}
```
<a href="3-inherit.md">C++ 远征之继承篇</a>
