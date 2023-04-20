import { beforeEach, describe, expect, it, vi, vitest,test } from "vitest";  
import { mount, shallowMount } from '@vue/test-utils';
import { createTestingPinia } from "@pinia/testing";

import HeaderComponent from '../components/header/HeaderComponent.vue';

const pinia = createTestingPinia({
    createSpy: vitest.fn(),
});



describe('HeaderComponent', () => {
    it('should have a header containing a nav with 3 elements', () => {
    const wrapper = shallowMount(HeaderComponent,{
       global:{
        plugins:[pinia],
       },
    });

    const navExist = wrapper.find('nav')
    expect(navExist.exists()).toBe(true);
    expect(wrapper.findAll('nav p').length).toBe(3);
  
    
})
});




