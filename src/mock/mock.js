import Mock from 'mockjs'
const Random = Mock.Random

//模拟分页数据
let dataList = [] // 用于接受生成数据的数组
for (let i = 0; i < 20; i++) {
  const template = {
    'id': i,
    'name': Random.cname(),
    'date': Random.date(),
    'address': Random.county(true)
  }
  dataList.push(template)
}
//获取分页数据
Mock.mock('/listTable', 'post', (data) => {
  const info = JSON.parse(data.body)
  const [index, size, total] = [info.pageIndex, info.pageSize, dataList.length];
  const newDataList = dataList.slice(index * size, (index + 1) * size);
  const len = total / size;
  const totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len

  return {
    'code': '0',
    'message': 'success',
    'data': {
      'pageIndex': index,
      'pageSize': size,
      'rows': newDataList,
      'total': total,
      'totalPages': totalPages
    }
  }
})
// 删除数据
Mock.mock('/listTable/delete', 'post', (data) => {
  const info = JSON.parse(data.body)
  let id = info.id;
  dataList = dataList.filter(item => item.id !== id);
  return {
    'code':'1',
    'message':'删除成功'
  }
})
// 批量删除数据
Mock.mock('/listTable/batchRemove', 'post', (data) => {
  const info = JSON.parse(data.body)
  let { ids } = info;
  ids = ids.split(',');
  ids = ids.map(id=>parseInt(id));
  dataList = dataList.filter(u => !ids.includes(u.id));
  return {
    'code':'4',
    'message':'删除成功'
  }
})
// 查询数据
Mock.mock('/listTable/search', 'post', (data) => {
  const info = JSON.parse(data.body)
  let name = info.name;
  dataList = dataList.filter(item => item.name === name);
  return {
    'code':'2'
  }
})

// 编辑数据
Mock.mock('/listTable/edit', 'post', (data) => {
  const info = JSON.parse(data.body)
  let {id,name,address,date} = info;
  dataList.some(u => {
    if (u.id === id) {
      u.name = name;
      u.address = address;
      u.date = date;
      return true;
    }
  });
  return {
    'code':'3',
    'message':'编辑成功'
  }
})

// 新增数据
Mock.mock('/listTable/addLists', 'post', (data) => {
  const info = JSON.parse(data.body)
  let {id,name,address,date} = info;
  dataList.push({
    id:dataList.length,
    name:name,
    date:date,
    address:address
  })
  return {
    'code':'5',
    'message':'新增成功'
  }
})

