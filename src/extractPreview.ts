import * as fs from 'fs';
import * as path from 'path';
const extractd = require('extractd');

export async function extractPreview(filePath: string): Promise<string | null> {
	const done = await extractd.generate(filePath, {
		base64: true
	});
	if (done.error) {
		console.error('Error extracting preview:', done.error);
		return null;
	}

	if (done.preview) {
		return done.preview;
	} else {
		console.error('No base64 data found in the extracted preview.');
		return null;
	}
}
