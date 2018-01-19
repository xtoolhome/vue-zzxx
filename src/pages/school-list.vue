<template>
	<div>
		<advert></advert>
    <school></school>
    
    <div class="zzhi-hotSch">
        <div class="hot-tip ">
            <span class="icon-long"></span>
            <span>热门学校</span>
        </div>
        <!-- 热门学校列表 -->
        <school-list></school-list>
        
    </div>
	</div>
</template>

<script>
import Advert from '@/components/select/advert'
import SchoolList from '@/components/select/school-list'
import School from '@/components/school/school'

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
  },
  components:{
    Advert,
    School,
    SchoolList
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
  top:5px;

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
