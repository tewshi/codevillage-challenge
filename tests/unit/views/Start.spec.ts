import { shallowMount } from "@vue/test-utils";
import router from "@/router";
import Start from "@/views/Start.vue";

describe("Start.vue", () => {
  const grid = 12;

  const $route = {
    name: "start",
    params: { grid },
  };

  beforeEach(async () => {
    await router.push($route);
    await router.isReady();
  });

  it("renders component", async () => {
    const wrapper = shallowMount(Start, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.exists());
  });

  xit("renders props.grid, props.eaten and props.seconds when passed", async () => {
    const wrapper = shallowMount(Start, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.vm.grid).toEqual(grid);
    expect(wrapper.vm.seconds).toEqual(0);
    expect(wrapper.vm.eaten).toEqual(0);
  });

  xit("renders text content", () => {
    const wrapper = shallowMount(Start, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.text()).toContain(`Game over!`);
    expect(wrapper.text()).toContain(`Total Food: ${0} / ${grid}`);
    expect(wrapper.text()).toContain(`Time Spent: ${0} seconds`);
  });
});
