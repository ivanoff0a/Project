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
		$('.goal__path').animate('width', ($('.goal__path').width() + 120) + 'px');
		$('.goal__path').animate('justify-content', 'space-around');
		$('.goal__action').append(
			''
		);
	});	
});