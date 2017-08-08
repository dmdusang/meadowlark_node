module.exports = function(grunt){

	//load plugins
	[
		'grunt-mocha-selenium',
		'grunt-cafe-mocha',
		'grunt-contrib-jshint',

	].forEach(function(task){
		grunt.loadNpmTasks(task);
	});

	// configure plugins
	grunt.initConfig({

			mochaSelenium: {
				    options: {
				      reporter: 'dmdusang',
				      usePromises: true,
     				  timeout: 30e3,
				  	},
				    chrome: {
				      src: ['qa/tests-bdd.js'],
				      options: {
				        browserName: 'chrome'
				      }
    			}
			},

			cafemocha: {
				tdd: {src: 'qa/tests-tdd-*.js', options:{ ui: 'tdd'}},
			},
			jshint: {
				app: ['meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js'],
				qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js']
			},

	});
	//register tasks
	grunt.registerTask('default', ['cafemocha','jshint',]);
	  grunt.registerTask('test', ['mochaSelenium']);
};