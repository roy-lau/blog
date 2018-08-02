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





<!-- <a href="6-departure.md">C++ 远征之离港篇</a> -->