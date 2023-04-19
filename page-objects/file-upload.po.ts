import { Page } from '@playwright/test';
import fs from 'fs/promises';

export class FileUploadPageObject {
  readonly chooseFile = this.page.locator('#file-upload');
  readonly dragAndDrop = this.page.locator('#drag-drop-upload');
  readonly uploadBtn = this.page.locator('#file-submit');
  readonly previewFilenames = this.page.locator('.dz-filename');
  readonly uploadedFile = this.page.locator('#uploaded-files');
  readonly header = this.page.locator('h3');

  constructor(private page: Page) {}

  async uploadFile(filePath: string) {
    await this.chooseFile.setInputFiles(filePath);
    await this.uploadBtn.click();
  }

  // Emulate drag and drop event using DataTransfer
  async dragAndDropFile(filePath: string, fileName: string, fileType: string) {
    const buffer = await fs.readFile(filePath);
    const encodedBuffer = buffer.toString('base64');

    const dataTransfer = await this.page.evaluateHandle(
      async ({ bufferData, localFileName, localFileType }) => {
        const dt = new DataTransfer();

        const blobData = await fetch(bufferData).then((res) => res.blob());

        const file = new File([blobData], localFileName, {
          type: localFileType,
        });
        dt.items.add(file);
        return dt;
      },
      {
        bufferData: `data:application/octet-stream;base64,${buffer}`,
        localFileName: fileName,
        localFileType: fileType,
      }
    );

    await this.dragAndDrop.dispatchEvent('drop', { dataTransfer });
  }
}
