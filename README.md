# Hanser-WeChat_app
这是一款面向毛怪的微信小程序，包含了往期直播答题活动的题库，可用于活动前临时抱佛脚，也可以帮助您在平时更深入地了解憨色。（憨色直播间传送门：https://www.douyu.com/2550505

小程序目前尚处于开发阶段，主要功能基本完成，等待进一步优化、填充题库。

附上参考GitHub地址：https://github.com/Silverados/We-AnswerPage （在此基础上进行二次开发）

（CS带学生一枚，自学微信小程序编程整点活）  

目前小程序实现的功能有：  

1.支持tag选题

2.支持难度选题

3.判断对错

4.显示解析  


期望在将来实现的功能：  

1.报错/反馈按钮：发现答案有错时向开发者反馈，目前备选实现方式：石墨文档 / 腾讯文档 / 邮箱

2.题目预览功能：类似目录，便于在直播活动时快速找到题目

3.（很久以后）搜索框查找功能：关键字搜索

4.（很久很久以后）开发后端：小程序以后直接访问后端题库获取题目，支持题库在线增删改

5.（很久很久很久以后）多方协作后端：支持毛怪上传、更正题目（经审核后正式将更改内容同步到题库）；审核功能：审核收到的题目/更改，通过后将修改同步至题库，防止坏坏删库跑路（   


目前的不足有：

1.界面的美化不足

2.tag过滤时间过长，可能导致第一题加载过慢

3.代码的耦合度较高

4.题库嵌在代码中，鉴于微信审核机制，题库增删改周期较长  



小程主界面如下：  
  
![首页](https://github.com/Misaka10211/Hanser-WeChat_app/blob/main/wiki/demo-home_page.png)  


tag选择示例如下：  
  
![选择tag](https://github.com/Misaka10211/Hanser-WeChat_app/blob/main/wiki/demo-home_page-tag.png)  

难度选择示例如下：  
  
![选择难度](https://github.com/Misaka10211/Hanser-WeChat_app/blob/main/wiki/demo-home-page-difficulty.png)  
  
答题及解析示例如下：  
  
![答题页](https://github.com/Misaka10211/Hanser-WeChat_app/blob/main/wiki/demo-content.png)
