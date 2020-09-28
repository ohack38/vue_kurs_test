<template>
<div id="register">
    <h1>Logga in</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Användarnamn" /><br>
    <input type="password" name="password" v-model="input.password" placeholder="Lösenord" /><br>
    <input type="email" name="email" v-model="input.email" placeholder="Epost" /><br>
    <button type="button">Logga in</button>
</div>
</template>
<script>
    export default {
        name: 'register',
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
<style scoped>
input[type=text]{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid green;
    border-radius: 4px;
    box-sizing: border-box;
}
input[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid green;
    box-sizing: border-box;
}

input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid green;
    border-radius: 4px;
    box-sizing: border-box;
}
input[type=number] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid green;
    border-radius: 4px;
    box-sizing: border-box;
}
button{
    width: inherit;
    height: inherit;
    padding: 14px, 28px;
    background-color: #424242;
    color: white;
    border: 5px;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background-image: linear-gradient(to right, green, lightgreen);
}

</style>