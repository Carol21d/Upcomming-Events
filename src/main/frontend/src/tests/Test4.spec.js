import { beforeEach, describe, expect, it, vi, vitest,test } from "vitest";  
import { mount, shallowMount } from '@vue/test-utils';
import { createTestingPinia } from "@pinia/testing";

 import Buttons  from '../components/Buttons.vue'

 const pinia = createTestingPinia({
    createSpy: vitest.fn(),
});

describe('HeaderComponent', () => {
    it('should have button with color error', () => {
    const wrapper = mount(Buttons,{
       global:{
        plugins:[pinia],
       },
    });

    const btns = wrapper.find('[id="delete-btn"]')
    console.log(btns);
    
    expect(btns.props('variant')).toBe('flat');
    expect(btns.props('color')).toBe('error');
    expect(btns.text()).toBe('DELETE');
  
    
})
});





     
  
     