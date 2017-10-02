import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://test.com/';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html'
})
export class UploadComponent {

    uploader: FileUploader = new FileUploader({
        url: URL,
        isHTML5: true
    });

    hasBaseDropZoneOver = false;
    hasAnotherDropZoneOver = false;
    files: any[] = [];

    fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }

    constructor() {
        this.uploader.onAfterAddingFile = (f) => {
            this.files = this.uploader.queue;
            return f;
        };
    }
}
