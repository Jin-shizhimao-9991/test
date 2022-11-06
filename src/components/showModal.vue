<template>
<!-- 遮罩层 -->
  <div id="dialogContainer" class="dialog-container" @click="setShow(false)">
    <div class="dialog-main" @click.stop="() => {}">
      <form id="updateForm" class="user-form">
        <div class="item form-item">
          <label for="name ">姓名：</label>
          <input
            type="text"
            id="name"
            :value="activeStu.name"
            @input="edit('name', $event.target.value)"
          />
        </div>
        <div class="item form-item">
          <label for="sNo">学号：</label>
          <input type="text" id="sNo" readonly="" :value="activeStu.sNo" />
        </div>
        <div class="item form-item">
          <label for="sex">性别：</label>
          <select id="sex" :value="activeStu.sex" @change="edit('sex', $event.target.value)">
            <option value="0">男</option>
            <option value="1">女</option>
          </select>
        </div>
        <div class="item form-item">
          <label for="birth">生日：</label>
          <input
            type="text"
            id="birth"
            :value="activeStu.birth"
            @input="edit('birth', $event.target.value)"
          />
        </div>
        <div class="item form-item">
          <label for="phone">电话：</label>
          <input
            type="text"
            id="phone"
            :value="activeStu.phone"
            @input="edit('phone', $event.target.value)"
          />
        </div>
        <div class="item form-item">
          <label for="address">地址：</label>
          <input
            type="text"
            id="address"
            :value="activeStu.address"
            @input="edit('address', $event.target.value)"
          />
        </div>
        <div class="item form-item">
          <label for="email">邮件：</label>
          <input
            type="text"
            id="email"
            :value="activeStu.email"
            @input="edit('email', $event.target.value)"
          />
        </div>
        <div class="btns">
          <div class="add-btn" id="updateBtn" @click="update">修改</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// 事件冒泡 先子级在父级 阻止冒泡事件 @click.stop=''
// v-model 是个语法糖  可拆分成 :value="xxx" @input=""
// v-model做两件事：
// 1. 向子组件传来一个名为value的属性
// 2. 在子组件监听input事件，这个事件的回调中修改value所绑定的值

// 当触发input事件时，$event是当前的事件对象。 $event.target.value指向的是当前的input的值。
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      // 用于记录我们修改的内容
      stu: {},
    };
  },
  computed: {
    ...mapState(["activeStu"],),
  },
  methods: {
    // 需要进行阻止冒泡处理 阻止从下向上的事件发生
    ...mapMutations(["setShow"]),
    edit(key, value) {
      this.stu[key] = value;
    },
    async update(){
      const user = Object.assign({},this.activeStu,this.stu);
      await this.$api.updateStu(user);
      this.setShow(false);
      Object.assign(this.activeStu,user);
    },
    
  },
};
</script>

<style>
</style>