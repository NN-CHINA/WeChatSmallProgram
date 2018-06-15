let base64 = require('base64.js').Base64
let md5 = require('md5.js')
let app = getApp()

function GET() {

}

function POST(relativePath, parameters, success, warning, failure, complete) {
  let timeStamp = Date.parse(new Date()) / 1000;
  let timeStampString = timeStamp.toString();
  let lastFour = timeStampString.substring(timeStampString.length - 4);
  let lastFourBase64 = base64.encode(lastFour)
  let noEqualSignLastFour = lastFourBase64.replace(/=/g, '')
  let lastFourForNoEqualSignLastFour = noEqualSignLastFour.substring(noEqualSignLastFour.length - 4);
  let willBeEncodedString = lastFour + 'zhianCode' + lastFourForNoEqualSignLastFour;
  let authcode = md5.hexMD5(willBeEncodedString)
  wx.request({
    url: app.serverRoot + relativePath,
    method: 'POST',
    header: {
      'content-type':'application/json',
      versionNum: '1.0.0',
      usertype: 1,
      timestamp: timeStamp,
      authcode: authcode
    },
    data: parameters,
    dataType: 'json',
    success: (response) => {
      console.log(this)
      if (response.statusCode == 200) {
        let res = response.data
        let code = res.code
        let msg = res.msg
        let data = res.data
        if (code == 40001) {
          if (success) {
            success(data)
            console.log(data)
          }
        } else {
          if (warning) {
            warning(msg)
          }
          console.log('NN Error' + msg)
        }
      }
    },
    fail: function (error) {
      if (failure) {
        failure(error)
      }
      console.log(error)
    },
    complete:function() {
      if (complete) {
        complete()
      }
    }
  })
}

var postParametr = {
  relativePath: "",
  parameters: "",
  success: {},
  warning: {},
  failure: {},
  complete: {}
}

function Post(postParametr) {
  let timeStamp = Date.parse(new Date()) / 1000;
  let timeStampString = timeStamp.toString();
  let lastFour = timeStampString.substring(timeStampString.length - 4);
  let lastFourBase64 = base64.encode(lastFour)
  let noEqualSignLastFour = lastFourBase64.replace(/=/g, '')
  let lastFourForNoEqualSignLastFour = noEqualSignLastFour.substring(noEqualSignLastFour.length - 4);
  let willBeEncodedString = lastFour + 'zhianCode' + lastFourForNoEqualSignLastFour;
  let authcode = md5.hexMD5(willBeEncodedString)
  wx.request({
    url: app.serverRoot + postParametr['relativePath'],
    method: 'POST',
    header: {
      'content-type': 'application/json',
      versionNum: '1.0.0',
      usertype: 1,
      timestamp: timeStamp,
      authcode: authcode
    },
    data: postParametr['parameters'],
    dataType: 'json',
    success: (response) => {
      console.log(response)
      console.log(this)
      if (response.statusCode == 200) {
        let res = response.data
        let code = res.code
        let msg = res.msg
        let data = res.data
        if (code == 40001) {
          let success = postParametr['success']
          if (success) {
            success(data)
          }
        } else {
          let warning = postParametr['warning']
          if (warning) {
            warning(msg)
          }
          console.log('NN Error' + msg)
        }
      }
    },
    fail: function (error) {
      let failure = postParametr['failure']
      if (failure) {
        failure(error)
      }
      console.log(error)
    },
    complete: function () {
      let complete = postParametr['complete']
      if (complete) {
        complete()
      }
    }
  })
}

module.exports = {
  POST: POST,
  Post: Post
}