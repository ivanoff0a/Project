let interfaceBuilder = {};

interfaceBuilder.parent = $('.js-mainParent');
interfaceBuilder.interfaces = {
	firstScreen:'<h1>goal !</h1>\
				<div class="panel">\
					<div class="panel-item js-addPurpose">\
						<svg class="panel-item__img" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
							 viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">\
						<g>\
							<g>\
								<path d="M441.52,134.615l66.08-66c4.294-4.289,5.581-10.742,3.26-16.349c-2.321-5.608-7.792-9.265-13.86-9.265h-30v-28\
									c0-6.111-3.707-11.611-9.371-13.904c-5.667-2.293-12.154-0.921-16.405,3.469l-64,66.09c-2.709,2.798-4.224,6.54-4.224,10.435\
									v34.745c-40.84-35.349-92.648-54.641-147.598-54.641C100.277,61.196,0,161.434,0,286.599\
									c0,125.125,100.237,225.402,225.402,225.402c125.125,0,225.403-100.237,225.403-225.402c0-54.95-19.292-106.757-54.641-147.598\
									h34.755C434.895,139.001,438.708,137.424,441.52,134.615z M363.789,424.985c-36.768,36.767-85.915,57.016-138.387,57.016\
									C116.858,482.001,30,395.182,30,286.599c0-110.008,88.63-195.616,195.402-195.616c45.431,0,90.863,15.677,127.382,47.03\
									l-21.296,21.296c-29.595-24.688-66.727-38.138-106.086-38.138c-91.936,0-165.427,73.462-165.427,165.427\
									c0,91.933,73.459,165.427,165.427,165.427c91.936,0,165.427-73.462,165.427-165.427c0-39.354-13.446-76.482-38.129-106.075\
									l21.297-21.297C439.927,236.032,436.524,352.248,363.789,424.985z M225.902,241.114c-24.891,0-44.983,20.089-44.983,44.984\
									c0,24.892,20.089,44.983,44.983,44.983c24.892,0,44.984-20.088,44.984-44.983c0-6.828-1.51-13.42-4.365-19.397l21.947-21.947\
									c8.061,12.222,12.394,26.651,12.394,41.845c0,69.088-83.171,99.352-128.993,53.533c-45.713-45.713-15.746-128.993,53.533-128.993\
									c15.199,0,29.633,4.335,41.856,12.4l-21.946,21.946C239.331,242.626,232.735,241.114,225.902,241.114z M240.887,286.099\
									c0,8.311-6.672,14.983-14.984,14.983c-4.017,0-7.784-1.554-10.606-4.377c-2.823-2.822-4.377-6.589-4.377-10.606\
									c0-8.31,6.671-14.984,14.983-14.984C234.213,271.115,240.887,277.786,240.887,286.099z M288.787,202.011\
									c-18.093-13.543-40.116-20.872-63.385-20.872c-58.73,0-105.459,46.699-105.459,105.459c0,58.73,46.7,105.459,105.459,105.459\
									c58.73,0,105.459-46.699,105.459-105.459c0-23.264-7.326-45.283-20.863-63.374l21.381-21.381\
									c19.081,23.856,29.45,53.433,29.45,84.754c0,75.352-60.041,135.427-135.427,135.427c-75.356,0-135.427-60.044-135.427-135.427\
									c0-75.37,60.06-135.427,135.427-135.427c31.326,0,60.907,10.372,84.765,29.458L288.787,202.011z M403,109.001V87.164l34-35.11\
									v5.947c0,8.284,6.716,15,15,15h8.756l-36.044,36H403z"/>\
							</g>\
						</g>\
						</svg>	\
						<p class="panel-item__p">новая цель !</p>\
					</div>',
	goalScreen:
		'<div class="goal-container">\
			<div class="goal__header">\
				<img src="assets/img/route.svg">\
				<h1 class="js-textProjectName"></h1>\
			</div>\
			<div class="path-container">\
				<div class="goal__body">\
					<div class="goal__elem goal__start">\
						<div class="goal__info">\
							<div class="goal__attr">\
								<p class="goal__param">время начала:</p>\
								<p class="goal__value">29.11.2018</p>\
							</div>\
							<img src="assets/img/home-button.svg">\
						</div>\
					</div>\
					<div class="goal__elem goal__path">\
						<div class="goal__action">\
							<svg class="goal__action__img js-addCheckpoint" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" \
							y="0px"	 width="510px" height="510px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">\
							<g>\
								<g id="add-circle">\
									<path d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M382.5,280.5h-102v102h-51v-102\
									h-102v-51h102v-102h51v102h102V280.5z"\
								</g>\
							</g>\
							</svg>\
						</div>\
					</div>\
					<div class="goal__elem goal__end">\
						<div class="goal__info">\
							<div class="goal__attr">\
								<p class="goal__param">время конца:</p>\
								<p class="goal__value">29.11.2019</p>\
							</div>\
							<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDk2IDQ5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk2IDQ5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTQyOCwyNEgxMDBWOGMwLTQuNDE4LTMuNTgyLTgtOC04SDY4Yy00LjQxOCwwLTgsMy41ODItOCw4djQ4MGMwLDQuNDE4LDMuNTgyLDgsOCw4aDI0YzQuNDE4LDAsOC0zLjU4Miw4LThWMjk2aDMyOA0KCQkJCWM0LjQxOCwwLDgtMy41ODIsOC04VjMyQzQzNiwyNy41ODIsNDMyLjQxOCwyNCw0MjgsMjR6IE04NCw0ODBoLThWMTZoOFY0ODB6IE00MjAsMTIwaC04MHY4MGg4MHY4MGgtODB2LTgwaC04MHY4MGgtODB2LTgwaC04MA0KCQkJCXYtODBoODBWNDBoODB2ODBoODBWNDBoODBWMTIweiIvPg0KCQkJPHJlY3QgeD0iMTgwIiB5PSIxMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=">\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>'	
}

interfaceBuilder.buildInterface = function() {
	interfaceBuilder.build('firstScreen');
}

interfaceBuilder.build = function(interface) {
	interfaceBuilder.parent.html(interfaceBuilder.interfaces[interface]);
};

