import {  request  } from "../../request/index.js";

Page({
  data: {
    userinfo:{}
  },
  onShow(){
    const userinfo=wx.getStorageSync('userinfo');
    this.setData({userinfo})
  }
})