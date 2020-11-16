<template>
  <div class="mainApp clearFix">
    <div class="main">
      <div class="wrapbox">
        <div class="table-head">
          <table>
            <thead>
            <tr>
              <th class="time">时间</th>
              <th class="num">期号</th>
              <th>出奖号码</th>
            </tr>
            </thead>
          </table>
        </div>
        <div class="table-body">
          <table>
            <tbody id="tbody">
            <tr v-for="item in resultListData">
              <th class="time">{{item.preDrawTime}}</th>
              <th class="num">{{item.preDrawIssue}}</th>
              <th class="prize">
                <span v-for="newItem in item.getResult" :class="{ 'active': newItem==CheckNumber }">
                  {{newItem}}
                </span>
              </th>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="clearFix">
        <div class="contentNum">
          <table>
            <tbody>
            <tr>
              <th colspan="2">全部的次数</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNum)==resultNum[1] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出1的次数</th>
              <th class="numberOf">{{resultNum[1]}}</th>
            </tr>

            <tr :class="{ 'active': Math.max(...resultNum)==resultNum[2] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出2的次数</th>
              <th class="numberOf">{{resultNum[2]}}</th>
            </tr>

            <tr :class="{ 'active': Math.max(...resultNum)==resultNum[3] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出3的次数</th>
              <th class="numberOf">{{resultNum[3]}}</th>
            </tr>

            <tr :class="{ 'active': Math.max(...resultNum)==resultNum[4] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出4的次数</th>
              <th class="numberOf">{{resultNum[4]}}</th>
            </tr>

            <tr :class="{ 'active': Math.max(...resultNum)==resultNum[5] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出5的次数</th>
              <th class="numberOf">{{resultNum[5]}}</th>
            </tr>

            <tr :class="{ 'active': Math.max(...resultNum)==resultNum[6] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出6的次数</th>
              <th class="numberOf">{{resultNum[6]}}</th>
            </tr>

            <tr :class="{ 'active': Math.max(...resultNum)==resultNum[7] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出7的次数</th>
              <th class="numberOf">{{resultNum[7]}}</th>
            </tr>

            <tr :class="{ 'active': Math.max(...resultNum)==resultNum[8] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出8的次数</th>
              <th class="numberOf">{{resultNum[8]}}</th>
            </tr>

            <tr :class="{ 'active': Math.max(...resultNum)==resultNum[9] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出9的次数</th>
              <th class="numberOf">{{resultNum[9]}}</th>
            </tr>

            <tr :class="{ 'active': Math.max(...resultNum)==resultNum[10] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出10的次数</th>
              <th class="numberOf">{{resultNum[10]}}</th>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="contentNum">
          <table>
            <tbody>
            <tr>
              <th class="numberOfTimes" colspan="2">前10个统计</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop10)==resultNumTop10[1] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出1的次数</th>
              <th class="numberOf">{{resultNumTop10[1]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop10)==resultNumTop10[2] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出2的次数</th>
              <th class="numberOf">{{resultNumTop10[2]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop10)==resultNumTop10[3] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出3的次数</th>
              <th class="numberOf">{{resultNumTop10[3]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop10)==resultNumTop10[4] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出4的次数</th>
              <th class="numberOf">{{resultNumTop10[4]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop10)==resultNumTop10[5] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出5的次数</th>
              <th class="numberOf">{{resultNumTop10[5]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop10)==resultNumTop10[6] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出6的次数</th>
              <th class="numberOf">{{resultNumTop10[6]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop10)==resultNumTop10[7] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出7的次数</th>
              <th class="numberOf">{{resultNumTop10[7]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop10)==resultNumTop10[8] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出8的次数</th>
              <th class="numberOf">{{resultNumTop10[8]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop10)==resultNumTop10[9] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出9的次数</th>
              <th class="numberOf">{{resultNumTop10[9]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop10)==resultNumTop10[10] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出10的次数</th>
              <th class="numberOf">{{resultNumTop10[10]}}</th>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="contentNum">
          <table>
            <tbody>
            <tr>
              <th colspan="2">前20个统计</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop20)==resultNumTop20[1] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出1的次数</th>
              <th class="numberOf">{{resultNumTop20[1]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop20)==resultNumTop20[2] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出2的次数</th>
              <th class="numberOf">{{resultNumTop20[2]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop20)==resultNumTop20[3] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出3的次数</th>
              <th class="numberOf">{{resultNumTop20[3]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop20)==resultNumTop20[4] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出4的次数</th>
              <th class="numberOf">{{resultNumTop20[4]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop20)==resultNumTop20[5] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出5的次数</th>
              <th class="numberOf">{{resultNumTop20[5]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop20)==resultNumTop20[6] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出6的次数</th>
              <th class="numberOf">{{resultNumTop20[6]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop20)==resultNumTop20[7] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出7的次数</th>
              <th class="numberOf">{{resultNumTop20[7]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop20)==resultNumTop20[8] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出8的次数</th>
              <th class="numberOf">{{resultNumTop20[8]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop20)==resultNumTop20[9] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出9的次数</th>
              <th class="numberOf">{{resultNumTop20[9]}}</th>
            </tr>
            <tr :class="{ 'active': Math.max(...resultNumTop20)==resultNumTop20[10] }">
              <th class="numberOfTimes">{{CheckNumber}}后面出10的次数</th>
              <th class="numberOf">{{resultNumTop20[10]}}</th>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="choose">
        <div class="chooseDiv">
          <label>选择号码</label>
          <select class="chooseDivInput" name="public-choice" v-model="CheckNumber" @change="getCouponSelected">
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="chooseDiv">
          <label>
            后面没有出现的号码
          </label>
          <select class="chooseDivInput" name="public-choice" v-model="NotShowUpNumber" @change="getCouponSelected">
            <option value="01">1</option>
            <option value="02">2</option>
            <option value="03">3</option>
            <option value="04">4</option>
            <option value="05">5</option>
            <option value="06">6</option>
            <option value="07">7</option>
            <option value="08">8</option>
            <option value="09">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="result">
          <span style="color: red">{{CheckNumber}}</span>
          前面没有处现
          <span style="color: red"> {{NotShowUpNumber}} </span>
          的次数是
          <span style="background-color: red;padding: 5px">{{NotShowUpTimes}}</span>
        </div>
        <div>
          <h1 v-if="loading">加载完成</h1>
          <h1 v-else>加载中 😢</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var reduceNum = 1; //每次减的
  var reduceNumTop10 = 1; //前10
  var reduceNumTop20 = 1; //前20
  var top10 = 11;
  var top20 = 21;

  var times = null;
  var timeout = null;
  export default {
    name: 'HelloWorld',
    data() {
      return {
        resultListData: [], //
        resultNum: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        resultNumTop10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        resultNumTop20: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        CheckNumber: '03', //选中的号
        NotShowUpNumber: '07',
        NotShowUpTimes: 0,
        loading: false,
        isFutureTime: null,
        preDrawTime: null,
      }
    },
    created() {
      var _this = this;
      this.$nextTick(function () {
        _this.requestData();
        _this.getDoubleStatics();
        if (times != null) {
          clearInterval(times);
        }

        times = setInterval(() => {
          _this.GetNowDay();
        }, 1000);

      })
    },
    methods: {
      /**请求数据*/
      requestData() {
        var _this = this;
        _this.loading = false;
        _this.$postForm('/api/home/lottery_code/getLotteryList', {
          lotCode: 3
        }, {}).then(res => {
          console.log(res)
          if (res.errorCode == 0) {
            _this.resultListData = res.result.data;
            /**整理数据 */
            _this.organizeData(res.result.data);
            _this.loading = true;
          }
        });
      },
      /**整理数据*/
      organizeData: function (data) {
        var _this = this;
        for (var i = 0; i < data.length; i++) {
          _this.resultListData[i].getResult = data[i].preDrawCode.split(',');
        }
        _this.countNumberAll(_this.resultListData);
        _this.countNumberTop10(_this.resultListData);
        _this.countNumberTop20(_this.resultListData);
        _this.NotShowUpFun(_this.resultListData);
      },
      /**最先出奖的期号，选中的号出现的位数*/
      countNumberAll: function (data) {
        var _this = this;
        for (var j = 0; j < 10; j++) {
          if (data[data.length - reduceNum].getResult[j] === _this.CheckNumber) {
            /**先找最早的开奖信息，在往上早信息*/
            if (reduceNum >= 1 && reduceNum < data.length) {
              var a = data.length - (reduceNum + 1);
              _this.StatisticsAll(data[a].getResult[j]);
            }
            if (reduceNum < data.length) {
              reduceNum++;
              return _this.countNumberAll(data)
            } else {
              return;
            }
          }
        }
      },
      countNumberTop10: function (data) {
        var _this = this;
        if (data.length <= 11) {
          top10 = data.length;
        }
        for (var j = 0; j < 10; j++) {
          if (data[top10 - reduceNumTop10].getResult[j] === _this.CheckNumber) {
            /**先找最早的开奖信息，在往上早信息*/
            if (reduceNumTop10 >= 1 && reduceNumTop10 < top10) {
              var a = top10 - (reduceNumTop10 + 1);
              _this.StatisticsTop10(data[a].getResult[j]);
            }
            if (reduceNumTop10 < top10) {
              reduceNumTop10++;
              return _this.countNumberTop10(data)
            } else {
              return;
            }
          }
        }
      },
      countNumberTop20: function (data) {
        var _this = this;
        if (data.length <= 21) {
          top20 = data.length;
        } else {
          top20 = 21;
        }
        for (var j = 0; j < 10; j++) {
          if (data[top20 - reduceNumTop20].getResult[j] === _this.CheckNumber) {
            /**先找最早的开奖信息，在往上早信息*/
            if (reduceNumTop20 >= 1 && reduceNumTop20 < top20) {
              var a = top20 - (reduceNumTop20 + 1);
              _this.StatisticsTop20(data[a].getResult[j]);
            }
            if (reduceNumTop20 < top20) {
              reduceNumTop20++;
              return _this.countNumberTop20(data)
            } else {
              return;
            }
          }
        }
      },

      /**全部的统计*/
      StatisticsAll(data) {
        var _this = this;
        switch (data) {
          case '01':
            _this.resultNum[1]++;
            break;
          case '02':
            _this.resultNum[2]++;
            break;
          case '03':
            _this.resultNum[3]++;
            break;
          case '04':
            _this.resultNum[4]++;
            break;
          case '05':
            _this.resultNum[5]++;
            break;
          case '06':
            _this.resultNum[6]++;
            break;
          case '07':
            _this.resultNum[7]++;
            break;
          case '08':
            _this.resultNum[8]++;
            break;
          case '09':
            _this.resultNum[9]++;
            break;
          case '10':
            _this.resultNum[10]++;
            break;
          default:
            _this.resultNum[0]++;
        }

      },
      /**统计前10个*/
      StatisticsTop10: function (data) {
        var _this = this;
        switch (data) {
          case '01':
            _this.resultNumTop10[1]++;
            break;
          case '02':
            _this.resultNumTop10[2]++;
            break;
          case '03':
            _this.resultNumTop10[3]++;
            break;
          case '04':
            _this.resultNumTop10[4]++;
            break;
          case '05':
            _this.resultNumTop10[5]++;
            break;
          case '06':
            _this.resultNumTop10[6]++;
            break;
          case '07':
            _this.resultNumTop10[7]++;
            break;
          case '08':
            _this.resultNumTop10[8]++;
            break;
          case '09':
            _this.resultNumTop10[9]++;
            break;
          case '10':
            _this.resultNumTop10[10]++;
            break;
          default:
            _this.resultNumTop10[0]++;
        }
      },
      /**统计前10个*/
      StatisticsTop20: function (data) {
        var _this = this;
        switch (data) {
          case '01':
            _this.resultNumTop20[1]++;
            break;
          case '02':
            _this.resultNumTop20[2]++;
            break;
          case '03':
            _this.resultNumTop20[3]++;
            break;
          case '04':
            _this.resultNumTop20[4]++;
            break;
          case '05':
            _this.resultNumTop20[5]++;
            break;
          case '06':
            _this.resultNumTop20[6]++;
            break;
          case '07':
            _this.resultNumTop20[7]++;
            break;
          case '08':
            _this.resultNumTop20[8]++;
            break;
          case '09':
            _this.resultNumTop20[9]++;
            break;
          case '10':
            _this.resultNumTop20[10]++;
            break;
          default:
            _this.resultNumTop20[0]++;
        }
      },

      NotShowUpFun: function (data) {
        var _this = this;
        _this.NotShowUpTimes = 0;
        var num = 1;
        for (var i = 0; i < data.length - 1; i++) {
          for (var j = 0; j < 10; j++) {
            if (data[i + 1].getResult[j] == _this.CheckNumber) {
              if (data[i].getResult[j] == _this.NotShowUpNumber) {
                return;
              } else {
                _this.NotShowUpTimes++;
              }
            }
          }
        }
      },

      /**修改选择的号码和出现*/
      getCouponSelected: function () {
        var _this = this;
        _this.NotShowUpTimes = 0;
        reduceNum = 1; //每次减的
        reduceNumTop10 = 1; //前10
        reduceNumTop20 = 1; //前20
        _this.resultNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        _this.resultNumTop10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        _this.resultNumTop20 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        /**请求数据*/
        _this.requestData();
      },
      /**获取下次结果*/
      getDoubleStatics: function () {
        var _this = this;
        _this.$get('/api/home/lottery_code/getDoubleStatics', {
          'lotCode': 3,
          'date': ''
        }, {}).then(res => {
          if (res.data.errorCode == 0) {
            this.preDrawTime = res.data.result.data.drawTime;
            console.log('this.preDrawTime', this.preDrawTime)
          }
        });
      },
      /**获取现在的时间*/
      GetNowDay: function () {
        var _this = this;
        var d = new Date().getTime();
        var b = _this.$formatDate(d);
        if (b == _this.preDrawTime) {
          console.log('======_this.preDrawTime=====')
          _this.getCouponSelected();
          _this.getDoubleStatics();

        }
        console.log('===b========', b)
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .clearFix {
    zoom: 1;
  }

  .clearFix:after {
    /*：after伪对象选择符---在这个对象被浏览器渲染后添加一定的内容*/
    content: '.';
    /*content属性：添加的内容在这里属性的值里面,必须写*/
    display: block;
    /*将添加的进去的内容转化为块元素*/
    visibility: hidden;
    /*visibility：可视化属性，控制元素是否可见，但无论是否可见，但都保留其物理空间*/
    height: 0;
    /*将添加进去的内容高度设置为0，清楚其占位*/
    clear: both;
  }

  .mainApp {
    display: block;
    width: 100%;
    /* min-width: 1450px;*/
    min-height: 400px;
    overflow-y: auto;
  }

  .main {
    width: 740px;
    height: 100vh;
    overflow-y: auto;
    float: left;
  }

  * {
    padding: 0;
    margin: 0;
  }

  th {
    border: 1px solid #e6e6e6;
    line-height: 5vh;
    color: #666666;
    font-size: 16px;
  }

  table {
    width: 100%;
  }

  td {
    border: 1px solid #e6e6e6;
    font-size: 14px;
    height: 30px;
  }

  .table-head {
    color: #000;
  }

  .table-body {
    width: 100%;
    height: 94vh;
    overflow-y: scroll;
  }

  .table-head table, .table-body table {
    width: 100%;
  }

  .table-body table tr:nth-child(2n+1) {
    background-color: #f2f2f2;
  }

  .table-body table tr:hover {
    background-color: rgb(240, 249, 228);
    transition: .2s;
  }

  .time {
    width: 180px;
  }

  .num {
    width: 110px;
  }

  .numberOfTimes {
    width: 140px;
  }

  .numberOf {
    width: 55px;
  }

  .prize span {
    background-color: #cecece;
    padding: 5px;
    text-align: center;
    margin-right: 10px;
    box-sizing: border-box;
    border-radius: 2px;
  }

  .content {
    float: left;
    display: block;
  }

  .contentNum {
    margin-left: 30px;
    margin-bottom: 30px;
    float: left;
    text-align: center;
  }

  .contentNumUl {
    /*width: 300px;*/
  }

  .contentNumUl li {
    border: 1px solid red;
    float: left;
    width: 90px;
  }

  .active {
    background-color: red !important;
  }

  .choose {
    text-align: left;
    margin-left: 30px;
  }

  .chooseDiv {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .chooseDivLabel {
    width: 100px;
  }

  .chooseDivInput {
    width: 200px;
    height: 40px;
  }

  .chooseOption {
    border: none;
    padding-left: 10px;
    width: 200px;
    height: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    line-height: 30px;
    border-radius: 10px;
    color: black;
    font-family: "微软雅黑";
  }

  .result {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    font-weight: bold;
  }

</style>
