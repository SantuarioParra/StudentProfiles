<template>
    <v-app>
        <side-bar-component></side-bar-component>

        <nav-bar-component></nav-bar-component>

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- If using vue-router -->
            <router-view></router-view>

        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>
