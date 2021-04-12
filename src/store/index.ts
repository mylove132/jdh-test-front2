import { createStore } from 'vuex'
import { IState } from '@/common/types/common'
import wsStore from './ws'
import loadingStore from './loading'
import todoStore from './todo'

export const store = createStore<IState>({
  modules: {
    wsStore,
    loadingStore
  }
})