// miniprogram/pages/comment/pinglun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flg: false,
    todolist: [{
      date: "2019-07-18",
      list: [{
        time: "9:00",
        todo: "移动app"
      }]
    }, {
      date: "2019-07-20",
      list: [{
          time: "9:00",
          todo: "移动app"
        },
        {
          time: "13:30",
          todo: "vue"
        }
      ]
    }, {
      date: "2019-07-23",
      list: [{
        time: "9:00",
        todo: "vue"
      }]
    }, {
      date: "2019-07-26",
      list: [{
        time: "9:00",
        todo: "vue框架"
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onChange: function(e) {
    console.log(e.detail);
    this.setData({
      // print:e.detail.username
    })
  }
})