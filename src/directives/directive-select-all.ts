export const selectAll = {
  inserted(el: any): void {
    let input = el.querySelector(".q-field__native");
    input.addEventListener("focus", () => {
      if (input.value.length) {
        input.select();
      }
    });
  }
};
