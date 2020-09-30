<template>
<div id="profile">
    <h1 style="font-size : 50px">Your profile</h1>

    <img src="../assets/profile.png" height="300px">
    <br>
    <button type="button">Wallet</button><br>
    <button type="button">Contacts</button><br>
    <button type="button">Events</button><br>
    <button type="button">Settigs</button><br>
    <button type="button">Logout</button><br>
    <h2 style="text-decoration: underline">Privacy Policy</h2>


</div>
</template>

<style scoped>

button{
   width: 100px;
    height: 120px;
    padding: 50px 250px;
    margin: 5px;
    background-color: #424242;
    color: white;
    border: 5px;
    cursor: pointer;
    font-size: 40px;
}
button:hover {
    background-image: linear-gradient(to right, green, lightgreen);
}

</style>
