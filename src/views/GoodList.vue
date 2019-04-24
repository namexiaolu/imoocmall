<template>
	<div>
		<nav-header></nav-header>
		<nav-bread>
			<span>Goods</span>
		</nav-bread>
		15456
		<dl>
			<dt v-for="price in priceFilter">
				<a >{{price.startPrice}}</a>
			</dt>
		</dl>
		
		
		这是商品列表
		<span></span>
		<span></span>
		<span></span>
		<router-link to="/goods/title">显示商品标题</router-link>
		<router-link to="/goods/image">显示商品图片</router-link>
		<div>
			<router-view></router-view>
		</div>
		<br>
		<router-link to="/cert">跳转到购物车</router-link>
		<br>

		<ul>
			<li v-for="item in goodsList">
				<div class="name">{{item.productId}}</div>
				<div class="price">{{item.productName}}</div>

			</li>
		</ul>




		<nav-footer></nav-footer>
	</div>
</template>

<script>
	import NavHeader from './../components/Header.vue'
	import NavFooter from '@/components/Footer.vue'
	import NavBread from '@/components/NavBread.vue'

	import axios from 'axios'


	export default {
		data() {
			return {
				goodsList: [],
				priceFilter:[
					{
						startPrice:"0.00",
						endPrice:"500.00"
					},
					{
						startPrice:"500.00",
						endPrice:"1000.00"
					},
					{
						startPrice:"1000.00",
						endPrice:"2000.00"
					}
					
				]
			}
		},
		components: {
			NavHeader,
			NavFooter,
			NavBread
		},
		mounted: function() {
			this.getGoodsList();
		},
		methods: {
			getGoodsList() {
				axios.get("/goods").then((result) => {
					var res = result.data;
					this.goodsList = res.result;
				})
			}
		}
	}
</script>

<style>
</style>
