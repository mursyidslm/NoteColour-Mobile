import { noteApkLocator } from "../locators/note-apk-locator";
import { notedata } from "../data/note-data";
import { click, setValue, expectText, expectDisplayed, expectNotDisplayed, expecttextnotdisplayed } from "../utils/apknote";
import {$} from "@wdio/globals";
class NotePages {

    async skiptutorial() {
        await expectDisplayed(noteApkLocator.skipbutton);
        await click(noteApkLocator.skipbutton);
    }

    async tapaddnote() {
        await expectDisplayed(noteApkLocator.buttonAddNote);
        await click(noteApkLocator.buttonAddNote);
    }

    async tapaddtext() {
        await expectDisplayed(noteApkLocator.buttonaddtext);
        await click(noteApkLocator.buttonaddtext);
    }

    async inputtitle() {
        await expectDisplayed(noteApkLocator.inputTitle);   
        await setValue(noteApkLocator.inputTitle, notedata.title);
    }

    async inputnote() {
        await expectDisplayed(noteApkLocator.inputNote);
        await setValue(noteApkLocator.inputNote, notedata.note);
    }

    async tapback() {
        await expectDisplayed(noteApkLocator.backButton);
        await click(noteApkLocator.backButton);
    }

    async tapbackbutton() {
        await expectDisplayed(noteApkLocator.backButton);
        await click(noteApkLocator.backButton);
    }

    async validatenotetitle() {
        await expectDisplayed(noteApkLocator.noteTitle);
        await expectText(noteApkLocator.noteTitle, notedata.title);
    }
    async validatenoteeditedtitle() {
        await expectDisplayed(noteApkLocator.noteTitle);
        await expectText(noteApkLocator.noteTitle, notedata.editTitle);
    }
    async validatenoteeditedtextnotdisplayed() {
        await expectDisplayed(noteApkLocator.noteTitle);
        await expecttextnotdisplayed(noteApkLocator.noteTitle, notedata.editTitle);
    }

    async createNote() {
        // await this.skiptutorial();
        await this.tapaddnote();
        await this.tapaddtext();
        await this.inputtitle();
        await this.inputnote();
        await this.tapback();
        await this.tapbackbutton();
        await this.validatenotetitle();
    }
    async editNote() {
        await this.createNote();
        await expectDisplayed(noteApkLocator.noteTitle);
        await click(noteApkLocator.noteTitle);
        await expectDisplayed(noteApkLocator.editButton);
        await click(noteApkLocator.editButton);
        await setValue(noteApkLocator.inputTitle, notedata.editTitle);
        await setValue(noteApkLocator.inputNote, notedata.editNote);
        await click(noteApkLocator.backButton);
        await click(noteApkLocator.backButton);
        await this.validatenoteeditedtitle();
    }
    async deletenote() {
        // await this.createNote();
        await expectDisplayed(noteApkLocator.noteTitle);
        await expectText(noteApkLocator.noteTitle, notedata.editTitle);
        await click(noteApkLocator.noteTitle);
        await expectDisplayed(noteApkLocator.menubutton);
        await click(noteApkLocator.menubutton);
        await expectDisplayed(noteApkLocator.deleteButton);
        await click(noteApkLocator.deleteButton);
        await expectDisplayed(noteApkLocator.okpopup);
        await click(noteApkLocator.okpopup);
        await expectDisplayed(noteApkLocator.logo);
        await this.validatenoteeditedtextnotdisplayed();


    }
}

export default new NotePages();