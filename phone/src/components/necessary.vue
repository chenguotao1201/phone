<template>
    <div>
        <mt-header fixed  title="必备资料">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1" >基本资料</mt-tab-item>
                <mt-tab-item id="2">申请信息</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="mt20 pub">
                        <div class="border-b">必备资料</div>
                        <P class="swrap">照片<span>查看 ></span></P>
                        <P class="swrap">护照首页<span>查看 ></span></P>
                        <P class="swrap">身份证<span>查看 ></span></P>
                        <P class="swrap">户口本<span>查看 ></span></P>
                        <P class="swrap">婚姻状况<span>查看 ></span></P>
                    </div>
                    <div class="mt20 pub">
                        <div class="border-b">选填资料</div>
                        <P class="swrap">其余补充资料<span>查看 ></span></P>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="mt20 pub">
                        <div class="border-b">{{name}}</div>
                        <P class="swrap" @click="jiben">基本资料<span>查看 ></span></P>
                        <div v-show="show">
                            <P class="swrap">姓(中文) {{111}}</P>
                            <P class="swrap">名(中文) {{}}</P>
                            <P class="swrap">姓(英文) {{}}</P>
                            <P class="swrap">名(英文) {{}}</P>
                            <P class="swrap">曾用名 {{}}</P>
                            <P class="swrap">性别 {{}}</P>
                            <P class="swrap">出生日期 {{}}</P>
                            <P class="swrap">出生身份 {{}}</P>
                            <P class="swrap">婚姻状况 {{}}</P>
                        </div>
                        <P class="swrap" @click="huzhao">护照信息<span>查看 ></span></P>
                        <div v-show="show1">
                            <P class="swrap">身份证号码 {{}}</P>
                            <P class="swrap">护照号码 {{}}</P>
                            <P class="swrap">签发地点 {{}}</P>
                            <P class="swrap">签发日期 {{}}</P>
                            <P class="swrap">有效期至 {{}}</P>
                            <P class="swrap">签发机关 {{}}</P>
                        </div>
                        <P class="swrap" @click="jiating">家庭与职业信息<span>查看 ></span></P>
                        <div v-show="show2">
                            <P class="swrap">现居住地址 {{}}</P>
                            <P class="swrap">详细地址 {{}}</P>
                            <P class="swrap">手机号码 {{}}</P>
                            <P class="swrap">职业状况 {{}}</P>
                        </div>
                        <P class="swrap" @click="jinji">紧急联系人(不可填写同行人)<span>查看 ></span></P>
                        <div v-show="show3">
                            <P class="swrap">姓名(中文) {{}}</P>
                            <P class="swrap">手机号码 {{}}</P>
                            <P class="swrap">与申请人关系 {{}}</P>
                        </div>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				selected: 'true',
                name: '欧阳锋',
                show: false,
                show1: false,
				show2: false,
				show3: false,
			};
		},
		components: {},
		mounted() {},
		watch: {
			selected: function (val, oldVal) {
				console.log(val)
				// click后打印出当前mt-tab-item的id
			}
		},
		methods: {
			jiben(){
				this.show = !this.show;
				if(this.show == true){
					this.show1 = false;
					this.show2 = false;
					this.show3 = false;
                }
            },
			huzhao(){
				this.show1 = !this.show1;
				if(this.show1 == true){
					this.show = false;
					this.show2 = false;
					this.show3 = false;
				}
            },
			jiating(){
				this.show2 = !this.show2;
				if(this.show2 == true){
					this.show1 = false;
					this.show = false;
					this.show3 = false;
				}
			},
			jinji(){
				this.show3 = !this.show3;
				if(this.show3 == true){
					this.show1 = false;
					this.show2 = false;
					this.show = false;
				}
			}

		}
	};
</script>

<style lang='scss'>
    .mt20{margin-top: 20px;}
    .border-b{border-bottom: 1px solid #666;}
    .pub{width: 100%; line-height: 40px;}
    .swrap{position: relative; width: 100%;text-align: left; border-bottom: 1px solid #666;}
    .swrap span{position: absolute; right: 0px; display: inline-block; text-align: right;}
</style>