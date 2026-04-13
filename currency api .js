/*   let from_currency;
let to_currency;
let amount;
let userInput;
let ApiKey = "4508e86633ed20dde8494992";
document.querySelector(".convert").addEventListener("click",()=>{
    amount = document.querySelector(".amount-currency").value;
    console.log(amount)
    to_currency = document.querySelector(".to-currency").value;
    console.log(to_currency);
    from_currency = document.querySelector(".form-currency").value;
    let request = new XMLHttpRequest();
    request.open('GET',`https://open.er-api.com/v6/latest/${from_currency}`)
    request.send();
    request.addEventListener('load', ()=>{
       let response = request.responseText;
       let data = JSON.parse(response);
       console.log(data.rates);
       let to_currency_value = data.rates[to_currency]
       let result = amount*to_currency_value;
       document.querySelector('.output').textContent = result
    })
})   */  

 let from_currency;
let to_currency;
let amount;
let userInput;
document.querySelector(".convert").addEventListener("click", ()=>{
  amount = document.querySelector(".amount-currency").value;
  console.log(amount)
  to_currency = document.querySelector(".to-currency").value;
  console.log(to_currency)
  from_currency = document.querySelector(".form-currency").value;
  console.log(from_currency);

fetch(`https://open.er-api.com/v6/latest/${from_currency}`).then((Response) => {
    return Response.json();
}).then((data) => {
  console.log(data);
  let to_currency_value = data.rates[to_currency]
  let result = amount*to_currency_value;
  document.querySelector(".output").textContent = result
})
  
})
 
