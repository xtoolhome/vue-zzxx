<template>
  <div>
    <!-- 广告图片，是一个链接，涉及到子组件里的router-link -->
    <advert></advert>
    <!-- 选择城市、专业、学校等条件 -->
    <select-condition></select-condition>

    <!-- 未选中职学校 -->
    <template v-if="flagSelect">
    	<div class="zzhi-refer-majorN">
            <div class="line-tip">
                <span class="line"></span>
                <span>适合男生的专业</span>
                <span class="line"></span>
            </div>
            <major-list class="major-boy" :majorList="majorBoy"></major-list>
            <div class="line-cross"></div>
            <div class="line-tip">
                <span class="line"></span>
                <span>适合女生的专业</span>
                <span class="line"></span>
            </div>
            <major-list class="major-girl" :majorList="majorGirl"></major-list>
        </div>
        <div class="zzhi-hotSch">
            <div class="hot-tip ">
                <span class="icon-long"></span>
                <span>热门学校</span>
            </div>
            <!-- 热门学校列表 -->
            <school-list></school-list>
        </div>
    </template>
  </div>
</template>

<script>
import Advert from '@/components/select/advert'
import SelectCondition from '@/components/select/select-condition'
import MajorList from '@/components/select/major-list'
import SchoolList from '@/components/select/school-list'

export default {
  name: 'UnSelected',
  data () {
    return {
      flagSelect:true,
      majorBoy:[{href:"/major",name:"计算机管理"},{href:"/major",name:"国际经济与贸易"},{href:"/major",name:"金融工程"},{href:"/major",name:"经济统计学"}],
      majorGirl:[{href:"/major",name:"广播电视学"},{href:"/major",name:"音乐"},{href:"/major",name:"文物"},{href:"/major",name:"舞蹈表演"}],
    }
  },
  methods: {
    
  },
  components:{
    Advert,
    SelectCondition,
    MajorList,
    SchoolList
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
