var util = require("../../../utils/util.js")

Page({
  "onLoad": function (options) {

  },
  "onShow": function () {

  },
  "onReady": function () {

  },
  "onHide": function () {

  },
  "onUnload": function () {

  },
  "onPullDownRefresh": function() {
    // wx.stopPullDownRefresh()
  },
  "onReachBottom": function () {

  },
  "onShareAppMessage": function () {
    return {
      "title": "喵喵炭",
      "path": "/pages/index/index"
    }
  },
  "onPageScroll": function (option) {
    console.log(option)
  },
  "onTabItemTap": function (item) {
    console.log(item)
  },
  data: {
    text: "test",
    array:[1,2,3],
    view:"app",
    name:{name: "NN"}
  },
  viewTouchStart: function (event) {
    console.log(event)
  },
  viewTouchStart2: function (event) {
    console.log(event)
  },
  viewTouchMove: function (event) {
    console.log(event)
  },
  viewTap: function (event) {
    util.sayHello("NN")
    console.log(event)
    this.setData({
      text:"NN"
    })
    wx.navigateTo({
      url: '../../logs/logs',
      fail: function (error) {
        console.log(error)
      }
    })
  }
})