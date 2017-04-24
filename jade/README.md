#                 					jade随记

### 参数：

	extends layout					---- 相当于src进来一个页面
	include note.txt 				---- include同于导入文本
	include ./layout/header.jade 	---- 将header.jade当做html引入 

	block content 					---- block获取block下边的内容，content可以在别的文件引用
	  h1 
	  p 
	  p

__可重用的 jade 块 (Mixins)__

	//- 也可以给这个重用块指定参数

		mixin pets(pets)
		  ul.pets
		    - each pet in pets
		      li= pet

		+pets(['cat', 'dog', 'pig'])

	//- Mixins 同时也支持在外部传入 jade 块

		mixin article(title)
		  .article
		    .article-wrapper
		      h1= title
		      //- block 为 jade 关键字代表外部传入的块
		      if block
		        block
		      else
		        p 该文章没有内容
		        
		+article('Hello world')

		+article('Hello Jade')
		  p 这里是外部传入的块
		  p 再写两句

	//- Mixins 同时也可以从外部获取属性。

		mixin link(href, name)
		  a(class!=attributes.class, href=href)= name
		  
		+link('/foo', 'foo')(class="btn")

	//- 申明可重用的块
		mixin list
		  ul
		    li foo
		    li bar
		    li baz

		//- 调用
		+list()
		+list()

__jade内写js__

	- console.log('hello'); 		---- 这段代码在服务端执行
	- var s = 'hello world' 		---- 在服务端空间中定义变量
	
	- if 参数						---- if判断

	- var user = { description: 'foo bar baz' }
	- var authorised = false
	#user
	  if user.description
	    h2 Description
	    p.description= user.description
	  else if authorised
	    h2 Description
	    p.description.
	      User has no description,
	      why not add one...
	  else
	    h1 Description
	    p.description User has no description


	- for (var i = 0; i < array.length; ++i) {
    	li hello #{array[i]} 		---- for循环
  	- }

  	each val, index in ['西瓜', '苹果', '梨子'] 	---- each遍历
    	li= index + ': ' + val

    - var friends = 1				
	case friends					---- 相当于 switch case default
	  when 0: p you have no friends
	  when 1: p you have a friend
	  default: p you have #{friends} friends

	script
	  :coffee
	    console.log '这里是 coffee script'

__jade内写md__

	 :markdown
	   # Markdown 标题
	      这里使用的是 MarkDown 格式

__bug记录__

	jade模板的最后一行如果有空行也会报 缩进错误

	用extends继承的话，被继承的页面有数据，继承的页面拿不到数据，用include包含就正常。但是在资源方面，用extends，资源位置正常，但是也不会继承数据，用include包含的话，缩进对的，资源位置就变了 