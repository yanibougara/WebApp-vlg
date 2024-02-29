<template>
    <div>
      <img src="../assets/vlg.png" alt="logo" class="img-vlg"/>
      <div class="menu">
        <div class="search-bar">
            <!-- Barre de recherche ici -->
            <input type="text" placeholder="Recherche..." />
            <button>Rechercher</button>
        </div>
        <div class="links">
          <router-link to="/carte">Carte des associations</router-link>
            <router-link to="/associations">Associations</router-link>
            <router-link to="/evenements">Événements</router-link>
        </div>
        <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    // Composant de la page d'accueil
};
</script>

<style>
.search-bar {
    margin-bottom: 2%;
}

.search-bar input {
    padding: 1%;
    width: 20%;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 25px;
}

.search-bar button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 1%;
}

.links {
    margin-bottom: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
}

.links a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    margin-right: 10px;
    box-shadow: 0 0 5px;
}

.links a:hover {
    background-color: #0056b3;
    transition: 1s;
}


.img-vlg {
    width: 50%;
    height: 50%;
    margin: 0 auto;
    display: block;
    margin-top: 2%;
}


.menu {
margin-top: 6%;
}

.body{
cursor: url('../assets/cursor.png'), auto;
}
</style>
