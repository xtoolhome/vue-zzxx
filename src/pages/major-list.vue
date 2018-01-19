<template>
  <div>
  	<advert></advert>
    <school></school>
    <div class="zzhi-hotSch zzhi-hotM">
        <div class="hot-tip ">
            <span class="icon-long"></span>
            <span>推荐专业</span>
        </div>
        <ul class="hotMajors">
           <li v-for="item in majorObj" class="hotM">
               <router-link :to="item.href" :key="item.id" class="major">
                   <div class="hotM-name">{{item.name}}</div>
                    <div class="hotM-num">
                        <span class="fa fa-heart"></span>
                        <span>有<em>{{item.xnum}}</em>人想报名</span>
                    </div>
               </router-link>
           </li>
        </ul>
        
    </div>
  </div>
</template>

<script>
import Advert from '@/components/select/advert'
import School from '@/components/school/school'


export default {
  data () {
    return {
    	majorObj:[]
    }
  },
  mounted(){
  	this.$http.get("static/data/major-list.json",{}).then(res => {
      this.majorObj = res.data.data;
    })
  },
  components:{
    Advert,
    School
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
.fa-heart{
	color: #ff6600;
}

</style>
