var admin = require('./views/partials/admin.handlebars');

$('#submit').on('click',function(event){
    var search = $(this).data('applicants');
    for (var i = 0; i < users.length; i ++){
        if (users.skills == true){
        return ('<div>' + '<ul>' + {{#each users}} + '</ul>' + '</div>')
        }
    }
};