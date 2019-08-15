// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  data: {
    message: 'hello world!',
    test: '动态模板添加！',
    array: [{
      message: '张三',
      age:'18',
      sex:'nan'
    }, {
      message: '李四',
        age: '19',
        sex: 'nan'
      }, {
        message: '王五',
        age: '20',
        sex: 'nan'
      }],
  },
  dianji: function (e) {
    console.log(e),
      wx.showToast({title:e.target.dataset.item.message})
  },
})
