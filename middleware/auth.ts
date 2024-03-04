export default defineNuxtRouteMiddleware((to, from) => {
    // console.log(to,from)
    const isLoggedIn = true;
    if(!isLoggedIn){
       return navigateTo({path:"/login"})
    }
})
