<template>
  <table class="table-container">
      <thead>
        <tr>
          <th>学号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>地址</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="tableContainer">
        <!-- new Date.getFullYear() -->
        <tr v-for="stu in stuList" :key='stu.sNo'>
            <td>{{stu.id}}</td>
            <td>{{stu.name}}</td>
            <td>{{stu.sex == '0' ? '男' : '女'}}</td>
            <td>{{new Date().getFullYear() - stu.birth}}</td>
            <td>{{stu.phone}}</td>
            <td>{{stu.email}}</td>
            <td>{{stu.address}}</td>
            <td> 
                <span class="edit" style="margin-right:10px" @click="edit(stu)">编辑</span> 
                <span class="del" @click="del(stu.sNo)">删除</span> 
            </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import {mapState ,mapMutations ,mapActions } from 'vuex';
export default {
    // data(){
    //   return {
    //     stuList:[],
    //   }
    // },
    // 计算属性
    computed:{
      ...mapState({
        stuList: (state) => state.stuList
        /** 上面是es6简约写法 下面是复杂写法
         * stuList : function(state){
         *  return state.stuList;
         * }
         * 
         */
      })
    },
    methods:{
      // 辅助方法 结构这个方法
      ...mapActions(['getStuList','delStu']),
      ...mapMutations(['setActiveStu','setShow']),
      edit(stu){
        this.setActiveStu(stu);
        this.setShow(true);
        // console.log(1);
      },
      del(id){
        // 删除完最后一个数据，计算，获取当前页的数据
        let flag = confirm('确定要该学生信息吗？？？')
        if(flag){
          this.delStu(id);
        }
      }
    },
    created(){
      this.getStuList(1);
    }
    // async created(){
    //   // ...mapActions(['getStuList']),
    //   const {data:{cont,findByPage}} = await this.$api.getStu(1,5);
    //   // console.log(findByPage);
    //   this.stuList = findByPage;
    // }
}
</script>

<style>

</style>