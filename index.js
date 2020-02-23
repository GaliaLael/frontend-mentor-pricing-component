const changePlan = () => {
  let checkbox = document.getElementById("plan");
  if (checkbox.checked) {
    document.getElementById("basic-price").innerText = "$199.99";
    document.getElementById("professional-price").innerText = "$249.99";
    document.getElementById("master-price").innerText = "$399.99";
  } else {
    document.getElementById("basic-price").innerText = "$19.99";
    document.getElementById("professional-price").innerText = "$24.99";
    document.getElementById("master-price").innerText = "$39.99";
  }
}
