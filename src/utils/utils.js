import moment from 'moment';
import React from 'react';
import nzh from 'nzh/cn';
import { parse, stringify } from 'qs';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

// 全局配置变量设置
export const globalConst = {
    dateFormatSytle: 'YYYY-MM-DD HH:mm:ss',
    simpleDateFormatSytle: 'YYYY-MM-DD',
    operate: {
      edit: 'edit',
      add: 'add',
      del: 'del',
      view: 'view',
      changeSwitch: 'changeSwitch',
    }
}

export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

export function getTimeDistance(type) {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - day * oneDay;

    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
  }

  if (type === 'month') {
    const year = now.getFullYear();
    const month = now.getMonth();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
    ];
  }

  const year = now.getFullYear();
  return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
}

export function getPlainNode(nodeList, parentPath = '') {
  const arr = [];
  nodeList.forEach(node => {
    const item = node;
    item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
    item.exact = true;
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

export function digitUppercase(n) {
  return nzh.toMoney(n);
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  }
  if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  return 3;
}

function getRenderArr(routes) {
  let renderArr = [];
  renderArr.push(routes[0]);
  for (let i = 1; i < routes.length; i += 1) {
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
    // 是否包含
    const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
    if (isAdd) {
      renderArr.push(routes[i]);
    }
  }
  return renderArr;
}

/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */
export function getRoutes(path, routerData) {
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  );
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''));
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes);
  // Conversion and stitching parameters
  const renderRoutes = renderArr.map(item => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
    return {
      exact,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`,
    };
  });
  return renderRoutes;
}

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

export function getQueryPath(path = '', query = {}) {
  const search = stringify(query);
  if (search.length) {
    return `${path}?${search}`;
  }
  return path;
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  return reg.test(path);
}

export function formatWan(val) {
  const v = val * 1;
  if (!v) return '';

  let result = val;
  if (val > 10000) {
    result = Math.floor(val / 10000);
    result = (
      <span>
        {result}
        <span
          style={{
            position: 'relative',
            top: -2,
            fontSize: 14,
            fontStyle: 'normal',
            marginLeft: 2,
          }}
        >
          万
        </span>
      </span>
    );
  }
  return result;
}

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export function isAntdPro() {
  return window.location.hostname === 'preview.pro.ant.design';
}

export const importCDN = (url, name) =>
  new Promise(resolve => {
    const dom = document.createElement('script');
    dom.src = url;
    dom.type = 'text/javascript';
    dom.onload = () => {
      resolve(window[name]);
    };
    document.head.appendChild(dom);
  });

export function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  export function toTreeData(data, id, parentId) {
    // 删除 所有 children,以防止多次调用
    data.forEach(function (item) {
        delete item.data;
    });

    // 将数据存储为 以 id 为 KEY 的 map 索引数据列
    var map = {};
    data.forEach(function (item) {
        map[item.value] = item;
    });
    var newArra = [];
    data.forEach(function (item) {
        item["data"]=[];
        // 以当前遍历项的pid,去map对象中找到索引的id
        var parent = map[item[parentId]];
        // 如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
        if (parent) {
            (parent.data || ( parent.data = [] )).push(item);
        } else {
            // 如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 newArra结果集中，作为顶级
            newArra.push(item);
        }
    });
    return newArra;
}

export function exportDataToExcel (dataArr, columnsConfig, styleConfig) {
  let rowArr = dataArr || [];

  // config by self
  let fileName = (styleConfig && styleConfig.workSheetName) || '导出数据';

  // workbook basic config
  let workbook = new ExcelJS.Workbook();
  let worksheet = workbook.addWorksheet(fileName, {properties:{tabColor:{argb:'FF00FF00'}}});
  workbook.creator = '依据数据';
  workbook.lastModifiedBy = 'admin';
  workbook.views = [
      {
      x: 0, y: 0, width: 10000, height: 20000,
      firstSheet: 0, activeTab: 1, visibility: 'visible'
      }
  ];

  // worksheet cloumn config  
  let font = {
      size: 13
  };
  let alignment = {
      vertical: 'middle',
      horizontal: 'left'
  };
  let border = {
      top: {style:'thin'},
      left: {style:'thin'},
      bottom: {style:'thin'},
      right: {style:'thin'}
  };
  let newConfigColumns = [];
  let parseColumns = [];
  if (columnsConfig) {
    columnsConfig.forEach((element, index) => {
        let firstCondition = element['title'] && element['title'].indexOf('操作') == -1;
        let secondCondtion = element['render'] != null ;
        let isShow =  firstCondition || secondCondtion;
        let oneColumn = {
          header: element['title'],
          key: element['dataIndex'],
          width: 30,
          style: { font: font, alignment: alignment, border: border  }
        };
        if (isShow) {
            newConfigColumns.push(oneColumn);
        }
        // 设置另外需要转译的列
        if (secondCondtion) {
          parseColumns.push(index);
        }
    });
  } else {
      console.error('export to excel error: the column not can find');
  }
  worksheet.columns = newConfigColumns;

  // set row style
  worksheet.getRow(1).font = { family: 4, size: 14, bold: true, color: { argb: '000000' }};
  worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern:'solid',
      fgColor:{argb:'D9D9D9'},
      bgColor:{argb:'D9D9D9'}
  };
  worksheet.addRows(rowArr);

  parseColumns.forEach((item, k) => {
    let getColumn = worksheet.getColumn(item + 1);
    getColumn.eachCell({  }, function(cell, rowNumber) {
      if (rowNumber != 1) {
        let getColumnConfig = columnsConfig[item];
        let renderFunction = getColumnConfig['render'];
        // base form 1 and 包含列头
        let rowData = dataArr[rowNumber - 2];
        if (typeof renderFunction == 'function') {
          let tempVal  = renderFunction(null, rowData, rowNumber - 1);
          cell.value = tempVal;
        } else {
          cell.value = '';
        }
      }
    });
  })

  // writing to file
  workbook.xlsx.writeBuffer()
    .then(function(buffer) {
        let blob = new Blob([buffer], {type: 'text/plain;charset=utf-8'});
        // saveAs form FileSaver
        let excelFileName = fileName + new moment().format('YYYYMMDDHHmmss') +'.xlsx';
        saveAs(blob, excelFileName);
    })
    .catch(function (err) {
        console.log('Error writing excel export', err);
    });
}

//日期格式转换成字符串格式
export function formatDate(date,type) {  
  var y = date.getFullYear();  
  var m = date.getMonth() + 1;  
  m = m < 10 ? ('0' + m) : m;  
  var d = date.getDate();  
  d = d < 10 ? ('0' + d) : d;  
  if(type=='date'){
    return y + '-' + m + '-' + d;  
  }
  else{
    var h = date.getHours();  
    var minute = date.getMinutes();  
    minute = minute < 10 ? ('0' + minute) : minute; 
    var second= date.getSeconds();  
    second = minute < 10 ? ('0' + second) : second;  
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+ second;  
  }
};

//单击表格的一整行，触发复选框/单选框的点击事件
export function clickRow(e){
  //复选框
  if(e.currentTarget.getElementsByClassName("ant-checkbox-wrapper").length>0){
    e.currentTarget.getElementsByClassName("ant-checkbox-wrapper")[0].click();
  }
  else if(e.currentTarget.getElementsByClassName("ant-radio-wrapper").length>0){//单选框
    e.currentTarget.getElementsByClassName("ant-radio-wrapper")[0].click()
  }
  
}

//处理脱敏数据（身份证号码和手机号）
export function desensitizationData(type,value){
  //手机号
  var returnVal="";
  if(value&&value.length>0){
    if(type=="phone"||"contactPhoneNumber"||"phoneNumber"){
      returnVal = value.replace(value.substr(3,4),'****');
    }
    //身份证号
    else if(type=="idCard"||"contactIdCardNumber"||"idCardNumber"){
      returnVal = value.replace(value.substr(6,8),'********');
    }
  }
  return returnVal;
}
