const getViews = (req, res) => {
  res.json([
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: 'OEE',
      datetime: '2017-08-09',
    },
    {
      id: '000000002',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '智能工厂',
      datetime: '2017-08-09',
    },
    {
      id: '000000003',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '云服务监控',
      datetime: '2017-08-09',
    },
    {
      id: '000000004',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '销售业绩大屏',
      datetime: '2017-08-09',
    },
    {
      id: '000000005',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '生产情况实时监控',
      datetime: '2017-08-09',
    },
    {
      id: '000000006',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '焊齿机实时监控',
      datetime: '2017-08-09',
    },
    {
      id: '000000007',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '旅游消费可视化',
      datetime: '2017-08-09',
    },
  ]);
};


const postViews = (req, res) =>{
    res.send({
      status: '200',
      value:'22222222'
    });
    return {
      status: '200',
      value:'22222222'
    };
}

export default {
  'GET /api/views': getViews,
  'POST /api/views': (req, res) => {
    res.send({
      status: 'ok',
      msg:'create view'
    });
  },
};


