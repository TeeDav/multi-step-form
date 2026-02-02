function checkoutCard(initial = {}) {
  const card = document.createElement('div');
  // keep class name compatible with existing styles
  card.classList = 'arcade-card';

  // build plan row
  const planCopy = document.createElement('div');
  planCopy.classList = 'arcade-copy';

  const planDiv = document.createElement('div');
  planDiv.classList = 'arcade-plan';

  const planName = document.createElement('p');
  planName.classList = 'notes';

  const changeLink = document.createElement('p');
  changeLink.classList = 'notes';
  changeLink.style.cursor = 'pointer';
  changeLink.innerText = 'Change';
  changeLink.addEventListener('click', () => window.dispatchEvent(new CustomEvent('navigate', { detail: 2 })));

  const planPrice = document.createElement('p');
  planPrice.classList = 'notes';

  planDiv.appendChild(planName);
  planDiv.appendChild(changeLink);
  planCopy.appendChild(planDiv);
  planCopy.appendChild(planPrice);

  card.appendChild(planCopy);

  // add-ons container (rows will be appended here)
  const addonsContainer = document.createElement('div');

  // helper to render an addon row
  function renderAddonRow(addon) {
    const addonCopy = document.createElement('div');
    addonCopy.classList = 'arcade-copy';

    const addonName = document.createElement('p');
    addonName.classList = 'notes';
    addonName.innerText = addon.name || '';

    const addonPrice = document.createElement('p');
    addonPrice.classList = 'notes';
    addonPrice.innerText = addon.price || '';

    addonCopy.appendChild(addonName);
    addonCopy.appendChild(addonPrice);
    return addonCopy;
  }

  // API: update the card with data
  function update(data = {}) {
    const plan = data.plan || { name: 'Arcade (Monthly)', price: '$9/mo' };
    const addons = data.addOns || [];

    //updates info of selected plan
    planName.innerText = plan.name;
    planPrice.innerText = plan.price;

    // clear existing addons
    addonsContainer.innerHTML = '';
    // attach addons container and expose element
    addons.forEach(a => card.appendChild(renderAddonRow(a)));
  }

  // attach addons container and expose element
  // card.appendChild(addonsContainer);

  // initialize with provided data
  if (initial) update(initial);

  return { card, update };
}

export { checkoutCard };