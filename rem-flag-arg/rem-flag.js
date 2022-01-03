// remove flag argument

class Rect {
    setDimension(name, value) {
        if(name == 'height') {
            this._height = value;
            return;
        }
        if(name == 'width') {
            this._width = value;
            return;
        }
    }
}


class Ref_Rect {
    set height(arg) { this._height = arg;}
    set width(arg) { this._width = arg; }
    setDimension(name, value) {
        if(name == 'height') {
            this._height = value;
            return;
        }
        if(name == 'width') {
            this._width = value;
            return;
        }
    }
}

module.exports = Rect;
module.exports.Ref_Rect =  Ref_Rect;

