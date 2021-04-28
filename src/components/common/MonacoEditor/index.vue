<script lang='ts'>
import * as Monaco from 'monaco-editor'
import {
  defineComponent,
  onMounted,
  PropType,
  shallowRef,
  ref,
  onBeforeUnmount,
  watch
} from 'vue'
import { createUseStyles } from 'vue-jss'
let subscription: Monaco.IDisposable | undefined
let preventTriggerChangeEvent = false
const useStyles = createUseStyles({
  container: {
    border: '1px solid #eee',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5
  },
  title: {
    backgroundColor: '#eee',
    padding: '10px 0',
    paddingLeft: 20
  },
  code: {
    flexGrow: 1
  }
})

export default defineComponent({
  name: 'MonacoEditor',
  props: {
    code: {
      type: String as PropType<string>,
      required: true
    },
    onChange: {
      type: Function as PropType<
        (value: string, event: Monaco.editor.IModelContentChangedEvent) => void
      >,
      required: true
    },
    title: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    // 需要一个shallowRef: 只监听value，不关心实际对象
    const editorRef = shallowRef<Monaco.editor.IStandaloneCodeEditor | null>(
      null
    )
    // 需要生成编辑器的Dom
    const containerDomRef = ref()

    onMounted(() => {
      // 组件初始化时创建一个MonacoEditor的实例
      const editor = (editorRef.value = Monaco.editor.create(
        containerDomRef.value,
        {
          value: props.code, // 初始值
          language: 'json', // 代码生成语言
          formatOnPaste: true, // 当粘贴的时候自动进行一次格式化代码
          tabSize: 2, // tab缩进长度
          minimap: {
            enabled: false // 不需要小的缩略图
          }
        }
      ))

      // 如果代码有变化，会在这里监听到，当受到外部数据改变时，不需要触发change事件
      subscription = editor.onDidChangeModelContent((event: any) => {
        if (!preventTriggerChangeEvent) {
          // getValue: 获取编辑器中的所有文本
          props.onChange(editor.getValue(), event)
        }
      })
    })

    onBeforeUnmount(() => {
      // 组件销毁时卸载编辑器
      if (subscription) {
        subscription.dispose()
      }
    })

    watch(
      () => props.code,
      (value) => {
        if (editorRef.value) {
          const editor = editorRef.value
          // 获取编辑器的textModel文本
          const model = editor.getModel()

          // 如果代码发生变化 这里需要更新一版
          if (model && value !== model.getValue()) {
            // 这是进行一次常规化的操作 文档原文：Push an "undo stop" in the undo-redo stack.
            editor.pushUndoStop()
            preventTriggerChangeEvent = true
            /**
             * @function 开始编辑编辑器, 文档原文：Push edit operations, basically editing the model. This is the preferred way of editing the model. The edit operations will land on the undo stack.
             * @param 编辑操作之前的光标状态。调用撤销或重做时，将返回此光标状态
             * @param 需要编辑的内容 range: 编辑的内容范围，这里选择的是全部范围
             * @param 在编辑器质性完成之后可以计算光标状态的一个回调参数
             */
            model.pushEditOperations(
              [],
              [
                {
                  range: model.getFullModelRange(),
                  text: value
                }
              ],
              () => null
            )
          }

          editor.pushUndoStop()
          preventTriggerChangeEvent = false
        }
      }
    )

    const classesRef = useStyles()

  return () => {
      const classes = classesRef.value

      return (
        <div class={classes.container}>
          <div class={classes.title}>
            <span>{props.title}</span>
          </div>
          <div class={classes.code} ref={containerDomRef}></div>
        </div>
      )
    }
  }
})
</script>
