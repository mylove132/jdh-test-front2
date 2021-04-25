import { createStore } from 'vuex'
import wsStore from './ws'
import loadingStore from './loading'
import { IState } from '@/domain/type/state'

export const store = createStore<IState>({
  modules: {
    wsStore,
    loadingStore
  }
})