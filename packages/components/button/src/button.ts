/* button.ts 所有组件下放置要给 types.ts 用于组件的接受参数的类型定义 */
import type { ExtractPropTypes, PropType } from 'vue';
import type { ButtonNativeType, ButtonSizeType, ButtonType } from './interface';

export const Props = {
  type: {
    type: String as PropType<ButtonType>,
    default: (): ButtonType => 'default',
    validator(value: ButtonType) {
      return (['default', 'primary', 'success', 'info', 'danger', 'warning'] as const).includes(value);
    }
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    validator(value: ButtonSizeType) {
      return (['default', 'medium', 'small', 'mini', 'tiny'] as const).includes(value);
    }
  },
  plain: {
    type: Boolean,
    default: (): boolean => false
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  circle: {
    type: Boolean,
    default: (): boolean => false
  },
  loading: {
    type: Boolean,
    default: (): boolean => false
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  icon: {
    type: String,
    default: (): string => ''
  },
  autoFocus: {
    type: Boolean,
    default: (): boolean => false
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: (): ButtonNativeType => 'button',
    validator(value) {
      return (['button', 'submit', 'reset'] as const).includes(value);
    }
  }
};

export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
};

export type ButtonProps = ExtractPropTypes<typeof Props>;
