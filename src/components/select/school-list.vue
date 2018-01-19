<template>
	<div class="scroll-wrapper">
		<cube-scroll :data="items" ref="scroll" :options="options"
  @pulling-down="onPullingDown" @pulling-up="onPullingUp">
			<router-link class="zzhi-refer-sch" v-for="sch in items" :key="sch.id" :to="sch.href">
			    <div class="sch-img">
			        <img :src="sch.img">
			    </div>
			    <div class="sch-info">
			        <div>
			            <div class="sch-name">{{sch.schname}}</div>
			            <div class="apply-num">
			                <span class="fa fa-heart"></span>
			                <span>有<em>{{sch.num}}</em>人想报名</span>
			            </div>
			            <div class="hot-major">
			                <span class="major-tip">招生专业：</span>
			                <span v-for="major in sch.major" :key="major" class="major-type">{{major}}</span>
			            </div>
			        </div>
			    </div>
			</router-link>
		</cube-scroll>
	</div>
</template>

<script>
// import '../assets/test.css'
export default {
  data () {
    return {
    	items:[],
    	options: {
	        scrollbar: {
	          fade: true
	        },
	        pullDownRefresh: {
	          threshold: 90,
	          stop: 40,
	          txt: '刷新成功'
	        },
	        pullUpLoad: {
	          threshold: 0,
	          txt: {
	            more: '加载更多',
	            noMore: '没有更多数据'
	          }
	        }
	    }
    }
  },
  created(){
  	var that =this;
  	that.$http.get('static/data/school-list.json').then(res => {
      that.items = res.data.data;
    });
  },
  methods:{
  	onPullingDown() {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.items.unshift({
		"id":"7",
		"href":"/school",
		"img":"../static/zzhi_1.png",
		"schname":"湖北大学知行学院",
		"num":"100",
		"major":["计算机管理","行政"]
	})
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    onPullingUp() {
      // 更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
        	var id = new Date();
          // 如果有新数据
          let newPage = [
            {
				"id":id.toString(),
				"href":"/school",
				"img":"../static/zzhi_1.png",
				"schname":"黄冈市技术学院",
				"num":"100",
				"major":["计算机管理","音乐"]
			}
          ]

          this.items = this.items.concat(newPage)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
.scroll-wrapper{
	height: 350px;
}

</style>
