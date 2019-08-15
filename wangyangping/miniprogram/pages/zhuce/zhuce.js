// miniprogram/pages/zhuce/zhuce.js
const db = wx.cloud.database()
Page({
  onClickLeft() {
    wx.navigateTo({
      url: '../denglu/denglu'
    });
  },
  onClickRight() {
    wx.navigateTo({
      url: '../denglu/denglu'
    });
  },
  denglu: function () {
    wx.navigateTo({
      url: '../denglu/denglu'
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    uname: "",
    pwd: "",
    updpwd:""
  },
  zhuce: function() {

    if (this.data.uname == "") {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
        duration: 2000
      })
    } else if (this.data.pwd == "") {
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 2000
      })
    } else if (this.data.updpwd == ""){
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration: 2000
      })
    } else if (this.data.updpwd != this.data.pwd  ){
      wx.showToast({
        title: '密码输入错误',
        icon: 'none',
        duration: 2000
      })
    }
    else {

      db.collection('denglu-data').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          username: this.data.uname,
          password: this.data.pwd,
          updpwd:this.data.pwd
        },
        success: function(res) {
          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          console.log(res)
          wx.showToast({
            title: '注册成功！',
            icon: 'none',
            duration: 2000
          })

        },
        fail: function(err) {
          console.log(err)
        }
      })

    }

  },
  onUsername(event) {
    // event.detail 为当前输入的值
    console.log(event.detail.value);
    this.setData({
      uname: event.detail.value,
    })
  },
  onBlur(event) {
    // event.detail 为当前输入的值
    console.log(event.detail.value);
    this.setData({
      pwd: event.detail.value
    })
  },
  onqueren(event) {
    // event.detail 为当前输入的值
    console.log(event.detail.value);
    this.setData({
      updpwd: event.detail.value
    })
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

  }
})