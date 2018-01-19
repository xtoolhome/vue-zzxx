
export default {
	/* 参数列表：地区id名area，学校名称id。返回
	   返回值 ：当前学校想报名人数。*/
	schLike:(state) => (schId) => {
		// 获取当前区域、当前学校、专业报名人数最多的人数
		return Math.max(...Object.values(state.areaObj[state.curArea][schId]).filter(major => major.applyList.length));
		 
	}
}