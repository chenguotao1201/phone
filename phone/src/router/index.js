import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from  '@/components/login'
import ziliao from  '@/components/ziliao'
import home from  '@/components/home'
import xindetail from  '@/components/xindetail'
import order from  '@/components/order'
import necessary from  '@/components/necessary'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
	  {
		  path: '/xindetail',
		  name: 'xindetail',
		  component: xindetail
	  },
      {
		  path: '/ziliao',
		  name: 'ziliao',
		  component: ziliao
	  },
	  {
		  path: '/home',
		  name: 'home',
		  component: home
	  },
	  {
		  path: '/order',
		  name: 'order',
		  component: order
	  },
	  {
		  path: '/necessary',
		  name: 'necessary',
		  component: necessary
	  }
  ]
})
