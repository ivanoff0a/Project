$(document).ready(function() {
	let addPurposeBtn = $('.js-addPurpose');
	let userProjects = [];

	$('body').on('click', '.js-addAction', function() {
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
		})
		$('.modal').remove();
		interfaceBuilder.build('goalScreen');
		$('.js-textProjectName').text(userProjects[userProjects.length - 1].projectName);
	});

	$('body').on('click', '.js-createAction', function() {
		userProjects.newUserAction.push({
			projectAction: $('body').find('.js-newProjectAction').val(), 
			projectActionDesc: $('body').find('.js-newProjectDesc').val(),
		})
		$('.modal').remove();
		console.log(userProjects);
		interfaceBuilder.build('goalScreen');
	});	
});