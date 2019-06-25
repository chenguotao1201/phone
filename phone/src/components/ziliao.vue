import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
<template>
    <div>
        <mt-header fixed title="提交资料"></mt-header>
        <div v-for="item in items">
            <div v-if="item.imgurl==''" class="wrap">
                <p @click="chooseType" class="mt20">添加身份证正面头像</p>
                <input class="add-image" id="upload_file" type="file" accept="image/png,image/jpeg,image/jpg" @change="inputChange" style="display: none;" />
            </div>
            <div v-else="item.imgurl!=''" class="wrap">
                <img src="item.imgurl">
            </div>
            <mt-field class="border-line" label="" placeholder="请输入手机号" type="number" v-model="item.phone"></mt-field>
        </div>
        <div class="mt20">
            <mt-button class="next" type="primary" @click="next">下一步</mt-button>
            <mt-button class="add" type="primary" @click="add">继续添加</mt-button>
        </div>

    </div>
</template>

<script>
	export default {
		data() {
			return {
				items: [{imgurl: '', phone: ''}]
			};
		},
		components: {},
		mounted() {},
		methods: {
			chooseType() {
				document.getElementById("upload_file").click();
			},
			close(index) {
				this.list.splice(index, 1);
				this.maxStatus = this.list == this.max ? false : true;
			},
			async inputChange(e) {
				debugger;
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

            }
		}
	};
</script>

<style lang='less'>
    .mt20{margin-top: 20px!important;}
    .border-line{border-bottom: 1px solid #666;}
    .add-image{
        width: 100%;
        height: 300px;
        position: absolute;
        z-index: 999;
    }
    .wrap{
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #666;
    }
    .add{width: 40%;}
    .next{width: 40%;}
</style>