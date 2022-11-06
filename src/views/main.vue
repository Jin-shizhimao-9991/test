<template>
  <div class="mainContainer" style="height:100%">
       <!-- 头部 -->
    <div class="header-container clear">
        <router-link class="login-container" to="/main">
            <img src="@/static/img/logo.png" alt="">
        </router-link>
        <div id="userInfo" class="user-info">{{account}}</div>
    </div>
    <!-- 侧边栏 -->
    <div class="nav-container">
        <!-- 有tag属性的router-link都会被渲染成相应的标签 -->
        <!-- 
            active-class 模糊匹配
            exact-class 精确匹配
         -->
        <router-link to='/main/stuList' tag='div' data="studentList" class="nav-item" active-class="active">学生列表</router-link>
        <router-link to='/main/addStu' tag='div' data="addStudentList" class="nav-item" active-class="active">新增学生</router-link>
        <router-link to='/main/searchStu' tag='div' data="findStudentLIst" class="nav-item" active-class="active">查找学生</router-link>
    </div>
    <!-- 主体内容 -->
    <div class="main-container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        account(){
            return localStorage.getItem('account');
        }
    }
}
</script>
// 外部引入css文件并具有单独的作用域 src 属性可以实现
<style scoped>
@import url(~@/static/css/main.css);
/*  vue-loader
    src="@/static/css/main.css">
    上面这种引入方式只对当前组件有效 对其子组件无效
 */
 /* class="nav-item router-link-exact-active router-link-active" */
 /* .router-link-exact-active{

 } */
</style>