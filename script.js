window.addEventListener("DOMContentLoaded", () => {
  fetchdata(); // default search term
});

let cardContainer = document.querySelector(".card-container");

let apikey = "coinranking78e1f09cd2dd8519e4fca573e1996780a1a4360af28912fa";

function fetchdata() {
  let data = fetch("https://api.coinranking.com/v2/coins", {
    headers: {
      "x-access-token": apikey,
    },
  });
  data.then((res) => {
    data
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        cardContainer.innerHTML = "";
        if (d.status === "success") {
          d.data.coins.forEach((coins) => {
            let coinscard = document.createElement("div");
            coinscard.classList.add("coins");
            console.log(coinscard);

            coinscard.innerHTML = `
             <div class="bg-white text-black coin-card" onclick="getCoinDetails('${coins.uuid}')">
                <div class="card-img-container">
                  <img src="${coins.iconUrl}" class="card-img" alt="No Poster"/>
                 
                </div>
                <div class="card-info">
                <p class="coin-symbol">${coins.symbol}</p>
                 <p class="coin-price">
                 Price ${Number(coins.price).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                 </p> 
                 
                </div>

              
                  
                 
                 
                </div>
               
                    `;

            cardContainer.appendChild(coinscard);
          });
        } else {
          cardContainer.innerHTML = `<p>No movies found</p>`;
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  });
}




function fetchtrendingcoins() {
  fetch("https://api.coinranking.com/v2/coins/trending", {
    headers: {
      "x-access-token": apikey,
    },
  })
    .then((res) => res.json())
    .then((d) => {
      console.log(d);
      cardContainer.innerHTML = "";

      if (d.status === "success") {
        d.data.coins.forEach((coins) => {
          let coinscard = document.createElement("div");
          coinscard.classList.add("coins");
          console.log(coinscard);
           


         coinscard.innerHTML = `
             <div class="bg-black text-white coin-card" onclick="getCoinDetails('${coins.uuid}')">
                <div class="card-img-container">
                  <img src="${coins.iconUrl}" class="card-img" alt="No Poster"/>
                 
                </div>
                <div class="card-info">
                <p class="coin-symbol">${coins.symbol}</p>
                 <p class="coin-price">
                 Price ${Number(coins.price).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                 </p> 
                 
                </div>

              
                  
                 
                 
                </div>
               
                    `;
          cardContainer.appendChild(coinscard);
        });
      } else {
        cardContainer.innerHTML = `<p>No coins found</p>`;
      }
    })
    .catch((err) => console.error("Error fetching data:", err));
}
let ucoinnameEl=document.getElementById("ucoinname")
let ucoinnameEl2=document.getElementById("ucoinname2")
console.log(ucoinnameEl)




function usersearch() {
  let coinname = ucoinnameEl.value.trim();
  console.log(coinname);

  if (coinname === "") {
    alert("please enter a coin name");
  } else {
    let data = fetch(`https://api.coinranking.com/v2/coins/?search=${coinname}`, {
      headers: {
        "x-access-token": apikey,
      },
    });

    data
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        cardContainer.innerHTML = "";

        if (d.status === "success") {
          d.data.coins.forEach((coins) => {
            let coinscard = document.createElement("div");
            coinscard.classList.add("coins");
            console.log(coinscard);

            coinscard.innerHTML = `
             <div class="bg-black text-white coin-card" onclick="getCoinDetails('${coins.uuid}')">
                <div class="card-img-container">
                  <img src="${coins.iconUrl}" class="card-img" alt="No Poster"/>
                 
                </div>
                <div class="card-info">
                <p class="coin-symbol">${coins.symbol}</p>
                 <p class="coin-price">
                 Price ${Number(coins.price).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                 </p> 
                 
                </div>

              
                  
                 
                 
                </div>
               
                    `;
            cardContainer.appendChild(coinscard);
          });
        } else {
          cardContainer.innerHTML = `<p>No coins found</p>`;
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }
}
function usersearch2() {
  let coinname2 = ucoinnameEl2.value.trim();
  console.log(coinname2);

  if (coinname2 === "") {
    alert("please enter a coin name");
  } else {
    let data = fetch(`https://api.coinranking.com/v2/coins/?search=${coinname2}`, {
      headers: {
        "x-access-token": apikey,
      },
    });

    data
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        cardContainer.innerHTML = "";

        if (d.status === "success") {
          d.data.coins.forEach((coins) => {
            let coinscard = document.createElement("div");
            coinscard.classList.add("coins");
            console.log(coinscard);

            coinscard.innerHTML = `
             <div class="bg-black text-white coin-card" onclick="getCoinDetails('${coins.uuid}')">
                <div class="card-img-container">
                  <img src="${coins.iconUrl}" class="card-img" alt="No Poster"/>
                 
                </div>
                <div class="card-info">
                <p class="coin-symbol">${coins.symbol}</p>
                 <p class="coin-price">
                 Price ${Number(coins.price).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                 </p> 
                 
                </div>

              
                  
                 
                 
                </div>
               
                    `;
            cardContainer.appendChild(coinscard);
          });
        } else {
          cardContainer.innerHTML = `<p>No coins found</p>`;
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }
}
// function getCoinDetails(id) {
//   fetch(`https://api.coinranking.com/v2/coin/${id}`, {
//     headers: {
//       "x-access-token": apikey,
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       let coin = data.data.coin;

//       // Set modal title
//       document.getElementById("coinTitle").innerText = coin.name;

//       // Fill modal body
//       document.getElementById("coinBody").innerHTML = `
//         <img src="${coin.iconUrl}" class="img-fluid mb-3 mx-auto d-block" style="max-width:100px;">
//         <p><b>Symbol:</b> ${coin.symbol}</p>
//         <p><b>Rank:</b> ${coin.rank}</p>
//          <p class="coin-price">
//                  Price ${Number(coin.price).toLocaleString("en-IN", {
//                     style: "currency",
//                     currency: "USD",
//                     minimumFractionDigits: 2,
//                     maximumFractionDigits: 2,
//                   })}
//                  </p> </p>
//         <p><b>Market Cap:</b> ${Number(coin.marketCap).toLocaleString("en-IN", {
//                     style: "currency",
//                     currency: "USD",
//                     minimumFractionDigits: 2,
//                     maximumFractionDigits: 2,
//                   })}</p>
//         <p><b>24h Volume:</b> ₹${Number(coin["24hVolume"]).toLocaleString("en-IN", {
//                     style: "currency",
//                     currency: "USD",
//                     minimumFractionDigits: 2,
//                     maximumFractionDigits: 2,
//                   })}</p>
//         <p><b>Description:</b> ${coin.description || "No description available."}</p>
//         <p><b>Website:</b> <a href="${coin.websiteUrl}" target="_blank">${coin.websiteUrl}</a></p>
//       `;

//       // Show Bootstrap modal
//       new bootstrap.Modal(document.getElementById("coinModal")).show();
//     })
//     .catch((err) => console.error("Error fetching coin details:", err));
// }


function getCoinDetails(id) {
  fetch(`https://api.coinranking.com/v2/coin/${id}`, {
    headers: { "x-access-token": apikey },
  })
    .then((res) => res.json())
    .then((data) => {
      let coin = data.data.coin;

      // Set modal title
      document.getElementById("coinTitle").innerText = coin.name;

      // Fill modal body (basic details)
      document.getElementById("coinBody").innerHTML = `
        <img src="${coin.iconUrl}" class="img-fluid mb-3 mx-auto d-block" style="max-width:100px;">
        <p><b>Symbol:</b> ${coin.symbol}</p>
        <p><b>Rank:</b> ${coin.rank}</p>
        <p class="coin-price">
          Price ${Number(coin.price).toLocaleString("en-IN", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <p><b>Market Cap:</b> ${Number(coin.marketCap).toLocaleString("en-IN", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}</p>
        <p><b>24h Volume:</b> ${Number(coin["24hVolume"]).toLocaleString("en-IN", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}</p>
        <p><b>Description:</b> ${coin.description || "No description available."}</p>
        <p><b>Website:</b> <a href="${coin.websiteUrl}" target="_blank">${coin.websiteUrl}</a></p>
        <hr>
        <h5>Price History (7 days)</h5>
        <canvas id="priceChart" height="200"></canvas>
      `;

      // Show Bootstrap modal
      new bootstrap.Modal(document.getElementById("coinModal")).show();

      // Fetch price history after filling modal
      fetch(`https://api.coinranking.com/v2/coin/${id}/price-history?timePeriod=7d`, {
        headers: { "x-access-token": apikey },
      })
        .then((res) => res.json())
        .then((historyData) => {
          let history = historyData.data.history.reverse(); // oldest → newest
          let labels = history.map((h) =>
            new Date(h.timestamp * 1000).toLocaleDateString()
          );
          let prices = history.map((h) => parseFloat(h.price));

          // Draw chart using Chart.js
          new Chart(document.getElementById("priceChart"), {
            type: "line",
            data: {
              labels: labels,
              datasets: [
                {
                  label: `${coin.symbol} Price (USD)`,
                  data: prices,
                  borderColor: "lime",
                  backgroundColor: "rgba(0,255,0,0.2)",
                  fill: true,
                  tension: 0.3,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                x: { ticks: { maxTicksLimit: 6 } },
                y: {
                  ticks: {
                    callback: function (value) {
                      return "$" + value.toLocaleString();
                    },
                  },
                },
              },
            },
          });
        })
        .catch((err) => console.error("Error fetching price history:", err));
    })
    .catch((err) => console.error("Error fetching coin details:", err));
}



function coinpricehistory(){
  let data = fetch("https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price-history", {
    headers: {
      "x-access-token": apikey,
    },
  });
  data.then((res) => {
    data
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
      })
    })
  }
