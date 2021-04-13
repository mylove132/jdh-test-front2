<template src="./index.html"></template>

<script lang='ts'>
import { defineComponent, ref, reactive} from 'vue';
import ScriptService from '@/services/modules/script.service';
import CPU from '@/components/Highcharts/CPU/index.vue';
import RAM from '@/components/Highcharts/RAM/index.vue';

export default defineComponent({
  name: "Jmeter",
  components: {
    CPU,
    RAM
  },
  setup(){
    const showFileList = ref<boolean>(false);
    let scripts = reactive<Scripts>({scriptVOs: []});
    let activeNames = ref<string>('');
    function checkFile (file: any) {
      if (!file.name.endsWith(".jmx")) {
        alert("只支持jmx文件上传");
        return false;
      }
    };
    function saveScript(script: ScriptVO){
      ScriptService.saveScript({
        scriptName: script.name!,
        stressTime: script.stressTime,
        threadNum: script.threadNum,
        fileMd5: script.md5
      })
    };
    function uploadFile(file: any){
      let formData = new FormData();
      let headers = {
            "Content-type": "multipart/form-data"
          };
      formData.set("file", file.file);
      ScriptService.jmxFileUpload(formData, headers).then(
        response => {
          if (response.code === 10000) {
            scripts.scriptVOs.push(
              {
                name: response.data?.name!,
                threadNum: 10,
                stressTime: 20,
                md5: response.data?.md5!
              }
            );
          } else {
            console.log("文件上传失败");
          }
        }
      ).catch(
        () => {
          console.log("文件上传失败")
        }
      )
    };

    return {
      activeNames,
      scripts,
      showFileList,
      checkFile,
      uploadFile,
      saveScript
    }
  }  
});

interface ScriptVO {
  name: string;
  threadNum: number;
  stressTime: number;
  md5: string;
}

interface Scripts {
  scriptVOs: ScriptVO[];
}
</script>
<style lang='scss' src='./index.scss' scoped></style>