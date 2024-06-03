<template>
  <div class="header-container">
    <div class="title-container">
      <text id="band-name" class="title-text">{{ company.companyName }}</text>
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
      <p class="company-name">Рекомендации</p>
      <div class="company-recommendations">
        <div class="resource-block" v-for="recommendedResource in company.recommendedResources">
          <div class="recommended-resource-info-block">
            <a href="https://stackoverflow.com/questions/1232793/javascript-set-img-src">
              <u>{{ recommendedResource.resourceName }}</u>
            </a>
            <p class="recommended-resource-type"><i>{{ recommendedResource.resourceType }}</i></p>
            <p class="recommended-resource-type">
              Рекоменовано: <span @click="this.$router.push({name: 'UserProfile', params: { id: 1}})">{{ recommendedResource.userName }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyInfo',
  data() {
    return {
      company: {
        companyName: '',
        recommendedResources: [],
      }
    }
  },
  created() {
    this.company = {
      companyName: 'DSR',
      recommendedResources: [
        {
          id: '6',
          resourceName: 'Курс по Java для продвинутых',
          resourceType: 'Курс',
          userName: 'alexey.ivanov',
        },
        {
          id: '10',
          resourceName: 'Spring for production development',
          resourceType: 'Видео',
          userName: 'sergei.pavlov',
        },
        {
          id: '11',
          resourceName: 'Другие возможности Java',
          resourceType: 'Статья',
          userName: 'andrey.alexeev',
        }
      ],
    };
  },
}
</script>

<style scoped>
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
  font-size: smaller;
}
</style>