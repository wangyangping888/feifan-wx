// miniprogram/pages/denglu/denglu.js
const db = wx.cloud.database()
Page({
  onClickLeft() {
    wx.switchTab({
      url: '../index/index'
    });
  },
  onClickRight() {
    wx.navigateTo({
      url: '../zhuce/zhuce'
    });
  },
  zhuce:function(){
    wx.navigateTo({
      url: '../zhuce/zhuce'
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    uname: "",
    pwd: ""
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  daka: function() {

    db.collection('denglu-data').where({
      // data 字段表示需新增的 JSON 数据
      username: this.data.uname
    }).get({
      success: (res) => {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
        if(res.data.length<=0){
          wx.navigateTo({
            url: '../zhuce/zhuce'
          });
        }else{
          console.log(this)
          var tpname = this.data.uname;
          var tppwd = this.data.pwd;
            db.collection('denglu-data').where({
              // data 字段表示需新增的 JSON 数据
              username: tpname,
              password: tppwd
            }).get({
              success: res => {
                // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                console.log(res)
                if (res.data.length <= 0) {
                  wx.showToast({
                    title: '密码输入错误',
                    icon: 'none',
                    duration: 2000
                  })
                } else{
                  wx.showToast({
                    title: '登录成功！',
                    icon: 'none',
                    duration: 2000
                  });
                  wx.switchTab({
                    url: '../index/index'
                  });
                }
              },
              fail: function (err) {
                console.log(err)
              }
            })
          
        }
      }
    })  
  },
  onUsername(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    this.setData({
      uname: event.detail.value,
    })
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    this.setData({
      pwd: event.detail.value,
    })
  },
  

  /*
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