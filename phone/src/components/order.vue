<template>
    <div>
        <mt-header fixed  title="订单">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1" >全部</mt-tab-item>
                <mt-tab-item id="2">进行中</mt-tab-item>
                <mt-tab-item id="3">出签中</mt-tab-item>
                <mt-tab-item id="4">已结束</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div v-for="item in list1" style="margin-top: 15px;">
                        <div class="wrap">
                            <p class="pub">订单编号: {{item.count}}</p>
                            <p class="pub sta">{{item.status}}</p>
                        </div>
                        <div>
                            <h4 style="text-align: left;">{{item.title}}</h4>
                            <p style="text-align: left;">{{item.con}}</p>
                        </div>

                        <p class="border10"></p>
                    </div>
                    <!--<mt-cell v-for="item in list1" :title="'content ' + n" />-->
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div v-for="item in list2" style="margin-top: 15px;">
                        <div class="wrap">
                            <p class="pub">订单编号: {{item.count}}</p>
                            <p class="pub sta">{{item.status}}</p>
                        </div>
                        <div>
                            <h4 style="text-align: left;">{{item.title}}</h4>
                            <p style="text-align: left;">{{item.con}}</p>
                        </div>

                        <p class="border10"></p>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                <div v-for="item in list3" style="margin-top: 15px;">
                    <div class="wrap">
                        <p class="pub">订单编号: {{item.count}}</p>
                        <p class="pub sta">{{item.status}}</p>
                    </div>
                    <div>
                        <h4 style="text-align: left;">{{item.title}}</h4>
                        <p style="text-align: left;">{{item.con}}</p>
                    </div>

                    <p class="border10"></p>
                </div>
            </mt-tab-container-item>
                <mt-tab-container-item id="4">
                    <div v-for="item in list4" style="margin-top: 15px;">
                        <div class="wrap">
                            <p class="pub">订单编号: {{item.count}}</p>
                            <p class="pub sta">{{item.status}}</p>
                        </div>
                        <div>
                            <h4 style="text-align: left;">{{item.title}}</h4>
                            <p style="text-align: left;">{{item.con}}</p>
                        </div>

                        <p class="border10"></p>
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
				sele: '首页',
				selected: 'true',
				list1: [{title: '韩国五年多次往返', con: '8个工作日内出签', count: '122323211', status: '进行中'}],
				list2: [{title: '韩国五年多次往返', con: '8个工作日内出签', count: '122323211', status: '进行中'},
					{title: '韩国五年多次往返', con: '8个工作日内出签', count: '122323211', status: '进行中'},
					{title: '韩国五年多次往返', con: '8个工作日内出签', count: '122323211', status: '进行中'}],
				list3: [{title: '韩国五年多次往返',con: '8个工作日内出签', count: '122323211', status: '进行中'},
					{title: '韩国五年多次往返', con: '8个工作日内出签', count: '122323211', status: '进行中'}],
                list4: [{title: '韩国五年多次往返', con: '8个工作日内出签', count: '122323211', status: '进行中'},
	                {title: '韩国五年多次往返', con: '8个工作日内出签', count: '122323211', status: '进行中'}]
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

		}
	};
</script>

<style lang='scss'>
    .wrap{display: flex; justify-content: center;  align-items: center; border-bottom: 1px solid #666;}
    .pub{  width: 50%;  line-height: 30px; }
    .sta{text-align: right; padding-right: 10px;}
    .border10{border-bottom: 5px solid #eee}
</style>