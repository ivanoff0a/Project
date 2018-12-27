$(document).ready(function() {
	let addPurposeBtn = $('.js-addPurpose');
	let userProjects = [];
	let goalActionCheckedPosition = 0;
	let goalActionPosition = 0;

	$('body').on('click', '.js-addCheckpoint', function() {
		modalService.openModal('newAction');
		$('.checkpoint__container').removeClass('-isActive');
	});	
	
	interfaceBuilder.buildInterface('goalScreen');

	$('body').on('click', '.js-addPurpose', function() {
		modalService.openModal('newGoal');
	});

	$('body').on('click', '.modal__bg', function() {
		$('.modal').remove();	
	});


	$('body').on('click', '.js-createGoal', function() {
		userProjects.push({
			userName: $('body').find('.js-newUserName').val(), 
			projectName: $('body').find('.js-newProjectName').val(),
			projectDuration: $('body').find('.js-newProjectDuration').val(),
			checkpoints: []
		})
		$('.modal').remove();
		interfaceBuilder.build('goalScreen');
		$('.js-textProjectName').text(userProjects[userProjects.length - 1].projectName);
	});

	$('body').on('click', '.js-createCheckpoint', function() {
		// if (checkFormValid('checkpoint')) {
			let checkpointStatus = false;
			userProjects[0].checkpoints.push({
				projectAction: $('body').find('.js-newProjectAction').val(), 
				projectActionDesc: $('body').find('.js-newProjectDesc').val(),
				projectActionDuration: $('body').find('.js-newProjectDuration').val(),
				projectActionStatus: checkpointStatus,
				positionActionChecked: (goalActionCheckedPosition += 80),
				positionAction: (goalActionPosition += 80)
			});
			$('.modal').remove();
			console.log(userProjects[0]);
			$('.js-textProjectName').text(userProjects[userProjects.length - 1].projectName);
			createCheckpoint(userProjects[0].checkpoints[userProjects[0].checkpoints.length - 1]);

		// } else {

		// }
	});

	function createCheckpoint(checkpoint){
		$('.goal__path').css('width', ($('.goal__path').width() + 80) + 'px');
		$('.goal__path').append(
			'<div class="checkpoint__container">\
				<div class="checkpoint__info">\
					<div class="info__c info-elem">\
						<h2>чек-поинт</h1>\
						<p>' + checkpoint.projectAction + '</p>\
					</div>\
					<div class="info__desc info-elem">\
						<h2>заметки</h1>\
						<p>' + checkpoint.projectActionDesc + '</p>\
					</div>\
					<div class="info__done info-elem">\
						<h2>выполнено</h1>\
						<svg version="1.1" class="info__icon-done" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 44 44">\
							<path d="m22,0c-12.2,0-22,9.8-22,22s9.8,22 22,22 22-9.8 22-22-9.8-22-22-22zm12.7,15.1l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.6-0.1-0.7-0.3l-7.8-8.4-.2-.2c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.3 0.4,0.9 0,1.3z"/>\
						</svg>\
					</div>\
				</div>\
				<div class="checkpoint__icon-checked">\
					<svg version="1.1" class="checkpoint__action__checked__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 44 44">\
						<path d="m22,0c-12.2,0-22,9.8-22,22s9.8,22 22,22 22-9.8 22-22-9.8-22-22-22zm12.7,15.1l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.6-0.1-0.7-0.3l-7.8-8.4-.2-.2c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.3 0.4,0.9 0,1.3z"/>\
					</svg>\
				</div>\
			</div>'
		);
		let c = userProjects[0].checkpoints;
		let last = $('body').find('.checkpoint__container').length - 1; 
		$('body').find('.checkpoint__container').eq(last).css('left', c[c.length - 1].positionActionChecked + 'px');
		$('body').find('.goal__action').eq(last).css('right', c[c.length - 1].positionAction + 'px');
	};

	$('body').on('click', '.checkpoint__icon-checked', function() {
		var $parent = $(this).parent(); 
		$('.checkpoint__container').not($parent).removeClass('-isActive');
		$parent.toggleClass('-isActive');
	});
	
	$('body').on('click', '.info__icon-done', function() {
		var $icon = $(this);
		$icon.toggleClass('-isDone');
		$icon.parents('.checkpoint__container').find('.checkpoint__action__checked__img').toggleClass('-isDone');
		checkAllDone();
	})

	function checkAllDone() {
		var doneCheckpointsCount = $('.checkpoint__action__checked__img.-isDone').length;
		var allCheckpointsCount = $('.checkpoint__action__checked__img').length;
		if(doneCheckpointsCount === allCheckpointsCount && doneCheckpointsCount > 0){
			showMessage();
		}
	}

	function showMessage(){
		setTimeout(function() {
			var vars = {
				userName: userProjects[0].userName, 
				projectName: userProjects[0].projectName
			};
			console.log(vars);
			modalService.openModal('congratulationsScreen', vars );
		}, 600)		
	}	

	// function checkFormValid(type) {
	// 	if (type === 'checkpoint') {

	// 	} else {

	// 	}
	// }

});