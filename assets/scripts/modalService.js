const modalService = {};

modalService.modals = {
	base: '	<div class="modal">\
				<div class="modal__bg"></div>\
				<div class="modal__body js-modalBody card"></div\
			</div>',	
	newGoal: 
	'<div class="card">\
		<p class="card__headline">заполни данные !</p>\
		<div class="card__form">\
			<p>введи своё имя !</p>\
			<input type="text" class="js-newUserName">\
		</div>\
		<div class="card__form">\
			<p>введи цель, к которой стремишься !</p>\
			<input type="text" class="js-newProjectName">\
		</div>\
		<div class="card__form">\
			<p>введи время, которое готов потратить на достижение цели !</p>\
			<input type="text" class="js-newProjectDuration">\
		</div>\
		<div class="card__btn js-createGoal">\
			<svg class="card__img" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
				width="47px" height="47px" viewBox="0 0 47 47" style="enable-background:new 0 0 47 47;" xml:space="preserve">\
				<g>\
					<g id="Layer_1_22_">\
						<g>\
							<path d="M6.12,38.52V5.136h26.962v28.037l5.137-4.243V2.568C38.219,1.15,37.07,0,35.652,0h-32.1C2.134,0,0.985,1.15,0.985,2.568\
							v38.519c0,1.418,1.149,2.568,2.567,2.568h22.408L22.33,38.52H6.12z"/>\
							<path d="M45.613,27.609c-0.473-0.446-1.2-0.467-1.698-0.057l-11.778,9.734l-7.849-4.709c-0.521-0.312-1.188-0.219-1.603,0.229\
							c-0.412,0.444-0.457,1.117-0.106,1.613l8.506,12.037c0.238,0.337,0.625,0.539,1.037,0.543c0.004,0,0.008,0,0.012,0\
							c0.408,0,0.793-0.193,1.035-0.525l12.6-17.173C46.149,28.78,46.084,28.055,45.613,27.609z"/>\
							<path d="M27.306,8.988H11.897c-1.418,0-2.567,1.15-2.567,2.568s1.149,2.568,2.567,2.568h15.408c1.418,0,2.566-1.15,2.566-2.568\
							S28.724,8.988,27.306,8.988z"/>\
							<path d="M27.306,16.691H11.897c-1.418,0-2.567,1.15-2.567,2.568s1.149,2.568,2.567,2.568h15.408c1.418,0,2.566-1.149,2.566-2.568\
							C29.874,17.841,28.724,16.691,27.306,16.691z"/>\
							<path d="M27.306,24.395H11.897c-1.418,0-2.567,1.15-2.567,2.568s1.149,2.568,2.567,2.568h15.408c1.418,0,2.566-1.15,2.566-2.568\
							C29.874,25.545,28.724,24.395,27.306,24.395z"/>\
						</g>\
					</g>\
				</g>\
			</svg>\
			</div>\
	</div>',
	newAction: 	'<div class="card">\
					<p class="card__headline">заполни данные !</p>\
					<div class="card__form">\
						<p>определи свое действие, для достижения цели !</p>\
						<input type="text" class="js-newProjectAction">\
					</div>\
					<div class="card__form card__form__desc">\
						<p>опиши свое действие !</p>\
						<textarea type="text" class="js-newProjectDesc"></textarea>\
					</div>\
					<div class="card__form">\
						<p>выбери срок выполнения действия !</p>\
						<input type="text" class="js-newProjectDuration">\
					</div>\
					<div class="card__btn js-createCheckpoint">\
						<svg class="card__img" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
							width="47px" height="47px" viewBox="0 0 47 47" style="enable-background:new 0 0 47 47;" xml:space="preserve">\
							<g>\
								<g id="Layer_1_22_">\
									<g>\
										<path d="M6.12,38.52V5.136h26.962v28.037l5.137-4.243V2.568C38.219,1.15,37.07,0,35.652,0h-32.1C2.134,0,0.985,1.15,0.985,2.568\
										v38.519c0,1.418,1.149,2.568,2.567,2.568h22.408L22.33,38.52H6.12z"/>\
										<path d="M45.613,27.609c-0.473-0.446-1.2-0.467-1.698-0.057l-11.778,9.734l-7.849-4.709c-0.521-0.312-1.188-0.219-1.603,0.229\
										c-0.412,0.444-0.457,1.117-0.106,1.613l8.506,12.037c0.238,0.337,0.625,0.539,1.037,0.543c0.004,0,0.008,0,0.012,0\
										c0.408,0,0.793-0.193,1.035-0.525l12.6-17.173C46.149,28.78,46.084,28.055,45.613,27.609z"/>\
										<path d="M27.306,8.988H11.897c-1.418,0-2.567,1.15-2.567,2.568s1.149,2.568,2.567,2.568h15.408c1.418,0,2.566-1.15,2.566-2.568\
										S28.724,8.988,27.306,8.988z"/>\
										<path d="M27.306,16.691H11.897c-1.418,0-2.567,1.15-2.567,2.568s1.149,2.568,2.567,2.568h15.408c1.418,0,2.566-1.149,2.566-2.568\
										C29.874,17.841,28.724,16.691,27.306,16.691z"/>\
										<path d="M27.306,24.395H11.897c-1.418,0-2.567,1.15-2.567,2.568s1.149,2.568,2.567,2.568h15.408c1.418,0,2.566-1.15,2.566-2.568\
										C29.874,25.545,28.724,24.395,27.306,24.395z"/>\
									</g>\
								</g>\
							</g>\
						</svg>\
					</div>\
				</div>'

};


modalService.openModal = function(modal) {
	$('body').append(modalService.modals.base);
	$('.modal__body').append(modalService.modals[modal]);
}

