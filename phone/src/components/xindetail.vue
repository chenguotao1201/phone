<template>
    <div>
        <mt-header fixed  title="签证信息详情">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <h4>{{title}}</h4>
        <p style="color: red;">{{price}}</p>
        <p>{{futitle}}</p>
        <div class="border10"></div>
        <div class="wrap">
            <div class="wp25">
                <h4>{{type}}</h4>
                <p>签证类型</p>
            </div>
            <div class="wp25">
                <h4>{{count}}</h4>
                <p>入境次数</p>
            </div>
            <div class="wp25">
                <h4>{{long}}</h4>
                <p>最长停留</p>
            </div>
            <div class="wp25">
                <h4>{{year}}</h4>
                <p>有效年限</p>
            </div>
        </div>
        <div class="border10"></div>
        <div>
            <h5>办理须知</h5>
            <div>
                <p class="baoti">受理范围</p>
                <p class="con">受理范围受理范围受理范围受理范围受理范围受理范围受理范围受理范围受理范围受理范围受理范围受理范围受理范围受理范围受理范围受理范围受理范围</p>
            </div>
            <div>
                <p class="baoti">注意事项</p>
                <p class="con">注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项注意事项</p>
            </div>
            <mt-button type="primary">查看更多</mt-button>
        </div>
        <div class="border10 mt20"></div>
        <div class="mt20">
            <h4>所需邮寄资料</h4>
            <mt-navbar v-model="selected">
                <mt-tab-item id="1" >儿童</mt-tab-item>
                <mt-tab-item id="2">在校学生</mt-tab-item>
                <mt-tab-item id="3">青年</mt-tab-item>
                <mt-tab-item id="4">老人</mt-tab-item>
                <mt-tab-item id="5">大龄青年</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <mt-checklist
                            v-model="value1"
                            :options="options1">
                    </mt-checklist>
                    <!--<mt-cell v-for="item in list1" :title="'content ' + n" />-->
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-checklist
                            v-model="value2"
                            :options="options2">
                    </mt-checklist>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <mt-checklist
                            v-model="value3"
                            :options="options3">
                    </mt-checklist>
                </mt-tab-container-item>
                <mt-tab-container-item id="4">
                    <mt-checklist
                            v-model="value4"
                            :options="options4">
                    </mt-checklist>
                </mt-tab-container-item>
                <mt-tab-container-item id="5">
                    <mt-checklist
                            v-model="value5"
                            :options="options5">
                    </mt-checklist>
                </mt-tab-container-item>
            </mt-tab-container>
            <mt-button type="primary">资料详情要求</mt-button>
        </div>
        <div class="pay">
            <p class="pub">共计: {{price}}</p>
            <p class="pub active">去支付</p>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				value1: [],
				value2: [],
				value3: [],
				value4: [],
				value5: [],
                options1: [{label: '护照(原件)', value: '护照(原件)'},
                    {label: '身份证(原件)', value: '身份证(原件)'},{
					label: '学生证(原件)', value: '学生证(原件)'}],
				options2: [{label: '护照(原件)', value: '护照(原件)'},
					{label: '身份证(原件)', value: '身份证(原件)'},{
						label: '学生证(原件)', value: '学生证(原件)'}],
				options3: [{label: '护照(原件)', value: '护照(原件)'},
					{label: '身份证(原件)', value: '身份证(原件)'},{
						label: '学生证(原件)', value: '学生证(原件)'}],
				options4: [{label: '护照(原件)', value: '护照(原件)'},
					{label: '身份证(原件)', value: '身份证(原件)'},{
						label: '学生证(原件)', value: '学生证(原件)'}],
				options5: [{label: '护照(原件)', value: '护照(原件)'},
					{label: '身份证(原件)', value: '身份证(原件)'},{
						label: '学生证(原件)', value: '学生证(原件)'}],
				selected: '',
				title: '韩国签证',
                price: '￥899',
				futitle: '办理7-8个工作日',
                type: '旅游签',
                count: '多次',
                long: '30天',
                year: '5年',
                price: '￥899'
			};
		},
		components: {},
		mounted() {
		},
		methods: {

		}
	};
</script>

<style lang='scss'>
    .mt20{margin-top: 20px;}
    .border10{border-bottom: 5px solid #eee;}
    .wrap{display: flex;justify-content: center;  align-items: center;}
    .wp25{width: 23%;}
    .baoti{text-align: left;}
    .con{text-align: left;}
    .pay{display: flex;justify-content: center;  align-items: center;}
    .pub{width: 50%; line-height: 50px; text-align: center; border: 1px solid #666;}
    .active{border: 1px solid red; background-color: red; color: #fff;}
</style>