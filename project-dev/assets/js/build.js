// build2.js 

({
    appDir: "../../",
    baseUrl: "assets/js",
    mainConfigFile: 'main.js',
    paths: {
		jquery: 'libs/jquery.2.1.3',
		jquerymob: 'libs/jquery.mobile.custom.min',
		mustache: 'libs/mustache',
		text: 'libs/text.2.0.13',
		json: 'libs/json.0.4.0',
		lrouter: 'libs/lrouter',
		lroutercontroller: 'libs/lroutecontroller',
	},
    dir: "../../../PATH_TO_NEW_PROD",
    modules: [
        {
            name: "main"
        }
    ]

})

