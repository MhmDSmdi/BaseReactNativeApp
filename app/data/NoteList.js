import Note from './Note';
class NoteList {
    constructor() {
        this._noteList = [];
    }

    addNote(note) {
        this._noteList.push(note);
    }

    deleteNote(note) {
        index = this._noteList.indexOf(note);
        this._noteList.splice(index, 1);
    }
}

module.export = NoteList;