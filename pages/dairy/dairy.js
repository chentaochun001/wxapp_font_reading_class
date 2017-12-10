// pages/dairy/dairy.js
const app = getApp()
Page({
  // day：星期几
  // date：某日
  // month：月份
  data: {
    day: "",
    date: "",
    month: "",
  },
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
  onLoad: function (options) {
    
  },
  readDetail: function() {
    wx.navigateTo({
      url: './detail/detail'
    })
  },
 
  onReady: function () {
  
  },
  
  onHide: function () {
  
  },
  onUnload: function () {
  
  },

  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})