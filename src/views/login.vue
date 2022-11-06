<template>
    <div class="loginContainer" style="height:100%">
        <div class="login-container">
            <div class="logo-wrapper">
                <img src="@/static/img/logo.png" alt="">
            </div>
            <form class="login-form" id="loginForm" autocomplete="off">
                <input type="text" placeholder="用户名" id="userName" v-model="user.account">
                <input type="password" placeholder="密码" id="userPassword" v-model="user.password">
                <div class="btns form-item">
                    <input class="login-btn" type="submit" value="登录" @click.prevent="login">
                    <router-link class="switch-register-btn" to="/logon">注册</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:{    
                account:'',
                password:'',
            }
        }
    },
    methods:{
        async login(){
            if(this.user.account && this.user.password){
                const {msg,status} = await this.$api.login(this.user);
                // console.log(value.msg);
                if(status == 'fail'){
                    alter(msg);
                }else if(status == 'success'){
                    // console.log(11);
                    // mao18  123123
                    localStorage.setItem('account',this.user.account);
                    this.user.account = '';
                    this.user.password = '';
                    this.$router.push('/main');
                }
            }
        }
    }
}
</script>

<style scoped src="@/static/css/login.css">
</style>