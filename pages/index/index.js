//index.js
const app = getApp()

Page({
  data: {
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
