import { FileChooser, expect } from '@playwright/test';
import test from '../fixtures';
import fs from 'fs/promises';

test.describe('File Upload', () => {
  const dummyFileName = 'dummy_upload.txt';
  const dummyFilePath = `data/${dummyFileName}`;

  test.beforeEach(async ({ page }) => {
    await page.goto('upload');
  });

  test('Upload a file', async ({ fileUploadPage }) => {
    await fileUploadPage.uploadFile(dummyFilePath);
    await expect
      .poll(
        async () => {
          return await fileUploadPage.uploadedFile.textContent();
        },
        {
          message: 'File upload did not complete',
          timeout: 2000,
        }
      )
      .toContain(dummyFileName);
    expect(await fileUploadPage.header.textContent()).toContain(
      'File Uploaded!'
    );
  });

  test('Drag and drop a file', async ({ fileUploadPage }) => {
    await fileUploadPage.dragAndDropFile(
      dummyFilePath,
      dummyFileName,
      'application/txt'
    );
    expect(await fileUploadPage.previewFilenames.allTextContents()).toContain(
      dummyFileName
    );
  });
});
