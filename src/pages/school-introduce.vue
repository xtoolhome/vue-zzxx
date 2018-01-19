<template>
    <div class="">
      <div class="zzhi-intro">
            <div class="intro">
                <div class="intro-title intro-title-0">
                    <span class="icon-dotted"></span>
                    <span class="intro-name">招生对象与学制</span>
                    <span class="icon-dotted"></span>
                </div>
                <div class="intro-info">
                    <p>应、往届初中毕业生</p>
                    <p>1、五年一贯制专科</p>
                    <p>2、“2+3”模式：2年中专，3年专科 </p>
                </div>
            </div>
            <div class="intro">
                <div class="intro-title">
                    <span class="icon-dotted"></span>
                    <span class="intro-name">升学方式</span>
                    <span class="icon-dotted"></span>
                </div>
                <div class="intro-info">
                    <p>1、五年一贯制，可进入普通专科通道就读。  </p>  
                    <p>2、通过单独招生、技能高考和普通高考生日我校普通专科</p>
                </div>
            </div>
            <div class="intro">
                <div class="intro-title intro-title-1">
                    <span class="icon-dotted"></span>
                    <span class="intro-name">国家资助政策</span>
                    <span class="icon-dotted"></span>
                </div>
                <div class="intro-info">
                    <p>学费减免：农村（含县镇）、城市家庭经济困难学生可免费。 </p>
                    <p>奖助学金：贫困县区和家庭经济困难学生，可享受2000/年的国家助学金。</p>
                </div>
            </div>
        </div>
        <div class="intro-choose">
            <div class="intro-btn">
                <router-link :to="hrefM" class="title major" v-bind:class="{'on':isActive}" @click.native="choose(hrefM)" >开设专业</router-link>
                <router-link :to="hrefS" class="title school" v-bind:class="{'on':!isActive}" @click.native="choose(hrefS)">学校简介</router-link>
            </div>
            <router-view>
              
            </router-view>
        </div>
    </div>
</template>

<script>
// import '../assets/test.css'
export default {
  data () {
    return {
    	isActive:true,
    	hrefM:'/school/major',
    	hrefS:'/school/sch',
    	title:"",
      testObj:{},
      testA:[1,2,3],
      n:0
    }
  },
  methods:{
  	choose(title){
  			
  			if(this.title === "" || this.title !== title){
  				this.title = title;
  				localStorage.title = title;
  			}else if(this.title === title){
  				return;
  			}
  			this.isActive = !this.isActive;
  			localStorage.isActive = this.isActive.toString();
  		  

        
       
  		
  	}
  },
  mounted(){
  	this.isActive = localStorage.isActive === "false" ? false : true;
  	this.title = localStorage.title;
    // localStorage.clear();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>


</style>
