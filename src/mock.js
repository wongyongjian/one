const Mock = require('mockjs');
export default Mock.mock('/text/message/ball',{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'footballs|30': [{
    'name': '@word(5)',
    'id': '@word(1)@zip',
    'price':'@float(1,500,1,1)',
    'text':'@cparagraph(2)',
    'title':'@ctitle(3,5)',
    'img':'@image(200x100,#02adea,#FFF,@string)'
  }],
  'basketballs|30': [{
    'name': '@word(5)',
    'id': '@word(1)@zip',
    'price':'@float(1,500,1,1)',
    'text':'@cparagraph(2)',
    'title':'@ctitle(3,5)',
    'img':'@image(200x100,#02adea,#FFF,@string)'
  }],

  'volleyballs|30': [{
    'name': '@word(5)',
    'id': '@word(1)@zip',
    'price':'@float(1,500,1,1)',
    'text':'@cparagraph(2)',
    'title':'@ctitle(3,5)',
    'img':'@image(200x100,#02adea,#FFF,@string)'
  }],


})

// 输出结果
