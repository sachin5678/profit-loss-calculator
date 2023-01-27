var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var finalPrice = document.querySelector("#final-price");
var outputBtn = document.querySelector("#output-btn");
var outputBox = document.querySelector("#output-box");

outputBtn.addEventListener("click", clickHandler);

function clickHandler() {
  var ip = initialPrice.value;
  var qnt = quantity.value;
  var fp = finalPrice.value;

  if (!initialPrice.value || !finalPrice.value || !quantity.value) {
    alert("Your input is not valid!");
    return;
  }

  profitLossCalculator(ip, qnt, fp);
}

function profitLossCalculator(initial, quantity, final) {
  if (initial <= 0 || quantity <= 0 || final <= 0) {
    alert("Invalid values. Please enter valid values😤");
    return;
  }

  if (final > initial) {
    var profit = (final - initial) * quantity;
    var profitPercent = ((final - initial) / initial) * 100;

    // const message = `The profit is ${profit} & profit percentage is ${profitPercent}`;

    showMsg(
      "The profit is " + profit + " & profit percentage is " + profitPercent
      //   message
    );
  } else if (initial > final) {
    var loss = (initial - final) * quantity;
    var lossPercent = ((initial - final) / initial) * 100;
    showMsg("The Loss is " + loss + " & Loss percentage is " + lossPercent);
  } else {
    showMsg(" No Pain no Gain 😎 & No Gain no Pain 😴");
  }
}

function showMsg(msg) {
  outputBox.innerText = msg;
}
