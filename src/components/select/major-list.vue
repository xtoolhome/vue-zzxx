<template>
  	<div class="refer-majorN">
  		<div class="major" v-for="major in majorList">
  			<router-link  :to="major.href">{{major.name}}</router-link>
  		</div>
  		
	</div>
</template>

<script>
// import '../assets/test.css'
export default {
  data () {
    return {
    }
  },
  props:{
  	majorList:{
  		type:Array,
  		default:[]
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
.major{
	width: 33%;
	text-align: center;
	display: inline-block;
	padding:5px 0px;
}
</style>
