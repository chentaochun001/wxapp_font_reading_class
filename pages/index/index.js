//index.js
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  dairyRead: function() {
    wx.navigateTo({
      url: '../dairy/dairy'
    })
  },
  lookWorld: function() {
    wx.navigateTo({
      url: '../world/world'
    })
  },
  intelligence: function() {
    wx.navigateTo({
      url: '../intelligence/intelligence'
    })
  },
  introduction: function() {
    wx.navigateTo({
      url: '../introduction/introduction'
    })
  }
})
