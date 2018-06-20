<template>
	<div class="h_100s flex w_100s fd_c">
		<div class="flex_10 w_100s o_h">
			<slot></slot>
		</div>
		<div class="pr b_l_0 w_100s br_t_qhui bg_qbai">
	        <div class="flex jc_sb w_100s">
	            <div @click="routerPage(item)" :key="index" v-for="(item,index) in tabbar" class="flex_10 flex ja_c fd_c pt_5 c_p">
	                <img :src="item.src" class="w_25 h_25" />
	                <span class="pt_3 fz_11" :class="item.checked?'c_lan':'c_hui'">{{item.name}}</span>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
    		tabbars: [],
    }
  },
  props: {
  	tabbar: {
  		type: Object/Array,
  		default: [],
  	}
  },
  components: {
  	
  },
  mounted () {
  	if(this.tabbars.length <= 0 && this.tabbar.length > 0){
		this.routerPage(this.tabbar[1]);
	}
  },
  watch: {
  	tabbar(tab){
  		if(this.tabbars.length <= 0 && this.tabbar.length > 0){
  			this.routerPage(this.tabbar[1]);
  		}
  	}
  },
  methods: {
  	routerPage(item){
  		if(!item) return;
  		var isPush = true;
  		for(var i in this.tabbars){
  			if(this.tabbars[i].path == item.path){
  				this.tabbars[i].show = true;
  				isPush = false;
  			}else{
  				this.tabbars[i].show = false;
  			}
  			this.tabbars.splice(i,1,this.tabbars[i])
  		}
  		if(isPush){
  			item.load = true;
	  		item.show = true;
	  		this.tabbars.push(item);
  		}
  		this.$emit('onRouter',this.tabbars);
  	},
  	showStatusbar() {
        this.$f7.statusbar.show();
    },
    hideStatusbar() {
        this.$f7.statusbar.hide();
    },
  }
}
</script>

<style>
</style>
