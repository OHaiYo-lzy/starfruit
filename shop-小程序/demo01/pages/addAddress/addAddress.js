
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    phone:"",
    address:"",
  },


  addCheck: function(e){
    var that=this
    // 校验手机号的正则表达式?
    // var checkID = /^( ( (13[0-9]{1}) | (15[0-9]{1}) | (18[0-9]{1}) | (17[0-9]{1}) ) + \d{8} )$/;
    if(that.data.name == ''){
      wx.showModal({
        title: '温馨提示',
        content: '请输入收件人姓名',
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
    else if(that.data.phone.length != 11){ //校验手机号，后期替换成校验ID值
      wx.showModal({
        title: '温馨提示',
        content: '手机号码长度有误，请重新输入',
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
    else if(that.data.address == ''){
      wx.showModal({
        title: '温馨提示',
        content: '请输入收货地址',
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
      // 试图显示加载中，失败
      // wx.showLoading({
      //   title: '加载中',
      //   // mask: 'true'
      // })
      // console.log('success')
      // setTimeout(function(){
      //   wx.hideLoading({
      //     success: (res) => {},
      //   }),4000
      // })

      //向服务器发送数据
      //向下单页面、管理地址页面发送数据
      wx.showModal({
        title: '新增地址',
        content: '新增地址成功！',
        showCancel:false,
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.redirectTo({
              url: '/pages/address/address'
            })
          } 
        }
      })
    }
   
  },

  nameInput:function(e){
    this.data.name = e.detail.value
  },

  phoneInput:function(e){
    this.data.phone = e.detail.value
  },

  addressInput:function(e){
    this.data.address = e.detail.value
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