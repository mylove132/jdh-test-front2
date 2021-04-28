import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { Code } from './type'

@Module({ dynamic: true, store, name: 'loading', namespaced: true })
class LoadingStore extends VuexModule {
    isLoading: boolean = false;

    @Mutation
    private setLoading (payload: boolean) {
        this.isLoading = payload;
    }

    @Action
  	public dispatchReduce(payload: boolean) {
    	this.setLoading(payload);
  	}

}

export const LoadingModule = getModule(LoadingStore)