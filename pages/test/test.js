// pages/test/test.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    to_show: [99999], //将展示的题目序号 列表
    current_index: 0, //当前to_show列表的index
    index: 0,
    realIndex: 99999, //经过to_show列表找到的实际题目序号
    opt_count:3,
    difficulty: "NONE",
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    a:0,
    b:0,
    c:0,
    d:0,
    optionA: "A",
    optionB: "B",
    optionC: "C",
    optionD: "D",
    questionDetail: "***",
    answerA: "***",
    answerB: "***",
    answerC: "***",
    answerD: "***",
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    listABC : ['A','B','C','D'],

    showresults: 'default - result',
    showanswer: 'default -answer',
    analysis: 'default - analysis'
  },

  randSort: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },

  setList: function () {
    var newList = this.data.list.sort(this.randSort);
    this.setData({
      list: newList,
    });
  },

  setABC : function(){
    var abc = this.data.listABC.sort(this.randSort);
    this.setData({
      listABC: abc,
    });
  },

  setOption: function(){

  },



  answerClickA: function () {
    if(app.globalData.question[this.data.realIndex].answer == 'A'){
      this.setData({
        showresults: '回答正确'
      })  
    }
    else{
      this.setData({
        showresults: '回答错误，你选了A'
      })  
    }
  },

  answerClickB: function () {
    if(app.globalData.question[this.data.realIndex].answer == 'B'){
      this.setData({
        showresults: '回答正确'
      })  
    }
    else{
      this.setData({
        showresults: '回答错误，你选了B'
      })  
    }
  },

  answerClickC: function () {
    if(app.globalData.question[this.data.realIndex].answer == 'C'){
      this.setData({
        showresults: '回答正确'
      })  
    }
    else{
      this.setData({
        showresults: '回答错误,，你选了C'
      })  
    }
  },

  answerClickD: function () {
    if(app.globalData.question[this.data.realIndex].answer == 'D'){
      this.setData({
        showresults: '回答正确'
      })  
    }
    else{
      this.setData({
        showresults: '回答错误，你选了D'
      })  
    }
  },

  show_analysis: function(){
    this.setData({
      analysis: app.globalData.question[this.data.realIndex].analysis,
      showanswer: app.globalData.question[this.data.realIndex].answer
    })
  },

  previous_question: function(){
    this.setData({
      showresults: 'reset due to jump prev -result',
      analysis: 'reset due to jump prev -analysis',
      showanswer: 'reset due to jump prev -answer'
    })
    if(this.data.current_index>0){
      this.setData({
        current_index: this.data.current_index - 1,
        index: this.data.index - 1,//仅序号-1
      })
      this.setData({
        realIndex: app.globalData.ToShow[this.data.current_index],
      })
      this.setData({
        opt_count: app.globalData.question[this.data.realIndex].opt_count,
        difficulty: app.globalData.question[this.data.realIndex].difficulty,
        questionDetail: app.globalData.question[this.data.realIndex].question, //加载问题及选项
        answerA: app.globalData.question[this.data.realIndex].option.A,
        answerB: app.globalData.question[this.data.realIndex].option.B,
        answerC: app.globalData.question[this.data.realIndex].option.C,
        answerD: app.globalData.question[this.data.realIndex].option.D,
      })
    }
  },

  next_question: function(){
    this.setData({
      showresults: 'reset due to jump next -result',
      analysis: 'reset due to jump next -analysis',
      showanswer: 'reset due to jump next -answer'
    })
    if(this.data.current_index<app.globalData.ToShow.length-1){
      this.setData({
        current_index: this.data.current_index + 1,
        index: this.data.index + 1,//仅序号+1
      })
      this.setData({
        realIndex: app.globalData.ToShow[this.data.current_index],
      })
      this.setData({
        opt_count: app.globalData.question[this.data.realIndex].opt_count,
        difficulty: app.globalData.question[this.data.realIndex].difficulty,
        questionDetail: app.globalData.question[this.data.realIndex].question, //加载问题及选项
        answerA: app.globalData.question[this.data.realIndex].option.A,
        answerB: app.globalData.question[this.data.realIndex].option.B,
        answerC: app.globalData.question[this.data.realIndex].option.C,
        answerD: app.globalData.question[this.data.realIndex].option.D,
      })
    }
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setList();
    this.setABC();
    this.setData({
      to_show: app.globalData.ToShow,
      realIndex: app.globalData.ToShow[0],
      opt_count: app.globalData.question[app.globalData.ToShow[0]].opt_count,
      difficulty: app.globalData.question[app.globalData.ToShow[0]].difficulty,
      questionDetail: app.globalData.question[app.globalData.ToShow[0]].question,
      answerA: app.globalData.question[app.globalData.ToShow[0]].option.A,
      answerB: app.globalData.question[app.globalData.ToShow[0]].option.B,
      answerC: app.globalData.question[app.globalData.ToShow[0]].option.C,
      answerD: app.globalData.question[app.globalData.ToShow[0]].option.D,
    })
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