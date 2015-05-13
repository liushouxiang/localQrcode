# 这是什么？
一个chrome插件，可以将domain为127.0.0.1/localhost的网址自动转换成对应的本地IP地址形式的网址，并生成二维码供移动设备扫描，用于移动端的网页开发调试。

#为什么开发这个插件？
在本地开发好移动端网页后，必须用手机访问看看效果。这时候就需要重复以下步骤：  

1. 在cmd中输入ipconfig（window系统）找出本机IP地址；  
2. 打开chrome的一个新tab页将本地地址换成IP地址后访问；  
3. 用二维码插件生成二维码并用手机访问；  

尤其是如果你在一个IP地址会自动变化的内网环境中工作，第一步就不能通过添加书签来解决。
这种重复手工动作很是繁琐，想做一个工具来自动完成，于是就有了这个插件。

# 安装
1. 下载localQrcode.crx
2. 打开chrome浏览器的chrome://extensions(右上角->更多工具->扩展程序)
3. 将下载的文件拖动到界面上安装；

#用到的技术
1. 浏览器javascript获取本机IP地址的方法：使用[webRTC](http://www.webrtc.org/)，一个支持网页浏览器进行实时语音对话或视频对话的API，兼容chrome、firefox、opera。
2. 生成二维码的js库，[qrcodejs](https://github.com/davidshimjs/qrcodejs)，不依赖任何其他库，兼容性也比网上流行的jquery-qrcode强。感谢作者！
3. [chrome插件开发文档](https://developer.chrome.com/extensions/getstarted),360将chrome插件开发文档汉化了，不用翻墙也能开发插件了，据说还能免费托管插件，业界良心！[这里](http://open.chrome.360.cn/extension_dev/overview.html)

#TODO
实现domain可配置，目前仅支持localhost/127.0.0.1的转换，以应对配置hosts开发的情况，比如通过配置hosts将localhost改为local.xxx.com的形式。