var util = require("../../../utils/util.js")
var app = getApp()

Page({
  "onLoad": function (options) {
    this.setData({
      width: app.globalData.screenW
    })
      wx.request({
        url: 'https://www.sojson.com/open/api/weather/json.shtml',
        method:'GET',
        header: {},
        data:{'city':'广州'},
        dataType:'json',
        success:function(success) {
          console.log(success)
        },
        fail: function (error) {
          console.log(error)
        }
      })
  },
  "onShow": function () {

  },
  "onReady": function () {

  },
  "onHide": function () {

  },
  "onUnload": function () {

  },
  "onPullDownRefresh": function () {
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
    images: [
      "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    width: null
  },
  cycleScrollViewDidScroll: function (event) {
    // console.log(event)
  },
  cycleScrollViewClicked: function (event) {
    console.log(event)
  }
})