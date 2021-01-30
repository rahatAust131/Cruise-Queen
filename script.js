// first-class-plus-button interaction
const firstPlusBtn = document.getElementById('first-class-plus-btn');
firstPlusBtn.addEventListener('click', function () {
  showCount('first-class-input', 'add');
  showAmount('first-class-input', 'economy-input');
});

// first-class-minus-btn interaction
const firstMinusBtn = document.getElementById('first-class-minus-btn');
firstMinusBtn.addEventListener('click', function () {
  showCount('first-class-input', 'subtract');
  showAmount('first-class-input', 'economy-input');
});

// economy-plus-btn interaction
const economyPlusBtn = document.getElementById('economy-plus-btn');
economyPlusBtn.addEventListener('click', function () {
  showCount('economy-input', 'add');
  showAmount('first-class-input', 'economy-input');
});

// economy-minus-btn interaction
const economyMinusBtn = document.getElementById('economy-minus-btn');
economyMinusBtn.addEventListener('click', function () {
  showCount('economy-input', 'subtract');
  showAmount('first-class-input', 'economy-input');
});

// function to show count of tickets (in the input field)
function showCount(id, task) {
  const ticketInput = document.getElementById(id);
  const ticketCount = parseInt(ticketInput.value);
  let newTicketCount = 0;
  // for addition
  if (task === 'add') {
    newTicketCount = ticketCount + 1;
  }
  // for subtraction
  else {
    // condition to handle negative or unexpected value
    if (ticketCount > 0) {
      newTicketCount = ticketCount - 1;
    }
  }
  ticketInput.value = newTicketCount;
}

// function to show cost/amount of booking tickets (in the amount part)
function calculateAmount(id) {
  let subTotalCost = 0;
  const ticketInput = document.getElementById(id);
  const ticketCount = parseInt(ticketInput.value);

  // condition to handle negative or unexpected value
  if (ticketCount > 0) {
    if (id == 'first-class-input') {
      // first-class tickets cost $150/ticket
      subTotalCost = subTotalCost + 150 * ticketCount;
    } else {
      // non first-class tickets cost $100/ticket
      subTotalCost = subTotalCost + 100 * ticketCount;
    }
  }
  return subTotalCost;
}

// function to show cost/amounts to book tickets
function showAmount(id1, id2) {
  // variable initialization (to store value & calculate cost)
  let tax = 0.1;      
  let totalCost = 0;      

  // targeting $ Amounts by their relative IDs
  const subtotalInStr = document.getElementById('subtotal-amount');
  const totalInStr = document.getElementById('total-amount');
  const taxInStr = document.getElementById('tax-amount');

  let subtotalCost1 = calculateAmount(id1);
  let subtotalCost2 = calculateAmount(id2);
  let finalSubtotalCost = subtotalCost1 + subtotalCost2;
  
  // calculation of total cost
  tax = finalSubtotalCost * tax;
  totalCost = finalSubtotalCost + tax;

  // showing the changed cost/amounts in the website
  subtotalInStr.innerText = finalSubtotalCost;
  totalInStr.innerText = totalCost;
  taxInStr.innerText = tax;
}