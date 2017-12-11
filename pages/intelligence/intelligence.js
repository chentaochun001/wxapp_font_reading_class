// pages/intelligence/intelligence.js
const app = getApp()
Page({
  data: {
    intelligence_list: []
  },
  get_intelligence_list: function() {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a2b5f76158e7b70032804d0/getActicleInfo/getIntelligenceInfo',
      method: 'GET',
      success: function(res) {
        console.log(res);
        that.setData({
          intelligence_list: res.data.data.intelligence_list
        })
      }
    })
  },
  onLoad: function (options) {
    this.get_intelligence_list("");
  }
})