<template>
  <div class="main-page">
    <HeaderComponent title="Welcome to Civic Initiatives Platform" />

    <div class="content-container">
      <!-- Лого-секция -->
      <div class="logo-circle">
        <img src="../assets/logo.png" alt="Logo" class="logo" />
      </div>

      <!-- Заголовок -->
      <div class="title-section">
        <h1>InSight KG</h1>
      </div>

      <!-- Описание -->
      <div class="text-section">
        <p>
          Современный инструмент для взаимодействия граждан и государственных органов в целях улучшения жизни общества и
          развития инфраструктуры. Мы объединяем усилия активных жителей и государственных служб для решения актуальных вопросов, поиска решений и реализации инициатив.
        </p>
      </div>

      <!-- Кнопки -->
      <div class="button-section">
        <button class="register-btn">Зарегистрироваться</button>
        <button class="login-btn">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'MainPage',
  components: {
    HeaderComponent,
  },
};
</script>

<style scoped>
.main-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.content-container {
  width: 90%;
  max-width: 800px; /* Увеличиваем максимальную ширину контейнера */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  text-align: center;
  color: #fff;
  z-index: 2;
  margin-top: -30px;
}

.logo-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background-color: #024d98;
  border-radius: 50%;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.logo {
  width: 80px;
  height: 80px;
}

.title-section {
  margin-bottom: 20px;
}

.title-section h1 {
  font-size: 3.5em; /* Увеличиваем размер шрифта заголовка */
  color: #024d98;
  font-weight: 900; /* Увеличиваем жирность */
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
  margin: 0;
  letter-spacing: 2px; /* Увеличиваем расстояние между буквами */

}

.text-section {
  width: 120%;
  background-color: rgba(255, 255, 255, 0.9); /* Полупрозрачный белый фон */
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.text-section p {
  font-size: 1.3em;
  line-height: 1.6;
  color: #333;
  margin: 0;
}

.button-section {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  width: 100%;
}

.register-btn, .login-btn {
  flex: 1;
  padding: 12px 0;
  font-size: 1em;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.register-btn {
  background-color: rgba(255, 255, 255, 0.8);
  color: #024d98;
}

.login-btn {
  background-color: rgba(255, 255, 255, 0.8);
  color: #024d98;
}

.register-btn:hover, .login-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}
</style>
