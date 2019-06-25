import { Swipe, SwipeItem, Header， Tabbar, TabItem, Navbar } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
<template>
    <div>
        <div>
            <mt-header fixed title="首页"></mt-header>
        </div>
        <div style="position: relative; top: 0px;">
            <mt-swipe :auto="4000">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
        </div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1" >热门</mt-tab-item>
            <mt-tab-item id="2">韩国馆</mt-tab-item>
            <mt-tab-item id="3">日本馆</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div v-for="item in list1" style="margin-top: 15px;">
                    <h4 style="text-align: left;">{{item.title}}</h4>
                    <div class="flex">
                        <P class="little">{{item.date}}</P>
                        <p class="price" style="margin-left: 30px; color: red; font-size: 18px;">{{item.price}}</p>
                    </div>
                    <p class="border10"></p>
                </div>
                <!--<mt-cell v-for="item in list1" :title="'content ' + n" />-->
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div v-for="item in list2" style="margin-top: 15px;">
                    <h4 style="text-align: left;">{{item.title}}</h4>
                    <div class="flex">
                        <P class="little">{{item.date}}</P>
                        <p class="price" style="margin-left: 30px; color: red; font-size: 18px;">{{item.price}}</p>
                    </div>
                    <p class="border10"></p>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div v-for="item in list3" style="margin-top: 15px;">
                    <h4 style="text-align: left;">{{item.title}}</h4>
                    <div class="flex">
                        <P class="little">{{item.date}}</P>
                        <p class="price" style="margin-left: 30px; color: red; font-size: 18px;">{{item.price}}</p>
                    </div>
                    <p class="border10"></p>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <div class="bottom-bar">
            <mt-tabbar v-model="selected">
                <mt-tab-item id="one">
                    <img slot="icon" src="assets/logo.png">
                    首页
                </mt-tab-item>
                <mt-tab-item id="two">
                    <img slot="icon" src="assets/logo.png">
                    订单
                </mt-tab-item>
                <mt-tab-item id="three">
                    <img slot="icon" src="assets/logo.png">
                    个人中心
                </mt-tab-item>
            </mt-tabbar>
        </div>
            <mt-tabbar v-model="sele">
                <mt-tab-item id="首页">
                    <img slot="icon" src="">
                    首页
                </mt-tab-item>
                <mt-tab-item id="订单">
                    <img slot="icon" src="">
                    订单
                </mt-tab-item>
                <mt-tab-item id="个人中心">
                    <img slot="icon" src="">
                    个人中心
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				sele: '首页',
				selected: 'true',
                list1: [{title: '韩国五年多次往返', date: '7-8个工作日内出签', price: '￥800'}],
                list2: [{title: '韩国五年多次往返', date: '7-8个工作日内出签', price: '￥800'},
                    {title: '韩国五年多次往返', date: '7-8个工作日内出签', price: '￥800'},
                    {title: '韩国五年多次往返', date: '7-8个工作日内出签', price: '￥800'}],
                list3: [{title: '韩国五年多次往返', date: '7-8个工作日内出签', price: '￥800'},
	                {title: '韩国五年多次往返', date: '7-8个工作日内出签', price: '￥800'}]
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
			chooseType() {
				document.getElementById("upload_file").click();
			},
			close(index) {
				this.list.splice(index, 1);
				this.maxStatus = this.list == this.max ? false : true;
			},
			async inputChange(e) {
				let files = e.target.files;
				let len = this.list.length + files.length;
				if (len > this.max) {
					document.getElementById("upload_file").value = "";
					this.$ui.toast(`最多允许上传${this.max}张`);
					return;
				}

				let uploadAll = [].slice.call(files ,0).map(this.upload);
				//使用object.values(files)，测试安卓存在兼容性问题，替换为[].slice.call(files ,0)

				this.$ui.loading.open({//上传中效果，可自行替换。
					text: "上传中...",
					spinnerType: "fading-circle"
				});
				let result = await Promise.all(uploadAll);
				document.getElementById("upload_file").value = "";
				this.$ui.loading.close();
			},
			upload(file, index) {
				return new Promise(async (resolve, reject) => {
					let form = new FormData();
					form.append("file", file);
					form.append("***");//根据上传入参添加参数
					let result = await this.post("/file/upload-file", form);
					if (result.cd != 0) {//失败处理
						this.$ui.toast(`第${index + 1}张(${file.name})上传出错(已忽略)`);
						resolve(result);
						return;
					}
					this.list.push(result.data.url);
					if (this.list.length == this.max) {
						this.maxStatus = false;
					}
					resolve(result);

				});
			},
			add(){
				let items = this.items;
				items.push({imgurl: '', phone: ''});
				debugger;
			},
			next(){

			},
            re(e){
				console.log(this);
				debugger;
            }
		}
	};
</script>

<style lang='scss'>
    .border10{border-bottom: 5px solid #eee;margin-top: 20px;}
    h4, div, p{margin: 0; padding: 0;}
    .mint-swipe{
        width: 100%;
        height: 100px;
    }
    .mint-swipe-item{
        background: red;
        width: 100%;
        height: 100px;
    }
    .flex{display: flex;}
    .little{}
</style>