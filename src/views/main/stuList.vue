<template>
  <div class="content-item active">
    <!-- table -->
    <!-- 分页 -->
    <!-- 遮罩层 -->
    <stuTable/>
    <turnPage :nowPage="nowPage" :totalPage="totalPage" @changePage="changePage"/>
    <!-- v-show 相当于 display：none-->
    <showModal v-show="isShow"/>
  </div>
</template>

<script>
import showModal from '@/components/showModal.vue';
import stuTable from '@/components/stuTable.vue';
import turnPage from '@/components/turnPage.vue';
import {mapState,mapActions} from 'vuex';
export default {
  components:{
    showModal,
    stuTable,
    turnPage,
  },
  computed:{
    // ...mapState({
    //   // 第一种方法
    //   // isShow : (state) => state.ifShow,
    // })
    // 第二种方法
    ...mapState(['isShow','nowPage','totalPage']),
  },
  methods:{
    ...mapActions(['getStuList']),
    changePage(p){
      this.getStuList(p);
    }
  }
};
</script>

<style>
</style>