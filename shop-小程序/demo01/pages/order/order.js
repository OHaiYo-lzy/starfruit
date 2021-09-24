
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    "payList": [
      { name: 'Ipad Air 4', price: '￥4399', image:"/images/icon_black/cart_black.png",description:"A friend of study."}, 
      { name: 'A', price: '￥2369', image:"",description:"nothing but A."}, 
    ],
    "comfirmList": [
      { name: 'B', price: '￥1250', image:"",description:"nothing but B."}, 
      { name: 'C', price: '￥1370', image:"",description:"nothing but C."}, 
    ],
    "doneList": [
      { name: 'D', price: '￥211', image:"",description:"nothing but D."}, 
      { name: 'E', price: '￥5900', image:"",description:"nothing but E."}, 
    ],
    "cancleList":[
      { name: 'F', price: '￥1746', image:"",description:"nothing but F."}, 
      { name: 'G', price: '￥2499', image:"",description:"nothing but G."}, 
    ]
  },
 
  //swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 4
      this.setData({
        currentIndex: currentPageIndex
      })
    }
  },
  //用户点击tab时调用
  titleClick: function (e) {
    let currentPageIndex =
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
  }
 
})