export const gotoTop = () => {
  // 👇️ scroll to top on page load
  window.scrollTo({ top: 50, left: 0, behavior: 'smooth' });
}


export const title = (value) => {
  let newValue = `PetShop - ${value}`
  return document.title = newValue;
}



