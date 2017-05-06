var industryJson = require('./industry.json');

var Industry = function(){
  this._json = industryJson;
  this._data = this._json.data;
}

function _treeFn(data){
  var treeData = [];
  data.forEach(function(item,index,self){
    if(item.level === 1){
      var _parent = item;
      _parent.kids = [];
      treeData.push(_parent);
    }else{
      var _pCode = parseInt(item.parent_code, 10);
      var _p = treeData[_pCode - 1];
      _p.kids.push(item)
    }
  })
  return {data:treeData};
}

Industry.prototype = {
  data:function(){
    return this._json;
  },
  tree:function(){
    return _treeFn(this._data)
  },
  category:function(){
    return {
      data:this._data.filter(function(item,index,self){
        return item.level === 1;
      })
    }
  }
}


module.exports = new Industry();