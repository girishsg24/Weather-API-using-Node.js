var location=require('./location.js');
var weather=require('./weather.js');
var argv=require('yargs').options('location',{alias:'l',type :'string', describe: 'location to fetch weather for'}).help('help').argv;

if (typeof argv.location==='string' && argv.l.length>0)
{
	weather(argv.l).then(
		function(weather)
		{
			console.log(weather);
		},
		function(error)
		{
			console.log(error);
		});	
}
else
{
	console.log('No location specified');
	console.log('***Fetching current location***');
	setTimeout(
		function()
		{
			location().then(
				function(location)
				{
					weather(location.city).then(
						function(weather)
						{
							console.log(weather);
						},

						function(error)
						{
							console.log(error);
						}

						);
				},
				function()
				{
					console.log('Unable to Guess Location!');
				});


		},1000);

}



