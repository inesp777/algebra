$(document).ready(function () {
	$.ajax({
		url: 'https://pokeapi.co/api/v2/pokemon-color/yellow',
		dataType: 'json',
		success: function (data) {
			const source = document.getElementById('pokemon-list').innerHTML;
			const template = Handlebars.compile(source);
			const context = { pokemon: data.pokemon_species.slice(0, 20), tableClass: 'table' };
			const html = template(context);
			document.getElementById('result').innerHTML = html;
			afterRender();
		},
	});
});



function afterRender(){
	var table=$("table td a:contains('p')");
	$("tr:even").css('background-color','cyan');
	$("th").addClass("table-dark");
	
	var location='p';
		// hide all not matching
		table.find('td[data-type!=' + location + ']').hide();
		// display all matching
		table.find('tr[data-type=' + location + ']').show();
}