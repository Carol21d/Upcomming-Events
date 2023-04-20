import { beforeEach, describe, expect, it, vi, vitest,test } from "vitest";  
import { mount,shallowMount } from '@vue/test-utils';
import { createTestingPinia } from "@pinia/testing";
import HeaderComponent from '../components/header/HeaderComponent.vue';

const pinia = createTestingPinia({
    createSpy: vitest.fn(),
});

describe('HeaderComponent', () => {
    it('should header have h1 element in nav', () => {
    const wrapper = shallowMount(HeaderComponent,{
       global:{
        plugins:[pinia],
       },
    });



    
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.text()).toBe('Buy Amazing Tickets at wholesale prices.')
    // expect(h1.contains('span')).toBe(true)
   
  })
});




  