<template>
    <div>
      <div class="zzhi-cityW middle">
  	    <div class="zzhi-cityC">
  	        <div class="city-tip middle">想上学的城市</div>
  	        <div class="city-nameW">
  	            <div class="btn-group">
  	                <button type="button" class="" @click="showPicker">
  	                <span class="dropdown-default middle">{{cityname}}</span>
  	                <span class="arrow"></span>
  	                </button>
  	                
  	            </div>
  	        </div>
  	    </div>
  	</div>
    <div class="zzhi-choose middle">
        <router-link to="/majorlist" class="choose-major middle">
          <span class="fa fa-list-ul"></span>
          <span>选专业</span>
        </router-link>
        <router-link to="/schoollist" class="choose-sch middle">
          <span class="fa fa-home"></span>
          <span>挑学校</span>
        </router-link>
    </div>
  </div>
</template>

<script>

var col1Data = [{ text: '武汉', value: '武汉'}, { text: '黄冈', value: '黄冈' }, { text: '黄石', value: '黄石' },  { text: '鄂州', value: '鄂州' }]
export default {
  data () {
    return {
      cityname:"武汉"
    }
  },
  mounted(){
  	this.picker = this.$createPicker({
      title: '想上学的城市',
      data: [col1Data],
      onSelect: (selectedVal, selectedIndex, selectedText) => {
        this.cityname = selectedVal.join(', ');
        this.$createDialog({
          type: 'warn',
          content: `选择城市: ${selectedVal.join(', ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      onCancel: () => {
        this.$createToast({
          type: 'correct',
          txt: '取消选择城市',
          time: 1000
        }).show()
      }
    })
  },
  methods:{
  	showPicker () {
      this.picker.show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
.arrow{
  display: inline-block;
  height: 0px;
  width: 0px;
  border-top: 7px dashed #ccc;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
}

</style>
