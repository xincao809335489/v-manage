import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import { getLists } from '../api/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listObjs: {}
  },
  mutations: {
    changeList(state, data) {
      console.log(data);
      state.listObjs = data.data;
      console.log(state.listObjs)
    },
    [types.SET_LISTS](state, data) {
      state.listObjs = data.data
      console.log(state.listObjs)
    }
  },
  getters: {
  },
  actions: {
    changeList({
      commit
    }, data) {
      commit('changeList', data)
    },
    async getLists({
      commit
    }, obj) {
      const params = {
        pageIndex: obj.pageIndex,
        pageSize: obj.pageSize,
      }
      const result = await getLists(params);
      console.log(result);
      if (result.code === '0') {
        commit(types.SET_LISTS, {
          data: result.data
        })
      }
    }
  }
})
