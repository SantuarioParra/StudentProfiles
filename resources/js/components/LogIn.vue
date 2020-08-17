<template>
    <v-card>
        <v-row>
            <v-col class="d-none d-sm-flex pt-0 pb-0">
                   <div class="c-education-container">
                       <div class="overlay"></div>
                       <p class="overlay-text"> Welcome</p>
                   </div>
            </v-col>
            <v-col>
                <v-card-title
                    class="text-h4"
                >
                    User Login
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-row fluid>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.email"
                                    label="Email"
                                    prepend-icon="mdi-email"
                                    :error-messages="emailErrors"
                                    @input="$v.form.email.$touch()"
                                    @blur="$v.form.email.$touch()"
                                    clearable
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.password"
                                    label="Password"
                                    prepend-icon="mdi-form-textbox-password"
                                    :append-icon="visiblePassword?'mdi-eye':'mdi-eye-off'"
                                    :type="visiblePassword?'text':'password'"
                                    @click:append="visiblePassword = !visiblePassword"
                                    :error-messages="passwordErrors"
                                    @input="$v.form.password.$touch()"
                                    @blur="$v.form.password.$touch()"
                                    clearable
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-card-actions class="pt-0">
                    <v-btn color="blue" dark text>Sign Up</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="blue" dark>Login</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    import {required, email} from "vuelidate/lib/validators";

    export default {
        name: "LogIn",
        data() {
            return {
                visiblePassword: false,
                form: {
                    email: "",
                    password: "",
                },
            };
        },
        validations: {
            form: {
                email: {required, email},
                password: {required},
            },
        },
        computed: {
            emailErrors() {
                const errors = [];
                if (!this.$v.form.email.$dirty) return errors;
                !this.$v.form.email.required && errors.push("Email is required.");
                !this.$v.form.email.email && errors.push("Incorrect format.");
                return errors;
            },
            passwordErrors() {
                const errors = [];
                if (!this.$v.form.password.$dirty) return errors;
                !this.$v.form.password.required && errors.push("Password is required.");
                return errors;
            },
        },
    }
</script>

<style scoped>
    .c-education-container{
        background: url("../../js/assets/education.jpg");
        width: 100%;
        height: 360px;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .overlay{
        background: cornflowerblue;
        width: 100%;
        height: 360px;
        opacity: .6;
        position: absolute;
    }
    .overlay-text{
        color: aliceblue;
        font-family: 'Pacifico',cursive;
        font-size: 60px;
        z-index: 1;
    }

</style>
