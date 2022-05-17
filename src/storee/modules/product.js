import Vue from "vue";

const state = {
  products: []
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {}
};

const mutations = {
  updateProductList(state) {
    state.products.push(state);
  }
};

const actions = {
  initApp({ commit }) {},

  //Vue Resource İşlemleri
  //Firebase Bağlantısı yapıp, product güncellemesi yapacak
  //https://urun-islemleri-prod-8f5ec-default-rtdb.firebaseio.com/products.json
  saveProduct({ dispatch, commit, state }, product) {
    Vue.http
      .post(
        "https://urun-islemleri-prod-8f5ec-default-rtdb.firebaseio.com/products.json",
        product
      )
      .then(response => {
        //Ürün Listesinin güncellenmesi
        product.key = response.body.name;
        commit("updateProductList", product);
        //Alış, Satış, Bakiye Bilgilerinin güncellenmesi...
        let tradeResult = {
          purchase: product.price,
          sale: 0,
          count: product.count
        };
        dispatch("setTradeResult", tradeResult);
      });
  },
  sellProduct({ commit }, payload) {}
};

export default {
  state,
  getters,
  mutations,
  actions
};
