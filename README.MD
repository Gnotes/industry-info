# Industry 行业信息

---

## 安装

```node
npm install industry-info
```

## 用法

```js
var industry = require('industry-info');
// or
import industry from 'industry-info';

var result = industry.data();
```

## API

- data
  返回Json原始数据

```json
{
  "data":[
    {"code" : "01"    ,"level" : 1 ,"parent_code" : null ,"name" : "农、林、牧、渔"},
    {"code" : "01010" ,"level" : 2 ,"parent_code" : "01" ,"name" : "农业", "remarks" : "包括谷物种植业、油料和豆类作物种植业、棉、麻等植物性纺织原料种植业、糖料作物、烟草、药材，蔬菜、瓜类和薯类作物种植业，茶、桑、果树种植业及其他种植业。（含野生植物的果实、纤维、树胶、树脂、油料以及野生药材、菌类、柴草等的采集"},
    {"code" : "01020" ,"level" : 2 ,"parent_code" : "01" ,"name" : "林业", "remarks" : "包括采种、育苗、植树造林、森林抚育、迹地更新、森林保护、林场的经营管理及对橡胶、漆树、油桐、咖啡、可可、花椒、胡椒、核桃等林木种植及其林产品的采"},
    {"code" : "01030" ,"level" : 2 ,"parent_code" : "01" ,"name" : "畜牧业", "remarks" : "牲畜饲养放牧业家禽饲养业、狩猎业及其他畜牧"},
    {"code" : "01040" ,"level" : 2 ,"parent_code" : "01" ,"name" : "渔业", "remarks" : "海洋渔业、淡水渔业、水生动物养殖及捕"},
    {"code" : "01050" ,"level" : 2 ,"parent_code" : "01" ,"name" : "农、林、牧、渔服务业", "remarks" : "包括农业技术推广、动植物检疫、冶沙及兽医"},
    {"code" : "02"    ,"level" : 1 ,"parent_code" : null ,"name" : "采掘业"},
    {"code" : "02060" ,"level" : 2 ,"parent_code" : "02" ,"name" : "煤炭采选业", "remarks" : "煤炭开采业、煤炭洗选"},
    {"code" : "02070" ,"level" : 2 ,"parent_code" : "02" ,"name" : "石油和天然气开采业", "remarks" : "天然原油、天然气、油页岩开采"},
    {"code" : "02080" ,"level" : 2 ,"parent_code" : "02" ,"name" : "黑色金属矿采选业", "remarks" : "采矿、选矿、铁矿、锰矿、铬矿采选"}
  ]
}
```

- tree
  返回树形数组数据

```json
{
  "data":[
    {
      "code" : "01"    ,"level" : 1 ,"parent_code" : null ,"name" : "农、林、牧、渔",
      "kids":[
        {"code" : "01010" ,"level" : 2 ,"parent_code" : "01" ,"name" : "农业", "remarks" : "包括谷物种植业、油料和豆类作物种植业、棉、麻等植物性纺织原料种植业、糖料作物、烟草、药材，蔬菜、瓜类和薯类作物种植业，茶、桑、果树种植业及其他种植业。（含野生植物的果实、纤维、树胶、树脂、油料以及野生药材、菌类、柴草等的采集"},
        {"code" : "01020" ,"level" : 2 ,"parent_code" : "01" ,"name" : "林业", "remarks" : "包括采种、育苗、植树造林、森林抚育、迹地更新、森林保护、林场的经营管理及对橡胶、漆树、油桐、咖啡、可可、花椒、胡椒、核桃等林木种植及其林产品的采"},
        {"code" : "01030" ,"level" : 2 ,"parent_code" : "01" ,"name" : "畜牧业", "remarks" : "牲畜饲养放牧业家禽饲养业、狩猎业及其他畜牧"},
        {"code" : "01040" ,"level" : 2 ,"parent_code" : "01" ,"name" : "渔业", "remarks" : "海洋渔业、淡水渔业、水生动物养殖及捕"},
        {"code" : "01050" ,"level" : 2 ,"parent_code" : "01" ,"name" : "农、林、牧、渔服务业", "remarks" : "包括农业技术推广、动植物检疫、冶沙及兽医"}
      ]
    },
    {
      "code" : "02"    ,"level" : 1 ,"parent_code" : null ,"name" : "采掘业",
      "kids":[
        {"code" : "02060" ,"level" : 2 ,"parent_code" : "02" ,"name" : "煤炭采选业", "remarks" : "煤炭开采业、煤炭洗选"},
        {"code" : "02070" ,"level" : 2 ,"parent_code" : "02" ,"name" : "石油和天然气开采业", "remarks" : "天然原油、天然气、油页岩开采"},
        {"code" : "02080" ,"level" : 2 ,"parent_code" : "02" ,"name" : "黑色金属矿采选业", "remarks" : "采矿、选矿、铁矿、锰矿、铬矿采选"}
      ]
    }
  ]
}
```

- category
  返回分类数组数据

```json
{
  "data":[
    {
        "code": "01",
        "level": 1,
        "parent_code": null,
        "name": "农、林、牧、渔"
    },
    {
        "code": "02",
        "level": 1,
        "parent_code": null,
        "name": "采掘业"
    },
    {
        "code": "03",
        "level": 1,
        "parent_code": null,
        "name": "制造业"
    },
    {
        "code": "04",
        "level": 1,
        "parent_code": null,
        "name": "电力、煤气及水的生产和供应业"
    },
    {
        "code": "05",
        "level": 1,
        "parent_code": null,
        "name": "建筑"
    },
    {
        "code": "06",
        "level": 1,
        "parent_code": null,
        "name": "地质勘查业、水利管理"
    },
    {
        "code": "07",
        "level": 1,
        "parent_code": null,
        "name": "交通运输、仓储及邮电通信业"
    },
    {
        "code": "08",
        "level": 1,
        "parent_code": null,
        "name": "批发和零售贸易、餐饮业"
    },
    {
        "code": "09",
        "level": 1,
        "parent_code": null,
        "name": "金融、保险"
    },
    {
        "code": "10",
        "level": 1,
        "parent_code": null,
        "name": "产业"
    },
    {
        "code": "11",
        "level": 1,
        "parent_code": null,
        "name": "社会服务业"
    },
    {
        "code": "12",
        "level": 1,
        "parent_code": null,
        "name": "卫生、体育和社会福利业"
    },
    {
        "code": "13",
        "level": 1,
        "parent_code": null,
        "name": "教育、文化艺术及广播电影电视业"
    },
    {
        "code": "14",
        "level": 1,
        "parent_code": null,
        "name": "科学研究和综合技术服务"
    },
    {
        "code": "15",
        "level": 1,
        "parent_code": null,
        "name": "国家机关、政党机关和社会团体 "
    },
    {
        "code": "16",
        "level": 1,
        "parent_code": null,
        "name": "其他"
    }
  ]
}
```
