<template>
    <div id="app" class="dark:bg-black-900 dark:text-black-200 container">
        <Navbar />
        <div class="dark:bg-black-900">
            <router-view></router-view>
        </div>
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
