<template>
  <div class="content-item">
    <form id="addForm " class="user-form">
      <div class="item form-item">
        <label for="name ">姓名：</label>
        <input type="text " id="userName " />
      </div>
      <div class="item form-item">
        <label for="sNo ">学号：</label>
        <input type="text " id="userSNo " />
      </div>
      <div class="item form-item">
        <label for="sex ">性别：</label>
        <select id="userSex ">
          <option value="0 ">男</option>
          <option value="1 ">女</option>
        </select>
      </div>
      <div class="item form-item">
        <label for="birth ">生日：</label>
        <input type="text " id="userBirth " />
      </div>
      <div class="item form-item">
        <label for="phone ">电话：</label>
        <input type="text " id="userPhone " />
      </div>
      <div class="item form-item">
        <label for="address ">地址：</label>
        <input type="text " id="userAddress " />
      </div>
      <div class="item form-item">
        <label for="email ">邮件：</label>
        <input type="text " id="userEmail " />
      </div>
      <div class="btns">
        <div class="add-btn" id="addBtn ">添加</div>
        <input type="reset " value="重置 " class="reset-btn" />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>