<template>
    <v-app-bar
        app
        dense
        dark
    >
        <v-app-bar-nav-icon v-on:click.prevent="openSidebar"></v-app-bar-nav-icon>
        <v-toolbar-title>
            Student Profiles
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text small>login</v-btn>

        <v-menu offset-y rounded="b-xl">
            <template v-slot:activator="{ on, attrs }">
                <v-btn small text dark v-bind="attrs" v-on="on">Name</v-btn>
            </template>
            <v-list>
                <v-list-item v-on:click.prevent>
                    <v-list-item-title>Log out</v-list-item-title>
                    <v-list-item-icon>
                        <v-icon small color="black">mdi-logout</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
        </v-menu>

    </v-app-bar>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        name: "NavBar",
        methods:{
            ...mapMutations('app',['updateNavigationDrawer']),
            openSidebar(){
                this.$store.commit('app/updateNavigationDrawer',true)
            }
        }
    }
</script>

<style scoped>

</style>
