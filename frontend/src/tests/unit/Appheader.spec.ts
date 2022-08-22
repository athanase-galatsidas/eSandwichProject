// import { shallowMount } from '@vue/test-utils'
// import { test, expect } from 'vitest'
// import Appheader from '@/components/Appheader.vue'


// test('if login button is visible', () => {
//     const wrapper = shallowMount(Appheader)
//     expect(wrapper.find("#test1").isVisible()).toBe(true)
// })


import { describe, it, expect,test } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader', () => {
    it('if user is not logged in, do not show logout button',() =>{
      const wrapper =mount(AppHeader);
      expect(wrapper.find('#test1').isVisible()).toBe(false);
    });
  
    it('if a user is logged in, show logout button', async () => {
      const wrapper =mount(AppHeader);
      await wrapper.setData({loggedIn: true});
      expect(wrapper.find('#test1').isVisible()).toBe(true);
    })
  
  })