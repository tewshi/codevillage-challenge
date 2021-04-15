import { mount, shallowMount } from "@vue/test-utils";
import Failed from "@/views/Failed.vue";
import router from "@/router";

describe("Failed.vue", () => {
  const grid = 12;
  const seconds = 32;
  const eaten = 12;

  // const $route = {
  //   path: "/failed",
  //   params: { grid, seconds, eaten },
  // };

  // const routerPushMock = jest.fn();
  //
  // jest.mock("mock-vue-router", () => ({
  //   useRouter: () => ({
  //     push: routerPushMock,
  //   }),
  //   useRoute: () => ({
  //     $route,
  //   }),
  // }));

  it("renders component", () => {
    const wrapper = shallowMount(Failed, {
      global: {
        // mocks: {
        //   $route: $route,
        // },
        plugins: [router],
      },
    });
    expect(wrapper.exists());
  });

  xit("renders props.grid, props.life and props.seconds when passed", () => {
    const wrapper = mount(Failed, {
      props: { grid, seconds, eaten },
    });
    expect(wrapper.props("grid")).toEqual(grid);
    expect(wrapper.props("seconds")).toEqual(seconds);
    expect(wrapper.props("eaten")).toEqual(eaten);
  });

  xit("renders text content", () => {
    const wrapper = shallowMount(Failed, {
      props: { grid, seconds, life: eaten },
    });
    expect(wrapper.text()).toContain(`Game over!`);
    expect(wrapper.text()).toContain(`Total Food: ${eaten} / ${grid}`);
    expect(wrapper.text()).toContain(`Time spent: ${seconds} seconds`);
  });
});
