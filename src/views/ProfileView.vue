<template>
<div id="profile">
    <h1 style="font-size : 50px">Your profile</h1>

    <img src="../assets/anon.jpg">
    <br>
    <button type="button">Wallet</button>
    <button type="button">Events</button><br>
    <button type="button">Contacts</button>
    <button type="button">Settigs</button>


</div>
</template>

<style>

button{
   width: 150px;
    height: 120px;
    padding: 50px 250px;
    margin: 5px;
    background-color: #424242;
    color: white;
    border: 5px;
    cursor: pointer;
    font-size: 45px;
}
button:hover {
    background-image: linear-gradient(to right, green, lightgreen);
}

</style>