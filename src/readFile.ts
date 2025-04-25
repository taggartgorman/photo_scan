import * as fs from 'fs';
import * as path from 'path';
import { extractPreview } from './extractPreview';

export async function readFileToBase64(filePath: string): Promise<string | null> {
	const ext = path.extname(filePath).toLowerCase();

	if (ext === '.jpeg' || ext === '.jpg') {
		// Read the file and return its base64-encoded content
		const fileBuffer = fs.readFileSync(filePath);
		return fileBuffer.toString('base64');
	} else {
		// Use extractPreview for other file types
		return extractPreview(filePath);
	}
}
