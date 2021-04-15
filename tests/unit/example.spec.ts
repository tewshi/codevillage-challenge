import { shallowMount } from "@vue/test-utils";
import FoodCell from "@/components/FoodCell.vue";

describe("FoodCell.vue", () => {
  it("renders props.col when passed", () => {
    const col = 1;
    const wrapper = shallowMount(FoodCell, {
      props: { col },
    });
    expect(wrapper.text()).toMatch(col.toString());
  });
});
