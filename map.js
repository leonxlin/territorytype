
var Map = {
    settings: {
        SIZE: 10
    },
    init: function() {
        this.cells = new Array(this.settings.SIZE);
        for (var r=0; r<this.settings.SIZE; r++) {
            $tr = $('<tr/>');
            this.cells[r] = new Array(this.settings.SIZE);
            for (var c=0; c<this.settings.SIZE; c++) {
                this.cells[r][c] = $('<td>hello</td>');
                $tr.append(this.cells[r][c]);
            }
            $('#map').append($tr);
        }
    }
};
