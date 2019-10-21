import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import classify from '@/components/classify'
import top from '@/components/top'
import fiction from '@/components/fiction'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/top',
      component: top
    },
    {
      path: '/fiction',
      component: fiction
    },

  ]
})
