<script setup lang="ts">
import { onHide, onLaunch, onShow } from "@dcloudio/uni-app";
import VConsole from "vconsole";
// #ifdef H5
const vConsole = new VConsole();
// #endif

onLaunch(() => {
  console.log(`当前环境: ${process.env.NODE_ENV}`);
});

onShow(() => {

});

onHide(() => { });
</script>

<style lang="scss">
@use "tailwindcss/base";
@use "tailwindcss/utilities";
@use "tailwindcss/components";
@use "./uni.scss";

page {
  background-color: #F5F6FA;
  overflow-x: hidden;
}

/* 按钮 */
// uni-button {
//   background: $uni-color-primary !important;
// }

.uni-button-color,
.uni-picker-action-confirm {
  color: $uni-color-primary !important;
}

.success {
  color: #8bce64;
  background-color: #8bce64;
}

.warn,
.idle {
  color: #f5a623;
  background-color: #f5a623;
}

.stop,
.offline {
  color: #f52323;
  background-color: #f52323;
}


.online {
  color: #65aba5;
  background-color: #65aba5;
}

.uni-toast {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
}

.is-focused {
  border-color: $uni-color-primary !important;
}

.uni-modal {
  border-radius: 12px;

  .uni-modal__bd {
    color: #333;
    font-weight: 500;
  }

  .uni-modal__btn {
    font-size: 14px;
  }
}

.uni-picker-custom {
  border-radius: 14px 14px 0 0;
  font-size: 14px;
}
</style>
