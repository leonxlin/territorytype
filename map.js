
var Map = {
    settings: {
        SIZE: 10
    },
    init: function() {
        this.$map = $('#map');

        // create html table
        this.cells = new Array(this.settings.SIZE*this.settings.SIZE);
            // keep this.cells 1D for easy looping elsewhere
        for (var r=0; r<this.settings.SIZE; r++) {
            var $tr = $('<tr/>');
            for (var c=0; c<this.settings.SIZE; c++) {
                var $td = $('<td/>');
                $tr.append($td);
                this.cells[this._cellIndex(r, c)] = new Cell($td, r, c);
            }
            this.$map.append($tr);
        }

        // fill with words
        this.cells.forEach(function(cell) {
            cell.setWord(Map.getWord(1));
        });
    },
    getWord: function(difficulty) {
        return "hullo";
    },
    cell: function(r, c) {
        return this.cells[this._getCellIndex(r, c)];
    },
    _cellIndex: function(r, c) {
        return r*this.settings.SIZE + c;
    }
};

function Cell($cell, r, c) {
    this.$cell = $cell;
    this.r = r;
    this.c = c;
    this.word = null;
}

Cell.prototype.setWord = function(word) {
    this.word = word;
    this.$cell.html(word);
};
