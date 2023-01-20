import { mount } from '@vue/test-utils';
import notification from '../button-test.vue';
import { describe, expect, test } from 'vitest';

//简单例子
describe('two plus two is four', () => {
  test('should be 4', () => {
    expect(2 + 2).toBe(4);
  });
});

//组件测试
describe('notification.vue', () => {
  test('renders correct style for error', () => {
    const type = 'error';
    const wrapper = mount(notification, {
      props: { type }
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--error']));
  });

  test('renders correct style for success', () => {
    const type = 'success';
    const wrapper = mount(notification, {
      props: { type }
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--success']));
  });

  test('renders correct style for info', () => {
    const type = 'info';
    const wrapper = mount(notification, {
      props: { type }
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--info']));
  });

  test('slides down when message is not empty', () => {
    const message = 'success';
    const wrapper = mount(notification, {
      props: { message }
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--slide']));
  });
});
