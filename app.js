//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  globalData: {
    userInfo: "hello",
    ToShow: [0,1,2,3,4,5,6,7,8,9,10],
    Tag_choose: [0,1,2,3,4,5,6,7,8,9,10],
    difficulty_S: [0, 4],
    difficulty_N: [3, 7, 9],
    difficulty_H: [1, 2, 5, 6, 8],
    difficulty_choices: 'NONE',
    tag_search_hanser: [0, 1, 3, 4, 5, 6, 7, 9],
    tag_search_publish: [3, 4, 6, 8],
    tag_search_stream: [0, 3, 4, 7, 9],
    tag_search_workshop: [1],
    tag_search_line: [2,3],
    tag_search_show: [5,6],
    tag_search_dub: [2],
    tag_search_game: [7, 8],
    tag_search_friend: [1, 9],
    tag_search_saying: [8,9],
    default: [0,1,2,3,4,5,6,7,8,9,10],
    question: [
      { "question": "0小天使斗地主押输还是押赢？", "opt_count":2, "option": { "A": "押赢", "B": "押输" }, "analysis": "无脑押赢就对了，别问，问就是慈善赌王憨八嘎", "answer":"A", "difficulty":"S", "tag_hanser": 1, "tag_publish": 0, "tag_stream": 1, "tag_workshop": 0, "tag_line": 0, "tag_show": 0, "tag_dub": 0, "tag_game": 0, "tag_friend": 0, "tag_saying": 0}, 
      { "question": "1给哪位歌姬做过生日蛋糕？______", "opt_count":0, "option": { "A": "三无MarBlue" }, "analysis": "请记住三无哥哥的全名，谢谢！", "answer":"A", "difficulty":"H", "tag_hanser": 1, "tag_publish": 0, "tag_stream": 0, "tag_workshop": 0, "tag_line": 0, "tag_show": 0, "tag_dub": 0, "tag_game": 0, "tag_friend": 1, "tag_saying": 0}, 
      { "question": "2给300英雄哪个角色配过音？", "opt_count":3, "option": { "A": "缇米", "B": "康娜", "C": "亚瑟王" }, "analysis": "不是天美那个TIMI", "answer":"A", "difficulty":"H", "tag_hanser": 0, "tag_publish": 0, "tag_stream": 0, "tag_workshop": 0, "tag_line": 0, "tag_show": 0, "tag_dub": 1, "tag_game": 0, "tag_friend": 0, "tag_saying": 0}, 
      { "question": "3经常用哪个牌子的相机？", "opt_count":3, "option": { "A": "佳能", "B": "富士", "C": "索尼" }, "analysis": "索尼是真的香，无脑吹就对了2333", "answer":"C", "difficulty":"N", "tag_hanser": 1, "tag_publish": 1, "tag_stream": 1, "tag_workshop": 0, "tag_line": 0, "tag_show": 0, "tag_dub": 0, "tag_game": 0, "tag_friend": 0, "tag_saying": 0}, 
      { "question": "4hanser是什么狗？", "opt_count":2, "option": { "A": "颜狗", "B": "索狗" }, "analysis": "答颜狗的出去面壁反省", "answer":"B", "difficulty":"S", "tag_hanser": 1, "tag_publish": 1, "tag_stream": 1, "tag_workshop": 0, "tag_line": 0, "tag_show": 0, "tag_dub": 0, "tag_game": 0, "tag_friend": 0, "tag_saying": 0}, 
      { "question": "5hanser的哔哩哔哩UID是多少？", "opt_count":3, "option": { "A": "2550505.0", "B": "11073.0", "C": "282994.0" }, "analysis": "5位数的UID，不愧是hanser，小破站元老级别的up主！C是yousa的~", "answer":"B", "difficulty":"H", "tag_hanser": 1, "tag_publish": 0, "tag_stream": 0, "tag_workshop": 0, "tag_line": 0, "tag_show": 0, "tag_dub": 0, "tag_game": 0, "tag_friend": 0, "tag_saying": 0}, 
      { "question": "6帮我做模型的小姐姐叫啥？______", "opt_count":0, "option": { "A": "狐狸" }, "analysis": "狐狸姐姐b站ID是i-fox，有兴趣可以关注一波，最早是憨憨跳极乐净土那个模型，后来那个微胖模型和成都BW，广州萤火虫的模型都是狐狸姐姐做的", "answer":"A", "difficulty":"H", "tag_hanser": 1, "tag_publish": 1, "tag_stream": 0, "tag_workshop": 0, "tag_line": 0, "tag_show": 0, "tag_dub": 0, "tag_game": 0, "tag_friend": 0, "tag_saying": 0}, 
      { "question": "7我以前讨厌过哪个游戏？", "opt_count":3, "option": { "A": "英雄联盟", "B": "斗地主", "C": "忘了" }, "analysis": "无", "answer":"A", "difficulty":"N", "tag_hanser": 1, "tag_publish": 0, "tag_stream": 1, "tag_workshop": 0, "tag_line": 0, "tag_show": 0, "tag_dub": 0, "tag_game": 1, "tag_friend": 0, "tag_saying": 0}, 
      { "question": "8崩女孩投稿的时候是崩坏3几周年？", "opt_count":3, "option": { "A": "1周年", "B": "2周年", "C": "3周年" }, "analysis": "投稿时间为2017年，崩坏三2016年开服", "answer":"A", "difficulty":"H", "tag_hanser": 0, "tag_publish": 1, "tag_stream": 0, "tag_workshop": 0, "tag_line": 0, "tag_show": 0, "tag_dub": 0, "tag_game": 1, "tag_friend": 0, "tag_saying": 0}, 
      { "question": "9我和小缘喵，三无MarBlue，王菠萝掰手腕能赢过谁？", "opt_count":4, "option": { "A": "小缘喵", "B": "三无MarBlue", "C": "王菠萝", "D": "一个也赢不了" }, "analysis": "小天使果然是柔弱的女孩子呢嘤嘤嘤", "answer":"D", "difficulty":"N", "tag_hanser": 1, "tag_publish": 0, "tag_stream": 1, "tag_workshop": 0, "tag_line": 0, "tag_show": 0, "tag_dub": 0, "tag_game": 0, "tag_friend": 1, "tag_saying": 0}, 
      ]
      
  }
})