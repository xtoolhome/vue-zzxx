<template>
  	<div>
		<div class="zzhi-intro">
	        <div class="intro">
	            <div class="intro-title">
	                <span class="icon-dotted"></span>
	                <span class="intro-name">专业介绍</span>
	                <span class="icon-dotted"></span>
	            </div>
	            <div class="intro-info">
	                根据招生区域和专业，如果在【招生专业推荐职校表】中有记录的，则先按照设置排序。剩下学校按照意向报名或报名人数降序排列。  
	            </div>
	        </div>
	        <div class="intro">
	            <div class="intro-title">
	                <span class="icon-dotted"></span>
	                <span class="intro-name">就业方向</span>
	                <span class="icon-dotted"></span>
	            </div>
	            <div class="intro-info">
	                根据招生区域和专业，如果在【招生专业推荐职校表】中有记录的，则先按照设置排序。剩下学校按照意向报名或报名人数降序排列。  
	            </div>
	        </div>
	        <div class="intro">
	            <div class="intro-title">
	                <span class="icon-dotted"></span>
	                <span class="intro-name">升学路径</span>
	                <span class="icon-dotted"></span>
	            </div>
	            <div class="intro-info">
	                根据招生区域和专业，如果在【招生专业推荐职校表】中有记录的，则先按照设置排序。剩下学校按照意向报名或报名人数降序排列。  
	            </div>
	        </div>
	    </div>
	    <div class="zzhi-hotSch">
	        <div class="hot-tip">
	            <span class="icon-long"></span>
	            <span>在<em>武汉</em>招生的中职学校</span>
	            <span class="intro-num"><em class="sch-num">{{items.length}}</em>所</span>
	        </div>
	        <div class="zzhi-possible">
	    		<cube-scroll :data="items" ref="scroll" :options="options"
  @pulling-down="onPullingDown" @pulling-up="onPullingUp">
		    		<router-link class="zzhi-refer-sch" v-for="item in items" :to="item.href" :key="item.id">
		                <div class="sch-img">
		                    <img :src="item.img" >
		                </div>
		                <div class="sch-info">
		                    <div>
		                        <div class="sch-name">{{item.schname}}</div>
		                        <div class="apply-num">
		                            <span class="fa fa-heart"></span>
		                            <span>有<em>{{item.xnum}}</em>人想报名</span>
		                        </div>
		                        <div class="hot-major">
		                            <span class="major-tip">招生专业：</span>
		                            <span class="major-type">{{item.property[0]}}</span>
		                            <span>{{item.property[1]}}</span>
		                            <span class="major-money">学费：</span>
		                            <span>{{item.tuition}}</span>
		                        </div>
		                        <div class="hot-major">
		                            <span class="major-tip">专业方向：</span>
		                            <span>{{item.direct}}</span>
		                        </div>
		                    </div>
		                </div>
		            </router-link>
	            </cube-scroll>
	        </div>
	    </div>
    </div>
</template>

<script>

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
  mounted(){
  	this.$http("static/data/zsmajor-list.json").then(res => {
  		this.items = res.data.data;
  	});
  },
  methods:{
  	onPullingDown() {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
        	var id = new Date();
          // 如果有新数据
          this.items.unshift({
		"id":id.toString(),
		"href":"/school",
		"tuition":"3000",
		"zsnum":"100",
		"xnum":"90",
		"property":["3+2","普通"],
		"direct":"汽车修理",
		"img": "../static/zzhi_1.png",
		"schname":"武汉市第n技术学校"
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
				"tuition":"3000",
				"zsnum":"100",
				"xnum":"90",
				"property":["3+2","普通"],
				"direct":"汽车修理",
				"img": "../static/zzhi_1.png",
				"schname":"武汉市第n技术学校"
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
.zzhi-possible{
	height: 400px;
}

</style>
