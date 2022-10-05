document.addEventListener("DOMContentLoaded", () => {
  const selectHeader = document.querySelector('.select__header');
  const selectList = document.querySelector('.select__list');

  const selectExpand = (el, list) => {
    el.addEventListener("click", () => {
      let isActive = document.querySelector('.select__list_is_active');
      if (isActive === null) {
        list.classList.add('select__list_is_active');
      }
      console.log(isActive)
      if (isActive !== null) {
        list.classList.remove('select__list_is_active');
      }
    })
  }

  selectExpand(selectHeader, selectList);
});
