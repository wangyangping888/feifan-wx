// miniprogram/pages/my/mine.js
import fileTool from "../../until/file.js";
// import Dialog from '../../components/dialog/dialog';
const db = wx.cloud.database()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    flg: true
  },
  onchangeimg: function() {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        // tempFilePath可以作为img标签的src属性显示图片
        var tmnp = [...res.tempFilePaths, ...this.data.items]

        if (tmnp.length > 9) {
          wx.showToast({
            title: '图片超过9张',
            icon: 'none',
            duration: 2000
          })
          tmnp = this.data.items
        }
        this.setData({
          items: tmnp,
        })
        if (tmnp.length >= 9) {
          this.setData({
            flg: false
          })

        }
        var ret;
        res.tempFilePaths.forEach(function(item) {
          ret = fileTool.uploadFile(item);
        })
        console.log(ret);
        wx.hideLoading()
        // var tmp_str = this.data.items[0];
        // console.log(tmp_str)
        // var start = tmp_str.lastIndexOf(".");
        // var sub = tmp_str.substr(start);
        // var num = res.tempFilePaths.length;
        // res.tempFilePaths.forEach(function(item) {
        //   var name = new Date().getTime() + sub;
        //   wx.cloud.uploadFile({
        //     cloudPath: 'upload/img/' + name,
        //     filePath: item, // 文件路径
        //     success: res => {
        //       // get resource ID
        //       num--;

        //       if (num <= 0) {
        //         wx.hideLoading();
        //       }
        //       db.collection('images').add({
        //         // data 字段表示需新增的 JSON 数据
        //         data: {
        //           // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
        //           img: res.fileID,
        //           title: name
        //         },
        //         success: function(res) {
        //           // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        //           console.log(res)

        //         },
        //         fail: console.error
        //       })

        //       console.log(res.fileID)
        //     },
        //     fail: err => {
        //       // handle error
        //     }
        //   })
        // })

        wx.showLoading({
          title: '图片加载中',
        })

        setTimeout(function() {
          wx.hideLoading()
        }, 2000)
      }

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