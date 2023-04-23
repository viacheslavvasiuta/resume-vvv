// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
	name: {
		firstname: 'Ivan',
		lastname: 'Ivanov',
	},
	position: 'Junior Fullstack JS DeveLoper',
	salary:'500$ в місяць',
	address: 'Ukraine, Kyiv',
}

var  footer = {
	social: {
		email: {
			text: 'Ivanov@mail.com',
			href: 'mailto:Ivanov@mail.com',
		},
		phone: {
			text: '+380670000123',
			href: 'tel:+380670000123',
		},
		linkedin: {
			href: 'https://www.linkedin.com/in/dmytro-test" target="_blank',
			text: 'LinkedIn',
		},
	},
}

// ================================================================

 // router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer

  res.render('summary', {
    // ↙ сюди вводимо JSON дані

	page: {
		title: 'Resume | Summary',
	},

	header,

	main: {
		summary: {
			title: 'Summary',
			text: 'Oppen-minded for new technologies,with 1 years of experience in development. Whenever I start to work on a wnew project i jearn tne domain and try to understand tne idea of the project. Good team player, everycolleague is a friend to me.',
		},

		experience:{
			title: 'other experience',
			text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics.',
		},
	},

		footer,
    })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('skills', {
		// ↙ сюди вводимо JSON дані 
	
		page: {
			title: 'Resume | Skills',
		},
	
		header,
	
		main: {
			skills: [
				{
					name: 'HTML',
					point: 10,
					istop: true,
				},
				{
					name: 'Handlebars',
					point: 8,
					istop: true,
				},
				{
					name: 'VS Code & NPM',
					point: 9,
					istop: false,
				},
				{
					name: 'Git & Terminal',
					point: 7,
				},
				{
					name: 'Git & Terminal',
					point: 7,
				},
				{
					name: 'PHP',
					point: null,
				}
			],
		},
	
		footer,
	})
})

// ===============================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('education', {
		// ↙ сюди вводимо JSON дані
	
		page: {
			title: 'Resume | Education',
		},
	
		header,
	
			main: {
				educations: ['Дет сад', 'Тех ліцей', 'НПУ'],
				certificates: {
					name: 'ВОЗ',
					id: '3',
				},
			},
		footer,
		})
  	})

	// ===============================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('work', {
		// ↙ сюди вводимо JSON дані

		layout: 'big',
	
		page: {
			title: 'Resume | Work',
		},
	
		header,
	
			main: {
				works:[
				{
					position: 'Junior fullstack Developer',
					company: {
						name: 'IT Brains',
						url: 'https://it-brains.com.ua/',
					},
					duration: {
						from: '02.20.2023',
						to: 'null'
					},
					projectAmount: 3,

					projects: [
						{
							name: 'Resume',
							url: 'https://resume.com.ua/',
							about: 
								'Airbod competensio, applikation usser',
							stacks: [
								{
									name: 'React.js',
								},
								{
									name: 'HTML / CSS',
								},
								{
									name: 'Nodejs',
								},
							],
							awards: [
								{
									name: "Beccend full starr",
								},
								{
									name: "Beccend full starr histuru",
								},
							],
							stackAmount: 3,
							awardAmount: 2,
						},
					],
				},
			],
		},

		footer,
	})
})

// Підключаємо роутер до бек-енду
module.exports = router
