 exports.getWeatherData = function(){
	return{
		locations: [
			{
				name: 'Portland',
				forcastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
				iconUrl: 'https://media.giphy.com/media/tRK6gt04z5Stq/giphy.gif',
				weather: 'Overcast',
				temp: '54.1 F (12.3 C)',
			},
			{
				name: 'Bend',
				forcastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
				iconUrl: 'https://media.giphy.com/media/Bba3HcKMW3G1i/giphy.gif',
				weather: 'Partly Cloudy',
				temp: '55.0 F (12.8 C)',
			},
			{
				name: 'Manzanita',
				forcastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
				iconUrl: '/img/rain.gif',
				weather: 'Light Rain',
				temp: '55.0 F (12.8 C)',
			},
		],
	};
}