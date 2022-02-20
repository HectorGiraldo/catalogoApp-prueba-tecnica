export interface Graphics {
    ok:       boolean;
    graphics: Graphic[];
}

export interface Graphic {
    _id:          string;
    name:         string;
    manufacturer: string;
    model:        string;
    assembler:    string;
    price:        string;
    img:          string;
    __v:          number;
}


