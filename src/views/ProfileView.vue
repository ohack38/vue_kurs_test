<template>
<div id="profile">
    <h1>Profile</h1>

    <img src="../assets/anon.jpg">
    <br>
    <button type="button">My wallet</button>
    <button type="button">My Events</button>
    <button type="button">Contacts</button>
    <button type="button">Settigs</button>


</div>
</template>

<style>

button{
    width: inherit;
    height: inherit;
    padding: 20px 250px;
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