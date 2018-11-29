$(document).ready(function() {
	let addPurposeBtn = $('.js-addPurpose');
	let textProjectName = $('.js-textProjectName');
	let userProjects = [];
	
	interfaceBuilder.buildInterface('firstScreen');

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
		textProjectName.text($('body').find('.js-newProjectName').val());
	});
});