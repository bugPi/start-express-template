export const orderList = [
  {
    id: 1, // 订单唯一 ID
    orderNo: "80000494870", // 订单号
    paymentType: "月结", // 付款类型（如：月结、预付、到付等）

    // 邮寄信息（寄件人信息）
    shippingAddress: "上海市浦东新区xxx大道0号", // 邮寄地址
    shippingProvince: "上海市", // 邮寄省份
    shippingCity: "上海市", // 邮寄城市
    shippingDistrict: "浦东新区", // 邮寄区域
    shippingName: "张三0", // 邮寄人姓名
    shippingPhone: "13800000000", // 邮寄人联系电话
    shippingZip: "200000", // 邮寄邮编

    orderStatus: "配送中", // 订单状态（如：待发货、配送中、已完成、已取消）
    shippingFee: "20.00", // 运费（单位：元）
    goodsAmount: "8500.00", // 货款金额（单位：元）
    goodsQuantity: 125, // 货物数量（单位：件）

    orderTime: "2023-03-03 10:00:02", // 订单创建时间
    orderRemarks: "无", // 订单备注信息

    // 收件信息（收货人信息）
    recipientName: "李四0", // 收件人姓名
    recipientPhone: "13100000000", // 收件人联系电话
    recipientAddress: "重庆市沙坪坝区长沙大道0号", // 收件人地址
    recipientZip: "200001", // 收件人邮编
    recipientProvince: "重庆市", // 收件人省份
    recipientCity: "重庆市", // 收件人城市
    recipientDistrict: "沙坪坝区", // 收件人区域
  },
  {
    id: 2,
    orderNo: "80000494872",
    paymentType: "预付",
    shippingAddress: "北京市朝阳区光华路1号",
    shippingProvince: "北京市",
    shippingCity: "北京市",
    shippingDistrict: "朝阳区",
    shippingName: "王五",
    shippingPhone: "13900000002",
    shippingZip: "100020",
    orderStatus: "待发货",
    shippingFee: "18.00",
    goodsAmount: "4500.00",
    goodsQuantity: 75,
    orderTime: "2023-04-10 14:25:30",
    orderRemarks: "尽快发货",
    recipientName: "赵六",
    recipientPhone: "13200000002",
    recipientAddress: "深圳市南山区科技园大道5号",
    recipientZip: "518000",
    recipientProvince: "广东省",
    recipientCity: "深圳市",
    recipientDistrict: "南山区",
  },
  {
    id: 3,
    orderNo: "80000494873",
    paymentType: "寄付",
    shippingAddress: "广州市天河区天河北路10号",
    shippingProvince: "广东省",
    shippingCity: "广州市",
    shippingDistrict: "天河区",
    shippingName: "李四",
    shippingPhone: "13800000003",
    shippingZip: "510000",
    orderStatus: "已发货",
    shippingFee: "25.00",
    goodsAmount: "7800.00",
    goodsQuantity: 110,
    orderTime: "2023-05-12 09:15:45",
    orderRemarks: "保持联系",
    recipientName: "陈七",
    recipientPhone: "13300000003",
    recipientAddress: "杭州市西湖区文三路8号",
    recipientZip: "310000",
    recipientProvince: "浙江省",
    recipientCity: "杭州市",
    recipientDistrict: "西湖区",
  },
  {
    id: 4,
    orderNo: "80000494874",
    paymentType: "月结",
    shippingAddress: "南京市鼓楼区中山北路12号",
    shippingProvince: "江苏省",
    shippingCity: "南京市",
    shippingDistrict: "鼓楼区",
    shippingName: "赵八",
    shippingPhone: "13700000004",
    shippingZip: "210000",
    orderStatus: "配送中",
    shippingFee: "22.50",
    goodsAmount: "6200.00",
    goodsQuantity: 90,
    orderTime: "2023-06-20 16:40:20",
    orderRemarks: "小心轻放",
    recipientName: "孙九",
    recipientPhone: "13400000004",
    recipientAddress: "成都市武侯区高新大道15号",
    recipientZip: "610000",
    recipientProvince: "四川省",
    recipientCity: "成都市",
    recipientDistrict: "武侯区",
  },
  {
    id: 5,
    orderNo: "80000494875",
    paymentType: "月结",
    shippingAddress: "武汉市江汉区建设大道20号",
    shippingProvince: "湖北省",
    shippingCity: "武汉市",
    shippingDistrict: "江汉区",
    shippingName: "钱十",
    shippingPhone: "13600000005",
    shippingZip: "430000",
    orderStatus: "已签收",
    shippingFee: "19.80",
    goodsAmount: "5000.00",
    goodsQuantity: 70,
    orderTime: "2023-07-05 11:55:10",
    orderRemarks: "验货后签收",
    recipientName: "周十一",
    recipientPhone: "13500000005",
    recipientAddress: "长沙市岳麓区橘子洲路25号",
    recipientZip: "410000",
    recipientProvince: "湖南省",
    recipientCity: "长沙市",
    recipientDistrict: "岳麓区",
  },
  {
    id: 6,
    orderNo: "80000494876",
    paymentType: "到付",
    shippingAddress: "天津市和平区南京路30号",
    shippingProvince: "天津市",
    shippingCity: "天津市",
    shippingDistrict: "和平区",
    shippingName: "吴十二",
    shippingPhone: "13500000006",
    shippingZip: "300000",
    orderStatus: "待发货",
    shippingFee: "17.50",
    goodsAmount: "9200.00",
    goodsQuantity: 140,
    orderTime: "2023-08-18 13:20:05",
    orderRemarks: "当天发货",
    recipientName: "郑十三",
    recipientPhone: "13900000006",
    recipientAddress: "苏州市姑苏区观前街50号",
    recipientZip: "215000",
    recipientProvince: "江苏省",
    recipientCity: "苏州市",
    recipientDistrict: "姑苏区",
  },
  {
    id: 7,
    orderNo: "80000494877",
    paymentType: "预付",
    shippingAddress: "重庆市渝中区解放碑路5号",
    shippingProvince: "重庆市",
    shippingCity: "重庆市",
    shippingDistrict: "渝中区",
    shippingName: "冯十四",
    shippingPhone: "13800000007",
    shippingZip: "400000",
    orderStatus: "已发货",
    shippingFee: "20.00",
    goodsAmount: "7300.00",
    goodsQuantity: 105,
    orderTime: "2023-09-25 08:45:50",
    orderRemarks: "请勿折叠",
    recipientName: "何十五",
    recipientPhone: "13200000007",
    recipientAddress: "西安市雁塔区大雁塔南路60号",
    recipientZip: "710000",
    recipientProvince: "陕西省",
    recipientCity: "西安市",
    recipientDistrict: "雁塔区",
  },
];
