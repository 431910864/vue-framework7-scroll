<template>
  <div ref="Image" :style="{background:'url('+ img +')  no-repeat center center / cover #e8e8e8',width,height: heights ? heights : height}">
  	<slot></slot>
  </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
            		heights: 0,
            		img: '',
            }
        },
        props: {
          src: String/Object,
          width: {
            type: Number/String,
            default: '100%'
          },
          height: {
            type: Number/String,
            default: '100px'
          },
          watchs: {
            type: String/Object,
            default: ''
          },
          watchImg: {
          	type: Boolean/Object,
          	default: false,
          }
        },
        computed: {
            ...mapState({})
        },
        mounted() {
    			this.img = this.getImgSrc(this.src);
       	 	this.$nextTick(()=>{
        			if(this.height == 'auto'){
					this.heights = this.$refs.Image.offsetWidth + 'px';
				}
			})
        },
        activated() {

        },
        watch:{
        		watchImg(){
        			this.img = this.getImgSrc(this.src);
        			this.$nextTick(()=>{
	        			if(this.height == 'auto'){
						this.heights = this.$refs.Image.offsetWidth + 'px';
					}
				})
        		},
        		watchs(){
        			this.img = this.getImgSrc(this.src);
        			this.$nextTick(()=>{
	        			if(this.height == 'auto'){
						this.heights = this.$refs.Image.offsetWidth + 'px';
					}
				})
        		}
        },
        updated(){
        		
        },
        methods: {
          getImgSrc(res,bool){
            if(!res) return "";
            if(typeof res == 'object' || typeof res == 'array'){
              return !bool ? JSON.stringify(res.src) : res.src;
            }else{
              try{
                res = JSON.parse(res);
                if(!res) return "";
                if(typeof res == 'object' || typeof res == 'array'){
                  return !bool ? JSON.stringify(res.src) : res.src
                }
              }catch(e){}
            }
            return !bool ? JSON.stringify(res) : res;
          },
            async init() {
                return new Promise(async (resolve, reject) => {

                });
            },
        },
    }
</script>

<style lang="scss">

</style>
