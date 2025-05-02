1. Download Ollama from this link:https://ollama.com/


2. Go to command prompt(Windows) or Terminal(Mac/Linux) and run command ```ollama pull llama3.1```

3. Open up project:

4. Go to terminal, and run ```pip install -r requirements.txt```

5. Then run ```python app.py```

It will then generate the files: resume.docx, resume.md and resume.pdf.


Website is: https://csc-363-project-final.onrender.com/

OpenAI models, used for easier deployment as we would not have to setup a cloud based server, model can be changed to use ollama models, example in main.py.

you would first import ```from langchain_ollama.llms import OllamaLLM```

Then change the llm variable that references OpenAI to, ```model = OllamaLLM(model="llama3.1")```

Change .env_example to a .env file and then add your openai key if not using ollama option for llm