<template>
  <div class="major-info">
        <div class="major-intro">
        <div class="scroll-wrapper">
        <cube-scroll :data="items" ref="scroll" :options="options"
  @pulling-down="onPullingDown" @pulling-up="onPullingUp">
  		    <div class="zzhi-refer-sch major-intro-info" v-for="item in items" :key="item.id">
  		        <router-link class="sch-info major-det" :to="item.href">
  		            <div>
  		                <div class="sch-name">{{item.name}}<span class="major-money">学费：<em>{{item.tuition}}</em>元/年</span></div>
  		                <div class="hot-major">
  		                    <span class="major-tip">招生名额：</span>
  		                    <span class="major-type"><em>{{item.zsnum}}</em>人</span>
  		                    <span class="cl-f6">(有<em>{{list[item.id]}}</em>人想报名)</span>
  		                </div>
  		                <div class="hot-major">
  		                    <span class="major-tip">专业性质：</span>
  		                    <span>{{item.property}}</span>
  		                </div>
  		                <div class="hot-major">
  		                    <span class="major-tip">专业方向：</span>
  		                    <span>{{item.direct}}</span>
  		                </div>
  		            </div>
  		        </router-link>
  		        <div class="major-apply">
  		            <div class="applyW">
  		                <div class="middle applyWa">
  		                    <div class="applyWb" @click="signup(item.id)">
  		                        <span class="fa fa-heart-o fa-lg" :class="{'none':(checkedNums[parseInt(item.id)]?true:false)}"></span>
  		                        <span class="fa fa-heart fa-lg" :class="{'none':!(checkedNums[parseInt(item.id)]?true:false)}"></span>
  		                        <span>想报名</span>
  		                     
  		                    </div>
  		                </div>
  		            </div>
  		        </div>
  		    </div>
        </cube-scroll>
        </div>
		</div>
    </div>
</template>

<script>
// import '../assets/test.css'
export default {
  data () {
    return {
    	items:[],     //专业数据列表
    	checkedNums:{},  //专业列表选中的情况
    	list:[],			 //想报名人数的列表
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
  methods:{
  	signup(id){
  		id = parseInt(id);
  		// 多次点击
  		if(this.checkedNums[id] !== undefined){
  			this.$set(this.checkedNums,id,!this.checkedNums[id]);

  		}else{
  			// 第一次点击
  			this.$set(this.checkedNums,id,true);
  		}
  		if(this.checkedNums[id]){
  			this.$set(this.list,id,parseInt(this.list[parseInt(id)])+1);
  		}else{
  			this.$set(this.list,id,parseInt(this.list[parseInt(id)])-1);
  		}
  		localStorage.checkedNums = JSON.stringify(this.checkedNums);
  		localStorage.list = JSON.stringify(this.list);
  	},
    onPullingDown() {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          var id = new Date();
          // 如果有新数据
          this.items.unshift({
            "id":id.toString(),
            "href":"/major",
            "name":"汽车修理",
            "tuition":"3000",
            "zsnum":"100",
            "xnum":"90",
            "property":"五年一贯",
            "direct":"主要是学习汽车修理和保养"
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
              "href":"/major",
              "name":"汽车修理",
              "tuition":"3000",
              "zsnum":"100",
              "xnum":"90",
              "property":"五年一贯",
              "direct":"主要是学习汽车修理和保养"
      }
          ]

          this.items = this.items.concat(newPage)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    }
  },
  computed:{

  },
  mounted(){
  	this.$http.get("static/data/major-list.json").then(res => {
  		var that = this;
  		that.items = res.data.data;
  		if(localStorage.list !== undefined){
  			that.list = JSON.parse(localStorage.list);
  			that.checkedNums = JSON.parse(localStorage.checkedNums);
  		}else{
	  		that.items.forEach(function(val,key){
	  			that.list.push(val.xnum);
	  		});
	  	}
  	});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
.none{
	display:none !important;
}
input[type='checkbox']{
	display: none;
}
.scroll-wrapper{
  height: 400px;
}


</style>
