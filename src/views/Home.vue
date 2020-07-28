<template>
  <div class="home">
    <van-sticky>
      <div class="head">
        <div>
          <button class="nav-mobile-button" @click="showPopup">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="title">Van Cleef & Arpels</div>
        <div class="iconfont">
          <van-icon name="bag-o" />
        </div>
      </div>
    </van-sticky>
    <div class="content">
      <div class="contentimg">
        <img :src="img1" />
      </div>
      <!-- <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
      </van-collapse>-->
      <div class="accordion">
        <ul>
          <!-- 循环数据在点击调用changeli方法时将当前索引和本条数据传进去,并使用当前数据show的bool值添加或移除样式 -->
          <li @click="changeli(index,item)" v-for="(item,index) in headerData" :key="index">
            <!-- 在这里打印出boll值方便查看 -->
            <!-- {{item.name}} -->
            <div class="imgTitle">{{item.contentTitle}}</div>
            <img :src="item.name" />
            <!-- 判断当前这条数据的bool值如果是true就打开二级菜单,如果是false就关闭二级菜单 -->
            <ul v-show="item.show" v-on:click.stop="doThis(index)">
              <!-- 循环二级菜单数据并使用.stop阻止冒泡 -->
              <!-- <li v-for="(a,index) in item.list" v-on:click.stop="doThis(index)" :key="index">{{a}}</li> -->
              <li v-for="(it,i) in item.list" :key="i">
                <div class="box">
                  <div class="contentLeft">
                    <img :src="it.img2" />
                  </div>
                  <div class="contentRight">
                    <div>{{it.title}}</div>
                    <div>型号:{{it.model}}</div>
                    <div>￥{{it.money}}</div>
                  </div>
                </div>
                <hr class="contentHr" />
              </li>
              <div class="more" @click="handleMore">查看更多</div>
            </ul>
          </li>
        </ul>
        <div class="last">
          <div>顾客服务中心:400-623-7878</div>
          <div>销售条款</div>
          <div>沪公网安备31010602002519号</div>
          <div>沪ICP备1401430号-5 | 中国工商</div>
        </div>
      </div>
    </div>

    <!-- 弹出框  -->
    <van-popup v-model="show" closeable position="top" :style="{ height: '100%' }">
      <div class="PopupTitle">Van Cleef & Arpels</div>
      <div class="PopupContent">
        <van-collapse
          v-model="activeName"
          accordion
          is-link="false"
          v-for="(item,index) in PopupList"
          :key="index"
        >
          <van-collapse-item :title="item.title" :name="item.key">
            <div class="PopupContent_bigdiv" v-for="(it,i) in item.img" :key="i">
              <div>
                <div class="Popup_img">
                  <img :src="it.img1" />
                </div>
                <div class="Popup_title">{{it.name}}</div>
              </div>
              <div>
                <div class="Popup_img">
                  <img :src="it.img1" />
                </div>
                <div class="Popup_title">{{it.name}}</div>
              </div>
            </div>
          </van-collapse-item>
          <!-- <van-collapse-item title="HIGH JEWELRY" name="2">内容</van-collapse-item>
          <van-collapse-item title="JEWELRY" name="3">内容</van-collapse-item>
          <van-collapse-item title="WATCHES" name="4">内容</van-collapse-item>-->
        </van-collapse>
        <div class="icons">
          <div class="iconContent">
            <div>
              <van-icon name="phone-o" />
            </div>
            <div class="message">联系我们</div>
          </div>
          <div class="iconContent">
            <div>
              <van-icon name="location-o" />
            </div>
            <div class="message">专卖店</div>
          </div>
          <div class="iconContent">
            <div>
              <van-icon name="setting-o" />
            </div>
            <div class="message">服务</div>
          </div>
        </div>
        <div class="lastContents">
          <div class="lastContent">
            <div>地点</div>
      
            <div class="selectContent">
              <!-- <van-dropdown-menu style="width:150px">
                <van-dropdown-item v-model="value1" :options="option1" />
              </van-dropdown-menu>-->
              <select style="width:150px">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div>
              <select >
                <option>ZH</option>
                <option>EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import img1 from "../assets/image/img1.jpg";
import img3 from "../assets/image/qq.jpg";
import img2 from "../assets/image/timg.jpg";
export default {
  data() {
    return {
      // value1:'',
      //  option1: [
      //   { text: '全部商品', value: 0 },
      //   { text: '新款商品', value: 1 },
      //   { text: '活动商品', value: 2 },
      // ],
      PopupList: [
        {
          title: "THE MAISON",
          key: "1",
          img: [
            {
              img1: img2,
              name: "爱情故事",
            },
          ],
        },
        {
          title: "HIGH JEWELRY",
          key: "2",
          img: [
            {
              img1: img2,
              name: "爱情故事",
            },
            {
              img1: img2,
              name: "爱情故事",
            },
          ],
        },
        {
          title: "JEWELRY",
          key: "3",
          img: [
            {
              img1: img2,
              name: "爱情故事",
            },
            {
              img1: img2,
              name: "爱情故事",
            },
          ],
        },
        {
          title: "WATCHES",
          key: "4",
          img: [
            {
              img1: img2,
              name: "爱情故事",
            },
            {
              img1: img2,
              name: "爱情故事",
            },
          ],
        },
      ],
      activeName: "-1",
      show: false,
      img1: img1,
      img2: img2,
      activeName: "-1",
      selectId: "",
      headerData: [
        {
          name: img3,
          contentTitle: "婚介系列",
          title: "Alhambra 四叶幸运系列",
          list: [
            {
              img2: img2,
              title: "Vintage Alhambra 吊坠",
              model: "ARD38500",
              money: "21.000",
            },
            {
              img2: img2,
              title: "Vintage Alhambra 吊坠",
              model: "ARD38500",
              money: "21.000",
            },
            {
              img2: img2,
              title: "Vintage Alhambra 吊坠",
              model: "ARD38500",
              money: "21.000",
            },
            {
              img2: img2,
              title: "Vintage Alhambra 吊坠",
              model: "ARD38500",
              money: "21.000",
            },
          ],
          show: false,
        },
        {
          name: img1,
          contentTitle: "婚介系列",
          title: "Alhambra 四叶幸运系列",
          list: [
            {
              img2: img2,
              title: "Vintage Alhambra 吊坠",
              model: "ARD38500",
              money: "21.000",
            },
          ],
          show: false,
        },
        {
          name: img3,
          contentTitle: "婚介系列",
          title: "Alhambra 四叶幸运系列",
          list: [
            {
              img2: img2,
              title: "Vintage Alhambra 吊坠",
              model: "ARD38500",
              money: "21.000",
            },
          ],
          show: false,
        },
        {
          name: img3,
          contentTitle: "婚介系列",
          title: "Alhambra 四叶幸运系列",
          list: [
            {
              img2: img2,
              title: "Vintage Alhambra 吊坠",
              model: "ARD38500",
              money: "21.000",
            },
          ],
          show: false,
        },
        {
          name: img1,
          contentTitle: "婚介系列",
          title: "Alhambra 四叶幸运系列",
          list: [
            {
              img2: img2,
              title: "Vintage Alhambra 吊坠",
              model: "ARD38500",
              money: "21.000",
            },
          ],
          show: false,
        },
        {
          name: img3,
          contentTitle: "婚介系列",
          title: "Alhambra 四叶幸运系列",
          list: [
            {
              img2: img2,
              title: "Vintage Alhambra 吊坠",
              model: "ARD38500",
              money: "21.000",
            },
          ],
          show: false,
        },
      ],
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    handleMore() {
      console.log(this.headerData[this.selectId]);
      let params = {
        img2: img2,
        title: "Vintage Alhambra 吊坠",
        model: "ARD38500",
        money: "21.000",
      };
      this.headerData[this.selectId].list.push(params);
      //  const {list} =this.headerData
      // console.log(list);
      //  this.headerData.forEach(item => {
      //     console.log(item)
      //  });
    },
    changeli(ind, item) {
      this.selectId = ind;
      // console.log(item,'+++')
      // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
      this.headerData.forEach((i) => {
        // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
        if (i.show !== this.headerData[ind].show) {
          i.show = false;
        }
      });
      // 取反(true或false)
      item.show = !item.show;
      console.log(item.name);
    },
    doThis: function (index) {
      // alert(index);
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.van-cell__title {
  text-align: center;
}
// /deep/.van-icon{
//    display: none
// }
/deep/ .van-hairline--top-bottom::after {
  border: 0px;
}
.head {
  height: 50px;
  //  background: blue;
  // border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-mobile-button {
    position: relative;
    padding: 9px 10px;
    margin-top: 8px;
    margin-right: 15px;
    margin-bottom: 8px;
    background-color: transparent;
    border: 1px solid transparent;
    box-sizing: border-box;
    // background: #eee;
  }
  .nav-mobile-button .icon-bar {
    display: block;
    margin-top: 4px;
    width: 22px;
    height: 2px;
    background: #f65d3f;
    border-radius: 5px;
  }
  .title {
    font-size: 18px;
  }
  .iconfont {
    padding-right: 6px;
    box-sizing: border-box;
  }
}
.content {
  // height: 1000px;
  //  background: red;
  .contentimg {
    height: 200px;
    > img {
      width: 100%;
      height: 200px;
    }
  }
  .accordion {
    > ul {
      width: 100%;
      > li {
        // height: 150px;
        position: relative;
        .imgTitle {
          font-size: 16px;
          position: absolute;
          top: 5px;
          left: 15px;
        }
        > img {
          width: 100%;
          height: 150px;
          margin-top: -4px !important;
        }
        img:first-child {
          margin-top: 0px;
        }
        //  line-height: 150px;
        // border: 1px solid black;
        cursor: pointer; // float: left;
        // line-height: 100px;
        > ul {
          // 更多的代码
          .more {
            height: 30px;
            line-height: 20px;
            text-align: center;
            //  background: red;
            font-size: 13px;
          }
          width: 100%;
          // background: red;
          > li {
            //  display: flex;
            margin-top: -6px;
            .contentHr {
              width: 95%;
              color: gray;
              opacity: 0.3;
            }
            > .box {
              // border-bottom: 1px solid black;
              height: 100px;
              display: flex;
              .contentLeft {
                display: flex;
                //  height: 150px;
                align-items: center;
                justify-content: center;
                // background: red;
                > img {
                  height: 80px;
                  width: 100px;
                }
              }
            }
            .contentRight {
              flex: 1;
              display: flex;
              flex-direction: column;
              //  align-items: center;
              justify-content: center;
              // background: green;
              > div {
                height: 25px;
                line-height: 25px;
              }
              > div:nth-child(1) {
                font-size: 16px;
                font-weight: bold;
              }
              > div:nth-child(2) {
                font-size: 12px;
                color: gray;
              }
              > div:last-child {
                font-size: 16px;
                font-weight: bold;
              }
            }
          }
        }
      }
      .active {
        background-color: #ff9800;
      }
    }
  }
}
.last {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  　 > div {
    height: 50px;
    line-height: 50px;
    //  background: red;
    width: 95%;
    text-align: center;
    border-bottom: 1px solid black;
  }
  > div:last-child {
    border-bottom: 0px;
  }
}

//弹出框
.PopupTitle {
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 23px;
}
.PopupContent {
  .PopupContent_bigdiv {
    display: flex;
    justify-content: center;
    > div {
      display: flex;
      // border: 1px solid black;
      flex: 1;
      justify-content: center;
      flex-direction: column;
      height: 180px;
      .Popup_img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 180px;
        // background: red;
        > img {
          // width: 130px
          height: 130px;
        }
      }
      .Popup_title {
        text-align: center;
      }
    }
  }
}
.icons {
  display: flex;
  justify-content: center;
  padding: 0 20px;
  margin-top: 100px;
  .iconContent {
    flex: 1;
    // border: 1px solid black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .message {
      font-size: 16px;
    }
  }
}
.lastContents {
   padding: 0 60px;
  font-size: 16px;
  // margin-top: 100px;
  position: relative;
  .lastContent {
 position: absolute;
  top: 30px;
    display: flex;
    // justify-content: center;
    // align-items: center;
    .selectContent {
       margin-left: 30px;
    }
    >div{
      //  flex: 1;
       display: flex;
      //  border: 1px solid black;
       justify-content: center;
    }
  }
}
</style>
