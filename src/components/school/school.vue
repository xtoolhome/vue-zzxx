<template>
	<div>
    <div class="zzhi-searchW">
        <div class="tb">
            <div class="tb-row">
                <div class="tb-cell search-line-0">想上学的城市</div>
                <div class="tb-cell search-line-1">学校名称</div>
            </div>
            <div class="tb-row">
                <div class="tb-cell">
                    <div class="btn-group">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" @click="showPicker">
                        <span class="dropdown-default middle">{{cityname}}</span>
                        <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" role="menu">
                        </ul>
                    </div>
                </div>
                <div class="tb-cell search-line-1">
                    <div class="search-inputW">
                        <input type="text" placeholder="请输入学校名称" class="search-input schname" @click="search">                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 弹出层，输入学校名称 -->
    <div class="layer" :class="{'hide':isActive_layer}">
      	<div class="search middle">
      		<span class="fa fa-angle-left" @click="back"></span>
          <form  onsubmit="return false;" action="#">
            <i class="fa fa-search icon-s"></i>
            <input type="text" placeholder="请输入学校名称" class="layer-input" @input="inputChange" v-model.trim="inputText">
            <i class="fa fa-times-circle icon-c" :class="{'hide':isActive_c}" @click="clearInput"></i>
          </form>
          
      	</div>
        <div class="layer-sch">
          <template v-if="sch_list.length > 0 ? true : false">
            <ul class="layer-ul">
              <li class="layer-li" v-for="item in sch_list" :key="item.id">
                <router-link :to="item.href">{{item.schname}}</router-link>
            </li>
            </ul>
          </template>
        </div>
    </div>
	</div>
</template>

<script>

var col1Data = [{ text: '武汉', value: '武汉'}, { text: '黄冈', value: '黄冈' }, { text: '黄石', value: '黄石' },  { text: '鄂州', value: '鄂州' }]

export default {
  data () {
    return {
    	cityname:"武汉",
    	isActive_layer:true,
      isActive_c:true,
      inputText:"",
      sch_list:[]
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
    },
    search(){
    	this.isActive_layer = false;
    },
    inputChange(){
      if(this.inputText === ""){
        this.isActive_c = true;
      }else{
        this.isActive_c = false;
        // 匹配学校名称
        this.$http.get("static/data/school-list.json",{}).then(res => {
          this.sch_list = res.data.data.filter(item => {
            return item.schname.toLowerCase().indexOf(this.inputText.toLowerCase()) !== -1;
          });

        })
      }
    },
    clearInput(){
      this.inputText = "";
      this.isActive_c = true;
      this.sch_list = [];
    },
    back(){
      this.clearInput();
      this.isActive_layer = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
.zzhi-hotSch{
	position: relative;
}
.layer{
	position: fixed;
	top:0px;
	left:0px;
	right: 0px;
	bottom: 0px;
	background-color: #fff;
	z-index:999;
}
.hide{
  display: none;
}
.fa-angle-left{
  font-size: 35px;
  color:#8e8a8a;
  display: inline-block;
  width: 50px;
  text-align: center;
}
.search{
  display: -webkit-flex;
  display: flex;
  padding:10px 0px;
}
form{
 background-color: #f7f7f7;
 border-radius: 30px;
 position:relative;
 padding:0 30px; 
 display: inline-block;
}
form i{
  color:#999;
  font-size:20px;
}
.layer-input{
  background:none;
  color:#999;
  width:100%;
  height: 30px;
}
.icon-s{
  position: absolute;
  left:8px;
  top:6px;

}
.icon-c{
  position: absolute;
  right: 8px;
  top:5px;
}
.layer-ul{
  padding:7px 10px;
  border-top:1px solid #ddd;
}
.layer-li{
  padding:0px 10px;
  border-bottom: 1px dashed #ddd;
  height: 40px;
  line-height: 40px;
  color:#666;
}




</style>
