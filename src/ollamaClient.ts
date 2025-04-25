import ollama from 'ollama';

export async function queryModel(model: string, prompt: string, file: string): Promise<string> {
	try {
		const response = await ollama.chat({
			model,
			messages: [{
				role: 'user',
				content: prompt,
				images: [file]
			}]
		})

		return response.message.content;
	} catch (error) {
		console.error('Error querying Ollama:', error);
		throw error;
	}
}
