var request=require('request');

module.exports=function(location)
{
	var encodedLocation=encodeURIComponent(location);
	var url='http://api.openweathermap.org/data/2.5/weather?q='+encodedLocation+'&units=metric&appid=b76f7b18fb9374bc5f666e51383ab756';
	return new Promise(
						function(resolve,reject)
						{
							request({url:url,json:true},
										function(error,response,body)
										{
											if (error)
												reject('unable to fetch weather');
											else
												resolve("It's "+body.main.temp+' in '+body.name+'!');
										}
									);
						}	
	);
};

