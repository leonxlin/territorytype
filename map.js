
var Map = {
    settings: {
        SIZE: 10,
        START_R: 9,
        START_C: 4,
        NEIGHBOR_R_DELTAS: [-1, 0, 1, 0],
        NEIGHBOR_C_DELTAS: [0, 1, 0, -1]
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
            cell.setWord(Map.getWord(5));
        });
    },
    getWord: function(difficulty) {
        nWords = Words["" + difficulty].length;
        idx = Math.floor(Math.random()*nWords);
        return Words["" + difficulty][idx];
    },
    cell: function(r, c) {
        return this.cells[this._cellIndex(r, c)];
    },
    validRC: function(r, c) {
        max = this.settings.SIZE;
        return 0 <= r && r < max && 0 <= c && c < max;
    },
    _cellIndex: function(r, c) {
        return r*this.settings.SIZE + c;
    }
};

function Cell($cell, r, c) {
    this.$cell = $cell;
    this.r = r;
    this.c = c;
    this.word = "";
}

Cell.prototype.setWord = function(word) {
    this.word = word;
    this.nTyped = 0;
    this.typerUpdate("");
};

Cell.prototype.typerUpdate = function(typed) {
    if (typed == this.word.substring(0, typed.length)) {
        this.showAsTyped(typed);
        return typed.length != 0;
    }

    this.showAsTyped("");
    return false;
};

Cell.prototype.showAsTyped = function(typed) {
    this.$cell.html("<span class='typed'>" + typed + "</span>"
                    + "<span class='untyped'>"
                    + this.word.substring(typed.length)
                    + "</span>");
};

Cell.prototype.neighbors = function() {
    var dr = Map.settings.NEIGHBOR_R_DELTAS,
        dc = Map.settings.NEIGHBOR_C_DELTAS,
        r = 0,
        c = 0,
        neighbors = [];
    for (var i=0; i<dr.length; i++) {
        r = this.r + dr[i];
        c = this.c + dc[i];
        if (Map.validRC(r, c)) {
            neighbors.push(Map.cell(r, c));
        }
    }
    return neighbors;
};
