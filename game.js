
var Game = {
    handle_input: function() {
        var match = {"fail": 0, "empty": 0, "partial": 0, "complete": 0};
        Map.cells.forEach(function(cell) {
            match[cell.typerUpdate(Game.$typer.val())]++;
        });
        if (match["partial"] == 0) {
            Game.$typer.val("");
        }
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

