import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { Code } from './type'

@Module({ dynamic: true, store, name: 'javacode', namespaced: true })
class JavaCodeStore extends VuexModule {
    codeList: Code[] = [{
        name: "",
        code: "",
        lang: "",
        desc: ""
    }]

    get javaCodeList() {
        return this.codeList;
    }

    @Mutation
    private addJavaCodeItem (payload: Code) {
        this.codeList = [payload, ...this.codeList];
    }

    @Mutation
    private delJavaCodeItem (payload: Code) {
    }

    @Action
  	public dispatchAddReduce(payload: Code) {
    	this.addJavaCodeItem(payload);
  	}

    @Action
  	public dispatchDelReduce(payload: Code) {
    	this.delJavaCodeItem(payload);
  	}

}

export const JavaCodeModule = getModule(JavaCodeStore)