<template>
  <f7-page>
    <div class="h_100s bg_qhui o_h w_100s">
		<List><Areas></Areas></List>
		<ul id="AddrMobiscroll" style="display: none"></ul>
	</div>
  </f7-page>
</template>
<script>
import Areas from 'src/base/Framework7/f7Components/Areas.vue';
export default {
	data(){
		return {
			
		}
	},
	mounted(){
		
	},
	components:{
		Areas
	}
}
</script>

<style>
.demo-main,
.demo-wrapper {
    padding: 1em;
}
</style>