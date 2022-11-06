import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
Vue.use(Vuex);


// new Vuex.store({});

export default new Vuex.Store({
    state: {
        stuList: [], // 学生列表
        nowPage: 1, //当前页
        totalPage: 1, // 总页数
        size: 1, //每页的条数
        count: 1, // 总数据量
        activeStu:{},
        isShow:false, //是否显示遮罩层
    },
    mutations: {
        setStuList(state, list) {
            state.stuList = list;
        },
        setNowPage(state, page) {
            state.nowPage = page;
        },
        setTotalPage(state, count) {
            state.totalPage = Math.ceil(count / state.size);
            state.count = count;
        },
        setActiveStu(state,stu){
            state.activeStu = stu;
        },
        setShow(state,bool){
            state.isShow = bool;
        }
    },
    actions: {
        async getStuList({commit,state},page){
            // const value = await api.getStu(1,5);
            // console.log(value);
            const {data:{cont,findByPage}} = await api.getStu(page,state.size);
            commit('setStuList',findByPage);
            commit('setNowPage',page);
            commit('setTotalPage',cont);
        },
        async delStu({dispatch,state},sNo){
            await api.delStu(sNo);
            // 重新计算总页数 newPage
            var newPage = Math.ceil((state.count - 1)/state.size);
            // 当前页大于newPage 说明删除的是最后一页，需要重新获取数据
            if(state.nowPage > newPage ){
                //                         页数
                dispatch('getStuList',state.nowPage - 1);
            }else{
                dispatch('getStuList',state.nowPage);
            }
        }
    }
})