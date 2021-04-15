import { shallowMount } from "@vue/test-utils";
import GameFooter from "@/components/GameFooter.vue";

describe("GameFooter.vue", () => {
  const max = 25;
  const moves = 12;
  it("renders component", () => {
    const wrapper = shallowMount(GameFooter, {
      props: { max, moves },
    });
    expect(wrapper.exists());
  });

  it("renders props.max and props.moves when passed", () => {
    const wrapper = shallowMount(GameFooter, {
      props: { max, moves },
    });
    expect(wrapper.props("max")).toEqual(max);
    expect(wrapper.props("moves")).toEqual(moves);
  });

  it("renders text content", () => {
    const wrapper = shallowMount(GameFooter, {
      props: { max, moves },
    });
    expect(wrapper.text()).toContain(`Maximum moves: ${max}`);
    expect(wrapper.text()).toContain(`Total moves: ${moves}`);
  });
});
