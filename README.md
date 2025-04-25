# Photo Scan

A simple TypeScript project to use a locally running LLM (via Ollama) to describe an image via a list of keywords. This is not intended to be a masterclass on how to develop a secure server, nor is the web interface a beautifully styled page - this project is just an exploration of what can be done with a local LLM.

The choice of model will have a huge impact on the results of the image keywords. I have found in testing that the same model will return vastly different keywords for the same image, sometimes including odd hallucinations. I wonder if larger models will do a better job, but I do not have the means for testing anything beyond ~7B parameters.

## Configuration

- Set the location and port for Ollama in OLLAMA_URL. The default Ollama URL is `http://localhost:11434`.
- Set LLM_NAME with your model name. This should be the name reported by `ollama list` (without the version information), such as `llava` or ``llama3`.
- If you wish to use a different port when serving the web interface, change the value of PORT.

## Setup

1. Install the appropriate Ollama (https://ollama.com/download) for your OS.

2. Select a model to run locally, preferrably one tuned for analyzing images, such as `llava`.

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the project:
   ```bash
   npm run dev
   ```

5. Access the web page at `http://localhost:3000/`
