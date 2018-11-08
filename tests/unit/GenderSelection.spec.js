import { shallowMount } from '@vue/test-utils';
import GenderSelection from '@/components/GenderSelection.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';


describe('GenderSelection.vue', () => {
  beforeEach(() => {
    Vue.use(Vuetify);
  });

  it('is vue instance', () => {
    const wrapper = shallowMount(GenderSelection);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('default value to be MACHO', () => {
    const wrapper = shallowMount(GenderSelection);

    expect(wrapper.props().value).toBe('MACHO');
  });

  it('male button selected with MACHO value', () => {
    const wrapper = shallowMount(GenderSelection, {
      propsData: {
        value: 'MACHO',
      },
    });

    const maleButton = wrapper.find('#male');
    const femaleButton = wrapper.find('#female');
    const undeterminedButton = wrapper.find('#undetermined');

    expect(maleButton.attributes().flat).toBeUndefined();
    expect(femaleButton.attributes().flat).toBeTruthy();
    expect(undeterminedButton.attributes().flat).toBeTruthy();
  });

  it('female button selected with FEMEA value', () => {
    const wrapper = shallowMount(GenderSelection, {
      propsData: {
        value: 'FEMEA',
      },
    });

    const maleButton = wrapper.find('#male');
    const femaleButton = wrapper.find('#female');
    const undeterminedButton = wrapper.find('#undetermined');

    expect(maleButton.attributes().flat).toBeTruthy();
    expect(femaleButton.attributes().flat).toBeUndefined();
    expect(undeterminedButton.attributes().flat).toBeTruthy();
  });

  it('undetermined button selected with INDETERMINADO value', () => {
    const wrapper = shallowMount(GenderSelection, {
      propsData: {
        value: 'INDETERMINADO',
      },
    });

    const maleButton = wrapper.find('#male');
    const femaleButton = wrapper.find('#female');
    const undeterminedButton = wrapper.find('#undetermined');

    expect(maleButton.attributes().flat).toBeTruthy();
    expect(femaleButton.attributes().flat).toBeTruthy();
    expect(undeterminedButton.attributes().flat).toBeUndefined();
  });

  it('emitted value to correspond to value prop', () => {
    const wrapper = shallowMount(GenderSelection);

    wrapper.vm.$emit('input', 'MACHO');

    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')[0]).toEqual(['MACHO']);
  });
});
