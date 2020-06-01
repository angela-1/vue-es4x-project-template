<template>
  <BaseLayout>
    <template #title>
      <h3>文档生成器</h3>
    </template>
    <template #content>
      <form>
        <div class="radio-group">
          <input class="radio-input" id="option-a" type="radio" name="options" />
          <label class="radio-label" for="option-a">Option A</label>
          <input class="radio-input" id="option-b" type="radio" name="options" />
          <label class="radio-label" for="option-b">Option B</label>
          <input class="radio-input" id="option-c" type="radio" name="options" />
          <label class="radio-label" for="option-c">Option C</label>
        </div>

        <div class="form-group">
          <div class="form-group-header">
            <label for="example-text">模板</label>
          </div>
          <div class="form-group-body">
            <input class="form-control" type="text" value="Example Value" id="example-text" />
          </div>
        </div>

        <div class="form-group">
          <div class="form-group-header">
            <label for="example-select">Example Select</label>
          </div>
          <div class="form-group-body">
            <select class="form-select" id="example-select">
              <option>Choose an option</option>
              <option>Git</option>
              <option>Subversion</option>
              <option>Social Coding</option>
              <option>Beets</option>
              <option>Bears</option>
              <option>Battlestar Galactica</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <div class="form-group-header">
            <label for="example-textarea">Example Textarea</label>
          </div>
          <div class="form-group-body">
            <textarea class="form-control" id="example-textarea"></textarea>
          </div>
        </div>
      </form>
    </template>
  </BaseLayout>
</template>

<script lang="ts">
import { ref } from 'vue'
import BaseLayout from '../../layouts/BaseLayout.vue'
import {
  TemplateFactory,
  GenerateType,
  DocStyle,
  SignatureStyle
} from '../../core/domains/TemplateFactory'

export default {
  name: 'GenerateTemplate',
  components: {
    BaseLayout
  },
  setup() {
    const profile1: TemplateFactory = {
      type: GenerateType.Doc,
      style: DocStyle.Draft,
      title: '',
      sendDate: new Date()
    }
    const profile2: TemplateFactory = {
      type: GenerateType.Signature,
      style: SignatureStyle.Single,
      title: '',
      subtitle: '',
      addr: '',
      sendDate: new Date()
    }

    const count = ref(0)
    const fetchData = async () => {
      try {
        const url = 'http://127.0.0.1:8888'
        const response = await fetch(url)
        const data = await response.json()
        console.log('rep', data)
        count.value++

        // console.log(response, data)
        // fetch(url)
        //   .then(response => response.json()) //定义返回的类型和数据格式
        //   .then(data => console.log(data)) // 返回的数据
      } catch (e) {
        console.log('Oops, error', e)
      }
    }
    return {
      count,
      fetchData
    }
  }
}
</script>
