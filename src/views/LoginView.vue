<template>
<div id="profile">
    <h1>Profile</h1>

    <img src="/assets/anon.jpg" width="500" height="600">

    

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