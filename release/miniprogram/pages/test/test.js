Page({
  data: {
    msg: "日志",
    date: 2021,
    html: [
      {
        name: "div",
        attrs:{
          class: "my_div",
          style: "color:red"
        },
        children:[
          {
            name: "p",
            attrs:{},
            children:[
              {
                type: "text",
                text: "hello"
              }
            ]
          }
        ]
      }
    ],
    datas: {
      sum: 200,
      tips: "海洋数据",
      isFree: true
    }
  },
  // bindinput事件绑定
  handleInput(e) { //e是事件源对象
    this.setData({
      num: e.detail.value
    })
  },
  // bindtap事件绑定
  handletap(e) {
    // console.log(e);
    const ope = e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num + ope
    })
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

  }
})