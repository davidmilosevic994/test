"use strict";

//const countriesContainer = document.querySelector(".countries");
/*
const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
*/ /*
const getData = function () {
  fetch(
    "https://api.yelp.com/v3/businesses/search?location=San Jose, CA 95127&term=restaurants"
  ).then(function (response) {
    console.log(response);
  });
};

getData();
*/
/*
const request = new XMLHttpRequest();
request.open(
  "GET",
  `https://api.yelp.com/v3/businesses/search?location=San Jose, CA
95127&term=restaurants`
);
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
});
*/

/*
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
});
*/

var myHeaders = new Headers();

myHeaders.append(
  "Authorization",
  "Bearer V4p8ZnsYpezk3FVo37xzQRTSFadSyNodcFqqulhApcK7QYw7SknW8MyBWp37Qrpre77esru0VNnAlJbGXoAojac8jT2Jqx_qNXuX8dE-fdxXpFUMQOf7BxJxvNruYnYx"
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://corsproxy.io/?https://api.yelp.com/v3/businesses/search?location=San Jose, CA 95127&term=restaurants",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
