//index.js

const db = wx.cloud.database()
Page({

  data: {
    imgUrls: [
      // 'cloud://webday8-cysbh.7765-webday8-cysbh/file/img/banner3.jpg',
      // 'cloud://webday8-cysbh.7765-webday8-cysbh/file/img/banner2.jpg',
      // 'cloud://webday8-cysbh.7765-webday8-cysbh/file/img/banner1.jpg'
    ],
    n: 0,
    indicatorDots: true,
    autoplay: true,
    iconUrls: [{
        "src": '/images/icon1.png',
        title: "公开课"
      },
      {
        "src": '/images/icon2.png',
        title: "室内景观"
      },
      {
        "src": '/images/icon3.png',
        title: "平面UIUE"
      },
      {
        "src": '/images/icon4.png',
        title: "网页设计"
      },
      {
        "src": '/images/icon5.png',
        title: "办公"
      },
      {
        "src": '/images/icon1.png',
        title: "机械模具"
      },
      {
        "src": '/images/icon3.png',
        title: "公开课"
      },
      {
        "src": '/images/icon2.png',
        title: "公开课"
      },
      {
        "src": '/images/icon4.png',
        title: "公开课"
      },
      {
        "src": '/images/icon5.png',
        title: "公开课"
      }
    ],
    // tupUrls: [{
    //     "src": '/images/ai.jpg',
    //     title: "AI"
    //   },
    //   {
    //     "src": '/images/an.jpg',
    //     title: "AN"
    //   },
    //   {
    //     "src": '/images/cad.jpg',
    //     title: "cad"
    //   },
    //   {
    //     "src": '/images/office.jpg',
    //     title: "office"
    //   }
    // ]
  },
  onLoad: function(options) {
  
    db.collection('tmnp').get({
      success: res => {
        console.log(res.data)
        this.setData({
          imgUrls: res.data,
        })
      },
      fail: err => {
        this.setData();
        console.log(err)
      }
    })
    db.collection('kecheng')

      .skip(this.data.n * 4) // 跳过结果集中的前 10 条，从第 11 条开始返回
      .limit(4) // 限制返回数量为 10 条
      .get({
        success: res => {
          console.log(res.data)
          this.setData({
            tupUrls: res.data,
          })
        },
        fail: err => {
          this.setData();
          console.log(err)
        }
      })


  },

  onReachBottom() {
    console.log(this.data.n)
    if(this.data.n<3){
      db.collection('jiazai')
        .skip(this.data.n * 4) // 跳过结果集中的前 10 条，从第 11 条开始返回
        .limit(4) // 限制返回数量为 10 条
        .get({
          success: res => {
            console.log(res.data)
            this.setData({
              n: ++this.data.n,
              tupUrls: [...this.data.tupUrls, ...res.data],
            })
          },
          fail: err => {
            this.setData();
            console.log(err)
          }
        })
    }else{
    }
    
  }
})