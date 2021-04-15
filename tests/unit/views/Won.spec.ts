import { shallowMount } from "@vue/test-utils";
import router from "@/router";
import Won from "@/views/Won.vue";

describe("Won.vue", () => {
  const grid = 12;
  const seconds = 32;
  const eaten = 12;

  const $route = {
    name: "won",
    params: { grid, seconds, eaten },
  };

  beforeEach(async () => {
    await router.push($route);
    await router.isReady();
  });

  it("renders component", async () => {
    const wrapper = shallowMount(Won, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.exists());
  });

  it("renders props.grid, props.eaten and props.seconds when passed", async () => {
    const wrapper = shallowMount(Won, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.vm.grid).toEqual(grid);
    expect(wrapper.vm.seconds).toEqual(seconds);
    expect(wrapper.vm.eaten).toEqual(eaten);
  });

  it("renders text content", () => {
    const wrapper = shallowMount(Won, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.text()).toContain(`Bravo!`);
    expect(wrapper.text()).toContain(`Total Food: ${eaten} / ${grid}`);
    expect(wrapper.text()).toContain(`Time Spent: ${seconds} seconds`);
  });
});
