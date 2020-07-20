<template>
  <div class="home">
    <van-sticky >
    <div class="head">
       <div>
          <button class="nav-mobile-button">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
       </button>
       </div>
       <div>2</div>
       <div>3</div>
    </div>
</van-sticky> 
 <div class="content">
   11
 </div>
     
  </div>
</template>

<script>
export default {
   
}
</script>
<style lang="less" scoped>

.head {
   height: 50px; 
   background: blue;
    display: flex;
    justify-content:space-between;
    align-items: center;
    .nav-mobile-button {
            position: relative;
            padding: 9px 10px;
            margin-top: 8px;
            margin-right: 15px;
            margin-bottom: 8px;
            background-color: transparent;
            border: 1px solid transparent;
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
}
.content {
   height: 1000px;
   background: red;
}
</style>
