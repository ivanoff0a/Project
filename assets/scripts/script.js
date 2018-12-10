$(document).ready(function() {
	let addPurposeBtn = $('.js-addPurpose');
	let userProjects = [
	];

	$('body').on('click', '.js-addCheckpoint', function() {
		modalService.openModal('newAction');
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
		userProjects[0].checkpoints.push({
			projectAction: $('body').find('.js-newProjectAction').val(), 
			projectActionDesc: $('body').find('.js-newProjectDesc').val(),
			projectActionDuration: $('body').find('.js-newProjectDuration').val()
		})
		$('.modal').remove();
		console.log(userProjects[0]);
		interfaceBuilder.build('goalScreen');
		$('.js-textProjectName').text(userProjects[userProjects.length - 1].projectName);
		$('.goal__path').css('width', ($('.goal__path').width() + 120) + 'px');
		$('.goal__path').css('justify-content', 'space-around');
		$('.goal__path').append(
			'<div class="goal__action__checked">\
				<svg version="1.1" class="goal__action__checked__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 44 44">\
					<path d="m22,0c-12.2,0-22,9.8-22,22s9.8,22 22,22 22-9.8 22-22-9.8-22-22-22zm12.7,15.1l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.6-0.1-0.7-0.3l-7.8-8.4-.2-.2c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.3 0.4,0.9 0,1.3z"/>\
				</svg>\
			</div>'
		);
		$('body').find('.goal__action__checked').css('right', '+=70');
		$('body').find('.goal__action').css('left', '+=70');
	});
});