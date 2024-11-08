<template>
  <div class="civic-initiatives-page">
    <div class="white-overlay">
      <h2 class="title">Государственные проекты</h2>

      <div class="filter-bar">
        <select class="dropdown">
          <option>Категории</option>
          <option>Экология</option>
          <option>Инфраструктура</option>
        </select>

        <select class="dropdown">
          <option>Статус</option>
          <option>На рассмотрении</option>
          <option>В процессе</option>
          <option>Завершен</option>
        </select>

        <select class="dropdown">
          <option>Регионы</option>
          <option>Бишкек</option>
          <option>Чуйская область</option>
          <option>Баткенская область</option>
          <option>Таласская область</option>
          <option>Ошская область</option>
          <option>Джалал-Абадская область</option>
          <option>Нарынская область</option>
          <option>Иссык-Кульская область</option>
        </select>

        <input type="text" placeholder="Поиск..." class="search-input" />
        <button class="search-button">Поиск</button>
      </div>

      <div class="projects-container">
        <div class="project-card">
          <img src="@/assets/proj4.jpg" alt="Project Image" class="project-image" />
          <div class="project-info">
            <h3 class="project-title">Реконструкция ГЭС</h3>
            <p class="project-author">Автор: Жогорку-Кенеш</p>
            <p class="project-duration">Сроки выполнения: Июнь 2025 - Декабрь 2025</p>
            <p class="project-budget">Бюджет: 3 000 000 KGZ</p>
            <p class="project-status">Статус: На рассмотрении</p>
          </div>
          <div class="project-votes">
            <div class="like">
              <i class="fa-solid fa-thumbs-up like-icon"></i>
              <span class="like-count">123</span>
            </div>
            <div class="dislike">
              <i class="fa-solid fa-thumbs-down dislike-icon"></i>
              <span class="dislike-count">45</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <img src="@/assets/proj5.jpg" alt="Project Image" class="project-image" />
          <div class="project-info">
            <h3 class="project-title">Цифровизация транспорта</h3>
            <p class="project-author">Автор: Мэрия г.Бишкек</p>
            <p class="project-duration">Сроки выполнения: Февраль 2024 - Июнь 2024</p>
            <p class="project-budget">Бюджет: 250 000 KGS</p>
            <p class="project-status">Статус: Завершен</p>
          </div>
          <div class="project-votes">
            <div class="like">
              <i class="fa-solid fa-thumbs-up like-icon"></i>
              <span class="like-count">179</span>
            </div>
            <div class="dislike">
              <i class="fa-solid fa-thumbs-down dislike-icon"></i>
              <span class="dislike-count">4</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <img src="@/assets/proj6.jpg" alt="Project Image" class="project-image" />
          <div class="project-info">
            <h3 class="project-title">Ремонт дорог</h3>
            <p class="project-author">Автор: Мэрия г.Бишкек</p>
            <p class="project-duration">Сроки выполнения: Июль 2024 - Декабрь 2024</p>
            <p class="project-budget">Бюджет: 300 000 KGS</p>
            <p class="project-status">Статус: В процессе</p>
          </div>
          <div class="project-votes">
            <div class="like">
              <i class="fa-solid fa-thumbs-up like-icon"></i>
              <span class="like-count">310</span>
            </div>
            <div class="dislike">
              <i class="fa-solid fa-thumbs-down dislike-icon"></i>
              <span class="dislike-count">12</span>
            </div>
          </div>
        </div>

      </div>

      <div class="pagination">
        <button class="page-button">‹</button>
        <button class="page-button">›</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GovernmentProjects',
};
</script>

<style scoped>
.civic-initiatives-page {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
}

.white-overlay {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  min-height: 86%;
}

.title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  color: #002b59;
}

.filter-bar {
  display: flex;
  gap: 15px;
  background-color: #024d98;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
}

.dropdown, .search-input, .search-button {
  padding: 8px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
}

.dropdown {
  background-color: #fff;
}

.search-input {
  flex: 1;
  background-color: #fff;
}

.search-button {
  background-color: #257cea;
  color: #fff;
  cursor: pointer;
  border: none;
}

.search-button:hover {
  background-color: #003b8b;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
}

.project-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(33% - 20px);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-info {
  padding: 15px;
}

.project-title {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #002b59;
}

.project-author,
.project-duration,
.project-budget,
.project-status {
  font-size: 1em;
  margin-bottom: 5px;
}

.project-votes {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: #007bff;
  gap: 5px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  padding: 3px 8px;
  transition: transform 0.2s ease;
}

.like, .dislike {
  display: flex;
  align-items: center;
  transition: transform 0.2s ease, color 0.2s ease;
}

.like:hover, .dislike:hover {
  transform: scale(1.1);
  color: #0056b3;
}

.like-icon, .dislike-icon {
  margin-right: 5px;
  font-size: 1.2em;
  transition: transform 0.2s ease, color 0.2s ease;
}

.like:hover .like-icon, .dislike:hover .dislike-icon {
  transform: scale(1.2);
  color: #0056b3;
}

.like-count, .dislike-count {
  font-weight: bold;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.page-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.page-button:hover {
  background-color: #0056b3;
}
</style>
