<template>
  <link href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" rel="stylesheet">
  <div class="header-container">
    <div class="title-container">
      <text id="band-name" class="title-text"><b>{{company.companyName}}</b></text>
    </div>
    <resources-header-item/>
    <recommendations-header-item/>
    <profile-header-item/>
  </div>

  <div class="company-info">
    <div class="company-description">
      <p class="company-name"> {{ company.companyName }}</p> <br>
      <p>DSR Corporation — международная команда профессионалов, искренне увлеченных разработкой ПО. Созданная инженерами для инженеров. Мы решаем сложные задачи, работаем с новыми технологиями и разрабатываем комплексные программные решения. Нас ценят клиенты во всем мире — за проактивность, приверженность качеству и экспертизу. Обмен опытом, гибкость и разнообразие проектов в компании — гарантия быстрого профессионального роста для специалистов любого уровня.
        <br> <br>
        За 20+ лет работы мы успешно выполнили 1 000+ проектов и накопили богатый опыт в веб- и мобильной разработке, блокчейне, цифровых медиа, беспроводных технологиях, решениях для интернета вещей, компьютерном зрении и машинном обучении.
        <br> <br>
        Среди наших собственных проектов стек Zigbee® для смарт-устройств, фреймворк zHome для умного дома (включает мобильное приложение, backend, IoT-гейтвей), сообщество ZBOSS Open Initiative для разработки общей платформы Zigbee® PRO и дочерняя компания Noema, создающая решения на основе технологий машинного обучения и компьютерного зрения.
        <br> <br>
        Учебный центр DSR Corporation и ВГУ за 10 лет работы выпустил более 1 500 начинающих инженеров. Лучших мы приглашаем на собеседование. В нашей команде можно совмещать работу и учебу. У нас 8 бесплатных курсов по QA, Java, C, C++, .NET, React и программированию для встроенных систем. Также в DSR студенты могут пройти производственную практику с возможностью последующего трудоустройства в компании.</p>
    </div>
    <div class="company-recommendations-block">
      <div style="display: flex; flex-direction: row;">
        <div>
          <p class="company-name">Рекомендации:</p>
        </div>
        <div class="dropdown specialty">
          <button class="dropbtn">Специализация</button>
          <div class="dropdown-content">
            <a href="#">Backend</a>
            <a href="#">Frontend</a>
            <a href="#">Management</a>
            <a href="#">Embedded</a>
            <a href="#">System Administration</a>
            <a href="#">QA</a>
          </div>
        </div>
        <div class="dropdown specialty">
          <button class="dropbtn">Проект: AWSDevices</button>
          <div class="dropdown-content">
            <a href="#">CoolJavaProject</a>
            <a href="#">MVP</a>
            <a href="#">VPN</a>
            <a href="#">AWSDevices</a>
          </div>
        </div>
      </div>
      <div class="company-recommendations">
        <div class="resource-block" v-for="recommendedResource in company.recommendedResources">
          <div class="recommended-resource-info-block">
            <a href="https://stackoverflow.com/questions/1232793/javascript-set-img-src">
              <u>{{recommendedResource.resourceName}}</u>
            </a>
            <p class="recommended-resource-type"><i>{{ recommendedResource.resourceType }}</i></p>
            <p class="recommended-resource-type-text">
              Рекомендовано: <span @click="this.$router.push({name: 'UserProfile', params: { id: 1}})">{{ recommendedResource.userName }}</span>
            </p>
          </div>
        </div>
      </div>
      <div style="margin-top: 20px; display: flex; flex-direction: row;">
        <div>
          <h1>Пользователи и проекты</h1>
          <div class="topnav">
            <input type="text" placeholder="Поиск..">
          </div>
          <table class="users-table">
            <thead>
            <tr>
              <th>Логин</th>
              <th>Проекты</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in company.users">
              <td>{{ user.login }}</td>
              <td>{{user.projects.join(', ')}}</td>
              <td>
                <div class="menu-buttons">
                  <div>
                    <i class='far fa-edit' style='font-size:24px; margin-left: 5px; cursor: pointer;'></i>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style="margin-top: 20px; display: flex; flex-direction: row;">
        <div>
          <add-project-dialog v-model:show="showAddProjectDialog"/>
          <h1>Проекты</h1>
          <div class="topnav">
            <input type="text" placeholder="Поиск..">
          </div>
          <table class="users-table">
            <thead>
            <tr>
              <th>Название</th>
              <th>Ресурсы</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in company.projects">
              <td>{{project.projectName}}</td>
              <td><div v-for="resource in project.resources"><u>{{resource}}</u><br></div></td>
              <td>
                <div class="menu-buttons">
                  <div>
                    <i class='far fa-edit' style='font-size:24px; margin-left: 5px; cursor: pointer;'></i>
                    <i style="font-size:24px; margin-left: 10px; cursor: pointer;" class="fa">&#xf00d;</i>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="button-container">
          <button class="add-data-button" @click="showAddProjectDialog = true">Создать проект</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddProjectDialog from "@/components/dialogs/AddProjectDialog.vue";

export default {
  name: 'CompanyInfo',
  components: {AddProjectDialog},
  data() {
    return {
      company: {
        companyName: '',
        recommendedResources: [],
        users: [],
        projects: [],
      },
      showAddProjectDialog: false,
    }
  },
  created() {
    this.company = {
      companyName: 'DSR',
      users: [
        {login: 'mariia.karpova', projects: ['AWSDevices', 'VAOProject', 'EndpointsProgress', 'SVFEB']},
        {login: 'maxim.paraev', projects: ['SGF', 'Game', 'Mattermost']},
        {login: 'anton.kubarev', projects: ['GMail']},
        {login: 'sergei.pavlov', projects: ['VAOProject', 'SuperPlugin']},
      ],
      recommendedResources: [
        {id: '6', resourceName: 'AWS Services: Deep Dive', resourceType: 'Курс', userName: 'alexey.ivanov'},
        {id: '10', resourceName: 'How does AWS IoT Core work', resourceType: 'Видео', userName: 'sergei.pavlov'},
        {id: '11', resourceName: 'AWS MQQT topics and subscriptions', resourceType: 'Статья', userName: 'andrey.alexeev'}
      ],
      projects: [
        {id: '1', projectName: 'AWSDevices', resources: ['AWS IoT Core', 'AWS: Basics', 'AWS Dynamodb']},
        {id: '1', projectName: 'VAOProject', resources: ['Холостые циклы в Java', 'Топ 5 статей про Java', 'Spring']},
        {id: '1', projectName: 'SuperPlugin', resources: ['Atlassian', 'Jira Atlassian Plugins', 'Spring', 'JDBC']},
        {id: '1', projectName: 'SVFEB', resources: ['Geeks: Vue.js covered', 'tестирование dot com', 'JavaScript + Vue.js']},
      ],
    };
  },
}
</script>

<style scoped>
.button-container {
  margin-top: 123px;
  margin-left: 15px;
}

.add-data-button {
  height: 50px;
  padding: 10px;
  font-size: 20px;
  min-width: 300px;
  cursor: pointer;
}

.company-recommendations {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.company-recommendations-block {
  display: flex;
  flex-direction: column;
}

.resource-block {
  border: 1px solid black;
  background: none;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: #df7931;
  height: min-content;
  min-height: 170px;
}

.company-description {
  padding: 0 0 0 30px;
  width: 50%;
}

.company-info {
  display: flex;
  flex-direction: row;
}

.company-name {
  font-size: 60px;
}

.recommended-resource-info-block {
  font-size: xx-large;
  align-self: center;
  text-align: center;
}

.recommended-resource-type {
  margin: 0;
  font-size: x-large;
  margin-top: 15px;
}

.recommended-resource-type-text {
  margin: 0;
  font-size: x-large;
}

/* Style The Dropdown Button */
.dropbtn {
  background-color: #df7931;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  height: 40px;
  margin-top: 5px;
  padding: 0 16px 0 16px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

.specialty {
  margin-left: 25px;
  align-self: center;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #FFBF00;
}

table {
  margin: 0 auto;
  color: #333;
  background: white;
  border: 1px solid grey;
  font-size: 12pt;
  border-collapse: collapse;
}

table thead {
  cursor: pointer;
}

table thead th,
table tfoot th {
  color: #777;
  background: rgba(0,0,0,.1);
}

table caption {
  padding: .5em;
}

table th,
table td {
  padding: .5em;
  border: 1px solid lightgrey;
}

.resource-link {
  color: black !important;
}

.users-table {
  margin-left: 0;
}

/* Style the search box inside the navigation bar */
.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  height: 15px;
  margin-bottom: 5px;
}

/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
@media screen and (max-width: 600px) {
  .topnav a, .topnav input[type=text] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;
  }
}
</style>