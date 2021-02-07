Page({
  data: {
    projectName: "基于MongoDB数据库实现海洋数据的实时存储和统计分析"
  },
  // 图片下载
  picture:function ( ){
    wx.downloadFile({
      url: 'http://qnqn0qylz.hn-bkt.clouddn.com/index.jpg',
      type: 'audio',
      success:function(res){
        const tempFilePath = res.tempFilePath  //如果请求成功，则通过res中的tempFilePath 得到需要下载的图片地址
        console.log(tempFilePath); //方便查看，这里打印路径
        console.log("请求到了");
        wx.saveImageToPhotosAlbum({
          filePath: tempFilePath,  //设置下载图片的地址
          success:function(){
            console.log("保存成功"); 
          }
        })
      }
    })
  },
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("页面渲染成功")
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