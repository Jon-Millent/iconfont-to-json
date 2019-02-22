# iconfont-to-json
为react-native项目的react-native-vector-icons转换iconfont字体图标10进制json文件

# Install

```
npm i iconfont-to-json -g
```

# Use

```
iconfonttojson [input iconfont.css path] [output file name]
```

# Example

```
iconfonttojson ./iconfont.css
```

```css
@font-face {
  font-family: "iconfont";
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-bqxin:before {
  content: "\e68b";
}

.icon-sousuo-copy:before {
  content: "\e62b";
}

.icon-pinglun:before {
  content: "\e63a";
}

.icon-jia:before {
  content: "\e632";
}

.icon-camera_icon:before {
  content: "\e657";
}

.icon-tiaoguofenxiang:before {
  content: "\e77c";
}


```
return
```js
export default {
  "icon-bqxin": 59019,
  "icon-sousuo-copy": 58923,
  "icon-pinglun": 58938,
  "icon-jia": 58930,
  "icon-camera_icon": 58967,
  "icon-tiaoguofenxiang": 59260
}
```
