Page({
  data: {
    item: []
  },
  onLoad: function(params) {
    console.log(params.id);
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a2b5f76158e7b70032804d0/getActicleInfo/getActicleInfo',
      success: function(res) {
        var datas = res.data.data.acticle_List.filter(item => {
          return item.acticle_id == params.id;
        });
        that.setData({
          item: datas
        });
        console.log(datas)
      }
    })

  }
})