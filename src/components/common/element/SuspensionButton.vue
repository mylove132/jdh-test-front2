<template>
  <a :href="href">
    <div class="layer">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span :class="icon" id="sp">{{ text }}</span>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import SuspensionButtonEntity from "@/common/dto/suspension";

export default defineComponent({
  name: "SuspensionButton",
  props: {
    suspensionButtonData: {
      type: SuspensionButtonEntity,
      default: () => {},
    },
  },
  setup(props) {
    const suspensionButtonData = reactive<SuspensionButtonEntity>(
      props.suspensionButtonData
    );
    console.log(suspensionButtonData);
    const href: string =
      suspensionButtonData.getHref == null ? "" : suspensionButtonData.getHref;
    const icon: string =
      suspensionButtonData.getIcon == null ? "" : suspensionButtonData.getIcon;
    const text: string =
      suspensionButtonData.getText == null ? "" : suspensionButtonData.getText;
    return {
      href,
      icon,
      text,
    };
  },
});
</script>

<style lang="scss" scope>
a {
  margin: 0 25px;
  text-decoration: none;
  color: #fff;
  position: relative;
  .layer {
    width: 95px;
    height: 95px;
    transition: transform 0.3s;
    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border: 1px solid #fff;
      border-radius: 5px;
      transition: all 0.3s;
      &:nth-child(1) {
        opacity: 0.2;
      }
      &:nth-child(2) {
        opacity: 0.4;
        transform: translate(5px, -5px);
      }
      &:nth-child(3) {
        opacity: 0.6;
        transform: translate(10px, -10px);
      }
      &:nth-child(4) {
        opacity: 0.8;
        transform: translate(15px, -15px);
      }
      &:nth-child(5) {
        opacity: 1;
        transform: translate(20px, -20px);
      }
    }
    span#sp {
      font-size: 20px;
      line-height: 55px;
      text-align: center;
    }
  }
  &:nth-child(4) .layer span {
    color: #2867b2;
    border-color: #2867b2;
    box-shadow: -1px 1px 3px #4267b2;
  }
  &:nth-child(5) .layer span {
    color: #ff0000;
    border-color: #ff0000;
    box-shadow: -1px 1px 3px #ff0000;
  }
  &:nth-child(1) .layer span {
    color: #4267b2;
    border-color: #4267b2;
    box-shadow: -1px 1px 3px #4267b2;
  }
  &:nth-child(2) .layer span {
    color: #1da1f2;
    border-color: #1da1f2;
    box-shadow: -1px 1px 3px #1da1f2;
  }
  &:nth-child(3) .layer span {
    color: #e1306c;
    border-color: #e1306c;
    box-shadow: -1px 1px 3px #e1306c;
  }
  &:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }
}
</style>
