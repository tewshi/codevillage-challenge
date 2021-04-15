import { shallowMount } from "@vue/test-utils";
import router from "@/router";
import Wrapper from "@/components/Wrapper.vue";

describe("Wrapper.vue", () => {
  const grid = 7;

  it("renders component", async () => {
    const wrapper = shallowMount(Wrapper, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.exists());
  });

  it("renders props.grid when passed", async () => {
    const wrapper = shallowMount(Wrapper, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.vm.grid).toEqual(grid);
  });

  it("renders text content", () => {
    const wrapper = shallowMount(Wrapper, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.text()).toContain(`Game grid`);
    expect(wrapper.text()).toContain(`Start again`);
  });
});
