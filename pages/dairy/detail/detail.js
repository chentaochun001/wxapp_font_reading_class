Page({
  data: {
    item: []
  },
  onLoad: function(params) {
    // 检验id是否传递成功
    console.log(params.id);
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a2b5f76158e7b70032804d0/getActicleInfo/getActicleInfo',
      success: function(res) {
        // 使用过滤器把id等于上一页面id的数组赋值给datas
        var datas = res.data.data.acticle_List.filter(item => {
          return item.acticle_id == params.id;
        });
        that.setData({
          item: datas
        });
        console.log(datas);
      }
    })

  }
})