import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GoodList from './../views/GoodList'
import Title from '@/views/title'
import Image from '@/views/Image'
import Cert from '@/views/Cert'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			// path: '/goods/:goodsId/user/:name',
			path: '/',
			name: 'GoodList',
			component: GoodList,
			children: [{
					path: 'title',
					name: 'title',
					component: Title,
				},
				{
					path: 'image',
					name: 'image',
					component: Image,
				}
			]
		},
		{
			path: '/cert',
			name: 'cert',
			component: Cert,
		}
	]
})
