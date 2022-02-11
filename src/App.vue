<template>
    <div id="app" class="bg-black-900 text-white">
        <Navbar />
        <router-view></router-view>
        <Menu />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Menu from './components/Menu.vue'

export default {
    name: 'App',
    components: {
        Navbar,
        Menu
    }
}
</script>

<style></style>
