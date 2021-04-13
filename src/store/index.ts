import { createStore } from 'vuex'
import { IState } from '@/config/types/store.dto'
import wsStore from './ws'
import loadingStore from './loading'
import todoStore from './todo'

export const store = createStore<IState>({
  modules: {
    wsStore,
    loadingStore,
    todoStore
  }
})