import { checkoutCard } from "../components/checkoutCard.js"; // adjust relative path as needed
let planData = {}
function finishingUp() {
    const section = document.createElement('section');
    const sectionId = 'finishing-up'
    section.id = sectionId;
    section.classList.add('arcade-section')
    section.classList.add('anim');
    section.classList.add('noshow');


////////////////////
// sample data (could come from your store)
planData = {
  plan: { 
    name: 'Arcade (Monthly)', price: '$9/mo' },
    addOns: [
      { name: 'Online service', price: '+$1/mo' },
      { name: 'Larger storage', price: '+$2/mo' }
    ],
    totalPrice: '+$12/mo'
};

const { card: summaryCardEl, update } = checkoutCard({
  plan: planData.plan,
  addOns: planData.addOns
});

// append the card element into your page
section.appendChild(summaryCardEl);

// later, if state changes:
// update({ plan: { name: 'Pro (Yearly)', price: '$150/yr' }, addOns: [...addOns], totalPrice: '+$160/yr' });
    //////////////



    // Total
    const arcadeTotal = document.createElement('div');
    arcadeTotal.classList = 'arcade-total';

    const totalLabel = document.createElement('p');
    totalLabel.classList = 'notes';
    totalLabel.innerText = 'Total (per month)';

    const totalPrice = document.createElement('p');
    totalPrice.classList = 'notes';
    totalPrice.innerText = planData.totalPrice || '+$12/mo';

    arcadeTotal.appendChild(totalLabel);
    arcadeTotal.appendChild(totalPrice);

    // Assemble
    // arcadeSection.appendChild();
    section.appendChild(arcadeTotal);
    
    return { section, sectionId };
    
}

export { finishingUp };
