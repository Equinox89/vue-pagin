const App = {
	data() {
		return {
			activeIndex: 0,
			isActive: true,
			title: 'План по изучению Vue.js',
			stepsList: [
				{
					title: 'Основы',
					text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'
				},
				{
					title: 'Компоненты',
					text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'
				},
				{
					title: 'Роутер',
					text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'
				},
				{
					title: 'Vuex',
					text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'
				},
				{
					title: 'Composition',
					text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'
				}
			]
		}
	},
	methods: {

		prev() {
			if(this.activeIndex !== 0) {
				this.activeIndex --
			}
		},

		nextOfFinish() {
			if(this.activeIndex !== this.stepsList.length - 1) {
				this.activeIndex ++
			} else {
				this.isActive = false
			}
		},
		reset() {
			this.activeIndex =  0
			this.isActive = true
		}
	},
	computed: {
		activeStep() {
			return this.stepsList[this.activeIndex]
		},
		isLastStep() {
			return this.activeIndex === this.stepsList.length - 1
		},
		prevDisabled() {
			return this.activeIndex ===  0
		}
	},
	template: `
		<div class="card center" v-cloak>
			<h1>{{ title }}</h1>
			<div class="steps-content">{{ activeStep.text }}</div>
			<ul class="steps-list">
				<li 
				class="steps-item" 
				v-for="(item, index) in stepsList"
				:class = "{active:index === activeIndex, done: index < activeIndex}"
				@click = "activeIndex = index"
				>
				<span>{{ index }}</span>
				{{ item.title }}
				
				</li>
			</ul>
			<div v-if="isActive">
				<button class="btn" :disabled = "prevDisabled" @click="prev">Назад</button>
				<button class="btn primary" @click="nextOfFinish">{{ isLastStep ? 'Закончить' : 'Вперед' }}</button>
			</div>
			<div v-else>
			  <button class="btn" @click="reset">Начать заного</button>
			</div>
		</div>
	`
};


Vue.createApp(App).mount('#app');
