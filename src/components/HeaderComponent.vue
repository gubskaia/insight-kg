<template>
  <header class="blue-header">
    <div class="header-content">
      <!-- Контейнер для названия и логотипа -->
      <div class="header-title-container">
        <router-link to="/" class="title-link">
          <h1 class="header-title">InSight KG</h1>
        </router-link>
        <img src="@/assets/logo.png" alt="Logo" class="small-logo" />
      </div>

      <nav class="header-nav">
        <router-link to="/initiatives">Предложения граждан</router-link>
        <router-link to="/projects">Государственные проекты</router-link>
        <router-link to="/profile">Мой профиль</router-link>
        <div class="profile-container">
          <img src="@/assets/profile.png" alt="Profile" class="profile-image" />
        </div>
      </nav>
    </div>
  </header>
</template>


<script>
export default {
  name: 'HeaderComponent'
};
</script>

<style scoped>
.blue-header {
  width: 100%;
  background-color: #024d98;
  color: #fff;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.header-title-container {
  display: flex;
  align-items: center;
}

.title-link {
  text-decoration: none;
}

.header-title {
  margin: 0;
  font-size: 1.5em;
  color: #fff; /* Белый цвет для текста заголовка */
  margin-right: 10px; /* Отступ между заголовком и логотипом */
}

.small-logo {
  width: 40px; /* Размер логотипа */
  height: 40px;
}
.header-nav {
  display: flex;
  gap: 20px;
  align-items: center;
}

.header-nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1em;
}

.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px; /* Reduced the margin to move the profile image left */
  overflow: hidden; /* Ensures the image stays within its container */
}

.profile-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover; /* Ensures the image fits nicely without distortion */
}
</style>
