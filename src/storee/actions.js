import Vue from "vue";
//https://urun-islemleri-prod-8f5ec-default-rtdb.firebaseio.com/trade-result.json

export const setTradeResult = ({ state, commit }, tradeResult) => {
  commit("updateTradeResult", tradeResult);
  let tradeData = {
    purchase: state.purchase,
    sale: state.sale
  };
  Vue.http
    .put(
      "https://urun-islemleri-prod-8f5ec-default-rtdb.firebaseio.com/trade-result.json",
      tradeData
    )
    .then(response => {
      console.log(response);
    });
};

export const getTradeResult = ({ commit }) => {};
