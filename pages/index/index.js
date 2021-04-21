//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   difficulty_choice: '忽略难度',
   count_tag: 0,
   choose_all: 1,
   choose_hanser: 0,
   choose_publish: 0,
   choose_stream: 0,
   choose_workshop: 0,
   choose_line: 0,
   choose_show: 0,
   choose_dub: 0,
   choose_game: 0,
   choose_friend: 0,
   choose_saying: 0,
   will_show: app.globalData.default,
   I:0,
   J:0,
  },

  tag_all: function() {
    this.setData({
      count_tag: 0,
      choose_all: 1,
      choose_hanser: 0,
      choose_publish: 0,
      choose_stream: 0,
      choose_workshop: 0,
      choose_line: 0,
      choose_show: 0,
      choose_dub: 0,
      choose_game: 0,
      choose_friend: 0,
      choose_saying: 0,
    })
  },
  tag_hanser: function() {
    if(this.data.choose_hanser==0){
      this.setData({
        choose_hanser: 1,
        count_tag: this.data.count_tag + 1,
        choose_all: 0
      })
    }
    else{
      this.setData({
        choose_hanser: 0,
        count_tag: this.data.count_tag - 1,
      })
      if(this.data.count_tag==0){
        this.setData({
          choose_all: 1
        })
      }
    }
  },
  tag_publish: function() {
    if(this.data.choose_publish==0){
      this.setData({
        choose_publish: 1,
        count_tag: this.data.count_tag + 1,
        choose_all: 0
      })
    }
    else{
      this.setData({
        choose_publish: 0,
        count_tag: this.data.count_tag - 1,
      })
      if(this.data.count_tag==0){
        this.setData({
          choose_all: 1
        })
      }
    }
  },
  tag_stream: function() {
    if(this.data.choose_stream==0){
      this.setData({
        choose_stream: 1,
        count_tag: this.data.count_tag + 1,
        choose_all: 0
      })
    }
    else{
      this.setData({
        choose_stream: 0,
        count_tag: this.data.count_tag - 1,
      })
      if(this.data.count_tag==0){
        this.setData({
          choose_all: 1
        })
      }
    }
  },

  tag_workshop: function() {
    if(this.data.choose_workshop==0){
      this.setData({
        choose_workshop: 1,
        count_tag: this.data.count_tag + 1,
        choose_all: 0
      })
    }
    else{
      this.setData({
        choose_workshop: 0,
        count_tag: this.data.count_tag - 1,
      })
      if(this.data.count_tag==0){
        this.setData({
          choose_all: 1
        })
      }
    }
  },
  tag_line: function() {
    if(this.data.choose_line==0){
      this.setData({
        choose_line: 1,
        count_tag: this.data.count_tag + 1,
        choose_all: 0
      })
    }
    else{
      this.setData({
        choose_line: 0,
        count_tag: this.data.count_tag - 1,
      })
      if(this.data.count_tag==0){
        this.setData({
          choose_all: 1
        })
      }
    }
  },
  tag_show: function() {
    if(this.data.choose_show==0){
      this.setData({
        choose_show: 1,
        count_tag: this.data.count_tag + 1,
        choose_all: 0
      })
    }
    else{
      this.setData({
        choose_show: 0,
        count_tag: this.data.count_tag - 1,
      })
      if(this.data.count_tag==0){
        this.setData({
          choose_all: 1
        })
      }
    }
  },

  tag_dub: function() {
    if(this.data.choose_dub==0){
      this.setData({
        choose_dub: 1,
        count_tag: this.data.count_tag + 1,
        choose_all: 0
      })
    }
    else{
      this.setData({
        choose_dub: 0,
        count_tag: this.data.count_tag - 1,
      })
      if(this.data.count_tag==0){
        this.setData({
          choose_all: 1
        })
      }
    }
  },
  tag_game: function() {
    if(this.data.choose_game==0){
      this.setData({
        choose_game: 1,
        count_tag: this.data.count_tag + 1,
        choose_all: 0
      })
    }
    else{
      this.setData({
        choose_game: 0,
        count_tag: this.data.count_tag - 1,
      })
      if(this.data.count_tag==0){
        this.setData({
          choose_all: 1
        })
      }
    }
  },
  tag_friend: function() {
    if(this.data.choose_friend==0){
      this.setData({
        choose_friend: 1,
        count_tag: this.data.count_tag + 1,
        choose_all: 0
      })
    }
    else{
      this.setData({
        choose_friend: 0,
        count_tag: this.data.count_tag - 1,
      })
      if(this.data.count_tag==0){
        this.setData({
          choose_all: 1
        })
      }
    }
  },

  tag_saying: function() {
    if(this.data.choose_saying==0){
      this.setData({
        choose_saying: 1,
        count_tag: this.data.count_tag + 1,
        choose_all: 0
      })
    }
    else{
      this.setData({
        choose_saying: 0,
        count_tag: this.data.count_tag - 1,
      })
      if(this.data.count_tag==0){
        this.setData({
          choose_all: 1
        })
      }
    }
  },


  diffuculty_Simple: function() {
    if(this.data.difficulty_choice=='简单'){
      this.setData({
        difficulty_choice: '忽略难度'
      })
    }
    else{
      this.setData({
        difficulty_choice: '简单'
      })
    }
  },
  diffuculty_Normal: function() {
    if(this.data.difficulty_choice=='正常'){
      this.setData({
        difficulty_choice: '忽略难度'
      })
    }
    else{
      this.setData({
        difficulty_choice: '正常'
      })
    }
  },
  diffuculty_Hard: function() {
    if(this.data.difficulty_choice=='困难'){
      this.setData({
        difficulty_choice: '忽略难度'
      })
    }
    else{
      this.setData({
        difficulty_choice: '困难'
      })
    }
  },
  diffuculty_ignore: function() {
    this.setData({
      difficulty_choice: '忽略难度'
    })
  },
  
  abstract_test: function() {
    if(this.data.count_tag!=0){//tag 过滤
      var TagSearch =　[] //暂存为数组，以便处理
      //获取数组长度：array.length
      if(this.data.choose_hanser == 1){
        var hanser = app.globalData.tag_search_hanser
        for(var i=0; i<hanser.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == hanser[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != hanser[i]){
            TagSearch.push(hanser[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_publish == 1){
        var publish = app.globalData.tag_search_publish
        for(var i=0; i<publish.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == publish[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != publish[i]){
            TagSearch.push(publish[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_stream == 1){
        var stream = app.globalData.tag_search_stream
        for(var i=0; i<stream.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == stream[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != stream[i]){
            TagSearch.push(stream[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_workshop == 1){
        var workshop = app.globalData.tag_search_workshop
        for(var i=0; i<workshop.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == workshop[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != workshop[i]){
            TagSearch.push(workshop[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_line == 1){
        var line = app.globalData.tag_search_line
        for(var i=0; i<line.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == line[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != line[i]){
            TagSearch.push(line[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_show == 1){
        var show = app.globalData.tag_search_show
        for(var i=0; i<show.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == show[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != show[i]){
            TagSearch.push(show[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_dub == 1){
        var dub = app.globalData.tag_search_dub
        for(var i=0; i<dub.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == dub[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != dub[i]){
            TagSearch.push(dub[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_game == 1){
        var game = app.globalData.tag_search_game
        for(var i=0; i<game.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == game[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != game[i]){
            TagSearch.push(game[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_friend == 1){
        var friend = app.globalData.tag_search_friend
        for(var i=0; i<friend.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == friend[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != friend[i]){
            TagSearch.push(friend[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_saying == 1){
        var saying = app.globalData.tag_search_saying
        for(var i=0; i<saying.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == saying[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != saying[i]){
            TagSearch.push(saying[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }

      app.globalData.ToShow = TagSearch
    }
    else{
      this.setData({
        will_show: app.globalData.default
      })
      app.globalData.ToShow = app.globalData.default
    }

    if(this.data.difficulty_choice != '忽略难度'){ //难度过滤
      if(this.data.difficulty_choice== '简单'){
        var DifficultySearch = []
        var difficultyFilter = app.globalData.difficulty_S
        var TagSearch = this.data.will_show
        for(var i=0; i<TagSearch.length; i+=1){
          var j = 0
          while(j<difficultyFilter.length){
            if(TagSearch[i] == difficultyFilter[j]){
              DifficultySearch.push(TagSearch[i])
              DifficultySearch.sort((a, b) => a - b)
            }
            j+=1
          }
        }
        this.setData({
          will_show: DifficultySearch
        })
        app.globalData.difficulty_choice = 'S'
      }
      if(this.data.difficulty_choice== '正常'){
        var DifficultySearch = []
        var difficultyFilter = app.globalData.difficulty_N
        var TagSearch = this.data.will_show
        for(var i=0; i<TagSearch.length; i+=1){
          var j = 0
          while(j<difficultyFilter.length){
            if(TagSearch[i] == difficultyFilter[j]){
              DifficultySearch.push(TagSearch[i])
              DifficultySearch.sort((a, b) => a - b)
            }
            j+=1
          }
        }
        this.setData({
          will_show: DifficultySearch
        })
        app.globalData.difficulty_choice = 'N'
      }
      if(this.data.difficulty_choice== '困难'){
        var DifficultySearch = []
        var difficultyFilter = app.globalData.difficulty_H
        var TagSearch = this.data.will_show
        for(var i=0; i<TagSearch.length; i+=1){
          var j = 0
          while(j<difficultyFilter.length){
            if(TagSearch[i] == difficultyFilter[j]){
              DifficultySearch.push(TagSearch[i])
              DifficultySearch.sort((a, b) => a - b)
            }
            j+=1
          }
        }
        this.setData({
          will_show: DifficultySearch
        })
        app.globalData.difficulty_choice = 'H'
      }

      app.globalData.ToShow = DifficultySearch
    }
    else{
      app.globalData.difficulty_choice = 'NONE'
    }

    
    wx.navigateTo({
      url: '../abstract/abstract'
    })
  },
 

  //事件处理函数
  beginAnswer: function() {
    if(this.data.count_tag!=0){//tag 过滤
      var TagSearch =　[] //暂存为数组，以便处理
      //获取数组长度：array.length
      if(this.data.choose_hanser == 1){
        var hanser = app.globalData.tag_search_hanser
        for(var i=0; i<hanser.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == hanser[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != hanser[i]){
            TagSearch.push(hanser[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_publish == 1){
        var publish = app.globalData.tag_search_publish
        for(var i=0; i<publish.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == publish[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != publish[i]){
            TagSearch.push(publish[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_stream == 1){
        var stream = app.globalData.tag_search_stream
        for(var i=0; i<stream.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == stream[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != stream[i]){
            TagSearch.push(stream[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_workshop == 1){
        var workshop = app.globalData.tag_search_workshop
        for(var i=0; i<workshop.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == workshop[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != workshop[i]){
            TagSearch.push(workshop[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_line == 1){
        var line = app.globalData.tag_search_line
        for(var i=0; i<line.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == line[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != line[i]){
            TagSearch.push(line[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_show == 1){
        var show = app.globalData.tag_search_show
        for(var i=0; i<show.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == show[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != show[i]){
            TagSearch.push(show[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_dub == 1){
        var dub = app.globalData.tag_search_dub
        for(var i=0; i<dub.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == dub[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != dub[i]){
            TagSearch.push(dub[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_game == 1){
        var game = app.globalData.tag_search_game
        for(var i=0; i<game.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == game[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != game[i]){
            TagSearch.push(game[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_friend == 1){
        var friend = app.globalData.tag_search_friend
        for(var i=0; i<friend.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == friend[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != friend[i]){
            TagSearch.push(friend[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }
      if(this.data.choose_saying == 1){
        var saying = app.globalData.tag_search_saying
        for(var i=0; i<saying.length; i+=1){
          var j=0
          while(j<TagSearch.length){
            if(TagSearch[j] == saying[i]){
              break //found id in TagSearch, no need to add
            }
            j+=1
          }
          if(TagSearch[j] != saying[i]){
            TagSearch.push(saying[i]) //add new id to TagSearch
            TagSearch.sort((a, b) => a - b)
          }
        }
        this.setData({
          will_show: TagSearch,
        })
      }

      app.globalData.ToShow = TagSearch
    }
    else{
      this.setData({
        will_show: app.globalData.default
      })
      app.globalData.ToShow = app.globalData.default
    }

    if(this.data.difficulty_choice != '忽略难度'){ //难度过滤
      if(this.data.difficulty_choice== '简单'){
        var DifficultySearch = []
        var difficultyFilter = app.globalData.difficulty_S
        var TagSearch = this.data.will_show
        for(var i=0; i<TagSearch.length; i+=1){
          var j = 0
          while(j<difficultyFilter.length){
            if(TagSearch[i] == difficultyFilter[j]){
              DifficultySearch.push(TagSearch[i])
              DifficultySearch.sort((a, b) => a - b)
            }
            j+=1
          }
        }
        this.setData({
          will_show: DifficultySearch
        })
        app.globalData.difficulty_choice = 'S'
      }
      if(this.data.difficulty_choice== '正常'){
        var DifficultySearch = []
        var difficultyFilter = app.globalData.difficulty_N
        var TagSearch = this.data.will_show
        for(var i=0; i<TagSearch.length; i+=1){
          var j = 0
          while(j<difficultyFilter.length){
            if(TagSearch[i] == difficultyFilter[j]){
              DifficultySearch.push(TagSearch[i])
              DifficultySearch.sort((a, b) => a - b)
            }
            j+=1
          }
        }
        this.setData({
          will_show: DifficultySearch
        })
        app.globalData.difficulty_choice = 'N'
      }
      if(this.data.difficulty_choice== '困难'){
        var DifficultySearch = []
        var difficultyFilter = app.globalData.difficulty_H
        var TagSearch = this.data.will_show
        for(var i=0; i<TagSearch.length; i+=1){
          var j = 0
          while(j<difficultyFilter.length){
            if(TagSearch[i] == difficultyFilter[j]){
              DifficultySearch.push(TagSearch[i])
              DifficultySearch.sort((a, b) => a - b)
            }
            j+=1
          }
        }
        this.setData({
          will_show: DifficultySearch
        })
        app.globalData.difficulty_choice = 'H'
      }

      app.globalData.ToShow = DifficultySearch
    }
    else{
      app.globalData.difficulty_choice = 'NONE'
    }

  
  
    

    wx.navigateTo({
      url: '../test/test'
    })
  },
  
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
