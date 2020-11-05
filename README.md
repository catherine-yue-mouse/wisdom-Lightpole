
[参考ant Design Pro](https://pro.ant.design/)

- getting-started: https://pro.ant.design/docs/getting-started
- Preview: http://preview.pro.ant.design
- Home Page: http://pro.ant.design
- Documentation: http://pro.ant.design/docs/getting-started
- ChangeLog: http://pro.ant.design/docs/changelog
- FAQ: http://pro.ant.design/docs/faq
- Mirror Site in China: http://ant-design-pro.gitee.io

## 使用的其他 lib
>* 图表:[chartjs](https://www.chartjs.org/)
>* 基于facebook [draft-js](https://github.com/facebook/draft-js) 开源的富文本编辑器[braft-editor](https://github.com/margox/braft-editor)
>* excel导出:[exceljs](https://github.com/exceljs/exceljs) && [FileSaver](https://github.com/eligrey/FileSaver.js)
>* 图标：[react-icons](https://react-icons.netlify.com/#/icons/fa) (集成了许多图标库)

## 技巧
### 开发中调试 in vscode
>* 1. install the chrome dev tools plugin
>* 2. config the debugger setting in the launch.json
```json
"configurations": [ 
      {
        "name": "Launch Chrome For Debug",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:8000",
        "sourceMaps": true,
        "webRoot": "${workspaceRoot}",
        "userDataDir": "${workspaceRoot}/.vscode/chrome"
      }
    ] 
```

### 导出数据至excel中使用(请求接口实现)
```js
handleExport() {
    let apiUrl = '/api/informations/information-models/export/filename';
    fetch(apiUrl)
      .then(res => {
        res.blob().then(blob => saveAs(blob, '消息模版.xls'));
    });
  }
```

# 其他： ant design other introduction

## Templates

```
- Dashboard
  - Analytic
- Result
  - Success
  - Failed
- Exception
  - 403
  - 404
  - 500
- User
  - Login
  - Register
  - Register Result
```

## Usage

### Use bash

```bash
$ git clone http://code.uindata.com/zhaoyushi/BY-NewCrown-Appointment.git
$ cd BY-NewCrown-Appointment
$ npm install
$ npm start         # visit http://localhost:8000
```