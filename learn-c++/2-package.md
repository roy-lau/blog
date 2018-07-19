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

<a href="3-inherit.md">C++ 远征之继承篇</a>
