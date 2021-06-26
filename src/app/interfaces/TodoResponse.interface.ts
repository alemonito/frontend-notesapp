export interface TodoResponse {
    status:  string;
    message: string;
    todo:    hacer[];
}

export interface hacer {
    status:    string;
    _id:       string;
    name:      string;
    userId:    string;
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
}
