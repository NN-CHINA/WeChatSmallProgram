var util = require("../../../utils/util.js")
var request = require('../../../utils/request.js')
var app = getApp()

Page({
  "onLoad": function (options) {
    this.setData({
      width: app.globalData.screenW
    })
    this.loadData()
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
    this.loadData()
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
    images: null,
    hotProjectList: null,
    width: null,
    dataSource: null,
    theme:app.themeColor
  },
  cycleScrollViewDidScroll: function (event) {
    // console.log(event)
  },
  cycleScrollViewClicked: function (event) {
    console.log(event)
  },
  loadData: function() {
      request.Post({
        relativePath: '/app/index/index',
        parameters: {'region_name': '江门'},
        success:(res) => {
          this.setData({
            images: res.adList,
            hotProjectList: res.hotProjectList
          })
        },
        complete:(res) => {
          wx.stopPullDownRefresh()
        }
      })
  }
})


// request.POST('/app/index/index', { 'region_name': '江门' },
    //   (success) => {
    //     this.setData({
    //       images: success.adList,
    //       dataSource: success
    //     })
    //   },
    //   (waring) => {

    //   },
    //   (failure) => {

    //   },
    //   (complete) => {
    //     wx.stopPullDownRefresh()
    //   })