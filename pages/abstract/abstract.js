// pages/abstract/abstract.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    to_show: [99999], //将展示的题目序号 列表
    cur_show: [99999], //本页面将展示的题目序号 列表
    show_count: 15, //本页面显示题目数量
    cur_page: 1, //当前页码 第一页为1
    max_page: 3, //最大页码
    abs1: "empty1",
    abs2: "empty2",
    abs3: "empty3",
    abs4: "empty4",
    abs5: "empty5",
    abs6: "empty6",
    abs7: "empty7",
    abs8: "empty8",
    abs9: "empty9",
    abs10: "empty10",
    abs11: "empty11",
    abs12: "empty12",
    abs13: "empty13",
    abs14: "empty14",
    abs15: "empty15",
    show_answer: 0,
    answer: "default",
  },

  showAnswer: function(index){ //index = 0,1,...14
    var ans = app.globalData.question[app.globalData.ToShow[index]].answer
    if(ans == "A"){
      this.setData({
        answer: app.globalData.question[app.globalData.ToShow[index]].option.A
      })
    }
    else if(ans == "B"){
      this.setData({
        answer: app.globalData.question[app.globalData.ToShow[index]].option.B
      })
    }
    else if(ans == "C"){
      this.setData({
        answer: app.globalData.question[app.globalData.ToShow[index]].option.C
      })
    }
    else if(ans == "D"){
      this.setData({
        answer: app.globalData.question[app.globalData.ToShow[index]].option.D
      })
    }
    else{
      this.setData({
        answer: ans
      })  
    }
    this.setData({
      show_answer: index+1,
    })  
  },

  abs1: function () {
    this.showAnswer(0)
  },
  abs2: function () {
    this.showAnswer(1)
  },
  abs3: function () {
    this.showAnswer(2) 
  },
  abs4: function () {
    this.showAnswer(3) 
  },
  abs5: function () {
    this.showAnswer(4) 
  },
  abs6: function () {
    this.showAnswer(5) 
  },
  abs7: function () {
    this.showAnswer(6) 
  },
  abs8: function () {
    this.showAnswer(7) 
  },
  abs9: function () {
    this.showAnswer(8) 
  },
  abs10: function () {
    this.showAnswer(9) 
  },
  abs11: function () {
    this.showAnswer(10) 
  },
  abs12: function () {
    this.showAnswer(11) 
  },
  abs13: function () {
    this.showAnswer(12) 
  },
  abs14: function () {
    this.showAnswer(13) 
  },
  abs15: function () {
    this.showAnswer(14) 
  },
  
  next_page: function () {
    if(this.data.cur_page < this.data.max_page){
      this.setData({
        cur_page: this.data.cur_page+1,
        show_answer: 0,
        answer: "default",
      }) 
      var ABS_list = this.data.to_show
      var showCnt = ABS_list.length - 15*(this.data.cur_page-1)
      if(showCnt >=15){
        this.setData({show_count: 15})
      }
      else{
        this.setData({show_count: showCnt})        
      }
      var offset = 15*(this.data.cur_page-1)
      if(this.data.show_count >= 1){ this.setData({abs1: app.globalData.question[app.globalData.ToShow[0 + offset]].abs}) }
      if(this.data.show_count >= 2){ this.setData({abs2: app.globalData.question[app.globalData.ToShow[1 + offset]].abs}) }
      if(this.data.show_count >= 3){ this.setData({abs3: app.globalData.question[app.globalData.ToShow[2 + offset]].abs}) }
      if(this.data.show_count >= 4){ this.setData({abs4: app.globalData.question[app.globalData.ToShow[3 + offset]].abs}) }
      if(this.data.show_count >= 5){ this.setData({abs5: app.globalData.question[app.globalData.ToShow[4 + offset]].abs}) }
      if(this.data.show_count >= 6){ this.setData({abs6: app.globalData.question[app.globalData.ToShow[5 + offset]].abs}) }
      if(this.data.show_count >= 7){ this.setData({abs7: app.globalData.question[app.globalData.ToShow[6 + offset]].abs}) }
      if(this.data.show_count >= 8){ this.setData({abs8: app.globalData.question[app.globalData.ToShow[7 + offset]].abs}) }
      if(this.data.show_count >= 9){ this.setData({abs9: app.globalData.question[app.globalData.ToShow[8 + offset]].abs}) }
      if(this.data.show_count >= 10){ this.setData({abs10: app.globalData.question[app.globalData.ToShow[9 + offset]].abs}) }
      if(this.data.show_count >= 11){ this.setData({abs11: app.globalData.question[app.globalData.ToShow[10 + offset]].abs}) }
      if(this.data.show_count >= 12){ this.setData({abs12: app.globalData.question[app.globalData.ToShow[11 + offset]].abs}) }
      if(this.data.show_count >= 13){ this.setData({abs13: app.globalData.question[app.globalData.ToShow[12 + offset]].abs}) }
      if(this.data.show_count >= 14){ this.setData({abs14: app.globalData.question[app.globalData.ToShow[13 + offset]].abs}) }
      if(this.data.show_count >= 15){ this.setData({abs15: app.globalData.question[app.globalData.ToShow[14 + offset]].abs}) }

      if (wx.pageScrollTo) {//回到顶端
        wx.pageScrollTo({
          scrollTop: 0
        })
      }
    }
  },

  previous_page: function () {
    if(this.data.cur_page>1){
      this.setData({
        cur_page: this.data.cur_page-1,
        show_answer: 0,
        answer: "default",
      })  
      var ABS_list = this.data.to_show
      var showCnt = ABS_list.length - 15*(this.data.cur_page-1)
      if(showCnt >=15){
        this.setData({show_count: 15})
      }
      else{
        this.setData({show_count: showCnt})        
      }
      var offset = 15*(this.data.cur_page-1)
      if(this.data.show_count >= 1){ this.setData({abs1: app.globalData.question[app.globalData.ToShow[0 + offset]].abs}) }
      if(this.data.show_count >= 2){ this.setData({abs2: app.globalData.question[app.globalData.ToShow[1 + offset]].abs}) }
      if(this.data.show_count >= 3){ this.setData({abs3: app.globalData.question[app.globalData.ToShow[2 + offset]].abs}) }
      if(this.data.show_count >= 4){ this.setData({abs4: app.globalData.question[app.globalData.ToShow[3 + offset]].abs}) }
      if(this.data.show_count >= 5){ this.setData({abs5: app.globalData.question[app.globalData.ToShow[4 + offset]].abs}) }
      if(this.data.show_count >= 6){ this.setData({abs6: app.globalData.question[app.globalData.ToShow[5 + offset]].abs}) }
      if(this.data.show_count >= 7){ this.setData({abs7: app.globalData.question[app.globalData.ToShow[6 + offset]].abs}) }
      if(this.data.show_count >= 8){ this.setData({abs8: app.globalData.question[app.globalData.ToShow[7 + offset]].abs}) }
      if(this.data.show_count >= 9){ this.setData({abs9: app.globalData.question[app.globalData.ToShow[8 + offset]].abs}) }
      if(this.data.show_count >= 10){ this.setData({abs10: app.globalData.question[app.globalData.ToShow[9 + offset]].abs}) }
      if(this.data.show_count >= 11){ this.setData({abs11: app.globalData.question[app.globalData.ToShow[10 + offset]].abs}) }
      if(this.data.show_count >= 12){ this.setData({abs12: app.globalData.question[app.globalData.ToShow[11 + offset]].abs}) }
      if(this.data.show_count >= 13){ this.setData({abs13: app.globalData.question[app.globalData.ToShow[12 + offset]].abs}) }
      if(this.data.show_count >= 14){ this.setData({abs14: app.globalData.question[app.globalData.ToShow[13 + offset]].abs}) }
      if(this.data.show_count >= 15){ this.setData({abs15: app.globalData.question[app.globalData.ToShow[14 + offset]].abs}) }

      if (wx.pageScrollTo) {//回到顶端
        wx.pageScrollTo({
          scrollTop: 0
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({abs1: "111"})
    this.setData({
      to_show: app.globalData.ToShow,
    }) 
    this.setData({abs1: "112"})
    var ABS_list = this.data.to_show
    var CUR_list = []
    var MAX_page = parseInt(ABS_list.length/15) + 1
    this.setData({
      max_page: MAX_page,
      cur_page: 1,
    }) 
    this.setData({abs1: "113"})
    if(ABS_list.length>15){
      this.setData({
        show_count: 15,
      }) 
    }
    else{
      this.setData({
        show_count: ABS_list.length,
      })  
    }
    for(var i=0; i<this.data.show_count; i+=1){
      CUR_list.push(ABS_list[i])
      CUR_list.sort((a, b) => a - b)
    }
    this.setData({
      cur_show: ABS_list,
    })  
    
    if(this.data.show_count >= 1){ this.setData({abs1: app.globalData.question[app.globalData.ToShow[0]].abs}) }
    if(this.data.show_count >= 2){ this.setData({abs2: app.globalData.question[app.globalData.ToShow[1]].abs}) }
    if(this.data.show_count >= 3){ this.setData({abs3: app.globalData.question[app.globalData.ToShow[2]].abs}) }
    if(this.data.show_count >= 4){ this.setData({abs4: app.globalData.question[app.globalData.ToShow[3]].abs}) }
    if(this.data.show_count >= 5){ this.setData({abs5: app.globalData.question[app.globalData.ToShow[4]].abs}) }
    if(this.data.show_count >= 6){ this.setData({abs6: app.globalData.question[app.globalData.ToShow[5]].abs}) }
    if(this.data.show_count >= 7){ this.setData({abs7: app.globalData.question[app.globalData.ToShow[6]].abs}) }
    if(this.data.show_count >= 8){ this.setData({abs8: app.globalData.question[app.globalData.ToShow[7]].abs}) }
    if(this.data.show_count >= 9){ this.setData({abs9: app.globalData.question[app.globalData.ToShow[8]].abs}) }
    if(this.data.show_count >= 10){ this.setData({abs10: app.globalData.question[app.globalData.ToShow[9]].abs}) }
    if(this.data.show_count >= 11){ this.setData({abs11: app.globalData.question[app.globalData.ToShow[10]].abs}) }
    if(this.data.show_count >= 12){ this.setData({abs12: app.globalData.question[app.globalData.ToShow[11]].abs}) }
    if(this.data.show_count >= 13){ this.setData({abs13: app.globalData.question[app.globalData.ToShow[12]].abs}) }
    if(this.data.show_count >= 14){ this.setData({abs14: app.globalData.question[app.globalData.ToShow[13]].abs}) }
    if(this.data.show_count >= 15){ this.setData({abs15: app.globalData.question[app.globalData.ToShow[14]].abs}) }

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