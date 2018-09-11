# 	C++ 远征之离港篇

<a href="README.md">目录</a>

#### 引用类型

引用是变量的别名

> 基本数据类型的引用

```C++
#include <iostream>
using namespace std;
int main(void){
	int a = 3;
	int &b = a; // 引用（别名）必须初始化

	b = 10;
	cout << a << endl;
	return 0;
}
```

结构体类型的引用

```C++
typedef struct{
	int x;
	int y;
}Coor;

#include <iostream>
using namespace std;
int main(void){
	Coor c1;
	Coor &c = c1;  // 设置c1的别名为c
	c.x = 10;
	c.y = 20;
	cout << c1.x << c1.y;  // 10 20
	return 0;
}
```

指针类型的引用

`类型 *&指针引用名 = 指针;`

```C++
#include <iostream>
using namespace std;
int main(void){
	int a = 10;
	int *p = &a;
	int *&q = p;
	*q = 20;
	cout << a << endl;
	return 0;
}
```

引用做为函数参数

```C++
// 正常情况下的写法
void fun(int *a,int *b){
	int c = 0;
	c = *a;
	*a = *b;
	*b = c;
}
int x = 10,y = 20;
fun(&x, &y);

// 引用函数写法
void fun(int &a,int &b){
	int c = 0;
	c = a;
	a = b;
	b = c;
}
int x = 10,y = 20;
fun(x, y)
```

代码示例
```C++
#include <iostream>
#include <stdlib.h>
using namespace std;

// 结构体
typedef struct{
	int x;
	int y;
}Coord;


void fun(int &w,int &e);

void fun(int &w,int &e){
	int r = 0;
	r = w;
	w = e;
	e = r;
}
int main(void){
	int a = 1;
	int &b = a;

	b = 2;
	cout << a << endl; // 2
	a = 3;
	cout << b << endl; // 3

	Coord c;
	Coord &c1 = c;
	c1.x = 10;
	c1.y = 20;
	cout << c.x << "," << c.y << endl;

	// 指针
	int j = 5;
	int *p = &j;
	int *&q = p;
	*q = 5;
	cout << j << endl;

	// 函数参数
	int w = 7;
	int e = 8;
	cout << w << "-" << e << endl;
	fun(w,e);
	cout << w << "-" << e << endl;
	return 0;
};
```

#### const关键字

`const`与基本数据类型

```C++
const int x = 3; // 常量（不可改变）
```

`const`与指针类型

```C++
// 这两种是等价的
const int *p = NULL;
int const *p = NULL;

// 这两种也是等价的
const int * const p = NULL;
int const * const p = NULL;

// int *const p = NULL;

int x = 3;
const int *p = &x;
p = &x; // 正确
*p = 4; // 错误

int x = 3;
int *const p = &x;
p = &y; // 错误

const int x = 3;
const int *const p = &x;
p = &y; // 错误
*p = 4; // 错误
```

`const`与引用

```C++
int x = 3;
const int &y = x;
x = 10; // 正确
y = 20; // 错误

const int x = 3;
x = 5; // 报错

int x = 3;
const int y = x;
y = 5; // 报错

int x = 3;
const int *y = &x;
*y = 5; // 报错

int x = 3;
z = 4;
int * const y = &x;
y = &z; // 报错

const int x = 3;
const int &y = x;
y = 5; // 报错

const int x = 3;
int *y = &x; // 报错

int x = 3;
const int *y = &x; // 正确
```

代码实例
```C++
#include <iostream>
#include <stdlib.h>
using namespace std;

int main(void){
	int x = 3;
	int y = 5;
	int const *p = &x; // 等价 const int *p = &x;
	x = 5;
	*p = 10;
	cout << x << endl;

	return 0;
}
```

### C++函数的新特性

***函数参数的默认值***

> 有默认参数值的参数必须在参数表的最右端

```C++
void fun(int i, int j=5, int k = 10);

void fun(int i, int j=5, int k); // 这种写法是错误的
```
> 无实参则用默认值，否则实参覆盖默认值

```C++
void fun(int i, int j=5, int k=10);

void fun(int i, int j, int k){
	cout << i << j << k;
}

int main(){
	fun(20);
	fun(20,30);
	fun(20,30,40);
}
```

函数重载

1、 在相同的作用域内

2、 用**同一个函数名**定义的多个函数

3、 **参数个数**和**参数类型**不同

```C++
int getMax(int x,int y,int z){
	// to do
}
double getMax(double x, double y){
	// to do
}

// 编译时编译器会通过名称加参数的方式来区分同名函数

getMax_int_int_int
getMax_double_double_double

```

内联函数

<img src="imgs/inline-function.png" alt="内联函数" />

内联函数关键字： `inline`

```C++
inline int max(int a,int b, int c);
int main(){
	int i = 10, j = 20, k = 30, m;
	m = max(i, j, k);
	cout << "max=" << m << endl;
	return 0;
}
```
```C++
// 上遍代码的展开式
int main(){
	int i = 10, j = 20, k = 30, m;
	int a,b,c;
	a = i; b = j; c = k;
	if(b > a) a = b;
	if(c > a) a = c;
	m = a;
	cout << "max=" << m << endl;
	return 0;
}
```

- 内联编译是建议性的，由编译器决定。

- 逻辑简单，调用频繁的函数建议使用内联。

- 递归函数无法使用内联方式。


总结：

  函数参数默认值 --> 实参覆盖默认值<br />
  函数重载 --> 名称相同参数可辨<br />
  内联函数 --> inline 效率高 有条件


代码实例：

```C++
#include <stdlib.h>
using namespace std;

void fun(int i = 30, int j = 20, int k = 10);
void fun(double i,double j);

int main(void){
	fun(); // 30,20,10
	fun(100); // 100,20,10
	fun(100,200); // 100,200,10
	fun(100,200,300); // 100,200,300

	fun(1.1,2.2) //1.1, 2.2
	system("pause");
	return 0;
}

void fun(int i, int j, int k){
	cout << i <<","<< j <<","<< k << endl;
}
void fun(double i, double j){
	cout << i << "," << j << endl;
}
```

```C++
// 1. 求两个数的最大值
// 2. 求数组的最大值
#include <iostream>
using namespace std;

int getMax(int a, int b){
	return a > b ? a : b;
}
/**
 * 函数功能：返回数组中的最大值
 * @param  arr   整型数组
 * @param  count 数组长度
 * @return       数组的最大值
 */
int getMax(int *arr, int count){
	int maxNum = arr[0];
	for(int i =1; i < count; i++){
		if (maxNum < arr[i]){
			maxNum = arr[i];
		}
	}
	return maxNum;
}

int main(void){
	// 定义数组并初始化
	int numArr[3] = {3, 8, 6};

	// 自动调用 int getMax(int a, int b)
	cout << getMax(2, 6) << endl;

	// 自动调用返回数组中最大值的函数返回数组中的最大值
	cout << getMax(numArr, 3) << endl;
	return 0;
}
```

#### C++内存管理

>思考：

  内存的本质是什么？  **资源**

  谁来掌管资源？ 		**操作系统**

  我们能做什么？ 		**申请/归还**

_申请/规划内存资源就是内存管理_


**内存的申请和释放**

>运算符：

申请内存 `new`
释放内存 `delete`

>方法：

申请内存 `int *p = new int;`
释放内存 `delete p;`

>申请和释放块内存：

```C++
int *arr = new int[10]; // 申请块内存
delete []arr; 			// 释放块内存
```

>内存管理的其他方式：
```C
C语言
void *malloc(size_t size); // 申请内存
void free(void *memblock); // 释放内存
```
```C++
new
delete
```

>注意事项：
```C++
// 申请内存
int *p = new int[1000];
if(NULL == p){
	// 内存申请失败
}

// 释放内存
int *p = new int;
if(NULL == p){
	// 内存分配失败
	// 异常处理
}
delete p;
p = NULL;

int *p = new int[1000];
if(NULL == p){
	// 内存分配失败
	// 异常处理
}
delete []p;
p = NULL;
```

>总结：

使用`new`申请内存，使用`delete`释放内存

申请内存需要判断是否成功，释放内存需要设空指针

`new`与`delete`配套使用（有申请也要有释放）

```C++
#include <iostream>
#include <stdlib.h>
using namespace std;

int main(void){
	int *p = new int; // 申请内存
	if(NULL == p){ // 申请失败
		return 0;
	}
	*p = 20;  // 赋值
	cout << *p << endl; // 输出值
	delete p; // 释放内存
	p = NULL; // 指针赋值为空
	return 0;
}
```
```C++
// 块内存
#include <iostream>
#include <stdlib.h>
using namespace std;

int main(void){
	int *p = new int[1000]; // 申请块内存
	if(NULL == p){ // 申请失败
		return 0;
	}
	p[0] = 10;  // p[0]赋值
	p[1] = 20;  // p[1]赋值
	cout << p[0] << "," << p[1] << endl; // 输出值
	delete []p; // 释放块内存
	p = NULL; // 指针赋值为空
	return 0;
}
```



<a href="3-package.md">C++ 远征之封装篇</a>