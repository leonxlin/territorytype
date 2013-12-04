
var Game = {
    handle_input: function() {
        Map.cells.forEach(function(cell) {
            cell.typerUpdate(Game.$typer.prop('value'));
        });
    },
    init: function() {
        this.$typer = $('#typer');
        this.$typer.on('input', function() {Game.handle_input();});

        Map.init();
    } 
};


$(document).ready(function() {
    Game.init();
});

