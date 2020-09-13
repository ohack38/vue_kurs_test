<template>
<div id="register">
    <h1>Registrera dig</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Användarnamn" /><br>
    <input type="password" name="password" v-model="input.password" placeholder="Lösenord" /><br>
    <input type="email" name="email" v-model="input.email" placeholder="Epost" /><br>
    <input type="zip" name="zip" v-model="input.zip" placeholder="Postnummer" /><br>
    <button type="button">Registrera</button>
</div>
</template>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: "",
                    email: "",
                    zip: ""
                }
            }
        }
    }
</script>