// pages/dairy/dairy.js
const app = getApp()
Page({
  data: {
    index: "",
    arrlist: [],
    headline: "",
    from: "",
    id: ""
  },

  //监听页面显示
  // day：星期几
  // date：某日
  // month：月份
  onShow: function () {
      var myDate = new Date();
      // setData设置或更新数据
      this.setData({
        date: myDate.getDate(),
        month: myDate.getMonth() + 1,
        day: week(),
      });
      function week(day) {
          switch(myDate.getDay()) {
            case 1: day="星期一"; break;
            case 2: day="星期二"; break;
            case 3: day="星期三"; break;
            case 4: day="星期四"; break;
            case 5: day="星期五"; break;
            case 6: day="星期六"; break;
            default: day="星期天";
          }
          return day;
        }
  },

  onLoad: function () {
    var that = this;
      wx.request({
        url: 'https://www.easy-mock.com/mock/5a2b5f76158e7b70032804d0/getActicleInfo/getActicleInfo',
        method: 'GET',
        data: {},
        success: function(res) {
          //获取文章数据的列表
          var arr = res.data.data.acticle_List;
          //用随机函数随机获取数组的下标
          var index = Math.floor(Math.random()*arr.length);
          // console.log(arr[index].acticle_id);
          that.setData({
            headline: arr[index].headline,
            from: arr[index].from,
            // 设置id作为阅读详情页的一个钩子
            id: arr[index].acticle_id
          })
        }
      })
  },
})