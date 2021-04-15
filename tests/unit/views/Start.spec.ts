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

  it("renders props.grid when passed", async () => {
    const wrapper = shallowMount(Start, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.vm.grid).toEqual(grid);
    expect(wrapper.vm.grids.length).toEqual(grid * grid);
    expect(wrapper.vm.max).toEqual(Math.ceil(Math.pow(grid, 2) / 2));
    expect(wrapper.vm.eaten).toEqual(0);
    expect(wrapper.vm.moves).toEqual(0);
    expect(wrapper.vm.life).toEqual(0);
    expect(wrapper.vm.totalRandomFoods).toEqual(grid);
    expect(wrapper.vm.hasPlayer).toBeTruthy();
    expect(wrapper.vm.getRandomInt).toBeDefined();
    expect(wrapper.vm.getRandomInt()).toBeLessThanOrEqual(grid * grid);
    expect(wrapper.vm.won).toBeDefined();
    expect(wrapper.vm.failed).toBeDefined();
  });
});
