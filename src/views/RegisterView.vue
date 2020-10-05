<template>
<div id="register">
    <h1>Registrera dig</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Användarnamn" /><br>
    <input type="password" name="password" v-model="input.password" placeholder="Lösenord" /><br>
    <input type="email" name="email" v-model="input.email" placeholder="Epost" /><br>
    <input type="number" name="zip" v-model="input.zip" placeholder="Postnummer" /><br>
    <button @click="register" type="button">Registrera</button>
</div>
</template>
<script>
let users
let usernames

    export default {
        name: 'register',
        data() {
            return {
                input: {
                    username: "",
                    password: "",
                    email: "",
                    zip: ""
                },
                registered:[]
                
                
            }
        },
        methods:{
            register(){
                users = JSON.parse(localStorage.getItem('users'))
                usernames = users.map(user => user.username)
                if(!usernames.includes(this.input.username)){
                    this.registered = users
                    this.registered.push(this.input)
                    localStorage.setItem('users', JSON.stringify(this.registered))
                    alert(this.input.username + ' registered')
                }else{
                    alert('Username already exists')
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
    background-color: #424242;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background-image: linear-gradient(to right, green, lightgreen);
}

</style>