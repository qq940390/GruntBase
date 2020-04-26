# JSTemplate

一个简单的JS模板引擎

- 普通模板支持

```html
<script type="text/html" id="tpl">
    <a href="{{url}}" title="{{title}}"><img src="{{image}}" alt="{{title}}" width="{{width}}" height="{{height}}" /></a>
</script>
```
- 普通模板需要的数据

```json
{
    "width":"270",
    "height":"140",
    "title":"\u7741\u5927\u53cc\u773c\u770b\u6570\u5b57\u62a5",
    "url":"http:\/\/share.gzdsw.com\/?r=share\/index\/click&q=RVJHRUY7RlJGTE47R1JGTDtIUnZdZ0V4WYSLYUdnj25%2BSoN6gmePeY5Kf3dHRTpIWQljOGUzNDVkOWRhNzc5ZGIzNTRmOTcyODJmNjJlOTc5Nw%7C%7C",
    "image":"http:\/\/share.gzdsw.com\/upload\/201111\/046.jpg",
    "width":"270",
    "height":"140"
}
```

- 循环模板支持

```html
<script type="text/html" id="tpl2">
    {{each datas as value index}}
    <a href="{{value.url}}" title="{{value.title}}">
        <img src="{{value.image}}" alt="{{value.title}}" width="{{width}}" height="{{height}}" />
    </a>
    {{/each}}
</script>
```

- 循环模板需要的数据

```json
{
    "width":"270",
    "height":"140",
    "datas":[
        {"title":"\u7741\u5927\u53cc\u773c\u770b\u6570\u5b57\u62a5",
        "url":"http:\/\/share.gzdsw.com\/?r=share\/index\/click&q=RVJHRUY7RlJGTE47R1JGTDtIUnZdZ0V4WYSLYUdnj25%2BSoN6gmePeY5Kf3dHRTpIWQljOGUzNDVkOWRhNzc5ZGIzNTRmOTcyODJmNjJlOTc5Nw%7C%7C",
        "image":"http:\/\/share.gzdsw.com\/upload\/201111\/046.jpg",
        "width":"270",
        "height":"140"
        },
        {"title":"\u7741\u5927\u53cc\u773c\u770b\u6570\u5b57\u62a5",
        "url":"http:\/\/share.gzdsw.com\/?r=share\/index\/click&q=RVJHRUY7RlJGTE47R1JGTDtIUnZdZ0V4WYSLYUdnj25%2BSoN6gmePeY5Kf3dHRTpIWQljOGUzNDVkOWRhNzc5ZGIzNTRmOTcyODJmNjJlOTc5Nw%7C%7C",
        "image":"http:\/\/share.gzdsw.com\/upload\/201111\/046.jpg",
        "width":"270",
        "height":"140"
        },
        {"title":"\u7741\u5927\u53cc\u773c\u770b\u6570\u5b57\u62a5",
        "url":"http:\/\/share.gzdsw.com\/?r=share\/index\/click&q=RVJHRUY7RlJGTE47R1JGTDtIUnZdZ0V4WYSLYUdnj25%2BSoN6gmePeY5Kf3dHRTpIWQljOGUzNDVkOWRhNzc5ZGIzNTRmOTcyODJmNjJlOTc5Nw%7C%7C",
        "image":"http:\/\/share.gzdsw.com\/upload\/201111\/046.jpg",
        "width":"270",
        "height":"140"
        }
    ]
}
```

- 使用方法

```javascript
document.querySelector('#list').innerHTML = (new JinhaiJSTemplate).render('tpl', jsonData);
```
