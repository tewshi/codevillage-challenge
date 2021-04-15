import { shallowMount } from "@vue/test-utils";
import FoodCell from "@/components/FoodCell.vue";

describe("FoodCell.vue", () => {
  const col = 1;
  it("renders component", () => {
    const wrapper = shallowMount(FoodCell, {
      props: { col },
    });
    expect(wrapper.exists());
  });

  it("renders props.col when passed", () => {
    const wrapper = shallowMount(FoodCell, {
      props: { col },
    });
    expect(wrapper.props("col")).toEqual(col);
  });

  it("renders contains data", async () => {
    const wrapper = shallowMount(FoodCell, {
      props: { col },
    });
    expect(wrapper.vm.value).toEqual(col);
    expect(wrapper.vm.untouched).toBeTruthy();
    expect(wrapper.vm.hasFood).toBeFalsy();
    expect(wrapper.vm.isEmpty).toBeFalsy();
    expect(wrapper.vm.isPlayer).toBeFalsy();
  });
});
