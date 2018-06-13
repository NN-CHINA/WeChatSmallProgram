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
    ]
  },
  cycleScrollViewDidScroll: function (event) {
    console.log(event)
  },
  cycleScrollViewClicked: function (event) {
    console.log(event)
  }
})