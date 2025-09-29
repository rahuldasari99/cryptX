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
        if (d.status === "success") {
          d.data.coins.forEach((coins) => {
            let coinscard = document.createElement("div");
            coinscard.classList.add("coins");
            console.log(coinscard);

            coinscard.innerHTML = `
                      <div class=" bg-black text-white d-flex flex-row coin-card" >
                      <div class=card-img-container>
                        <img src="${
                          coins.iconUrl
                        }" class="card-img" alt="No Poster"/>
                        
                        <p class="card-title">${coins.symbol}</p>
                         
                      
                        </div>
                        
                        <div class="card-info">
                        <h3 class="card-title">${coins.name}</h3>
                        
                        <p class="coin-price">Price ${Number(
                          coins.price
                        ).toLocaleString("en-IN", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}</p>
                       <p class="card-title">Rank ${coins.rank}</p>
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
            <div class="bg-black text-white d-flex flex-row coin-card">
              <div class="card-img-container">
                <img src="${coins.iconUrl}" class="card-img" alt="No Poster"/>
                <p class="card-title">${coins.symbol}</p>
              </div>
              <div class="card-info">
                <h3 class="card-title">${coins.name}</h3>
                <p class="coin-price">
                  Price ${Number(coins.price).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p class="card-title">Rank ${coins.rank}</p>
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
console.log(ucoinnameEl)
function usersearch() {
  let coinname = ucoinnameEl.value.trim();
  console.log(coinname);

  if (coinname === "") {
    alert("please enter a coin name");
  } else {
    let data = fetch(`https://api.coinranking.com/v2/coins?search=${coinname}`, {
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
              <div class="bg-black text-white d-flex flex-row coin-card">
                <div class="card-img-container">
                  <img src="${coins.iconUrl}" class="card-img" alt="No Poster"/>
                  <p class="card-title">${coins.symbol}</p>
                </div>
                <div class="card-info">
                  <h3 class="card-title">${coins.name}</h3>
                  <p class="coin-price">
                    Price ${Number(coins.price).toLocaleString("en-IN", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p class="card-title">Rank ${coins.rank}</p>
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
