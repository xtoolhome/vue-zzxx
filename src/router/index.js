import Vue from 'vue'
import Router from 'vue-router'
import Select from '@/pages/Select'
import MajorIntroduce from '@/pages/major-introduce'
import SchoolIntroduce from '@/pages/school-introduce'
import MajorList from '@/pages/major-list'
import SchoolList from '@/pages/school-list'
import Major from '@/components/school-introduce/major'
import School from '@/components/school-introduce/school'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Select',
      component: Select
    },{
      path: '/major',
      name: 'MajorIntroduce',
      component: MajorIntroduce
    },{
      path: '/school',
      // name: 'SchoolIntroduce',
      // name:'Major',
      component: SchoolIntroduce,
      children:[
        {
          path:'',
          component:Major
        },
        {
          path:'major',
          // name:'Major',
          component:Major
        },
        {
          path:'sch',
          component:School
        }
      ]
    },{
      path: '/majorlist',
      name: 'MajorList',
      component: MajorList
    },{
      path: '/schoollist',
      name: 'SchoolList',
      component: SchoolList
    }
  ]
})
