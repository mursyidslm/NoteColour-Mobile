import NotePages from "../pageobject/note-pages";

describe("APK 2", () => {

    it("Add Note", async () => {
        await NotePages.skiptutorial();
        await NotePages.createNote();
        await NotePages.validatenotetitle();
    });
    it("Edit Note", async () => {
        await NotePages.editNote();
    });
    it("Delete Note", async () => {
        await NotePages.deletenote();
    });

});