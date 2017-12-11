// pages/world/world.js
const app = getApp()

Page({
  data: {
    activeIndex: 0,
  },
  //点击事件
  changeTag: function(e) {
    var type = e.target.dataset.index;
    console.log(type);
    this.setData({
      activeIndex: type
    });
    this.get_github_list(type);
  },
  //滑动事件
  swiperTab: function(e) {
    var type = e.detail.current;
    this.setData({
      activeIndex: type
    });
    this.get_github_list(type);
  },
  get_github_list: function(type) {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a2b5f76158e7b70032804d0/getActicleInfo/getGithubInfo',
      method: 'GET',
      data: {
        type: type
      },
      success: function(res) {
        if(type==0) {
          console.log(res);
          that.setData({
            html_List: res.data.data.html_List
          });
        } else if(type==1) {
          console.log(res);
          that.setData({
            css_List: res.data.data.css_List
          });
        } else {
          console.log(res);
          that.setData({
            javascript_List: res.data.data.javascript_List
          });
        }
      }
    })
  },
  onLoad: function (options) {
    this.get_github_list("");
  },

})