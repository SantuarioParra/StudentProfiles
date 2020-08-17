<template>
    <v-navigation-drawer
        app
        v-model="navigationDrawer"
        dark
        temporary
    >
        <v-list
            nav
            dense
        >
            <v-list-item-group
                active-class="white--text text--accent-4"
            >
                <v-list-item :to="{name:'Home'}" exact>
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-item :to="{name:'About'}" exact>
                    <v-list-item-icon>
                        <v-icon>mdi-information</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>About</v-list-item-title>
                </v-list-item>

            </v-list-item-group>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "SideBar",
        computed:{
            ...mapGetters('app',['getNavigationDrawer']),
            navigationDrawer:{
                get(){
                    return this.$store.getters['app/getNavigationDrawer'];
                },
                set(newState){
                    this.$store.commit('app/updateNavigationDrawer',newState)
                }
            },
        }
    }
</script>

<style scoped>

</style>
