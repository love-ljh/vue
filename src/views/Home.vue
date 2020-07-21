<template>
  <div class="home">
    <van-sticky>
      <div class="head">
        <div>
          <button class="nav-mobile-button">
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
            {{item.name}}
            <!-- 判断当前这条数据的bool值如果是true就打开二级菜单,如果是false就关闭二级菜单 -->
            <ul v-show="item.show">
              <!-- 循环二级菜单数据并使用.stop阻止冒泡 -->
              <li v-for="(a,index) in item.list" v-on:click.stop="doThis(index)" :key="index">{{a}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/image/img1.jpg";
export default {
  data() {
    return {
      img1: img1,
      activeName: "-1",
      headerData: [
        {
          name: "导航1",
          list: ["子集", "子集", "子集", "子集", "子集"],
          show: false
        },
        {
          name: "导航2",
          list: ["子集", "子集", "子集", "子集", "子集"],
          show: false
        },
        {
          name: "导航3",
          list: ["子集", "子集", "子集", "子集", "子集"],
          show: false
        },
        {
          name: "导航4",
          list: ["子集", "子集", "子集", "子集", "子集"],
          show: false
        },
        {
          name: "导航5",
          list: ["子集", "子集", "子集", "子集", "子集"],
          show: false
        }
      ]
    };
  },
  methods: {
    changeli(ind, item) {
      // console.log(item,'+++')
      // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
      this.headerData.forEach(i => {
        // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
        if (i.show !== this.headerData[ind].show) {
          i.show = false;
        }
      });
      // 取反(true或false)
      item.show = !item.show;
      console.log(item.name);
    },
    doThis: function(index) {
      // alert(index);
    }
  }
};
</script>
<style lang="less" scoped>
.head {
  height: 50px;
  //  background: blue;
  border-bottom: 1px solid black;
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
  .contentimg > img {
    width: 100%;
    height: 200px;
  }
  .accordion {
    > ul {
      width: 100%;
      > li {
        width: 100%;
        border: 1px solid #ffffff;
        cursor: pointer; // float: left;
        color: 20px;
        text-align: center;
        line-height: 60px;
        &:hover {
          background-color: #ff9800;
        }
        > ul {
          width: 100%;
          background: red;
          li {
            &:hover {
              background: #c31111;
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
</style>
