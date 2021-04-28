import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { Code, WsData } from './type'

@Module({ dynamic: true, store, name: 'ws', namespaced: true })
class WebSocketStore extends VuexModule {
    wsData: WsData = {
        msg: ""
    };

    @Mutation
    private setWsData (payload: WsData) {
        this.wsData = payload;
    }

    @Action
  	public dispatchReduce(payload: WsData) {
    	this.setWsData(payload);
  	}

}

export const WsModule = getModule(WebSocketStore)