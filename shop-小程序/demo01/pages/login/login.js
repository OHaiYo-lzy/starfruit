// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:"",
  },

  forgot:function(e){
    wx.navigateTo({
      url: '/pages/forgot/forgot',
    })
  },

  loginCheck: function(e){
    var that=this
    // 校验手机号的正则表达式?
    var checkID = /^( ( (13[0-9]{1}) | (15[0-9]{1}) | (18[0-9]{1}) | (17[0-9]{1}) ) + \d{8} )$/;
    if(that.data.username == ''){
      wx.showModal({
        title: '温馨提示',
        content: '请输入用户名',
        showCancel:false,
        success (res) {
          // if (res.confirm) {
          //   console.log('用户点击确定')
          // } else if (res.cancel) {
          //   console.log('用户点击取消')
          // }
        }
      })
    } 
    else if(that.data.username.length != 11){ //校验手机号，后期替换成校验ID值
      wx.showModal({
        title: '温馨提示',
        content: '用户名长度有误，请重新输入',
        showCancel:false,
        success (res) {
          // if (res.confirm) {
          //   console.log('用户点击确定')
          // } else if (res.cancel) {
          //   console.log('用户点击取消')
          // }
        }
      })
    }
    // else if(!checkID.test(that.data.username)){
    //   wx.showModal({
    //     title: '温馨提示',
    //     content: '请输入正确的用户名',
    //     showCancel:false,
    //     success (res) {
    //       // if (res.confirm) {
    //       //   console.log('用户点击确定')
    //       // } else if (res.cancel) {
    //       //   console.log('用户点击取消')
    //       // }
    //     }
    //   })
    // }
    else if(that.data.password == ''){
      wx.showModal({
        title: '温馨提示',
        content: '请输入密码',
        showCancel:false,
        success (res) {
          // if (res.confirm) {
          //   console.log('用户点击确定')
          // } else if (res.cancel) {
          //   console.log('用户点击取消')
          // }
        }
      })
    }else{
      //向服务器发送数据
      console.log('success')
    }
   
  },

  usernameInput:function(e){
    this.data.username = e.detail.value
  },

  passwordInput:function(e){
    this.data.password = e.detail.value
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