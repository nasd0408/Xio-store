import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Productos: [
      {
        src: require("@/assets/showcase1.jpg"),
        name: "Collares gold 1",
        price: 100,
        id: 1,
      },
      {
        src: require("@/assets/showcase2.jpg"),
        name: "Anillos gold 1",
        price: 100,
        id: 2,
      },
      {
        src: require("@/assets/showcase3.jpg"),
        name: "Gold collection 1",
        price: 100,
        id: 3,
      },
      {
        src: require("@/assets/showcase4.jpg"),
        name: "Pink collection 1",
        price: 100,
        id: 4,
      },
      {
        src: require("@/assets/Anillo1.jpg"),
        name: "Rose gold ring",
        price: 100,
        id: 5,
      },
      {
        src: require("@/assets/Anillo2.jpg"),
        name: "Crown gold ring",
        price: 100,
        id: 6,
      },
      {
        src: require("@/assets/Anillo3.jpg"),
        name: "Diamond gold ring",
        price: 100,
        id: 7,
      },
      {
        src: require("@/assets/Anillo4.jpg"),
        name: "Diamond multi ring",
        price: 100,
        id: 8,
      },
    ],
    cart:[],
    cartItemCount:0,
  },
  mutations: {
    addToCart(state,payload){
      let item = payload;
      item ={ ...item, cantidad: 1}
      if (state.cart.length > 0){
        let bool = state.cart.some(i => i.id === item.id)
        if(bool){
          let itemIndex = state.cart.findIndex(el => el.id === item.id)
          state.cart[itemIndex]["cantidad"] += 1;
        } else{
          state.cart.push(item)
        }
      }else{
        state.cart.push(item)
      }
      state.cartItemCount++
    },
  },
  actions: {
      addToCart:(context,payload) => {
        context.commit("addToCart", payload)
      
    }
  },
  modules: {
  },
  getters:{
    getById: state => id => {
      return state.Productos.find(producto=> producto.id === id)
    },

   getCart:state =>{
     return state.cart
   },
   getItems: state =>{
     return state.Productos
   }
    
  }
})
