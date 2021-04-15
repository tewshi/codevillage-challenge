import { shallowMount } from "@vue/test-utils";
import GameHeader from "@/components/GameHeader.vue";

describe("GameHeader.vue", () => {
  const grid = 12;
  const seconds = 32;
  const life = 0.4;
  it("renders component", () => {
    const wrapper = shallowMount(GameHeader, {
      props: { grid, seconds, life },
    });
    expect(wrapper.exists());
  });

  it("renders props.grid, props.life and props.seconds when passed", () => {
    const wrapper = shallowMount(GameHeader, {
      props: { grid, seconds, life },
    });
    expect(wrapper.props("grid")).toEqual(grid);
    expect(wrapper.props("seconds")).toEqual(seconds);
    expect(wrapper.props("life")).toEqual(life);
  });

  it("renders text content", () => {
    const wrapper = shallowMount(GameHeader, {
      props: { grid, seconds, life },
    });
    expect(wrapper.text()).toContain(`Grid: ${grid} x ${grid}`);
    expect(wrapper.text()).toContain(`Time spent: ${seconds} secs`);
  });
});
