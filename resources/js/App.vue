<template>
    <v-app>
        <side-bar-component></side-bar-component>

        <nav-bar-component></nav-bar-component>

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>

                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
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
