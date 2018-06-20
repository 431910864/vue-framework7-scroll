<template>
  <div @click="$emit('click')" class="flex ai_c bg_ban pt_13 pb_13 pl_10 pr_10 jc_sb bb_1 pr">
  	<div class="ai_c flex fz_14">
  		{{title}}
  		<slot></slot>
  	</div>
  	<img class="w_20 h_20 pr tp_2s" src="http://zhuihuituiguang-card.oss-cn-shenzhen.aliyuncs.com/wxcard/images/me_arrow@3x.png"/>
  </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {}
        },
        props: {
        		type: {
        			type: String/Object,
        			default: '',
        		},
        		title: {
        			type: String/Object,
        			default: '',
        		},
        },
        computed: {
            ...mapState({})
        },
        mounted() {

        },
        activated() {

        },
        methods: {
        		
        },
    }
</script>

<style lang="scss">

</style>
