import { beforeEach, describe, expect, it, vi, vitest } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import Vuetify from 'vuetify';

import LoginComponent from "../components/login/LoginComponent.vue";

const pinia = createTestingPinia({
  createSpy: vitest.fn(),
});

describe("Login component", () => {
  
  

  it("Text button is Login to the account", () => {
    const wrapper = mount(LoginComponent, {
      global: {
        plugins: [pinia],
      },
    });

    const btnExist = wrapper.find("v-btn");

    expect(btnExist.exists()).toBe(true);
    expect(btnExist.text()).toBe("Login to the account");
  });

  it("tag button should be exist", () => {

    let vuetify;
  beforeEach( () => {
    vuetify = new Vuetify()
  })

    const wrapper = mount(LoginComponent, {
      vuetify,
      global: {
        plugins: [pinia],
      },
    });

    const wHtml = wrapper.html();

    console.log(wHtml);

    expect(wHtml.find('button').exists()).toBe(true);
    expect(btn.text()).toBe("Login to the account");
  });
});







