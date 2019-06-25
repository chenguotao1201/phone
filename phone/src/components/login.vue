
import { field } from 'mint-ui'
Vue.component(field.name, field)
<template>
    <div>
        <img src="login.vue">
        <mt-field class="mt20" label="用户名" placeholder="请输入用户名" type="text" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <p class="forget">忘记密码?</p>
        <mt-button class="mt20" type="primary" size="large">登录</mt-button>
        <p class="copy">版权所有：呦吼科技</p>
    </div>

</template>

<script>

	export default {
		data () {
			return {
				username: '',
                password: ''
			}
		}
	}
</script>

<style lang='scss'>
    .mt20{margin-top: 20px;}
    img{width: 8rem; height: 8rem; text-align: center;}
    .forget{text-align: right; color: aqua;}
    .copy{
        width: 100%;
        position: fixed;
        bottom: 20px;
        text-align: center;
    }
</style>