import { shallowMount } from "@vue/test-utils";
import router from "@/router";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  const $route = {
    name: "home",
  };

  beforeEach(async () => {
    await router.push($route);
    await router.isReady();
  });

  it("renders component", async () => {
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.exists());
  });

  it("renders text content", () => {
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.text()).toContain(`Greedy Hunter`);
    expect(wrapper.text()).toContain(
      `The aim is to eat all the food in record time`
    );
    expect(wrapper.text()).toContain(`Configure your game grid below 👇🏼`);
  });
});
