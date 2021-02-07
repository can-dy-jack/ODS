// 引入 用来请求的 Promise方法
import {  request  } from "../../request/index.js";

Page({
  data: {
    swiperList:[],
    catesList:[],
    floorList:[]
  },
  onLoad: function (options) {
    // 异步请求，获取轮播图数据
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // });
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },
  getSwiperList(){
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata" })
    .then(result=>{
      this.setData({
          swiperList: result.data.message
       })
    })
  },
  getCateList(){
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems" })
    .then(result=>{
      this.setData({
          catesList: result.data.message
       })
    })
  },
  getFloorList(){
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata" })
    .then(result=>{
      this.setData({
          floorList: result.data.message
       })
    })
  }

})