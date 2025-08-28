// Heart Counter
let count = 0;

document.getElementById("card-1-heart").addEventListener("click", function () {
  count += 1;
  document.getElementById("uni-heart").innerHTML = count;
});

document.getElementById("card-2-heart").addEventListener("click", function () {
  count += 1;
  document.getElementById("uni-heart").innerHTML = count;
});

document.getElementById("card-3-heart").addEventListener("click", function () {
  count += 1;
  document.getElementById("uni-heart").innerHTML = count;
});

document.getElementById("card-4-heart").addEventListener("click", function () {
  count += 1;
  document.getElementById("uni-heart").innerHTML = count;
});

document.getElementById("card-5-heart").addEventListener("click", function () {
  count += 1;
  document.getElementById("uni-heart").innerHTML = count;
});

document.getElementById("card-6-heart").addEventListener("click", function () {
  count += 1;
  document.getElementById("uni-heart").innerHTML = count;
});
document.getElementById("card-7-heart").addEventListener("click", function () {
  count += 1;
  document.getElementById("uni-heart").innerHTML = count;
});
document.getElementById("card-8-heart").addEventListener("click", function () {
  count += 1;
  document.getElementById("uni-heart").innerHTML = count;
});
document.getElementById("card-9-heart").addEventListener("click", function () {
  count += 1;
  document.getElementById("uni-heart").innerHTML = count;
});

//Copy & Alert

document.getElementById("copy-card-1").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText("999");
  count += 1;
  alert("Number Is copied");
  document.getElementById("uni-copy").innerHTML = count;
});

document.getElementById("copy-card-2").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText("999");
  count += 1;
  alert("Number Is copied");
  document.getElementById("uni-copy").innerHTML = count;
});

document.getElementById("copy-card-3").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText("999");
  count += 1;
  alert("Number Is copied");
  document.getElementById("uni-copy").innerHTML = count;
});

document.getElementById("copy-card-4").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText("1994-999999");
  count += 1;
  alert("Number Is copied");
  document.getElementById("uni-copy").innerHTML = count;
});

document.getElementById("copy-card-5").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText("109");
  count += 1;
  alert("Number Is copied");
  document.getElementById("uni-copy").innerHTML = count;
});

document.getElementById("copy-card-6").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText("106");
  count += 1;
  alert("Number Is copied");
  document.getElementById("uni-copy").innerHTML = count;
});

document.getElementById("copy-card-7").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText("16216");
  count += 1;
  alert("Number Is copied");
  document.getElementById("uni-copy").innerHTML = count;
});

document.getElementById("copy-card-8").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText("16445");
  count += 1;
  alert("Number Is copied");
  document.getElementById("uni-copy").innerHTML = count;
});

document.getElementById("copy-card-9").addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText("163");
  count += 1;
  alert("Number Is copied");
  document.getElementById("uni-copy").innerHTML = count;
});

//Call, Alert & History
countPoints = 100;

document.getElementById("call-card-1").addEventListener("click", function () {
  if (countPoints >= 20) {
    countPoints -= 20;
    alert("Calling National Emergency: 999");
  } else if (countPoints < 100) {
    alert("You Don't Enough Points");
  }
  document.getElementById("uni-points").innerHTML = countPoints;

  const parentContainer = document.getElementById("parent-container");

  parentContainer.innerHTML = "";
  const now = new Date().toLocaleTimeString();

  const div = document.createElement("div");
  div.innerHTML = `<div
              class="flex justify-between items-center bg-[#FAFAFA] rounded-2xl p-3 mt-4"
            >
              <div>
                <h1 class="text-[18px] font-semibold">National Emergency Number</h1>
                <p class="text-[#5C5C5C]">999</p>
              </div>
              <div>${now}</div>
            </div>`;

  parentContainer.appendChild(div);
});

document.getElementById("call-card-2").addEventListener("click", function () {
  if (countPoints >= 20) {
    countPoints -= 20;
    alert("Police Helpline Number: 999");
  } else if (countPoints < 100) {
    alert("You Don't Enough Points");
  }
  document.getElementById("uni-points").innerHTML = countPoints;
  const parentContainer = document.getElementById("parent-container");

  parentContainer.innerHTML = "";
  const now = new Date().toLocaleTimeString();

  const div = document.createElement("div");
  div.innerHTML = `<div
              class="flex justify-between items-center bg-[#FAFAFA] rounded-2xl p-3 mt-4"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Police Helpline Number</h1>
                <p class="text-[#5C5C5C]">999</p>
              </div>
              <div>${now}</div>
            </div>`;

  parentContainer.appendChild(div);
});

document.getElementById("call-card-3").addEventListener("click", function () {
  if (countPoints >= 20) {
    countPoints -= 20;
    alert("Fire Service Number: 999");
  } else if (countPoints < 100) {
    alert("You Don't Enough Points");
  }
  document.getElementById("uni-points").innerHTML = countPoints;

  const parentContainer = document.getElementById("parent-container");

  parentContainer.innerHTML = "";
  const now = new Date().toLocaleTimeString();

  const div = document.createElement("div");
  div.innerHTML = `<div
              class="flex justify-between items-center bg-[#FAFAFA] rounded-2xl p-3 mt-4"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Fire Service Number</h1>
                <p class="text-[#5C5C5C]">999</p>
              </div>
              <div>${now}</div>
            </div>`;

  parentContainer.appendChild(div);
});

document.getElementById("call-card-4").addEventListener("click", function () {
  if (countPoints >= 20) {
    countPoints -= 20;
    alert("Ambulance Service: 1994-999999");
  } else if (countPoints < 100) {
    alert("You Don't Enough Points");
  }
  document.getElementById("uni-points").innerHTML = countPoints;
  const parentContainer = document.getElementById("parent-container");

  parentContainer.innerHTML = "";
  const now = new Date().toLocaleTimeString();

  const div = document.createElement("div");
  div.innerHTML = `<div
              class="flex justify-between items-center bg-[#FAFAFA] rounded-2xl p-3 mt-4"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Ambulance Service</h1>
                <p class="text-[#5C5C5C]">1994-999999</p>
              </div>
              <div>${now}</div>
            </div>`;

  parentContainer.appendChild(div);
});

document.getElementById("call-card-5").addEventListener("click", function () {
  if (countPoints >= 20) {
    countPoints -= 20;
    alert("Women & Child Helpline: 109");
  } else if (countPoints < 100) {
    alert("You Don't Enough Points");
  }
  document.getElementById("uni-points").innerHTML = countPoints;
  const parentContainer = document.getElementById("parent-container");

  parentContainer.innerHTML = "";
  const now = new Date().toLocaleTimeString();

  const div = document.createElement("div");
  div.innerHTML = `<div
              class="flex justify-between items-center bg-[#FAFAFA] rounded-2xl p-3 mt-4"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Women & Child Helpline</h1>
                <p class="text-[#5C5C5C]">109</p>
              </div>
              <div>${now}</div>
            </div>`;

  parentContainer.appendChild(div);
});

document.getElementById("call-card-6").addEventListener("click", function () {
  if (countPoints >= 20) {
    countPoints -= 20;
    alert("Anti-Corruption Helpline: 106");
  } else if (countPoints < 100) {
    alert("You Don't Enough Points");
  }
  document.getElementById("uni-points").innerHTML = countPoints;
  const parentContainer = document.getElementById("parent-container");

  parentContainer.innerHTML = "";
  const now = new Date().toLocaleTimeString();

  const div = document.createElement("div");
  div.innerHTML = `<div
              class="flex justify-between items-center bg-[#FAFAFA] rounded-2xl p-3 mt-4"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Anti-Corruption Helpline</h1>
                <p class="text-[#5C5C5C]">106</p>
              </div>
              <div>${now}</div>
            </div>`;

  parentContainer.appendChild(div);
});

document.getElementById("call-card-7").addEventListener("click", function (e) {
  e.preventDefault;
  if (countPoints >= 20) {
    countPoints -= 20;
    alert("Electricity Helpline: 16216");
  } else if (countPoints < 100) {
    alert("You Don't Enough Points");
  }
  document.getElementById("uni-points").innerHTML = countPoints;
  const parentContainer = document.getElementById("parent-container");

  parentContainer.innerHTML = "";
  const now = new Date().toLocaleTimeString();

  const div = document.createElement("div");
  div.innerHTML = `<div
              class="flex justify-between items-center bg-[#FAFAFA] rounded-2xl p-3 mt-4"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Electricity Helpline</h1>
                <p class="text-[#5C5C5C]">16216</p>
              </div>
              <div>${now}</div>
            </div>`;

  parentContainer.appendChild(div);
});

document.getElementById("call-card-8").addEventListener("click", function (e) {
  e.preventDefault;
  if (countPoints >= 20) {
    countPoints -= 20;
    alert("Brac Helpline: 16445");
  } else if (countPoints < 100) {
    alert("You Don't Enough Points");
  }
  document.getElementById("uni-points").innerHTML = countPoints;
  const parentContainer = document.getElementById("parent-container");

  parentContainer.innerHTML = "";
  const now = new Date().toLocaleTimeString();

  const div = document.createElement("div");
  div.innerHTML = `<div
              class="flex justify-between items-center bg-[#FAFAFA] rounded-2xl p-3 mt-4"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Brac Helpline</h1>
                <p class="text-[#5C5C5C]">16445</p>
              </div>
              <div>${now}</div>
            </div>`;

  parentContainer.appendChild(div);
});

document.getElementById("call-card-9").addEventListener("click", function (e) {
  e.preventDefault;
  if (countPoints >= 20) {
    countPoints -= 20;
    alert("Bangladesh Railway Helpline: 163");
  } else if (countPoints < 100) {
    alert("You Don't Enough Points");
  }
  document.getElementById("uni-points").innerHTML = countPoints;
  const parentContainer = document.getElementById("parent-container");

  parentContainer.innerHTML = "";
  const now = new Date().toLocaleTimeString();

  const div = document.createElement("div");
  div.innerHTML = `<div
              class="flex justify-between items-center bg-[#FAFAFA] rounded-2xl p-3 mt-4"
            >
              <div>
                <h1 class="text-[18px] font-semibold">Bangladesh Railway Helpline</h1>
                <p class="text-[#5C5C5C]">163</p>
              </div>
              <div>${now}</div>
            </div>`;

  parentContainer.appendChild(div);
});

//Clear
const clearCallHistory = function () {
  const historySection = document.getElementById("parent-container");
  while (historySection.firstChild) {
    historySection.removeChild(historySection.firstChild);
  }
};

document
  .getElementById("clear-btn")
  .addEventListener("click", clearCallHistory);
