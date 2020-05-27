<script>
// 函数式组件无法使用this
import { check } from "../utils/auth";

export default {
  functional: true,
  props: {
    authority: {
      type: Array,
      required: true
    }
  },
  render(createElement, context) {
    const { props, scopedSlots } = context;
    return check(props.authority) ? scopedSlots.default() : null;
  }
};
</script>

<style scoped></style>

<!--提供权限控制-->
