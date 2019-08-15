// miniprogram/pages/find/faxian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    long: 121.484450,
    lat: 31.231750
  },
  onscan: function() {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })

  },
  onchange: function() {
    wx.scanCode({
      success(res) {
        wx.showModal({
          content: res.result
        })

      },
      fail(e) {
        console.log("扫码失败！")
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    setInterval(() => {
      var now = new Date();
      this.setData({
        hour: now.getHours(),
        mint: now.getMinutes(),
        second: now.getSeconds()
      });
    }, 1000)
    wx.getLocation({
      type: 'wgs84',
      success:(res)=> {
        const latitude = res.latitude;
        const longitude = res.longitude;
        this.setData({
          long:longitude,
          lat:latitude,
        })
      }
    })
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

  }
})