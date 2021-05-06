import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { Code } from './type'
import { GlobalUtil } from '@/utils/global.util';

@Module({ dynamic: true, store, name: 'javacode', namespaced: true })
class JavaCodeStore extends VuexModule {
    codeList: Code[] = []
    get javaCodeList() {
        return this.codeList;
    }

    @Mutation
    private addJavaCodeItem (payload: Code) {
        this.codeList = [payload, ...this.codeList];
    }

    @Mutation
    private delJavaCodeItem (payload: Code) {
      if (payload.id !== null) {
        GlobalUtil.arrRemoveJson(this.codeList, "id", payload.id);
      } else {
        GlobalUtil.arrRemoveJson(this.codeList, "name", payload.name);
      }
    }

    @Mutation
    private updateJavaCodeItem (payload: Code) {
      if (payload.id !== null) {
        this.codeList.filter((item,index) => {
          if (item.id === payload.id) {
            this.codeList[index] = payload;
          }
          return item;
        })
      }
    }


    @Action
  	public dispatchAddReduce(payload: Code) {
    	this.addJavaCodeItem(payload);
  	}

    @Action
  	public dispatchDelReduce(payload: Code) {
    	this.delJavaCodeItem(payload);
  	}

    @Action
  	public dispatchUpdateReduce(payload: Code) {
    	this.updateJavaCodeItem(payload);
  	}
}

export const JavaCodeModule = getModule(JavaCodeStore)