import { queryModel } from './ollamaClient';
import { readFileToBase64 } from './readFile';

// This function is from an older version of this project.
// It is not used in the current version, but it is kept for reference.
// It calls readFileToBase64(), which supports RAW files with embedded JPEG previews.
export async function processImageKeywordsFromFilePath(filePath: string, model: string, prompt: string): Promise<string[] | null> {
	const file = await readFileToBase64(filePath);

	if (file) {
		try {
			const response = await queryModel(model, prompt, file);
			if (response) {
				// Split the response into keywords
				const keywords = response.split(',').map((keyword: string) => keyword.trim());
				return keywords;
			} else {
				console.error('No response from Ollama.');
				return null;
			}
		} catch (error) {
			console.error('Failed to interact with Ollama:', error);
			return null;
		}
	} else {
		console.error('Failed to read the file or extract preview.');
		return null;
	}
}

export async function processImageKeywordsFromBase64(base64File: string, model: string, prompt: string): Promise<string[] | null> {

	if (base64File) {
		try {
			const response = await queryModel(model, prompt, base64File);
			if (response) {
				// Split the response into keywords
				const keywords = response.split(',').map((keyword: string) => keyword.trim());
				return keywords;
			} else {
				console.error('No response from Ollama.');
				return null;
			}
		} catch (error) {
			console.error('Failed to interact with Ollama:', error);
			return null;
		}
	} else {
		console.error('Failed to read the file or extract preview.');
		return null;
	}
}
