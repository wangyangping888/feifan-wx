// components/calendar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    todos: {
      type: Object,
      value: []
    },
    select: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: 0,
    today: [0, 0, 0],
    days: [],
    todoList: [],
    selected: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //  根据年月计算日历应该显示的日期
    getMonthDay: function(y, m) {
      var arr = [];
      // for (var i = 0; i < 42; i++) {
      //   arr.push((i + 1)+"日");
      // }
      var is_leap = 0;
      if (y % 100 == 0) {
        if (y % 400 == 0) {
          is_leap = 1;
        }
      } else {
        if (y % 4 == 0) {
          is_leap = 1;
        }
      }
      // 每一个月该有的天数
      var month_count = [31, 28 + is_leap, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      // m = 11;
      // 当前月1号星期几
      var first_day = new Date(y + "-" + (m + 1) + "-01").getDay();
      console.log("当前月1号星期" + first_day)
      // 上一个月的天数
      var prev_month_day_count = first_day == 0 ? 7 : first_day;
      console.log("上一个月的天数" + first_day)
      // for (var i = 0; i < prev_month_day_count; i ++) {
      //   arr.push(0)
      // }
      // 上一个月的日期
      // 上一个月是否是上一年
      var month = (m - 1 + 12) % 12;
      var year = m == 0 ? (y - 1) : y;

      for (var i = 1; i <= prev_month_day_count; i++) {
        var day = month_count[month] - prev_month_day_count + i;
        var select = this.data.selected.indexOf(year + "-" + (month + 1) + "-" + day) > -1 ? true : false;
        arr.push({
          year: year,
          month: month,
          day: day,
          current: false,
          select:select,
          todo: false,
          list:[]
        });
      }
      // console.log(arr)
      // for (var i = 1; i <= month_count[m]; i++) {
      //   arr.push(i);
      // }

      // 当前月的天数
      var current_month_day_count = month_count[m];

      // 当前月的日期
      for (var i = 1; i <= current_month_day_count; i++) {
        var select = this.data.selected.indexOf(y + "-" + (m + 1) + "-" + i) > -1 ? true : false;
        arr.push({
          year: y,
          month: m,
          day: i,
          current: true,
          select: select,
          todo: false,
          list: []
        });
      }

      // // 下一个月的天数
      var next_month_day_count = 42 - prev_month_day_count - current_month_day_count;

      // for (var i = 0; i < next_month_day_count; i++) {
      //   arr.push(0);
      // }
      // console.log(arr);
      var month = (m + 1) % 12;
      var year = m == 11 ? (y + 1) : y;
      // 下一个月的日期
      for (var i = 1; i <= next_month_day_count; i++) {
        var select = this.data.selected.indexOf(year + "-" + (month + 1) + "-" + i) > -1 ? true : false;
        arr.push({
          year: year,
          month: month,
          day: i,
          current: false,
          select: select,
          todo: false,
          list: []
        });
      }
      for (var i = 0; i < this.data.todos.length; i++) {
       
        var tmp = this.data.todos[i].date.split('-');
       
        tmp[0] = tmp[0] - 0;
        tmp[1] = tmp[1] - 1;
        tmp[2] = tmp[2] - 0;

        for (var j = 0; j < arr.length; j++) {
          if (arr[j].year == tmp[0] && arr[j].month == tmp[1] && arr[j].day == tmp[2]) {
            arr[j].todo = true;
            arr[j].list = this.data.todos[i].list;
          }
        }
      }
      return arr;
    },
    // 上一个月
    prevMonth: function() {
      var prevMonth = (this.data.month - 1 + 12) % 12;
      var year = (this.data.month == 0 ? (this.data.year - 1) : this.data.year);
      var arr = this.getMonthDay(this.data.year, prevMonth);
      this.setData({
        year: year,
        month: prevMonth,
        days: arr
      })
    },
    // 下一个月
    nextMonth: function() {
      var nextvMonth = (this.data.month + 1) % 12;
      var year = this.data.month == 11 ? this.data.year + 1 : this.data.year;
      var arr = this.getMonthDay(year, nextvMonth);
      this.setData({
        year: year,
        month: nextvMonth,
        days: arr
      })
    },
    onSelect: function(e) {
      // console.log(e.currentTarget.dataset.index);
      // var arr = this.data.days;
      // var selectlist = [];
      // for (var i = 0; i < arr.length; i++) {
      //   var flg = false;
      //   if (i == e.target.dataset.index) {
      //     flg = true;
      //   }
      //   arr[i].select = flg;
      //   selectlist.push(flg);
      // }
      // this.setData({
      //   days: arr,
      //   select: selectlist
      // })
      var index = e.currentTarget.dataset.index;
      var arr = this.data.days;
      var list = [];
      var selected = this.data.selected;
      // 如果select==true 的时候可以选中多个日期
      // 如果select==false 的时候查看日程安排，只能选中一天
      if (this.data.select) {
        // 取反操作
        arr[index].select = !arr[index].select;
        if (arr[index].select) {
          selected.push(arr[index].year + "-" + (arr[index].month + 1) + "-" + arr[index].day);
        } else {
          for (var i = 0; i < selected.length; i++) {
            if (selected[i] == arr[index].year + "-" + (arr[index].month + 1) + "-" + arr[index].day) {
              selected.splice(i, 1);
              break;
            }
          }
        }

      } else {
        // 查看日程安排
        for (var i = 0; i < arr.length; i++) {
          arr[i].select = false;
        }
        if (arr[index].todo) {
          list = arr[index].list;
        }
        arr[index].select = true;
        console.log(index);
        // 选中的日期
        selected = [arr[index].year + "-" + (arr[index].month + 1) + "-" + arr[index].day];
      }
      this.setData({
        days: arr,
        todoList: list,
        selected: selected
      });
      this.triggerEvent('change', {
        selected: selected,
        list: list
      }, {})
    }
  },
  lifetimes: {
    attached: function() {
      console.log("加载")
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var day = now.getDate();
      var arr = this.getMonthDay(year, month);
      console.log(arr);
      this.setData({
        year: year,
        month: month,
        today: [year, month, day],
        days: arr
      })
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {

      // 在组件实例被从页面节点树移除时执行
    },
  },
  attached: function() {
    console.log("加载")
    var now = new Date();
    var nyear = now.getFullYear();
    var nmonth = now.getMonth();
    var nday = now.getDate();
    var arr = this.getMonthDay(nyear, nmonth);
    this.setData({
      year: nyear,
      month: nmonth,
      today: [nyear, nmonth, nday],
      days: arr
    })
    // 在组件实例进入页面节点树时执行
  },
  detached: function() {

    // 在组件实例被从页面节点树移除时执行
  }
})