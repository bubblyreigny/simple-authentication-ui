import store from "@/store";

export const requiresAuth = () => {
    console.log('requiring Auth JS')
    console.log(store.state)
}