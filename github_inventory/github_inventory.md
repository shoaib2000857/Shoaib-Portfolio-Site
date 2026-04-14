# GitHub Deep Inventory

Total repositories: **69**


## Org: `Team-ASHTOJ`

Repos: **7**


### Team-ASHTOJ/Aerosense

- **Repo link:** https://github.com/Team-ASHTOJ/Aerosense
- **Description:** —
- **Owner:** Team-ASHTOJ
- **Primary language:** JavaScript
- **Detected stack:** Python, JavaScript, React, FastAPI
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 2 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-10-12T18:08:46Z / 2025-10-12T18:14:22Z / 2025-10-12T18:13:33Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-12T18:13:32Z
- **Latest commit SHA:** f773f2b69a7fe703ace1a53d570c6a2f3a56a466
- **Latest commit message:** Add files via upload
- **README path:** README.md
- **Tree entries:** 80 
- **Top-level dirs:** __pycache__, backend, frontend
- **Top-level files:** README.md
- **Important files:** README.md
- **Deployment hints:** github_pages

#### README excerpt

```markdown
# Air Quality Forecasting and Analysis

This project provides a full-stack solution for forecasting and analyzing air quality data. It includes a Python backend for data processing and modeling, and a React frontend for data visualization and user interaction.

## Features

- **Air Quality Forecasting:** Predicts future air quality levels for various pollutants.
- **Data Visualization:** Interactive charts and heatmaps to visualize historical and forecasted data.
- **Health Recommendations:** Provides personalized health advice based on AQI levels.
- **Crowdsourced Feedback:** Allows users to submit feedback on current air quality conditions.
- **Model Performance Metrics:** Displays metrics to evaluate the accuracy of the forecasting models.

## Technologies Used

### Backend

- **Python:** The core language for data processing and modeling.
- **FastAPI:** A modern, fast (high-performance) web framework for building APIs.
- **Pandas & NumPy:** For data manipulation and numerical operations.
- **Scikit-learn & XGBoost:** For building and training machine learning models.
- **Uvicorn:** An ASGI server for running the FastAPI application.

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Recharts:** A composable charting library built on React components.
- **i18next:** An internationalization framework for translating the application.

## Setup and Installation

### Prerequisites

- Python 3.10 or higher
- Node.js and npm

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create a virtual environment:**
    ```bash
    python3 -m venv .venv
    ```

3.  **Activate the virtual environment:**
    - On macOS and Linux:
      ```bash
      source .venv/bin/activate
      ```
    - On Windows:
      ```bash
      .venv\\Scripts\\activate
      ```

4.  **Install the required Python packages:**
    ```bash
    pip install -r requirements.txt
    ```

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install the required npm packages:**
    ```bash
    npm install
    ```

## Running the Application

### Backend

1.  **Navigate to the `backend` directory and ensure your virtual environment is activated.**

2.  **Run the data processing pipeline to generate predictions:**
    ```bash
    python main.py
    ```

3.  **Start the FastAPI server:**
    ```bash
    uvicorn app:app --host 0.0.0.0 --port 8000 --reload
    ```

### Frontend

1.  **Navigate to the `frontend` directory.**

2.  **Start the Vite development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.
```


### Team-ASHTOJ/argo-prototype-1

- **Repo link:** https://github.com/Team-ASHTOJ/argo-prototype-1
- **Description:** —
- **Owner:** Team-ASHTOJ
- **Primary language:** Python
- **Detected stack:** Python
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-09-16T18:33:16Z / 2025-09-28T12:24:33Z / 2025-09-28T12:24:30Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-09-28T12:24:20Z
- **Latest commit SHA:** 8fe7989251bd49b6f832921c0e6edf59c00e5da3
- **Latest commit message:** prototype
- **README path:** README.md
- **Tree entries:** 26 
- **Top-level dirs:** .github, backend, data_ingestion, frontend, scripts, vector_db
- **Top-level files:** .gitignore, README.md, requirements.txt
- **Important files:** README.md, requirements.txt
- **Deployment hints:** streamlit

#### README excerpt

```markdown
# AI-Powered Conversational System for ARGO Float Data (MVP)

## Project Structure

- `data_ingestion/` — Scripts to parse ARGO NetCDF and load into PostgreSQL/Parquet
- `backend/` — RAG pipeline, LLM integration (Ollama/HF), Model Context Protocol
- `frontend/` — Streamlit dashboard, chatbot, geospatial visualizations
- `vector_db/` — FAISS/Chroma setup and metadata scripts
- `requirements.txt` — Python dependencies
- `README.md` — Project overview and setup instructions

## Features
- Ingest ARGO NetCDF, convert to SQL/Parquet
- Store metadata in FAISS/Chroma
- RAG backend with LLM (Ollama/HF)
- Streamlit dashboard with maps, plots, chatbot
- Demo with Indian Ocean ARGO data
- Extensible to other ocean datasets

## Quickstart
1. Install dependencies: `pip install -r requirements.txt`
2. Run data ingestion: `python data_ingestion/ingest_argo.py`
3. Start backend: `python backend/server.py`
4. Launch dashboard: `streamlit run frontend/app.py`

## Data Sources
- [NOAA ARGO repository](https://www.ncei.noaa.gov/data/oceans/argo/gdac/)

## Extensibility
- Add new data sources by extending `data_ingestion/`
- Add new LLMs or RAG logic in `backend/`
- Add new visualizations in `frontend/`
```


### Team-ASHTOJ/Maxhealth

- **Repo link:** https://github.com/Team-ASHTOJ/Maxhealth
- **Description:** No2 and O2 predictions and modeling for the city of delhi
- **Owner:** Team-ASHTOJ
- **Primary language:** Python
- **Detected stack:** Python, JavaScript, React, FastAPI
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 1 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-10-11T09:33:43Z / 2026-01-29T19:08:32Z / 2026-01-29T19:08:06Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-01-29T19:07:55Z
- **Latest commit SHA:** 97beab3e0eb02c3b6a005da0f95d08c0c2cb55ed
- **Latest commit message:** Resolve README merge conflict
- **README path:** README.md
- **Tree entries:** 101 
- **Top-level dirs:** Data_SIH_2025, Prototype-1, backend, frontend
- **Top-level files:** .gitignore, README.md
- **Important files:** README.md
- **Deployment hints:** github_pages

#### README excerpt

```markdown
# Air Quality Forecasting and Analysis

This project provides a full-stack solution for forecasting and analyzing air quality data. It includes a Python backend for data processing and modeling, and a React frontend for data visualization and user interaction.

## Features

- **Air Quality Forecasting:** Predicts future air quality levels for various pollutants.
- **Data Visualization:** Interactive charts and heatmaps to visualize historical and forecasted data.
- **Health Recommendations:** Provides personalized health advice based on AQI levels.
- **Crowdsourced Feedback:** Allows users to submit feedback on current air quality conditions.
- **Model Performance Metrics:** Displays metrics to evaluate the accuracy of the forecasting models.

## Technologies Used

### Backend

- **Python:** The core language for data processing and modeling.
- **FastAPI:** A modern, fast (high-performance) web framework for building APIs.
- **Pandas & NumPy:** For data manipulation and numerical operations.
- **Scikit-learn & XGBoost:** For building and training machine learning models.
- **Uvicorn:** An ASGI server for running the FastAPI application.

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Recharts:** A composable charting library built on React components.
- **i18next:** An internationalization framework for translating the application.

## Setup and Installation

### Prerequisites

- Python 3.10 or higher
- Node.js and npm

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create a virtual environment:**
    ```bash
    python3 -m venv .venv
    ```

3.  **Activate the virtual environment:**
    - On macOS and Linux:
      ```bash
      source .venv/bin/activate
      ```
    - On Windows:
      ```bash
      .venv\\Scripts\\activate
      ```

4.  **Install the required Python packages:**
    ```bash
    pip install -r requirements.txt
    ```

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install the required npm packages:**
    ```bash
    npm install
    ```

## Running the Application

### Backend

1.  **Navigate to the `backend` directory and ensure your virtual environment is activated.**

2.  **Run the data processing pipeline to generate predictions:**
    ```bash
    python main.py
    ```

3.  **Start the FastAPI server:**
    ```bash
    uvicorn app:app --host 0.0.0.0 --port 8000 --reload
    ```

### Frontend

1.  **Navigate to the `frontend` directory.**

2.  **Start the Vite development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.
```


### Team-ASHTOJ/SIH-scrape

- **Repo link:** https://github.com/Team-ASHTOJ/SIH-scrape
- **Description:** —
- **Owner:** Team-ASHTOJ
- **Primary language:** Python
- **Detected stack:** Python
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 1 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-10-01T19:06:58Z / 2025-10-11T09:30:20Z / 2025-10-11T09:30:17Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-11T09:30:17Z
- **Latest commit SHA:** 8263d1d0b1caaa398142d5e5506db2296294aaab
- **Latest commit message:** Merge pull request #1 from DevXOmar/main
- **README path:** README.md
- **Tree entries:** 4 
- **Top-level dirs:** —
- **Top-level files:** ARGOdatascrape.py, README.md, sih'25-scrape.py, sih-scrape2.py
- **Important files:** README.md
- **Deployment hints:** —

#### README excerpt

```markdown
# SIH-scraping
```


### Team-ASHTOJ/sih_bloackchain

- **Repo link:** https://github.com/Team-ASHTOJ/sih_bloackchain
- **Description:** —
- **Owner:** Team-ASHTOJ
- **Primary language:** Python
- **Detected stack:** Python, Flask, Docker
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-11-29T19:11:34Z / 2025-11-29T19:28:56Z / 2025-11-29T19:28:53Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-11-29T19:28:48Z
- **Latest commit SHA:** d54fa6f52c08318a4ffae86f3c887943395cf9f3
- **Latest commit message:** added dyanic db access
- **README path:** README.md
- **Tree entries:** 5 
- **Top-level dirs:** —
- **Top-level files:** Dockerfile, README.md, app.py, docker-compose.yml, requirements.txt
- **Important files:** Dockerfile, README.md, app.py, docker-compose.yml, requirements.txt
- **Deployment hints:** docker

#### README excerpt

```markdown
# Multi-node encrypted blockchain

## Overview
- 4 Flask nodes with encrypted block data and Ed25519 signatures.
- Nodes: node1..node4, exposed on localhost ports 5001–5004.
- Each node stores its chain in `./data/nodeX:/app/db`.

## Prerequisites
- Docker and Docker Compose
- `jq` (optional) to pretty-print JSON

## Setup
- Ensure data directories exist (Compose will create on first run if needed).

## Start
- Build and start all services:
```
docker compose up --build
```

## Usage
1) Add a block via node1 (broadcasts to others):
```
curl -X POST http://localhost:5001/add_block \
  -H "Content-Type: application/json" \
  -d '{"sender":"Alice","receiver":"Bob","amount":50}'
```

2) Inspect chains on other nodes:
```
curl http://localhost:5002/chain | jq
curl http://localhost:5003/chain | jq
curl http://localhost:5004/chain | jq
```

3) Validate network consistency from node1:
```
curl http://localhost:5001/validate | jq
```

## Tamper demo (node3)
- Purpose: Show detection when block data is corrupted.
```
docker exec -it node3 sh
sqlite3 db/blockchain.db
UPDATE blocks SET data_encrypted = 'HACKED' WHERE idx = 1;
.quit
exit
```
- Then:
```
curl http://localhost:5001/validate | jq
```
- Expect `network_valid: false` and `tampered_nodes` to include node3.

## Reset (clean volumes) and rebuild
- Stop and remove containers + volumes:
```
docker compose down -v
```
- Recreate or clean local data dirs:
```
sudo rm -rf data/node1 data/node2 data/node3 data/node4
sudo mkdir -p data/node1 data/node2 data/node3 data/node4
```
- Start fresh:
```
docker compose up --build
```

## API
- POST `/add_block` — Add local block and broadcast.
- POST `/receive_block` — Receive and validate incoming block.
- GET `/chain` — Return current chain (encrypted payloads).
- GET `/validate_local` — Validate local chain only.
- GET `/validate` — Validate local chain and aggregate network validity.

## Notes
- Encryption: `data_encrypted` uses Fernet; requires shared `BLOCK_ENCRYPTION_KEY`.
- Signatures: Ed25519 over canonical payload (index, timestamp, encrypted data, previous_hash, public_key).
- Genesis: Deterministic block at `idx=0` created on first run per node.
```


### Team-ASHTOJ/TattvaDrishti

- **Repo link:** https://github.com/Team-ASHTOJ/TattvaDrishti
- **Description:** —
- **Owner:** Team-ASHTOJ
- **Primary language:** JavaScript
- **Detected stack:** Python, JavaScript, React, Next.js, FastAPI, Docker, Data Science / ML
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 3 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-10-12T18:06:59Z / 2026-01-08T12:35:15Z / 2026-01-08T12:35:12Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-01-08T12:35:06Z
- **Latest commit SHA:** c8226fdf6ddd4b84e93b49db6b38350926a7ecf3
- **Latest commit message:** Team_info added
- **README path:** README.md
- **Tree entries:** 115 
- **Top-level dirs:** app, docs, frontend, samples, scripts, tests
- **Top-level files:** .gitignore, .python-version, AUTOCOMMIT_OVERVIEW.md, BLOCKCHAIN_QUICKSTART.md, Dockerfile, FIX_SUMMARY.md, FULL_PROJECT_DOCUMENTATION.md, MULTI_NODE_GUIDE.md, PROJECT_OVERVIEW.md, README.md, SHARING_ARCHITECTURE.md, TattvaDrishti, Team_info.txt, autocommit.py, docker-compose.yml, requirements.lock, requirements.txt, rustup-init.exe
- **Important files:** Dockerfile, README.md, docker-compose.yml, requirements.txt
- **Deployment hints:** docker, github_pages, vercel

#### README excerpt

```markdown
# TattvaDrishti

**Prototype platform to detect and mitigate malign information operations powered by large language models.**

Combines advanced AI detection with multi-layered analysis:
- 🤖 **Ollama Semantic Analysis** (40% weight) - Deep contextual risk assessment using local LLMs
- 🔍 **Hugging Face AI Detection** (35% weight) - State-of-the-art AI-generated content detection
- 🎯 **Behavioral Analysis** (15% weight) - Metadata, urgency, and manipulation tactics
- 📊 **Stylometric Analysis** (10% weight) - Linguistic fingerprinting and patterns

Plus threat graph intelligence, provenance checks, and federated sharing scaffolding.

---

## ⚠️ Python Version Requirement

**This project requires Python 3.11.x**

Python 3.12+ is **not supported** due to FastAPI + Pydantic v1 compatibility issues. The codebase enforces this requirement at runtime.

### Install Python 3.11

**macOS (Homebrew)**
```bash
brew install python@3.11
```

**macOS (pyenv)**
```bash
brew install pyenv
pyenv install 3.11.9
pyenv local 3.11.9  # Uses .python-version file
```

**Windows (Chocolatey)**
```powershell
choco install python --version=3.11.9 -y
```

**Ubuntu/Debian**
```bash
sudo apt update
sudo apt install -y software-properties-common
sudo add-apt-repository -y ppa:deadsnakes/ppa
sudo apt update
sudo apt install -y python3.11 python3.11-venv
```

**Fedora/RHEL**
```bash
sudo dnf install -y python3.11 python3.11-venv
```

---

## 🚀 Quick Start

### 1. Install Ollama (Required for Semantic Analysis)

```bash
# Linux
curl -fsSL https://ollama.com/install.sh | sh

# macOS
brew install ollama

# Windows - Download from https://ollama.com/download/windows
```

Start Ollama and download the model:
```bash
# Start Ollama server
ollama serve

# In another terminal, download the recommended model
ollama pull llama3.2:3b
```

📖 **Detailed Ollama setup**: See [docs/OLLAMA_SETUP.md](docs/OLLAMA_SETUP.md)

### 2. Backend (FastAPI)

```bash
# Clone the repo
git clone https://github.com/Team-ASHTOJ/TattvaDrishti.git
cd TattvaDrishti

# Create virtual environment with Python 3.11
python3.11 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\Activate.ps1

# Install dependencies
python -m pip install --upgrade pip
python -m pip install -r requirements.txt

# Create .env file (copy from example)
cp .env.example .env

# Start the backend server
uvicorn app.main:app --reload
```

Backend will be available at: **http://127.0.0.1:8000**

### Frontend (Next.js)

```bash
cd frontend

# Create environment file
echo 'NEXT_PUBLIC_API_BASE_URL=http://localhost:8000' > .env.local

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will be available at: **http://localhost:3000**

---

## 📁 Project Structure

```
TattvaDrishti/
├── app/                      # FastAPI backend
│   ├── main.py              # API routes and server
│   ├── config.py            # Settings and environment config
│   ├── schemas.py           # Pydantic models
│   ├── i
```


### Team-ASHTOJ/Tethys

- **Repo link:** https://github.com/Team-ASHTOJ/Tethys
- **Description:** Conversational AI model for ARGO data
- **Owner:** Team-ASHTOJ
- **Primary language:** Python
- **Detected stack:** Python, Data Science / ML
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 1 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-09-30T18:50:20Z / 2025-09-30T19:06:53Z / 2025-09-30T19:06:50Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-09-30T19:06:50Z
- **Latest commit SHA:** d919767aa2aa0700bf14faecc05d0e308dae7b93
- **Latest commit message:** Update README.md
- **README path:** README.md
- **Tree entries:** 74 
- **Top-level dirs:** Tethys
- **Top-level files:** README.md
- **Important files:** README.md
- **Deployment hints:** streamlit

#### README excerpt

```markdown
Tethys: Conversational ARGO Float Data Explorer 🌊💬

Tethys is a conversational AI system designed to make exploring ARGO float oceanographic data simple, intuitive, and interactive. Instead of wrestling with NetCDF files or SQL queries, users can ask questions in plain English and receive answers, summaries, and visualizations.

This project bridges the gap between vast ocean datasets and the researchers, students, and enthusiasts who want to understand them quickly and effectively.

⸻

🚀 Features
	•	Natural Language Queries
Ask: “Show me active floats in the Indian Ocean with high salinity readings last month.”
Get: A direct, readable answer.
	•	Interactive Map Visualizations
View float locations, trajectories, and parameters (temperature, salinity, pressure, etc.) on a world map.
	•	Data Summarization
Generate quick summaries of float data, missions, or regional trends.
	•	Semantic Search (Vector DB)
Retrieve relevant information using embeddings, even if your query doesn’t match exact keywords.

🏗️ System Architecture

Tethys is powered by a Retrieval-Augmented Generation (RAG) pipeline:
	1.	Data Ingestion
	•	Download and preprocess ARGO NetCDF files.
	•	Convert them into Parquet format and store them in PostgreSQL.
	•	Create embeddings and push them into a Chroma/FAISS vector database.
	2.	User Query
	•	User interacts through the frontend dashboard (chat + map).
	3.	Backend Engine
	•	Query is embedded → relevant chunks retrieved from vector DB + PostgreSQL.
	4.	LLM Augmentation
	•	Retrieved data + query are sent to a language model.
	•	Generates a coherent, human-readable response.
	5.	Response & Visualization
	•	Final answer and visual data (maps/graphs) are sent back to the frontend.

⸻

📊 Example Queries
	•	“Show me floats near the Bay of Bengal with high surface temperature.”
	•	“Summarize salinity trends in the Arabian Sea in 2023.”
	•	“List active floats with depth > 1000m in the Indian Ocean.”

  ⚙️ Tech Stack
	•	Data Handling: Python, xarray, pandas, parquet
	•	Databases: PostgreSQL (relational), Chroma/FAISS (vector)
	•	Embeddings/LLM: Sentence Transformers / HuggingFace models
	•	Frontend: Streamlit, Plotly, Leaflet
	•	Backend: Retrieval-Augmented Generation (RAG)
```


## Org: `Team-Aston`

Repos: **2**


### Team-Aston/rakshak-files

- **Repo link:** https://github.com/Team-Aston/rakshak-files
- **Description:** —
- **Owner:** Team-Aston
- **Primary language:** Python
- **Detected stack:** Python
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 1 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-04-19T05:02:15Z / 2025-05-08T10:07:10Z / 2025-05-08T10:07:07Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-05-08T10:07:07Z
- **Latest commit SHA:** 340f7a6a8a4f2cdf3e57a48d28febf9ab15ec42a
- **Latest commit message:** Update rover_control3.py
- **README path:** —
- **Tree entries:** 22 
- **Top-level dirs:** rover_control
- **Top-level files:** finaltry.py, jetson_client.py, jetson_client2.py, newTest.py, newTest2.py, pixhawk_json.py, sameple_json, try.py, try2.py, try3.py, try4.py, try5.py, try6.py, try7.py, try8.py, try9.py, trynew.py
- **Important files:** —
- **Deployment hints:** —
- **Notes:** No README found via API.

#### README excerpt

_No README text found._


### Team-Aston/RakshakWeb

- **Repo link:** https://github.com/Team-Aston/RakshakWeb
- **Description:** —
- **Owner:** Team-Aston
- **Primary language:** Python
- **Detected stack:** Python, JavaScript
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-04-13T14:15:01Z / 2025-05-04T10:21:08Z / 2025-05-04T10:21:04Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-05-04T10:21:22Z
- **Latest commit SHA:** 9f5f0a6102e5feed30f33d4c583c52a68c77495d
- **Latest commit message:** Merge branch 'main' of https://github.com/shoaib2000857/WebApp
- **README path:** —
- **Tree entries:** 57 
- **Top-level dirs:** ALLONSERVER, NEWAPP, rover-app, server
- **Top-level files:** .gitignore, jetson_client.py, jetsonbackup.py
- **Important files:** —
- **Deployment hints:** —
- **Notes:** No README found via API.

#### README excerpt

_No README text found._


## User: `shoaib2000857`

Repos: **60**


### shoaib2000857/100-Days-Of-Code

- **Repo link:** https://github.com/shoaib2000857/100-Days-Of-Code
- **Homepage:** https://100-days-of-code-seven.vercel.app
- **Deployment links:** https://100-days-of-code-seven.vercel.app
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python, JavaScript
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2024-12-25T18:59:39Z / 2025-01-21T11:01:27Z / 2025-01-21T11:01:23Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-01-21T05:31:19Z
- **Latest commit SHA:** 6809cd44253d6a72901891cf7aac8bd3bcec2347
- **Latest commit message:** minor changes to t10m
- **README path:** README.md
- **Tree entries:** 95 
- **Top-level dirs:** Coffee&Wifi, LibraryManager, ProjectWebsite, SQL, blog, forms, top10movies
- **Top-level files:** README.md
- **Important files:** README.md
- **Deployment hints:** github_pages, vercel

#### README excerpt

```markdown
# 100 Days of Code Projects

This repository contains all the projects I have built as part of the 100 Days of Code Udemy course. Each project is stored in its own folder with its own README file and source code.

## How to Run

To run any of the projects, navigate to the respective project folder and follow the instructions in the project's README file.

## Contributing

If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This repository is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
```


### shoaib2000857/100DAYS_OF_100WEBPROJECTS-GSSOC

- **Repo link:** https://github.com/shoaib2000857/100DAYS_OF_100WEBPROJECTS-GSSOC
- **Homepage:** https://100daysof100webprojects.netlify.app
- **Deployment links:** https://100daysof100webprojects.netlify.app, https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=25&pause=1000&color=6AE3F9&center=true&vCenter=true&width=1000&lines=Learn+By+Building!+💻;100+Web+Projects+Challenge🔥;HTML+CSS+JS+and+More!, https://contributors-img.web.app/image?repo=rutikakengal/100DAYS_OF_100WEBPROJECTS
- **Description:** 100 Days 100 Web Projects is a frontend-focused open-source challenge where I build one project daily using HTML, CSS, and JavaScript. Contributors are welcome to add creative mini-projects, improve existing ones, fix bugs, or enhance UI/UX. A great opportunity to learn, build, and grow together in the open-source community!
- **Owner:** shoaib2000857
- **Primary language:** HTML
- **Detected stack:** JavaScript, Data Science / ML
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2025-08-03T15:02:07Z / 2025-08-07T07:13:33Z / 2025-08-07T07:13:24Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-08-07T07:13:23Z
- **Latest commit SHA:** b5702d01bd401fa4a4f97458989ffbcccc21bb85
- **Latest commit message:** Merge branch 'main' into main
- **README path:** README.md
- **Tree entries:** 264 
- **Top-level dirs:** .vscode, chatbot, public
- **Top-level files:** 100-days-100-webdev-projects-LOGO.png, README.md, contributors.html, home.css, index.css, index.html, index.js, script.js
- **Important files:** README.md, index.html
- **Deployment hints:** github_pages
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
# 100_DAYS_OF_100_WEBPROJECTS🚀

Welcome to **100_days_100_web_project** – a challenge-based repository to **learn** and **practice** web development by building **100+ mini projects** using **HTML, CSS, and JavaScript**. This journey goes from **basic** to **intermediate** level with fun and interactive web applications!

![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=25&pause=1000&color=6AE3F9&center=true&vCenter=true&width=1000&lines=Learn+By+Building!+💻;100+Web+Projects+Challenge🔥;HTML+CSS+JS+and+More!)

---

## 📁 Project List

| Day | Project Name | Folder Link | Description |
|-----|--------------|-------------|-------------|
| DAY-1 | TODOLIST | [TODOLIST]() | Task manager app |
| DAY-2 | DIGITAL CLOCK | [DIGITAL CLOCK]() | Real-time digital clock |
| DAY-3 | Weather App | [Weather APP]() | Real-time weather information using OpenWeatherMap API |
| Day 4  | **Calculator**      | [Link]()       | Basic calculator functionality|
| DAY-10 | MEMORY CARD GAME | [Memory Card Game]() | Memory Card Matching Game |

| Day 100+ | **Coming Soon**  | 🚧             | 🚧                           |

> 📌 Projects will be updated daily. Bookmark this repo and check back often!

---
## 🎯 Goals

- 💡 Improve HTML, CSS & JavaScript skills
- 🧠 Develop problem-solving ability through UI/UX logic
- 🛠 Build a strong developer portfolio
- 🌐 Publish projects on GitHub Pages or Vercel
- 🧩 Collaborate and contribute as a community

---

## 🛠 Tech Stack

| Technology | Role |
|------------|------|
| 💻 HTML     | Page Structure |
| 🎨 CSS      | Styling & Layout |
| ⚙️ JavaScript | Logic & Interactions |

## 🧑‍💻 Contributor Guidelines

Please follow these steps carefully while adding your project to ensure everything works smoothly:

### ✅ 1. Add Your Project to `projects` Array in `index.js`

- Open the `index.js` file.
- Locate the `projects` array.
- Add your project title **at the end** of the array in quotes, followed by a comma.

```js
const projects = [
  "To-Do List",
  "Weather App",
  "Your New Project", // 👈 Add your title like this
  "BrainBuzz Quizz Website"
];
```


🔥 Make sure each item is comma-separated. Missing a comma will break the table!

 ### 📅 2. Match the Day Number
The Day number is auto-generated based on the order of the project in the array.

So if your project is 6th in the array, it's considered Day 06.


📁 3. Add Project Files in the Correct Folder
Go to the public folder.

Create a new folder as: dayXX (replace XX with your Day number).

Place all your project files inside it.

``` pgsql
Copy
Edit
public/
  └── day06/
        ├── index.html
        ├── style.css
        └── script.js
```

🔗 4. Demo Link
The live demo link is auto-generated as:
```
public/dayXX/index.html
```
So make sure your index.html is correctly placed in that folder.


⚠️ 5. Common Mistakes to Avoid
❌ Missing commas in the projects array

❌ Skipping day numbers or placing projects out of order

❌ Incorrect folder names (like Day6 instead of d
```


### shoaib2000857/24f2000857_git_challenge_lab

- **Repo link:** https://github.com/shoaib2000857/24f2000857_git_challenge_lab
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-09-14T16:27:30Z / 2025-09-22T14:01:12Z / 2025-09-22T14:01:07Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-09-22T14:01:07Z
- **Latest commit SHA:** ebc9da73a78498927d0935273b6c058679b6e5fa
- **Latest commit message:** Merge pull request #1 from shoaib2000857/t1
- **README path:** README.md
- **Tree entries:** 3 
- **Top-level dirs:** —
- **Top-level files:** Info.md, README.md, main.py
- **Important files:** README.md, main.py
- **Deployment hints:** —

#### README excerpt

```markdown
# Cute Terminal Calculator

✨ Welcome to the Cute Terminal Calculator! ✨

This is a simple and adorable calculator for your terminal, written in Python. It supports basic arithmetic operations and greets you with fun messages!

## Features
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Cute ASCII art and friendly prompts
- Input validation for numbers and operators

## Usage

1. Make sure you have Python 3 installed.
2. Run the calculator:
   
   ```bash
   python3 main.py
   ```
3. Follow the prompts to enter numbers and choose an operator.
4. Enjoy your result and the cute messages!

## Example
```
✨ Welcome to the Cute Terminal Calculator! ✨
(づ｡◕‿‿◕｡)づ  Let's do some math!  (｡♥‿♥｡)

Enter the first number: 5
Choose an operator (+, -, *, /): *
Enter the second number: 3

Your result: 5.0 * 3.0 = 15.0  (✿◠‿◠)

Thanks for using the Cute Calculator! (｡•̀ᴗ-)✧
```

## License
This project is open source and free to use.
```


### shoaib2000857/Aerosense

- **Repo link:** https://github.com/shoaib2000857/Aerosense
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** —
- **Detected stack:** Python, JavaScript, React, FastAPI
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2025-10-12T18:46:30Z / 2025-10-12T18:46:30Z / 2025-10-12T18:13:33Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-12T18:13:32Z
- **Latest commit SHA:** f773f2b69a7fe703ace1a53d570c6a2f3a56a466
- **Latest commit message:** Add files via upload
- **README path:** README.md
- **Tree entries:** 80 
- **Top-level dirs:** __pycache__, backend, frontend
- **Top-level files:** README.md
- **Important files:** README.md
- **Deployment hints:** github_pages
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
# Air Quality Forecasting and Analysis

This project provides a full-stack solution for forecasting and analyzing air quality data. It includes a Python backend for data processing and modeling, and a React frontend for data visualization and user interaction.

## Features

- **Air Quality Forecasting:** Predicts future air quality levels for various pollutants.
- **Data Visualization:** Interactive charts and heatmaps to visualize historical and forecasted data.
- **Health Recommendations:** Provides personalized health advice based on AQI levels.
- **Crowdsourced Feedback:** Allows users to submit feedback on current air quality conditions.
- **Model Performance Metrics:** Displays metrics to evaluate the accuracy of the forecasting models.

## Technologies Used

### Backend

- **Python:** The core language for data processing and modeling.
- **FastAPI:** A modern, fast (high-performance) web framework for building APIs.
- **Pandas & NumPy:** For data manipulation and numerical operations.
- **Scikit-learn & XGBoost:** For building and training machine learning models.
- **Uvicorn:** An ASGI server for running the FastAPI application.

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Recharts:** A composable charting library built on React components.
- **i18next:** An internationalization framework for translating the application.

## Setup and Installation

### Prerequisites

- Python 3.10 or higher
- Node.js and npm

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create a virtual environment:**
    ```bash
    python3 -m venv .venv
    ```

3.  **Activate the virtual environment:**
    - On macOS and Linux:
      ```bash
      source .venv/bin/activate
      ```
    - On Windows:
      ```bash
      .venv\\Scripts\\activate
      ```

4.  **Install the required Python packages:**
    ```bash
    pip install -r requirements.txt
    ```

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install the required npm packages:**
    ```bash
    npm install
    ```

## Running the Application

### Backend

1.  **Navigate to the `backend` directory and ensure your virtual environment is activated.**

2.  **Run the data processing pipeline to generate predictions:**
    ```bash
    python main.py
    ```

3.  **Start the FastAPI server:**
    ```bash
    uvicorn app:app --host 0.0.0.0 --port 8000 --reload
    ```

### Frontend

1.  **Navigate to the `frontend` directory.**

2.  **Start the Vite development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.
```


### shoaib2000857/Aetheria

- **Repo link:** https://github.com/shoaib2000857/Aetheria
- **Homepage:** https://aetheria-pi.vercel.app
- **Deployment links:** https://aetheria-pi.vercel.app
- **Description:** Aetheria is a futuristic startup designing AI-powered personal climate pods for urban environments. Think wearable tech meets microclimate control – adjusting temperature, humidity, and air quality around you in real time.
- **Owner:** shoaib2000857
- **Primary language:** HTML
- **Detected stack:** JavaScript
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-07-20T08:17:41Z / 2025-07-20T08:21:00Z / 2025-07-20T08:18:40Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-07-20T08:18:39Z
- **Latest commit SHA:** ddab82a914fa2263f58d62cc494eb7bc5ebed5be
- **Latest commit message:** Create script.js
- **README path:** —
- **Tree entries:** 3 
- **Top-level dirs:** —
- **Top-level files:** index.html, script.js, styles.css
- **Important files:** index.html
- **Deployment hints:** github_pages
- **Notes:** No README found via API.

#### README excerpt

_No README text found._


### shoaib2000857/Amour-Editorial-Website-Gssoc

- **Repo link:** https://github.com/shoaib2000857/Amour-Editorial-Website-Gssoc
- **Homepage:** https://amour-editorial-website.vercel.app
- **Deployment links:** https://amour-editorial-website.vercel.app, https://amour-editorial-website.vercel.app/
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** TypeScript
- **Detected stack:** JavaScript, TypeScript, React, Next.js
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2025-07-25T14:26:20Z / 2025-07-29T19:25:15Z / 2025-07-29T19:25:08Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-07-29T19:25:07Z
- **Latest commit SHA:** 560f287bf9cbf5fa710adc3ca6532792a6ede9d5
- **Latest commit message:** Merge branch 'main' into main
- **README path:** README.md
- **Tree entries:** 178 
- **Top-level dirs:** amour-Backend, amour-next-ts
- **Top-level files:** .DS_Store, .gitignore, CONTACT_SETUP.md, Contributors.md, LICENSE, PROJECT-SETUP.md, README.md, image.png, package-lock.json, package.json, test.sh
- **Important files:** README.md, package-lock.json, package.json
- **Deployment hints:** vercel
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
# ✍️ Amour Editorials

**Amour Editorials** is a professional platform that helps students and professionals craft compelling Statements of Purpose (SOPs), Letters of Recommendation (LORs), and other academic documents — turning their dreams into impactful stories.

---

## 📌 Table of Contents

- [About Us](#about-us)
- [Features](#features)
- [Preview](#preview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Requirement Document](#requirement-document)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Connect with Us](#connect-with-us)

---

## 🧠 About Us 
Amour Editorials was founded by Akshai Krishna A and Lathika D with the mission to help aspirants express their journeys with honesty and power through SOPs, LORs, and other impactful narratives. Backed by years of experience and acceptances to top global universities, the team ensures every story echoes across admission panels worldwide.

---

## 🌟 Features

- 🖥️ Fully responsive UI with 3D effects and animations
- 📄 Secure form submissions and email integrations
- 📅 Calendly booking support
- 🔐 File uploads through backend integration
- ⚙️ Modular and scalable Next.js frontend
- ✨ Advanced UI with Framer Motion and custom TSX components
- 🧪 TypeScript support and linting
- 🎯 SEO, performance, and accessibility focused
- 📎 Social sharing & legal pages (Privacy, Terms)

---

## 📷 Preview

| Page Name              | Description                                         |
|------------------------|-----------------------------------------------------|
| 🏠 Landing Page        | Engaging homepage with animation & brand overview  |
| 🧍 About Us            | Mission, vision, and team insights                  |
| 📑 Services            | SOP, LOR, Editing service details                   |
| 💬 Testimonials        | Client reviews and success stories                  |
| ❓ FAQs                | Process and timeline clarifications                 |
| 📚 Resources           | Samples and writing tips                            |
| 📝 Blog                | Informative articles on writing, branding, etc.     |
| 📅 Booking Page        | Calendly embed for consultation scheduling          |
| 📩 Contact Page        | Contact form connected to backend                   |
| 🔐 Privacy & Terms     | User protection documents                           |

---

## 🛠️ Tech Stack

### 🌐 Frontend – `amour-next-ts`

| Area               | Technology                      |
|-------------------|----------------------------------|
| Framework          | Next.js (App Router)             |
| Language           | TypeScript                      |
| Styling            | Tailwind CSS                    |
| Animations         | Framer Motion                   |
| Component Library  | Custom + ShadCN (UI primitives) |
| Icons              | Lucide                          |
| Build Tool         | Vite / Next.js build            |
| Linting            | ESLint 
```


### shoaib2000857/analyze

- **Repo link:** https://github.com/shoaib2000857/analyze
- **GitHub Pages guess:** https://shoaib2000857.github.io/analyze/
- **Deployment links:** https://shoaib2000857.github.io/analyze/
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** HTML
- **Detected stack:** Python
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-10-22T23:53:21Z / 2025-10-22T23:54:16Z / 2025-10-22T23:54:13Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-22T23:54:12Z
- **Latest commit SHA:** a2e5e796f8aa38726b3f6a4a8f66c1d72c1635e7
- **Latest commit message:** Task Analyze - Round 1: LLM-generated app update/creation
- **README path:** README.md
- **Tree entries:** 9 
- **Top-level dirs:** .github
- **Top-level files:** LICENSE, README.md, data.csv, data.xlsx, execute.py, index.html
- **Important files:** .github/workflows/ci.yml, README.md, index.html
- **Deployment hints:** github_pages

#### README excerpt

```markdown
# Analytics Dashboard

## Project Description

This project provides a simple web application to display processed data generated by a Python script. The data processing is automated via a GitHub Actions CI/CD pipeline, which converts an Excel file to CSV, executes a Python script to analyze the data, and publishes the results as a JSON file to GitHub Pages. The web application (`index.html`) fetches and renders this JSON data in a user-friendly format.

## Features

*   **Data Processing Script (`execute.py`):** Reads `data.csv`, performs category-wise aggregation (sum of 'Amount'), and outputs the result as JSON.
*   **Data Conversion:** The initial `data.xlsx` is converted to `data.csv` for efficient processing and version control.
*   **GitHub Actions CI/CD:**
    *   Automates code linting using `ruff`.
    *   Executes `execute.py` to generate `result.json`.
    *   Publishes `result.json` to GitHub Pages, making it accessible to the web application.
*   **Web Application (`index.html`):**
    *   Single-file, fully responsive design using Tailwind CSS.
    *   Fetches `result.json` from GitHub Pages.
    *   Displays processed data in a structured table and as raw JSON.
    *   Includes loading states and error handling for data fetching.

## Usage

### Local Development

To run the data processing script locally:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```

2.  **Set up Python environment (Python 3.11+ recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: .\venv\Scripts\activate
    pip install pandas openpyxl ruff
    ```

3.  **Ensure `data.csv` exists:** The `data.csv` file should be present in the project root.

4.  **Run the execution script:**
    ```bash
    python execute.py > result.json
    ```
    This will generate `result.json` in your project root.

5.  **View the Web Application:** Open `index.html` directly in your web browser to see the results. The browser will attempt to fetch `result.json` from the same directory.

### CI/CD and GitHub Pages Deployment

1.  **Push to `main` branch:** Any `push` to the `main` branch will trigger the GitHub Actions workflow defined in `.github/workflows/ci.yml`.
2.  **Workflow Execution:** The workflow will:
    *   Lint `execute.py` with `ruff`.
    *   Run `execute.py` to produce `result.json`.
    *   Deploy `result.json` to GitHub Pages.
3.  **Access the Dashboard:** Once the workflow completes, `result.json` will be accessible at the root of your GitHub Pages site (e.g., `https://<your-username>.github.io/<your-repository-name>/result.json`). The `index.html` will automatically fetch and display this data.
    *   To view the web application, navigate to `https://<your-username>.github.io/<your-repository-name>/`.

## Project Structure

```
.github/
└── workflows/
    └── ci.yml             # GitHub Actions workflow for CI/CD
execute.py             # Python script for d
```


### shoaib2000857/AstraOS

- **Repo link:** https://github.com/shoaib2000857/AstraOS
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python, JavaScript, TypeScript, React, FastAPI, Docker
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2026-04-13T10:46:02Z / 2026-04-14T06:06:01Z / 2026-04-14T06:05:57Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-04-14T06:05:51Z
- **Latest commit SHA:** 4542af55c13b66f378539a4a891c9300ce6fed5d
- **Latest commit message:** Implement chat streaming and enhance README with local development instructions
- **README path:** README.md
- **Tree entries:** 49 
- **Top-level dirs:** apps, backend, docker
- **Top-level files:** .gitignore, README.md
- **Important files:** README.md
- **Deployment hints:** docker, github_pages

#### README excerpt

```markdown
# AstraOS — Memory-Augmented Personal AI OS

Prototype workspace for a privacy-first, desktop-native personal AI with persistent memory, file-grounded QA, and local LLMs.

Architecture (MVP):
- Frontend: Tauri + React + TypeScript
- Backend: FastAPI (Python)
- LLMs: Ollama (local)
- Vector DB: Qdrant (local)
- Storage: SQLite for structured data

Goals: quick local chat, memory save/recall, file ingestion + semantic search.

Quick start (backend):

1. Create a Python venv and install deps:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
```

2. Run backend:

```bash
uvicorn backend.app.main:app --reload
```

See `backend/.env.example` to configure `OLLAMA_URL` and `QDRANT_URL`.

Local development (recommended):

1. Start Qdrant (Docker):

```bash
cd docker
docker-compose up -d
```

2. Backend:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
./start.sh
```

3. Frontend:

```bash
cd apps/desktop
./start.sh
```

Run tests:

```bash
cd backend
pytest -q
```

What's included:

- FastAPI backend: health, chat (sync + streaming), conversation and memory APIs, ingestion and Qdrant indexing hooks.
- React + Vite frontend with a minimal chat UI that streams responses.
- Docker compose for Qdrant in `/docker`.

Next recommended steps: configure Ollama locally (set `OLLAMA_URL`), iterate on prompts and memory retention policies, and add UI pages for memory/document inspection.
```


### shoaib2000857/AWS-AI-For-Bharat-2026

- **Repo link:** https://github.com/shoaib2000857/AWS-AI-For-Bharat-2026
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** —
- **Detected stack:** Next.js, FastAPI
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2026-02-12T18:14:11Z / 2026-02-15T17:59:47Z / 2026-02-15T17:59:44Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-02-15T17:59:44Z
- **Latest commit SHA:** 2b1331d8c13b92ff270e346ef2d71ffc583bfc9d
- **Latest commit message:** Create README for AI-Driven Deployment Platform
- **README path:** README.md
- **Tree entries:** 3 
- **Top-level dirs:** —
- **Top-level files:** README.md, design.md, requirements.md
- **Important files:** README.md
- **Deployment hints:** docker

#### README excerpt

```markdown
# 🚀 AI-Driven Intelligent Deployment Platform

### AI for Bharat Hackathon Submission
---

# 1️⃣ Problem Statement

Developers frequently struggle with configuring deployments, CI/CD pipelines, and cloud environments for each new project. As described in the idea section (page 2) , every project demands:

* Identifying the correct tech stack
* Creating Docker configurations
* Setting up CI/CD pipelines
* Provisioning cloud infrastructure
* Managing environment variables
* Debugging deployment failures

These steps are repetitive, time-consuming, and highly error-prone. Even experienced developers spend significant effort configuring deployments instead of focusing on core product development.

Traditional DevOps tools rely heavily on static templates and manual configuration. They do not truly *understand* the project. As a result:

* Setups are inconsistent
* Infrastructure is often over-provisioned
* Costs increase unnecessarily
* Deployment errors are hard to interpret

The challenge is to design a system that can intelligently analyze diverse project structures and automatically generate optimized, production-ready deployment configurations — across technologies and cloud platforms.

---

# 2️⃣ Our Vision

We aim to transform deployment from a manual DevOps task into an intelligent, AI-driven process.

Instead of asking:

> “How do we configure this deployment?”

Our system asks:

> “What does this project actually need?”

This shift is fundamental.

Our goal is to create a unified, intelligent, and scalable deployment engine that enables developers to move from code to production with minimal manual intervention.

---

# 3️⃣ Why AI is Necessary (Not Just Useful)

This system cannot rely on static rules alone.

Modern projects vary across:

* Programming languages
* Frameworks
* Build tools
* Microservices architectures
* Cloud environments
* Performance requirements
* Security and cost constraints

These variations create a combinatorial explosion of deployment possibilities. Rule-based systems cannot anticipate every scenario.

AI is required because it enables:

### 🔹 Semantic Project Understanding

The system scans repository structure, configuration files, and dependencies to infer the tech stack and project architecture.

### 🔹 Adaptive Configuration Generation

Rather than selecting from predefined templates, the AI dynamically generates:

* Dockerfiles
* CI/CD pipelines
* Infrastructure scripts

tailored specifically to the detected project structure.

### 🔹 Intelligent Error Diagnosis

Deployment failures produce unstructured logs. AI interprets these logs, identifies root causes, and explains errors in simple language.

### 🔹 Cost & Infrastructure Optimization

The AI recommends right-sized cloud resources and avoids over-provisioning, reducing operational cost.

Without AI, the system would merely be a deployment dashboard.
With AI, it becomes an intelligent deployment strategist.

---

# 4️⃣ Our Solution

As shown in the solution 
```


### shoaib2000857/cpython

- **Repo link:** https://github.com/shoaib2000857/cpython
- **Homepage:** https://www.python.org
- **Deployment links:** https://www.python.org
- **Description:** The Python programming language
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python, JavaScript, C/C++, Java
- **Topics:** —
- **License:** Other
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2025-01-30T10:40:41Z / 2025-01-30T11:27:51Z / 2025-01-30T11:27:43Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-01-30T11:27:42Z
- **Latest commit SHA:** 29aaebfd310a3842904483630ef8ca81d6acffc4
- **Latest commit message:** Update unicode.rst
- **README path:** README.rst
- **Tree entries:** 5515 
- **Top-level dirs:** .azure-pipelines, .devcontainer, .github, Android, Doc, Grammar, Include, InternalDocs, Lib, Mac, Misc, Modules, Objects, PC, PCbuild, Parser, Programs, Python, Tools, iOS
- **Top-level files:** .coveragerc, .editorconfig, .gitattributes, .gitignore, .mailmap, .pre-commit-config.yaml, .readthedocs.yml, LICENSE, Makefile.pre.in, README.rst, aclocal.m4, config.guess, config.sub, configure, configure.ac, install-sh, pyconfig.h.in
- **Important files:** .github/workflows/add-issue-header.yml, .github/workflows/build.yml, .github/workflows/documentation-links.yml, .github/workflows/jit.yml, .github/workflows/lint.yml, .github/workflows/mypy.yml, .github/workflows/new-bugs-announce-notifier.yml, .github/workflows/project-updater.yml, .github/workflows/require-pr-label.yml, .github/workflows/reusable-change-detection.yml, .github/workflows/reusable-docs.yml, .github/workflows/reusable-macos.yml, .github/workflows/reusable-tsan.yml, .github/workflows/reusable-ubuntu.yml, .github/workflows/reusable-wasi.yml, .github/workflows/reusable-windows-msi.yml, .github/workflows/reusable-windows.yml, .github/workflows/stale.yml, .github/workflows/verify-ensurepip-wheels.yml, README.rst
- **Deployment hints:** github_pages
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
This is Python version 3.14.0 alpha 4
=====================================

.. image:: https://github.com/python/cpython/actions/workflows/build.yml/badge.svg?branch=main&event=push
   :alt: CPython build status on GitHub Actions
   :target: https://github.com/python/cpython/actions

.. image:: https://dev.azure.com/python/cpython/_apis/build/status/Azure%20Pipelines%20CI?branchName=main
   :alt: CPython build status on Azure DevOps
   :target: https://dev.azure.com/python/cpython/_build/latest?definitionId=4&branchName=main

.. image:: https://img.shields.io/badge/discourse-join_chat-brightgreen.svg
   :alt: Python Discourse chat
   :target: https://discuss.python.org/


Copyright © 2001 Python Software Foundation.  All rights reserved.

See the end of this file for further copyright and license information.

.. contents::

General Information
-------------------

- Website: https://www.python.org
- Source code: https://github.com/python/cpython
- Issue tracker: https://github.com/python/cpython/issues
- Documentation: https://docs.python.org
- Developer's Guide: https://devguide.python.org/

Contributing to CPython
-----------------------

For more complete instructions on contributing to CPython development,
see the `Developer Guide`_.

.. _Developer Guide: https://devguide.python.org/

Using Python
------------

Installable Python kits, and information about using Python, are available at
`python.org`_.

.. _python.org: https://www.python.org/

Build Instructions
------------------

On Unix, Linux, BSD, macOS, and Cygwin::

    ./configure
    make
    make test
    sudo make install

This will install Python as ``python3``.

You can pass many options to the configure script; run ``./configure --help``
to find out more.  On macOS case-insensitive file systems and on Cygwin,
the executable is called ``python.exe``; elsewhere it's just ``python``.

Building a complete Python installation requires the use of various
additional third-party libraries, depending on your build platform and
configure options.  Not all standard library modules are buildable or
usable on all platforms.  Refer to the
`Install dependencies <https://devguide.python.org/getting-started/setup-building.html#build-dependencies>`_
section of the `Developer Guide`_ for current detailed information on
dependencies for various Linux distributions and macOS.

On macOS, there are additional configure and build options related
to macOS framework and universal builds.  Refer to `Mac/README.rst
<https://github.com/python/cpython/blob/main/Mac/README.rst>`_.

On Windows, see `PCbuild/readme.txt
<https://github.com/python/cpython/blob/main/PCbuild/readme.txt>`_.

To build Windows installer, see `Tools/msi/README.txt
<https://github.com/python/cpython/blob/main/Tools/msi/README.txt>`_.

If you wish, you can create a subdirectory and invoke configure from there.
For example::

    mkdir debug
    cd debug
    ../configure --with-pydebug
    make
    make test

(This will fail if you *als
```


### shoaib2000857/custom-404

- **Repo link:** https://github.com/shoaib2000857/custom-404
- **Homepage:** https://shoaib2000857.github.io/custom-404/
- **GitHub Pages guess:** https://shoaib2000857.github.io/custom-404/
- **Deployment links:** https://shoaib2000857.github.io/custom-404/
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** HTML
- **Detected stack:** —
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-10-29T13:55:49Z / 2025-10-29T13:59:03Z / 2025-10-29T13:56:42Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-29T13:56:41Z
- **Latest commit SHA:** ad0111ceb39ca68bd37c6baa787435a9d0cb39f4
- **Latest commit message:** Add custom 404 error page
- **README path:** —
- **Tree entries:** 2 
- **Top-level dirs:** —
- **Top-level files:** 404.html, index.html
- **Important files:** index.html
- **Deployment hints:** github_pages
- **Notes:** No README found via API.

#### README excerpt

_No README text found._


### shoaib2000857/daily-activity-log

- **Repo link:** https://github.com/shoaib2000857/daily-activity-log
- **Description:** This is a repository I have made to log and track my daily coding and studies.
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-05-22T07:55:22Z / 2026-04-14T08:21:35Z / 2026-04-14T08:21:24Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-04-14T08:21:22Z
- **Latest commit SHA:** b6ca625e78af8f72c549a2bc7987a8043d65bdc5
- **Latest commit message:** Log block 7 for 2026-04-14
- **README path:** README.md
- **Tree entries:** 332 
- **Top-level dirs:** .github, logs
- **Top-level files:** .gitignore, README.md, activity_logger_auto.py, daily_log.py, log_and_commit.py
- **Important files:** .github/workflows/wakatime-log.yml, README.md
- **Deployment hints:** —

#### README excerpt

```markdown
# daily-activity-log
This is a repository I have made to log and track my daily coding and studies.
```


### shoaib2000857/deploy-smartly

- **Repo link:** https://github.com/shoaib2000857/deploy-smartly
- **Homepage:** https://deployify.shoaibssm.me/
- **Deployment links:** https://deployify.shoaibssm.me/
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** TypeScript
- **Detected stack:** Python, JavaScript, TypeScript, React, Next.js, FastAPI
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2026-02-27T00:48:23Z / 2026-03-08T15:22:36Z / 2026-03-01T10:24:20Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-03-01T10:24:16Z
- **Latest commit SHA:** 607ef6c5ca9a5541160673a6a409cb5a88531589
- **Latest commit message:** fix: replace div with Link for better navigation in AppSidebar
- **README path:** README.md
- **Tree entries:** 144 
- **Top-level dirs:** .lovable, backend, public, src
- **Top-level files:** .gitignore, ARCHITECTURE.md, COMPLETION_SUMMARY.md, FILE_MANIFEST.md, IMPLEMENTATION.md, QUICK_START.md, README.md, SETUP.md, bun.lockb, components.json, eslint.config.js, index.html, package-lock.json, package.json, postcss.config.js, tailwind.config.ts, tsconfig.app.json, tsconfig.json, tsconfig.node.json, vite.config.ts, vitest.config.ts
- **Important files:** README.md, index.html, package-lock.json, package.json, postcss.config.js, tailwind.config.ts, tsconfig.json, vite.config.ts
- **Deployment hints:** docker, github_pages

#### README excerpt

```markdown
<!-- # Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain) -->



# 🚀 AI-Driven Intelligent Deployment Platform

### AI for Bharat Hackathon Submission
---

# 1️⃣ Problem Statement

Developers frequently struggle with configuring deployments, CI/CD pipelines, and cloud environments for each new project. As described in the idea section (page 2) , every project demands:

* Identifying the correct tech stack
* Creating Docker configurations
* Setting up CI/CD pipelines
* Provisioning cloud infrastructure
* Managing environment variables
* Debugging deployment failures

These steps are repetitive, time-consuming, and highly error-prone. Even experienced developers spend significant effort configuring deployments instead of focusing on core product development.

Traditional DevOps tools rely heavily on static templates and manual configuration. They do not truly *understand* the project. As a result:

* Setups are inconsistent
* Infrastructur
```


### shoaib2000857/DeshDarshan-gssoc

- **Repo link:** https://github.com/shoaib2000857/DeshDarshan-gssoc
- **Homepage:** https://sampadatiwari30.github.io/DeshDarshan/
- **Deployment links:** https://sampadatiwari30.github.io/DeshDarshan/
- **Description:** DeshDarshan is a cultural web platform to explore all 28 States and 8 UTs of India. Discover regional food, festivals, dances, heritage sites, and hidden fun facts through interactive cards, image sliders, and modern UI — blending tradition with technology in a unique digital journey.✨
- **Owner:** shoaib2000857
- **Primary language:** HTML
- **Detected stack:** JavaScript
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2025-08-11T17:20:55Z / 2025-08-12T19:05:17Z / 2025-08-12T19:05:11Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-08-12T19:05:11Z
- **Latest commit SHA:** 7706e6d2a71d91c9fc45446b1e8b762c7573d5b8
- **Latest commit message:** Merge branch 'main' into main
- **README path:** README.md
- **Tree entries:** 453 
- **Top-level dirs:** .github, assets, components, css, data, food_images, js, pages
- **Top-level files:** CHATBOT_IMPROVEMENTS.md, CONTRIBUTING.md, Code_of_Conduct.md, LICENSE, README.md, feedback.html, food-details.css, food-details.html, index.html
- **Important files:** README.md, index.html
- **Deployment hints:** github_pages
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
# DeshDarshan 🇮🇳

DeshDarshan is a cultural web platform designed to help explore all 28 States and 8 Union Territories of India. Discover regional food, festivals, dances, heritage sites, and hidden fun facts through interactive cards, image sliders, and modern UI blending tradition with technology in a unique digital journey. ✨

## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/Live_Demo-DeshDarshan-brightgreen?style=for-the-badge&logo=google-chrome)](https://sampadatiwari30.github.io/DeshDarshan/)

🔗 **Live URL:** https://sampadatiwari30.github.io/DeshDarshan/

## 🧩 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Frameworks/Libraries:** Bootstrap 5
- **Design:** Responsive UI/UX, Card-based layout
- **Version Control:** Git, GitHub

## 📂 Folder Structure

```bash
DeshDarshan/
│
├── assets/               # Images and other static resources
├── states/               # Individual state detail pages
├── index.html            # Main homepage
├── style.css             # Custom styles
├── script.js             # JS for state linking
└── README.md             # Project documentation
```

## 🗂️ Table of Contents

1. [🌐 Live Demo](#-live-demo)
2. [🧩 Tech Stack](#-tech-stack)
3. [📂 Folder Structure](#-folder-structure)
4. [🤔 Problem Statement](#-problem-statement)
5. [🌟 Features](#-features)
6. [🛠️ Installation](#️-installation)
7. [💵 How to Contribute](#-how-to-contribute)
8. [📝 Note](#-note)
9. [💗 Contributors](#-our-contributors)
10. [🛠️ Troubleshooting](#️-troubleshooting)
11. [🥑 License](#-license)
12. [⭐ Star the Repo!](#-star-the-repo)
13. [🌸 GSSoC Participation](#-for-gssoc-participation-era)

## 🤔 Problem Statement

India's cultural diversity is often reduced to just a few mainstream destinations. DeshDarshan addresses:

- 🏞️ Lack of platforms showcasing lesser-known cultural locations
- 🎊 No centralized information about regional traditions  
- 🎯 Absence of personalized travel recommendations

## 🌟 Features

**Core Functionalities:**

- 🗺️ **State-wise Exploration**: Detailed cultural profiles
- 📸 **Visual Galleries**: Heritage spot collections
- 🔍 **Smart Recommendations**: Personalized suggestions
- 🧠 **Cultural Quizzes**: Interactive learning
- 📅 **Interactive Festival Calendar**: Browse and filter festivals across India
- 🌐 **Multi-language Support**: Coming soon

## 🛠️ Installation

1. Fork the repository
2. Clone locally:
```bash
git clone https://github.com/sampadatiwari30/DeshDarshan.git
cd DeshDarshan
```

## 💵 How to Contribute

We ❤️ Open Source and beginner-friendly contributions!  
Follow these steps to get started:

1. Check existing issues or create one describing your feature/bug.  
2. Comment on the issue to get assigned.  
3. Fork 🍴 → Clone 👥 → Create a new branch:

```bash
# Fork in your GitHub account
git clone https://github.com/sampadatiwari30/DeshDarshan.git
cd DeshDarshan
```
```bash
# Create a new branch
git checkout -b feature/your-feature-name
```
```bash 
# Make your changes, then:
git add .
g
```


### shoaib2000857/ElyonTheGuide

- **Repo link:** https://github.com/shoaib2000857/ElyonTheGuide
- **Homepage:** https://elyon.shoaibssm.me/
- **Deployment links:** https://elyon.shoaibssm.me/
- **Description:** This a AI voice based chat and assistance service.
- **Owner:** shoaib2000857
- **Primary language:** JavaScript
- **Detected stack:** JavaScript, React, Next.js
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 2 / 0 / 2
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2024-12-29T05:56:36Z / 2025-06-16T13:38:56Z / 2025-01-20T23:44:25Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-01-20T23:44:16Z
- **Latest commit SHA:** dbb9bbaa1cb4999686575d8a87471e5aa66c8da1
- **Latest commit message:** Fixed minor issues
- **README path:** README.md
- **Tree entries:** 32 
- **Top-level dirs:** app, components, public
- **Top-level files:** .gitignore, README.md, eslint.config.mjs, jsconfig.json, next.config.mjs, package-lock.json, package.json, postcss.config.mjs, tailwind.config.mjs
- **Important files:** README.md, next.config.mjs, package-lock.json, package.json, postcss.config.mjs, tailwind.config.mjs
- **Deployment hints:** vercel

#### README excerpt

```markdown
# Elyon The Guide

Elyon The Guide is a thoughtful chatbot experience with a wise mentor named Elyon. Elyon is an ancient being who has spent centuries gathering knowledge and learning from diverse cultures, fields, and philosophies. Elyon provides thoughtful advice, helping users learn and grow by offering insights, analogies, and reflections.

## Features

- **Chat Interface**: Engage in conversations with Elyon through a user-friendly chat interface.
- **Voice Recognition**: Use voice commands to interact with Elyon.
- **Text-to-Speech**: Elyon can speak responses aloud.
- **Language Support**: Supports multiple languages for both text and voice interactions.
- **Persona Page**: Learn more about Elyon's backstory and personality traits.

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/shoaib2000857/ElyonTheGuide.git
    cd ElyonTheGuide
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a [.env.local](http://_vscodecontentref_/2) file in the root directory and add your environment variables:
    ```env
    NEXT_GEMINI_API=your_google_generative_ai_api_key
    ```

4. **Run the development server**:
    ```sh
    npm run dev
    ```

5. **Build for production**:
    ```sh
    npm run build
    ```

6. **Start the production server**:
    ```sh
    npm start
    ```

## Usage

- **Chat Interface**: Navigate to the chat page to start a conversation with Elyon.
- **Voice Commands**: Use the microphone button to start and stop voice recognition.
- **Learn About Elyon**: Visit the persona page to learn more about Elyon's backstory and personality traits.

## Project Structure

- [ChatInterface.js](http://_vscodecontentref_/3): The main chat interface component.
- [page.js](http://_vscodecontentref_/4): The main landing page.
- [page.js](http://_vscodecontentref_/5): The persona page with Elyon's backstory.
- [route.js](http://_vscodecontentref_/6): The API route for handling NLP requests.

## Hosting

This project is hosted on [https://elyon.shoaibssm.me/](https://elyon.shoaibssm.me/).

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Vercel](https://vercel.com/)
- [Google Generative AI](https://cloud.google.com/ai-platform/generative-ai)

## Contact

For any inquiries, please contact [your-email@example.com].
```


### shoaib2000857/Final-Project

- **Repo link:** https://github.com/shoaib2000857/Final-Project
- **Homepage:** https://cs50project.shoaibssm.me/
- **Deployment links:** https://cs50project.shoaibssm.me/
- **Description:** Task Master. My CS50 Final Project
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python, JavaScript, Flask, C/C++, Data Science / ML
- **Topics:** —
- **License:** GNU General Public License v3.0
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2024-09-01T15:22:41Z / 2024-12-26T13:58:42Z / 2024-12-26T13:58:39Z
- **Default branch:** master
- **Latest release:** —
- **Latest commit date:** 2024-12-26T13:58:39Z
- **Latest commit SHA:** dbdcb1680019ae357a1a6324c7372ea7067b1a45
- **Latest commit message:** Update app.py
- **README path:** README.md
- **Tree entries:** 2885 
- **Top-level dirs:** .venv, __pycache__, instance, migrations, static, templates
- **Top-level files:** LICENSE.md, Procfile, README.md, app.py, config.py, extensions.py, forms.py, init_db.py, models.py, requirements.txt, vercel.json
- **Important files:** Procfile, README.md, app.py, requirements.txt, vercel.json
- **Deployment hints:** github_pages, vercel

#### README excerpt

```markdown
# TaskMaster Pro

## Description
TaskMaster Pro is a robust web application designed to help users efficiently schedule their tasks and manage their timetables. Whether you're a student, professional, or anyone needing to organize their daily activities, TaskMaster Pro provides a user-friendly interface and powerful features to keep you on track. The application includes secure user authentication to ensure a personalized and secure experience for each user.

### Key Features
- **Task Scheduling**: Easily add, edit, and delete tasks. Each task can include optional details such as due date, time, priority, and completion status. This feature ensures that users can keep track of their tasks and prioritize them according to their needs.
- **Timetable Management**: Manage your daily, weekly, or monthly timetable with ease. Add, edit, and delete timetable entries with specific start and end times. This feature is perfect for students managing their class schedules or professionals organizing their work meetings.
- **User Authentication**: Secure login and signup functionality ensures that each user's data is protected. Users can create an account, log in, and manage their tasks and timetables in a secure environment.

### Why TaskMaster Pro?
In today's fast-paced world, managing tasks and schedules efficiently is crucial. TaskMaster Pro is designed to be your go-to tool for task management and timetable organization. Here are some reasons why TaskMaster Pro stands out:

1. **User-Friendly Interface**: The application is designed with a clean and intuitive interface, making it easy for users of all ages to navigate and use.
2. **Customization**: Users can customize their tasks and timetables according to their preferences. Whether it's setting a high-priority task or scheduling a recurring event, TaskMaster Pro has got you covered.
3. **Security**: With user authentication, your data is safe and secure. Only you can access your tasks and timetables.
4. **Accessibility**: TaskMaster Pro is accessible from any device with an internet connection. Whether you're on your computer, tablet, or smartphone, you can manage your tasks and schedules on the go.
5. **Efficiency**: By keeping all your tasks and schedules in one place, TaskMaster Pro helps you stay organized and efficient, reducing the stress of managing multiple commitments.

## Live Demo
Experience TaskMaster Pro in action by visiting our live demo at [cs50Project.shoaibssm.me](http://cs50Project.shoaibssm.me). Please note that it may take up to 1 minute for the server to activate due to hosting-related issues, which we are working to resolve shortly.

## Installation (For Local Installation)
Follow these steps to set up TaskMaster Pro on your local machine:

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    ```

2. **Navigate to the project directory**:
    ```sh
    cd project-directory
    ```

3. **Set up a virtual environment** (optional but recommended):
    ```sh
    p
```


### Jivraj-18/Frontend

- **Repo link:** https://github.com/Jivraj-18/Frontend
- **Homepage:** https://sundarbans.iitmbs.org
- **Deployment links:** https://sundarbans.iitmbs.org
- **Description:** VueJs Frontend for Sundarbans Website
- **Owner:** Jivraj-18
- **Primary language:** —
- **Detected stack:** JavaScript, React, Vue, Django
- **Topics:** —
- **License:** GNU General Public License v3.0
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2025-09-08T18:19:35Z / 2025-09-08T18:19:36Z / 2025-03-21T19:26:43Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-03-21T19:26:43Z
- **Latest commit SHA:** 5d3b8aec31d1bff730dd74266c306d2963dd8ad2
- **Latest commit message:** Merge pull request #92 from ravikumawat7716/main
- **README path:** README.md
- **Tree entries:** 74 
- **Top-level dirs:** .github, public, src, tests
- **Top-level files:** .eslintrc.js, .gitignore, CODE_OF_CONDUCT.md, CONTRIBUTING.md, LICENSE, README.md, SECURITY.md, babel.config.js, jest.config.js, jsconfig.json, package-lock.json, package.json, postcss.config.js, tailwind.config.js, vue.config.js
- **Important files:** README.md, package-lock.json, package.json, postcss.config.js, tailwind.config.js
- **Deployment hints:** github_pages
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
# Sundarbans House IIT M Web Application ✨

Welcome to the frontend repository of the Sundarbans House IITM's web application! Here, you can stay updated with the latest news, events, and general details about the house representatives, clubs, and your personal group. To access the features, simply sign in with your official IITM student email and let the magic happen!

![Sundarbans House](https://github.com/SundarbansWebOps/Frontend/blob/main/src/assets/docs/image1.png)

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing & TechStack](#contributing-and-techstack)
- [Reporting Issues](#reporting-issues)
- [License](#license)


## Getting Started

### Step 1: Sign In
Sign in with your official student gmail account ending with 'iitm.ac.in'.

### Step 2: Explore Your Group
Click on your profile name to find your group number, along with the group leaders' contact information and the WhatsApp group invite link for your group.

![Sundarbans House](https://github.com/SundarbansWebOps/Frontend/blob/main/src/assets/docs/image2.png)

### Step 3: Explore
Relax and explore other sections!

## Usage

- **Events:** Find upcoming and latest events by clicking on the 'Events' link in the navbar.
- **Clubs:** Explore clubs of the Sundarbans House along with their relevant details by clicking on 'Clubs'.
- **Gallery:** Watch the latest videos from the Sundarbans YouTube channel in the 'Gallery' section.
- **Council:** Get to know the Upper House Council Representatives, Active House Council, WebOps Team, Graphics Team, etc. at 'Council'.

## Contributing and TechStack

The Current TechStack is:

[![Stack](https://skillicons.dev/icons?i=vue,js,tailwind,django)](https://skillicons.dev)


You can contribute to this project by:

- Adding new features
- Improving the UI/UX
- Fixing bugs
- Enhancing/writing unit tests
- Working on documentation

Please create an issue before starting any work. Once you get approval on your issue, create a new branch and submit your changes in a PR. Ensure all tests are passed and wait for the PR to get reviewed by the WebOps team.

For a detailed contributing guide, refer to [How to Contribute](https://github.com/SundarbansWebOps/Frontend/blob/main/CONTRIBUTING.md).

## Reporting Issues

You can report any issues that you find within the app by 'Creating a New Issue' in the Issues tab or by mailing the Sundarbans Web Admin at [sundarbans-webad@ds.study.iitm.ac.in](mailto:sundarbans-webad@ds.study.iitm.ac.in)

## License

This is an open-source project licensed under the [GPL-3.0 license](https://github.com//blob/main/LICENSE).

## Don't Forget to Star ⭐ the Repository! 

And feel free to contribute and make our web application even more amazing!!!
```


### SundarbansWebOps/Frontend

- **Repo link:** https://github.com/SundarbansWebOps/Frontend
- **Homepage:** https://sundarbans.iitmbs.org
- **GitHub Pages guess:** https://SundarbansWebOps.github.io/Frontend/
- **Deployment links:** https://sundarbans.iitmbs.org, https://SundarbansWebOps.github.io/Frontend/
- **Description:** VueJs Frontend for Sundarbans Website
- **Owner:** SundarbansWebOps
- **Primary language:** Vue
- **Detected stack:** JavaScript, React, Vue, Django
- **Topics:** javascript, tailwindcss, vuejs, hacktoberfest, django, iitm, github-actions, vercel
- **License:** GNU General Public License v3.0
- **Stars / Forks / Watchers:** 14 / 41 / 14
- **Open issues:** 8
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2023-12-07T11:21:05Z / 2026-03-02T10:42:30Z / 2025-10-18T12:27:17Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-18T12:27:16Z
- **Latest commit SHA:** 3bfe6bcea6dcf637cb8f287ae5b5445ac9f673ff
- **Latest commit message:** Merge pull request #99 from shoaib2000857/main
- **README path:** README.md
- **Tree entries:** 202 
- **Top-level dirs:** .github, assets, public, src, tests
- **Top-level files:** .eslintrc.js, .gitignore, .nvmrc, CODE_OF_CONDUCT.md, CONTRIBUTING.md, LICENSE, README.md, SECURITY.md, TEMPORARY_MODIFICATIONS.md, babel.config.js, jest.config.js, jsconfig.json, package-lock.json, package.json, postcss.config.js, tailwind.config.js, test-build.txt, vue.config.js
- **Important files:** README.md, package-lock.json, package.json, postcss.config.js, tailwind.config.js
- **Deployment hints:** github_pages

#### README excerpt

```markdown
# Sundarbans House IIT M Web Application ✨

Welcome to the frontend repository of the Sundarbans House IITM's web application! Here, you can stay updated with the latest news, events, and general details about the house representatives, clubs, and your personal group. To access the features, simply sign in with your official IITM student email and let the magic happen!

![Sundarbans House](https://github.com/SundarbansWebOps/Frontend/blob/main/src/assets/docs/image1.png)

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing & TechStack](#contributing-and-techstack)
- [Reporting Issues](#reporting-issues)
- [License](#license)


## Getting Started

### Step 1: Sign In
Sign in with your official student gmail account ending with 'iitm.ac.in'.

### Step 2: Explore Your Group
Click on your profile name to find your group number, along with the group leaders' contact information and the WhatsApp group invite link for your group.

![Sundarbans House](https://github.com/SundarbansWebOps/Frontend/blob/main/src/assets/docs/image2.png)

### Step 3: Explore
Relax and explore other sections!

## Usage

- **Events:** Find upcoming and latest events by clicking on the 'Events' link in the navbar.
- **Clubs:** Explore clubs of the Sundarbans House along with their relevant details by clicking on 'Clubs'.
- **Gallery:** Watch the latest videos from the Sundarbans YouTube channel in the 'Gallery' section.
- **Council:** Get to know the Upper House Council Representatives, Active House Council, WebOps Team, Graphics Team, etc. at 'Council'.

## Contributing and TechStack

The Current TechStack is:

[![Stack](https://skillicons.dev/icons?i=vue,js,tailwind,django)](https://skillicons.dev)


You can contribute to this project by:

- Adding new features
- Improving the UI/UX
- Fixing bugs
- Enhancing/writing unit tests
- Working on documentation

Please create an issue before starting any work. Once you get approval on your issue, create a new branch and submit your changes in a PR. Ensure all tests are passed and wait for the PR to get reviewed by the WebOps team.

For a detailed contributing guide, refer to [How to Contribute](https://github.com/SundarbansWebOps/Frontend/blob/main/CONTRIBUTING.md).

## Reporting Issues

You can report any issues that you find within the app by 'Creating a New Issue' in the Issues tab or by mailing the Sundarbans Web Admin at [sundarbans-webad@ds.study.iitm.ac.in](mailto:sundarbans-webad@ds.study.iitm.ac.in)

## License

This is an open-source project licensed under the [GPL-3.0 license](https://github.com//blob/main/LICENSE).

## Don't Forget to Star ⭐ the Repository! 

And feel free to contribute and make our web application even more amazing!!!
```


### sunderbansiitmpod/Frontend

- **Repo link:** https://github.com/sunderbansiitmpod/Frontend
- **Homepage:** https://sundarbans.iitmbs.org
- **Deployment links:** https://sundarbans.iitmbs.org
- **Description:** VueJs Frontend for Sundarbans Website
- **Owner:** sunderbansiitmpod
- **Primary language:** Vue
- **Detected stack:** JavaScript, React, Vue, Django
- **Topics:** —
- **License:** GNU General Public License v3.0
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2024-09-15T10:39:16Z / 2025-03-21T19:08:36Z / 2025-03-21T19:08:28Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2024-12-30T14:11:46Z
- **Latest commit SHA:** 2eefbe25f82c2c3f1c2dd2802497049ea2564b8e
- **Latest commit message:** Merge pull request #90 from Jivraj-18/main
- **README path:** README.md
- **Tree entries:** 74 
- **Top-level dirs:** .github, public, src, tests
- **Top-level files:** .eslintrc.js, .gitignore, CODE_OF_CONDUCT.md, CONTRIBUTING.md, LICENSE, README.md, SECURITY.md, babel.config.js, jest.config.js, jsconfig.json, package-lock.json, package.json, postcss.config.js, tailwind.config.js, vue.config.js
- **Important files:** README.md, package-lock.json, package.json, postcss.config.js, tailwind.config.js
- **Deployment hints:** github_pages
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
# Sundarbans House IIT M Web Application ✨

Welcome to the frontend repository of the Sundarbans House IITM's web application! Here, you can stay updated with the latest news, events, and general details about the house representatives, clubs, and your personal group. To access the features, simply sign in with your official IITM student email and let the magic happen!

![Sundarbans House](https://github.com/SundarbansWebOps/Frontend/blob/main/src/assets/docs/image1.png)

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing & TechStack](#contributing-and-techstack)
- [Reporting Issues](#reporting-issues)
- [License](#license)


## Getting Started

### Step 1: Sign In
Sign in with your official student gmail account ending with 'iitm.ac.in'.

### Step 2: Explore Your Group
Click on your profile name to find your group number, along with the group leaders' contact information and the WhatsApp group invite link for your group.

![Sundarbans House](https://github.com/SundarbansWebOps/Frontend/blob/main/src/assets/docs/image2.png)

### Step 3: Explore
Relax and explore other sections!

## Usage

- **Events:** Find upcoming and latest events by clicking on the 'Events' link in the navbar.
- **Clubs:** Explore clubs of the Sundarbans House along with their relevant details by clicking on 'Clubs'.
- **Gallery:** Watch the latest videos from the Sundarbans YouTube channel in the 'Gallery' section.
- **Council:** Get to know the Upper House Council Representatives, Active House Council, WebOps Team, Graphics Team, etc. at 'Council'.

## Contributing and TechStack

The Current TechStack is:

[![Stack](https://skillicons.dev/icons?i=vue,js,tailwind,django)](https://skillicons.dev)


You can contribute to this project by:

- Adding new features
- Improving the UI/UX
- Fixing bugs
- Enhancing/writing unit tests
- Working on documentation

Please create an issue before starting any work. Once you get approval on your issue, create a new branch and submit your changes in a PR. Ensure all tests are passed and wait for the PR to get reviewed by the WebOps team.

For a detailed contributing guide, refer to [How to Contribute](https://github.com/SundarbansWebOps/Frontend/blob/main/CONTRIBUTING.md).

## Reporting Issues

You can report any issues that you find within the app by 'Creating a New Issue' in the Issues tab or by mailing the Sundarbans Web Admin at [sundarbans-webad@ds.study.iitm.ac.in](mailto:sundarbans-webad@ds.study.iitm.ac.in)

## License

This is an open-source project licensed under the [GPL-3.0 license](https://github.com//blob/main/LICENSE).

## Don't Forget to Star ⭐ the Repository! 

And feel free to contribute and make our web application even more amazing!!!
```


### shoaib2000857/Frontend-sundarbans

- **Repo link:** https://github.com/shoaib2000857/Frontend-sundarbans
- **Homepage:** https://sundarbans.iitmbs.org
- **Deployment links:** https://sundarbans.iitmbs.org
- **Description:** VueJs Frontend for Sundarbans Website
- **Owner:** shoaib2000857
- **Primary language:** Vue
- **Detected stack:** JavaScript, React, Vue, Django
- **Topics:** —
- **License:** GNU General Public License v3.0
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2025-09-08T18:14:22Z / 2025-10-18T12:24:56Z / 2025-10-18T12:24:52Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-18T12:24:52Z
- **Latest commit SHA:** c86c88849c248df43e3c26db53500778ff715be6
- **Latest commit message:** Merge branch 'SundarbansWebOps:main' into main
- **README path:** README.md
- **Tree entries:** 202 
- **Top-level dirs:** .github, assets, public, src, tests
- **Top-level files:** .eslintrc.js, .gitignore, .nvmrc, CODE_OF_CONDUCT.md, CONTRIBUTING.md, LICENSE, README.md, SECURITY.md, TEMPORARY_MODIFICATIONS.md, babel.config.js, jest.config.js, jsconfig.json, package-lock.json, package.json, postcss.config.js, tailwind.config.js, test-build.txt, vue.config.js
- **Important files:** README.md, package-lock.json, package.json, postcss.config.js, tailwind.config.js
- **Deployment hints:** github_pages
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
# Sundarbans House IIT M Web Application ✨

Welcome to the frontend repository of the Sundarbans House IITM's web application! Here, you can stay updated with the latest news, events, and general details about the house representatives, clubs, and your personal group. To access the features, simply sign in with your official IITM student email and let the magic happen!

![Sundarbans House](https://github.com/SundarbansWebOps/Frontend/blob/main/src/assets/docs/image1.png)

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing & TechStack](#contributing-and-techstack)
- [Reporting Issues](#reporting-issues)
- [License](#license)


## Getting Started

### Step 1: Sign In
Sign in with your official student gmail account ending with 'iitm.ac.in'.

### Step 2: Explore Your Group
Click on your profile name to find your group number, along with the group leaders' contact information and the WhatsApp group invite link for your group.

![Sundarbans House](https://github.com/SundarbansWebOps/Frontend/blob/main/src/assets/docs/image2.png)

### Step 3: Explore
Relax and explore other sections!

## Usage

- **Events:** Find upcoming and latest events by clicking on the 'Events' link in the navbar.
- **Clubs:** Explore clubs of the Sundarbans House along with their relevant details by clicking on 'Clubs'.
- **Gallery:** Watch the latest videos from the Sundarbans YouTube channel in the 'Gallery' section.
- **Council:** Get to know the Upper House Council Representatives, Active House Council, WebOps Team, Graphics Team, etc. at 'Council'.

## Contributing and TechStack

The Current TechStack is:

[![Stack](https://skillicons.dev/icons?i=vue,js,tailwind,django)](https://skillicons.dev)


You can contribute to this project by:

- Adding new features
- Improving the UI/UX
- Fixing bugs
- Enhancing/writing unit tests
- Working on documentation

Please create an issue before starting any work. Once you get approval on your issue, create a new branch and submit your changes in a PR. Ensure all tests are passed and wait for the PR to get reviewed by the WebOps team.

For a detailed contributing guide, refer to [How to Contribute](https://github.com/SundarbansWebOps/Frontend/blob/main/CONTRIBUTING.md).

## Reporting Issues

You can report any issues that you find within the app by 'Creating a New Issue' in the Issues tab or by mailing the Sundarbans Web Admin at [sundarbans-webad@ds.study.iitm.ac.in](mailto:sundarbans-webad@ds.study.iitm.ac.in)

## License

This is an open-source project licensed under the [GPL-3.0 license](https://github.com//blob/main/LICENSE).

## Don't Forget to Star ⭐ the Repository! 

And feel free to contribute and make our web application even more amazing!!!
```


### Vigneshrdy/frontend-vm

- **Repo link:** https://github.com/Vigneshrdy/frontend-vm
- **Description:** —
- **Owner:** Vigneshrdy
- **Primary language:** TypeScript
- **Detected stack:** JavaScript, TypeScript, React
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2026-01-08T15:16:39Z / 2026-01-14T10:10:50Z / 2026-01-14T10:10:47Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-01-14T10:10:46Z
- **Latest commit SHA:** c21bed6ed71e4feef71a10f899dc34a20abfe647
- **Latest commit message:** Change route parameter from 'shareId' to 'id'
- **README path:** README.md
- **Tree entries:** 115 
- **Top-level dirs:** public, src
- **Top-level files:** .gitignore, README.md, components.json, eslint.config.js, index.html, package-lock.json, package.json, postcss.config.js, tailwind.config.ts, tsconfig.app.json, tsconfig.json, tsconfig.node.json, vite.config.ts
- **Important files:** README.md, index.html, package-lock.json, package.json, postcss.config.js, tailwind.config.ts, tsconfig.json, vite.config.ts
- **Deployment hints:** github_pages

#### README excerpt

```markdown
Hello
```


### shoaib2000857/GroupG

- **Repo link:** https://github.com/shoaib2000857/GroupG
- **Homepage:** https://teamg-opal.vercel.app
- **Deployment links:** https://teamg-opal.vercel.app, https://teamg-opal.vercel.app/
- **Description:** Google GEN AI Exchange Hackathon IITM BS Team G Project on Challenge 9.
- **Owner:** shoaib2000857
- **Primary language:** JavaScript
- **Detected stack:** JavaScript, TypeScript, React, Next.js
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2024-09-20T14:33:10Z / 2024-10-13T19:34:13Z / 2024-09-25T14:18:45Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2024-09-25T14:18:45Z
- **Latest commit SHA:** 31a7d22af0a34344b7aabd1fdb1b66ce92020904
- **Latest commit message:** Update hero.js
- **README path:** README.md
- **Tree entries:** 36 
- **Top-level dirs:** app, components, public
- **Top-level files:** .eslintrc.json, .gitignore, README.md, env.semple, jsconfig.json, next.config.mjs, package-lock.json, package.json, postcss.config.mjs, tailwind.config.js, tsconfig.json
- **Important files:** README.md, next.config.mjs, package-lock.json, package.json, postcss.config.mjs, tailwind.config.js, tsconfig.json
- **Deployment hints:** vercel

#### README excerpt

```markdown
[<div><Img alt="big-image" src='public/hackathon.jpg'></div>](https://teamg-opal.vercel.app/)

# Image & Video Generator

This project is a web application that allows users to generate Image and Video.

## Features

- Very Soon...

## Technologies Used

- Next.js
- React
- Tailwind CSS

## Getting Started

1.  Clone the repository

```bash
git clone https://github.com/shoaib2000857/GroupG.git
cd GroupG
```

2.  Install dependencies:

```bash
npm install
```

3.  Run the development server:

```bash
npm run dev
```

4.  Open your browser and go to

```bash
http://localhost:3000
```

## How to Use

Soon...

## Future Improvements

- Add the ability to save generated teams
- Implement an algorithm for more balanced teams
- Improve the user interface

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## Managing

- [Ashutosh Gaurav](https://www.linkedin.com/in/ashutosh-li)
- [SHOAIB SALEHMOHAMED](https://github.com/shoaib2000857)
- [Marmik Gajbhiye](https://github.com/Marmikgaj)
- [Tejas Vijaya](https://github.com/TejasVijaya74)
```


### as-ga/hacksprint

- **Repo link:** https://github.com/as-ga/hacksprint
- **Homepage:** https://learnxcel.vercel.app
- **Deployment links:** https://learnxcel.vercel.app
- **Description:** HackSprint is a 5-day online hackathon focused on web development
- **Owner:** as-ga
- **Primary language:** JavaScript
- **Detected stack:** JavaScript, React, Next.js, Flask
- **Topics:** ax, next-, nextjs15, tailwindcss
- **License:** —
- **Stars / Forks / Watchers:** 0 / 1 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-01-02T11:56:12Z / 2025-01-21T10:34:00Z / 2025-01-21T10:33:56Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-01-21T10:33:53Z
- **Latest commit SHA:** 5d7d3c07ca3782004821e57296dca3649edbbeeb
- **Latest commit message:** Merge branch 'main' of http://github.com/as-ga/hacksprint
- **README path:** README.md
- **Tree entries:** 73 
- **Top-level dirs:** app, components, lib, models, public
- **Top-level files:** .gitignore, README.md, env.sample, favicon.ico, jsconfig.json, middleware.js, next.config.mjs, package-lock.json, package.json, postcss.config.mjs, tailwind.config.mjs
- **Important files:** README.md, next.config.mjs, package-lock.json, package.json, postcss.config.mjs, tailwind.config.mjs
- **Deployment hints:** vercel

#### README excerpt

```markdown
[<div><Img alt="LearnXcel" src='public/home.png'></div>](https://learnxcel.vercel.app)

# LearnXcel

This is a project that combines a `Next.js`. The frontend is built using Next.js, a React framework, while the backend is powered by Flask, a lightweight Python web framework.

## Locally Setup

1. **Install Dependencies**: Navigate to the `frontend` directory and install the required npm packages listed in `package.json`.

   ```
   npm install
   ```

2. **Run the Next.js Application**: Start the Next.js development server by running the following command in the `frontend` directory:

   ```
   npm run dev
   ```

   The Next.js application will be available at `http://localhost:3000`.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Make sure to follow the coding standards and best practices.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
```


### shoaib2000857/java-describer

- **Repo link:** https://github.com/shoaib2000857/java-describer
- **GitHub Pages guess:** https://shoaib2000857.github.io/java-describer/
- **Deployment links:** https://shoaib2000857.github.io/java-describer/
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** HTML
- **Detected stack:** —
- **Topics:** —
- **License:** Other
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-10-15T14:07:20Z / 2025-10-15T14:07:26Z / 2025-10-15T14:07:23Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-15T14:07:19Z
- **Latest commit SHA:** 39da49f3cc2fe6e74eca8bb882f56428e153d39b
- **Latest commit message:** init with Pages workflow
- **README path:** README.md
- **Tree entries:** 6 
- **Top-level dirs:** .github
- **Top-level files:** LICENSE, README.md, index.html
- **Important files:** .github/workflows/pages.yml, README.md, index.html
- **Deployment hints:** github_pages

#### README excerpt

```markdown
# Auto App for java-describer

Brief: Publish a static page that gives a basic description of java.
```


### shoaib2000857/lar-workshop

- **Repo link:** https://github.com/shoaib2000857/lar-workshop
- **Description:** WIP logs of Lalitha A R - iSRL, more rough and messy than sandbox-research. Exclusive for anyone who ever questioned the sanity of the lead lab (everyone probably)
- **Owner:** shoaib2000857
- **Primary language:** —
- **Detected stack:** Python, JavaScript, Data Science / ML
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2026-04-06T04:53:05Z / 2026-04-06T04:53:05Z / 2026-04-02T10:35:35Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-03-27T16:32:57Z
- **Latest commit SHA:** 51cb8754841eba43b5aafc16a102b52c2f50ff25
- **Latest commit message:** add variant_class_analysis.py — rule-based signal/noise classification of 1,666 variants
- **README path:** —
- **Tree entries:** 300 
- **Top-level dirs:** additives, caas, colors, content-pipeline, core, fortification_agent, health_supplement, solvent
- **Top-level files:** category-session-sop.ipynb, experiment.log.md, last_session_summary.md
- **Important files:** —
- **Deployment hints:** —
- **Notes:** No README found via API. | Repository is a fork.

#### README excerpt

_No README text found._


### shoaib2000857/Legal-LLM

- **Repo link:** https://github.com/shoaib2000857/Legal-LLM
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Jupyter Notebook
- **Detected stack:** Data Science / ML
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 1 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-08-16T16:48:40Z / 2025-12-27T13:23:00Z / 2025-12-27T13:22:57Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-12-27T13:22:56Z
- **Latest commit SHA:** b379a58aeb1e8f48fb76fa0313d1dcba4364a32a
- **Latest commit message:** Add files via upload
- **README path:** —
- **Tree entries:** 53 
- **Top-level dirs:** FINE-TUNE, IndicLegalQA Dataset, data
- **Top-level files:** .gitignore, IPC_186045.pdf, butget.txt, datasets.txt, repealedfileopen.pdf
- **Important files:** —
- **Deployment hints:** —
- **Notes:** No README found via API.

#### README excerpt

_No README text found._


### shoaib2000857/LetsDoDsaTogether-gssoc

- **Repo link:** https://github.com/shoaib2000857/LetsDoDsaTogether-gssoc
- **Homepage:** https://lets-do-dsa-together.vercel.app
- **Deployment links:** https://lets-do-dsa-together.vercel.app, https://firstcontributions.github.io/
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** JavaScript
- **Detected stack:** JavaScript, React
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2025-07-31T11:53:41Z / 2025-09-14T15:55:21Z / 2025-09-14T15:55:15Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-09-08T14:00:09Z
- **Latest commit SHA:** 6aaad7282e244e80ff9a5569ece84139c6760c93
- **Latest commit message:** Merge pull request #172 from Adez017/templates
- **README path:** README.md
- **Tree entries:** 99 
- **Top-level dirs:** .github, public, src
- **Top-level files:** .env, .env.example, .gitignore, .txt, CHATBOT_README.md, CODE_OF_CONDUCT.md, CONTRIBUTING.md, LICENSE, README.md, eslint.config.js, index.html, package-lock.json, package.json, postcss.config.js, tailwind.config.js, vercel.json, vite.config.js
- **Important files:** .github/workflows/issue-create-automate-message.yml, README.md, index.html, package-lock.json, package.json, postcss.config.js, tailwind.config.js, vercel.json, vite.config.js
- **Deployment hints:** github_pages, vercel
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
<div align="center">
  <h1>Let's Do DSA Together 🚀</h1>
  <p>A clean, beginner-friendly React + Tailwind CSS platform to learn Data Structures & Algorithms the smart way.</p>

  <img src="https://img.shields.io/badge/Made%20with-React-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Level-Beginner%20Friendly-success?style=for-the-badge" />
</div>

---

## 📖 Overview

**LetsDoDSATogether** is a clean, community-powered DSA learning platform where learners can connect through Discord, explore curated resources, and solve problems collaboratively. It's designed to make learning DSA less isolating and more empowering — together, not alone.

Built using:
- ⚛️ React
- 💨 Tailwind CSS
- 🧾 HTML & CSS
- 🎯 Clean state-based UI rendering

---

🚀 **Live Demo** 👉 [lets-do-dsa-together.vercel.app](https://lets-do-dsa-together.vercel.app)

---

## 📂 Project Structure

![image](https://github.com/user-attachments/assets/faa606b0-4366-46ad-9304-d334250764f6)

---

## 🚀 Getting Started

### 🛠️ Prerequisites

- Node.js (v18+ or v20+ recommended)
- npm or yarn
- Git


## 🙋‍♀ How to Contribute

✨ Contributions are super welcome! Here's how:

1. Fork the repository.

2. Clone your fork:

```bash
git clone "https://github.com/your-username/LetsDoDSATogether.git"
```

3. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

4. Make your changes and test locally.

5. Commit with a clear message.

```bash
git commit -m "feat: Add XYZ feature"
```

6. Push and create a Pull Request.

## 🔧 Installation
```bash
git clone "https://github.com/yourusername/LetsDoDSATogether.git"

cd LetsDoDSATogether
```

### Install dependencies
```bash
npm install
```

### Start the dev server
```bash
npm run dev
``` 
## 📄 License
This project is licensed under the MIT License.


## 🌱 Learning Resources

New to open source? Check these out:
- [First Contributions](https://firstcontributions.github.io/)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)


## 📞 Contact

- **PA**: [Vaishnavi-Manne](https://discord.gg/sP8DmnMh)
- **Mentors**:[Nikhil Deshmukh](https://www.linkedin.com/in/nikhil-d-deshmukh/) ||[Nouman khan](https://www.linkedin.com/in/nouman-khan-95923a256/)
- **Discord**:[Join This](https://chat.whatsapp.com/Iy7ybWuY2zA0oZhqq0U5vv)
- **Discussions**:[Try to communicate/get ur queries clarified through github discussion](https://github.com/Vaishnavi-Manne/LetsDoDsaTogether/discussions)
- **Issues**: [GitHub Issues](https://github.com/Vaishnavi-Manne/LetsDoDsaTogether/issues)

---

**Happy Contributing! 🎉**

*This project is part of learning open-source contribution. Every contribution, no matter how small, is valued and appreciated!*

⭐ Star this repo to show your support
```


### shoaib2000857/lexiclear-genai-exchange

- **Repo link:** https://github.com/shoaib2000857/lexiclear-genai-exchange
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 1 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-09-09T14:46:17Z / 2026-01-29T16:09:29Z / 2026-01-29T16:05:02Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-01-29T16:05:02Z
- **Latest commit SHA:** 16342af5829f7f7f3a6e3e940c384a60f0190cee
- **Latest commit message:** Added Dev Container Folder
- **README path:** README.md
- **Tree entries:** 33 
- **Top-level dirs:** .devcontainer, .streamlit, .vscode, data, src
- **Top-level files:** .env.example, .gitignore, DEPLOYMENT.md, PROTOTYPE_SUMMARY.md, README.md, app.py, demo.py, requirements.txt, setup.sh, start.sh, test_api.py, test_gemini_api.sh, test_gemini_prompts.sh, test_legal_scenarios.sh, test_new_model.sh, test_setup.py
- **Important files:** README.md, app.py, requirements.txt
- **Deployment hints:** streamlit

#### README excerpt

```markdown
# Legal Reader 🏛️

**AI-Powered Legal Document Analyzer**

Legal Reader is an intelligent web application that uses Google's Gemini AI to simplify complex legal documents into clear, accessible guidance. It empowers users to understand their legal documents, identify potential risks, and make informed decisions.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.8+-blue.svg)
![Streamlit](https://img.shields.io/badge/streamlit-1.29+-red.svg)

## 🎯 Problem Statement

Legal documents—such as rental agreements, loan contracts, and terms of service—are often filled with complex, impenetrable jargon that is incomprehensible to the average person. This creates a significant information asymmetry, where individuals may unknowingly agree to unfavorable terms, exposing them to financial and legal risks.

## 🚀 Solution

Legal Reader bridges this gap by providing:

- **📋 Document Summaries**: Clear, concise summaries of complex legal documents
- **🔑 Key Terms Analysis**: Important clauses explained in plain English
- **⚠️ Risk Detection**: Identification of potential red flags and unfavorable terms
- **💬 Plain English Translation**: Complex legal language simplified
- **✅ Action Items**: Specific recommendations before signing
- **💬 Interactive Q&A**: Chat interface to ask questions about your document

## 🌟 Features

### Core Functionality
- **Multi-format Support**: Upload PDF, DOCX, or TXT files
- **AI-Powered Analysis**: Uses Google Gemini Pro for comprehensive document analysis
- **Interactive Chat**: Ask specific questions about your document
- **Risk Assessment**: Identifies potential legal and financial risks
- **Document Statistics**: Visual representation of document metrics
- **Report Generation**: Download comprehensive analysis reports

### User Experience
- **Intuitive Interface**: Clean, easy-to-use web interface
- **Real-time Processing**: Fast document analysis and response
- **Privacy-Focused**: Documents are not stored or shared
- **Mobile Responsive**: Works on desktop and mobile devices

## 🛠️ Technology Stack

- **Frontend**: Streamlit
- **AI/ML**: Google Gemini Pro API
- **Document Processing**: PyPDF2, python-docx
- **Visualization**: Plotly
- **Backend**: Python 3.8+

## 📦 Installation

### Prerequisites
- Python 3.8 or higher
- Google API key for Gemini Pro

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/shoaib2000857/Legal-Reader.git
   cd Legal-Reader
   ```

2. **Run the setup script**
   ```bash
   ./setup.sh
   ```

3. **Get your Google API key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the API key

4. **Configure your environment**
   ```bash
   # Edit the .env file and add your API key
   GOOGLE_API_KEY=your_api_key_here
   ```

5. **Run the application**
   ```bash
   source legal_reader_env/bin/activate
   streamlit run app.py
   ```

### Manual Installation

```


### shoaib2000857/LLM-Analysis-TDS-Project-2

- **Repo link:** https://github.com/shoaib2000857/LLM-Analysis-TDS-Project-2
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python, FastAPI, Docker
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-11-28T12:53:35Z / 2025-11-28T14:23:29Z / 2025-11-28T14:23:25Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-11-28T14:23:35Z
- **Latest commit SHA:** 7eb741b87a9091081fe8ec0a90fb2f7525568d93
- **Latest commit message:** updates
- **README path:** README.md
- **Tree entries:** 23 
- **Top-level dirs:** tools
- **Top-level files:** .env.example, .gitattributes, .gitignore, .python-version, Dockerfile, LICENSE, README.md, __init__.py, agent.py, main.py, pyproject.toml, shared_store.py, uv.lock
- **Important files:** Dockerfile, README.md, main.py, pyproject.toml
- **Deployment hints:** docker

#### README excerpt

```markdown
---
title: LLM Analysis Quiz Solver
emoji: 🏃
colorFrom: red
colorTo: blue
sdk: docker
pinned: false
app_port: 7860
license: apache-2.0
---

# LLM Analysis - Autonomous Quiz Solver Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.12+](https://img.shields.io/badge/python-3.12+-blue.svg)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.121.3+-green.svg)](https://fastapi.tiangolo.com/)

An intelligent, autonomous agent built with LangGraph and LangChain that solves data-related quizzes involving web scraping, data processing, analysis, and visualization tasks. The system uses Google's Gemini 2.5 Flash model to orchestrate tool usage and make decisions.

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Tools &amp; Capabilities](#tools--capabilities)
- [Docker Deployment](#docker-deployment)
- [How It Works](#how-it-works)
- [License](#license)

## 🔍 Overview

This project was developed for the TDS (Tools in Data Science) course project, where the objective is to build an application that can autonomously solve multi-step quiz tasks involving:

- **Data sourcing**: Scraping websites, calling APIs, downloading files
- **Data preparation**: Cleaning text, PDFs, and various data formats
- **Data analysis**: Filtering, aggregating, statistical analysis, ML models
- **Data visualization**: Generating charts, narratives, and presentations

The system receives quiz URLs via a REST API, navigates through multiple quiz pages, solves each task using LLM-powered reasoning and specialized tools, and submits answers back to the evaluation server.

## 🏗️ Architecture

The project uses a **LangGraph state machine** architecture with the following components:

```
┌─────────────┐
│   FastAPI   │  ← Receives POST requests with quiz URLs
│   Server    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Agent     │  ← LangGraph orchestrator with Gemini 2.5 Flash
│   (LLM)     │
└──────┬──────┘
       │
       ├────────────┬────────────┬─────────────┬──────────────┐
       ▼            ▼            ▼             ▼              ▼
   [Scraper]   [Downloader]  [Code Exec]  [POST Req]  [Add Deps]
```

### Key Components:

1. **FastAPI Server** (`main.py`): Handles incoming POST requests, validates secrets, and triggers the agent
2. **LangGraph Agent** (`agent.py`): State machine that coordinates tool usage and decision-making
3. **Tools Package** (`tools/`): Modular tools for different capabilities
4. **LLM**: Google Gemini 2.5 Flash with rate limiting (9 requests per minute)

## ✨ Features

- ✅ **Autonomous multi-step problem solving**: Chains together multiple quiz pages
- ✅ **Dynamic JavaScript rendering**: Uses Playwright for client-side re
```


### shoaib2000857/llmpages

- **Repo link:** https://github.com/shoaib2000857/llmpages
- **GitHub Pages guess:** https://shoaib2000857.github.io/llmpages/
- **Deployment links:** https://shoaib2000857.github.io/llmpages/, https://your-username.github.io/your-repo-name/`.
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** HTML
- **Detected stack:** —
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-10-22T09:32:55Z / 2025-10-22T09:34:55Z / 2025-10-22T09:34:51Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-22T09:34:50Z
- **Latest commit SHA:** 249ef2bd14d99b21264b0bd1ac9057b14f293692
- **Latest commit message:** Task LLMPages - Round 1: LLM-generated app update/creation
- **README path:** README.md
- **Tree entries:** 10 
- **Top-level dirs:** —
- **Top-level files:** LICENSE, README.md, about.md, ashravan.txt, dilemma.json, index.html, pelican.svg, prediction.json, restaurant.json, uid.txt
- **Important files:** README.md, index.html
- **Deployment hints:** github_pages

#### README excerpt

```markdown
# Public GitHub Pages Site

## Description
This repository hosts a simple public GitHub Pages site, serving as a collection of various generated files and responses to specific prompts. It demonstrates the ability to structure and present diverse content types, from short stories and ethical dilemmas to SVG graphics and structured data, within a single-page web application.

## Features
*   **Dynamic Content Showcase:** Presents a variety of generated content including a short story, ethical dilemma analysis, personal description, SVG image, restaurant recommendation, and economic prediction.
*   **Single-Page Application:** All content links are managed from a single `index.html` file, leveraging browser navigation for file display.
*   **Responsive Design:** Built with Tailwind CSS CDN for a fully responsive and modern user interface, adapting gracefully to different screen sizes.
*   **Clear Navigation:** Easy access to all linked files with descriptive explanations.
*   **MIT Licensed:** The project includes a clear MIT License for open-source use.

## Usage
To view this project:
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```
2.  **Open `index.html`:** Simply open the `index.html` file in your web browser.
    Alternatively, if hosted on GitHub Pages, navigate to `https://your-username.github.io/your-repo-name/`.

## Files Included
*   `ashravan.txt`: A Brandon Sanderson-inspired short story about Ashravan.
*   `dilemma.json`: An autonomous vehicle ethical dilemma with reasoning.
*   `about.md`: A brief self-description.
*   `pelican.svg`: An SVG illustration of a pelican riding a bicycle.
*   `restaurant.json`: A restaurant recommendation for Mumbai.
*   `prediction.json`: A prediction for the Fed Funds rate by December 2025.
*   `uid.txt`: A unique identifier file, included as-is.
*   `index.html`: The main web page, linking to all other files.
*   `README.md`: This documentation.
*   `LICENSE`: The MIT License for the project.
```


### shoaib2000857/Maargdarshak

- **Repo link:** https://github.com/shoaib2000857/Maargdarshak
- **Homepage:** https://maargadarshak.vercel.app
- **Deployment links:** https://maargadarshak.vercel.app
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** JavaScript
- **Detected stack:** JavaScript, TypeScript, React, Next.js, Flask
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2024-11-20T08:08:41Z / 2024-12-25T06:50:55Z / 2024-12-25T06:50:52Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2024-12-25T06:50:46Z
- **Latest commit SHA:** 3f58e0c992105ea78d8ab3103d374070445a98de
- **Latest commit message:** README Improvement
- **README path:** README.md
- **Tree entries:** 132 
- **Top-level dirs:** ZZExtra, app, components, lib, models, public
- **Top-level files:** .eslintrc.json, .gitignore, README.md, components.json, jsconfig.json, middleware.ts, next.config.mjs, package-lock.json, package.json, postcss.config.js, tailwind.config.js, theme.js
- **Important files:** README.md, next.config.mjs, package-lock.json, package.json, postcss.config.js, tailwind.config.js
- **Deployment hints:** vercel

#### README excerpt

```markdown
# Maargadarshak

Welcome to Maargadarshak, your intelligent study companion designed to enhance your learning experience through interactive and AI-driven features.

## Features

- **Interactive Learning**: Provides crystal-clear explanations, comprehensive step-by-step solutions, and tailored personalized learning tips.
- **AI-Driven Learning**: A collaborative, inclusive space where students connect, share knowledge, exchange insights, and find inspiring encouragement throughout their educational journey.
- **Supportive Community**: Dynamically generates personalized assessments that precisely target specific learning topics, meticulously track individual progress, and systematically enhance subject understanding.
- **Custom Quizzes**: Empowers educators to efficiently post grades, share real-time announcements, and maintain transparent communication, keeping students consistently informed and organized.

## Project Structure

The project has the following structure:

```
Hackathon/
  ├── .env.local
  ├── .eslintrc.json
  ├── .gitignore
  ├── .next/
  │   ├── app-build-manifest.json
  │   ├── build-manifest.json
  │   ├── cache/
  │   ├── package.json
  │   ├── react-loadable-manifest.json
  │   ├── server/
  │   ├── static/
  │   └── types/
  ├── app/
  │   ├── api/
  │   ├── buttonn/
  │   ├── card/
  │   ├── chatbot/
  │   ├── complier/
  │   ├── dashboard/
  │   ├── feature/
  │   ├── fonts/
  │   ├── forums/
  │   ├── globals.css
  │   ├── layout.js
  │   ├── main_text/
  │   ├── notes/
  │   ├── page.js
  │   ├── recommendations/
  │   ├── reviews/
  │   ├── select-courses/
  │   └── signup/
  ├── components/
  │   └── ...
  ├── components.json
  ├── jsconfig.json
  ├── lib/
  ├── middleware.ts
  ├── models/
  ├── next.config.mjs
  ├── package.json
  ├── postcss.config.js
  ├── public/
  ├── README.md
  ├── tailwind.config.js
  ├── theme.js
  └── ZZExtra/
```

## Getting Started

To get started with Maargadarshak, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies using your preferred package manager:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Deployment

The project is already deployed at [maargdarshak.shoaibssm.me](http://maargdarshak.shoaibssm.me)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - Your feedback and contribution
```


### shoaib2000857/MedPal

- **Repo link:** https://github.com/shoaib2000857/MedPal
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Vue
- **Detected stack:** Python, JavaScript, React, Vue, Rust
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-06-27T03:09:18Z / 2025-06-27T03:09:25Z / 2025-06-27T03:09:21Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-06-27T03:09:11Z
- **Latest commit SHA:** 8fe7a4e015cbd1ffd59d9babd9c5cd7832d0d298
- **Latest commit message:** Basic Setup
- **README path:** —
- **Tree entries:** 50 
- **Top-level dirs:** backend, medpal-ui
- **Top-level files:** .gitignore
- **Important files:** —
- **Deployment hints:** github_pages
- **Notes:** No README found via API.

#### README excerpt

_No README text found._


### shoaib2000857/MedPal-Emergency-AI-Assistant

- **Repo link:** https://github.com/shoaib2000857/MedPal-Emergency-AI-Assistant
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Vue
- **Detected stack:** Python, JavaScript, React, Vue
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-06-26T19:35:50Z / 2025-08-06T16:26:23Z / 2025-08-06T16:26:20Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-08-06T16:26:15Z
- **Latest commit SHA:** 72122c965f40edc3dfec80b2069b007f95ee0340
- **Latest commit message:** Updates
- **README path:** README.md
- **Tree entries:** 24 
- **Top-level dirs:** backend, medpal-ui
- **Top-level files:** .gitignore, README.md, all_files.txt
- **Important files:** README.md
- **Deployment hints:** github_pages

#### README excerpt

```markdown
# MedPal-Emergency-AI-Assistant
```


### DevXOmar/MIC-26

- **Repo link:** https://github.com/DevXOmar/MIC-26
- **Description:** —
- **Owner:** DevXOmar
- **Primary language:** JavaScript
- **Detected stack:** Python, JavaScript, React, Next.js, FastAPI, Docker, Data Science / ML
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-12-23T20:46:28Z / 2025-12-23T20:49:46Z / 2025-12-23T20:47:48Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-12-23T20:47:36Z
- **Latest commit SHA:** 565da7c2000e473846734bc9788ef0ec8b7b8830
- **Latest commit message:** Initial commit from original-repo base
- **README path:** README.md
- **Tree entries:** 112 
- **Top-level dirs:** app, docs, frontend, samples, scripts, tests
- **Top-level files:** .gitignore, AUTOCOMMIT_OVERVIEW.md, BLOCKCHAIN_QUICKSTART.md, Dockerfile, FIX_SUMMARY.md, FULL_PROJECT_DOCUMENTATION.md, MULTI_NODE_GUIDE.md, PROJECT_OVERVIEW.md, README.md, SHARING_ARCHITECTURE.md, autocommit.py, docker-compose.yml, requirements.lock, requirements.txt, rustup-init.exe
- **Important files:** Dockerfile, README.md, docker-compose.yml, requirements.txt
- **Deployment hints:** docker, github_pages, vercel

#### README excerpt

```markdown
# TattvaDrishti

**Prototype platform to detect and mitigate malign information operations powered by large language models.**

Combines advanced AI detection with multi-layered analysis:
- 🤖 **Ollama Semantic Analysis** (40% weight) - Deep contextual risk assessment using local LLMs
- 🔍 **Hugging Face AI Detection** (35% weight) - State-of-the-art AI-generated content detection
- 🎯 **Behavioral Analysis** (15% weight) - Metadata, urgency, and manipulation tactics
- 📊 **Stylometric Analysis** (10% weight) - Linguistic fingerprinting and patterns

Plus threat graph intelligence, provenance checks, and federated sharing scaffolding.

---

## ⚠️ Python Version Requirement

**This project requires Python 3.11.x**

Python 3.12+ is **not supported** due to FastAPI + Pydantic v1 compatibility issues. The codebase enforces this requirement at runtime.

### Install Python 3.11

**macOS (Homebrew)**
```bash
brew install python@3.11
```

**macOS (pyenv)**
```bash
brew install pyenv
pyenv install 3.11.9
pyenv local 3.11.9  # Uses .python-version file
```

**Windows (Chocolatey)**
```powershell
choco install python --version=3.11.9 -y
```

**Ubuntu/Debian**
```bash
sudo apt update
sudo apt install -y software-properties-common
sudo add-apt-repository -y ppa:deadsnakes/ppa
sudo apt update
sudo apt install -y python3.11 python3.11-venv
```

**Fedora/RHEL**
```bash
sudo dnf install -y python3.11 python3.11-venv
```

---

## 🚀 Quick Start

### 1. Install Ollama (Required for Semantic Analysis)

```bash
# Linux
curl -fsSL https://ollama.com/install.sh | sh

# macOS
brew install ollama

# Windows - Download from https://ollama.com/download/windows
```

Start Ollama and download the model:
```bash
# Start Ollama server
ollama serve

# In another terminal, download the recommended model
ollama pull llama3.2:3b
```

📖 **Detailed Ollama setup**: See [docs/OLLAMA_SETUP.md](docs/OLLAMA_SETUP.md)

### 2. Backend (FastAPI)

```bash
# Clone the repo
git clone https://github.com/Team-ASHTOJ/TattvaDrishti.git
cd TattvaDrishti

# Create virtual environment with Python 3.11
python3.11 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\Activate.ps1

# Install dependencies
python -m pip install --upgrade pip
python -m pip install -r requirements.txt

# Create .env file (copy from example)
cp .env.example .env

# Start the backend server
uvicorn app.main:app --reload
```

Backend will be available at: **http://127.0.0.1:8000**

### Frontend (Next.js)

```bash
cd frontend

# Create environment file
echo 'NEXT_PUBLIC_API_BASE_URL=http://localhost:8000' > .env.local

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will be available at: **http://localhost:3000**

---

## 📁 Project Structure

```
TattvaDrishti/
├── app/                      # FastAPI backend
│   ├── main.py              # API routes and server
│   ├── config.py            # Settings and environment config
│   ├── schemas.py           # Pydantic models
│   ├── i
```


### shoaib2000857/MiniDoom

- **Repo link:** https://github.com/shoaib2000857/MiniDoom
- **Homepage:** https://mini-doom.vercel.app
- **Deployment links:** https://mini-doom.vercel.app
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** TypeScript
- **Detected stack:** JavaScript, TypeScript, React, Next.js
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-06-18T16:00:25Z / 2025-06-18T18:18:17Z / 2025-06-18T18:17:28Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-06-18T18:17:27Z
- **Latest commit SHA:** e122ea016cbf4b209b944c1ee39422d75eed1963
- **Latest commit message:** Edits for build
- **README path:** README.md
- **Tree entries:** 23 
- **Top-level dirs:** app, public
- **Top-level files:** .gitignore, README.md, README2.md, eslint.config.mjs, next-env.d.ts, next.config.ts, package-lock.json, package.json, postcss.config.mjs, tsconfig.json
- **Important files:** README.md, next.config.ts, package-lock.json, package.json, postcss.config.mjs, tsconfig.json
- **Deployment hints:** vercel

#### README excerpt

```markdown
# DOOM on the Web

A tribute to the classic DOOM, playable right in your browser!  
Built with Next.js and TypeScript, this site features a DOOM-themed interface and runs the original DOOM shareware using [js-dos](https://js-dos.com/).

## Features

- **Play the real DOOM shareware** in your browser (via DOSBox emulation)
- DOOM-inspired UI and styling throughout the site
- Large, centered game area with fullscreen support
- Keyboard controls (just like the original DOOM)
- No downloads required

## Getting Started

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Run the development server:**
    ```bash
    npm run dev
    ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

- `app/page.tsx` — Home page (DOOM-themed landing page)
- `app/game/page.tsx` — Main DOOM game area (js-dos embed)
- `styles/globals.css` — Global DOOM-inspired styles

## Controls

- **Click inside the game window to enable controls**
- **Arrow keys** — Move/turn
- **Ctrl, Alt, Space** — Fire, open doors, etc. (as in classic DOOM)

## Credits

- [js-dos](https://js-dos.com/) for DOSBox emulation in the browser
- [id Software](https://www.idsoftware.com/) for the original DOOM

## License

MIT

> **Not affiliated with id Software. DOOM is © id Software. This project is for educational and
```


### shoaib2000857/NeuroNest

- **Repo link:** https://github.com/shoaib2000857/NeuroNest
- **Homepage:** https://neuro-nest-sigma.vercel.app
- **Deployment links:** https://neuro-nest-sigma.vercel.app
- **Description:** An immersive brain-tech startup that uses AI and EEG headbands to train focus, creativity, and memory via gamified neurofeedback.
- **Owner:** shoaib2000857
- **Primary language:** HTML
- **Detected stack:** —
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-07-20T08:05:20Z / 2025-07-20T08:20:12Z / 2025-07-20T08:16:09Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-07-20T08:16:08Z
- **Latest commit SHA:** 02dc59d824c712137a2ffb39099651bea244a623
- **Latest commit message:** Create styles.css
- **README path:** —
- **Tree entries:** 2 
- **Top-level dirs:** —
- **Top-level files:** index.html, styles.css
- **Important files:** index.html
- **Deployment hints:** github_pages
- **Notes:** No README found via API.

#### README excerpt

_No README text found._


### shoaib2000857/Nitra-Mitra-gssoc

- **Repo link:** https://github.com/shoaib2000857/Nitra-Mitra-gssoc
- **Homepage:** https://nitra.nbytes.xyz/
- **Deployment links:** https://nitra.nbytes.xyz/, https://img.shields.io/github/stars/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&logo=github"/, https://img.shields.io/github/forks/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&logo=github"/, https://img.shields.io/github/issues/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&logo=github"/, https://img.shields.io/github/issues-pr/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&logo=github"/, https://img.shields.io/github/issues-pr-closed/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&color=critical&logo=github"/, https://img.shields.io/github/languages/count/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&color=green&logo=github", https://img.shields.io/github/contributors/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&color=blue&logo=github"/, https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&duration=3000&pause=1000&color=00C853&center=true&vCenter=true&width=700&lines=Thanks+for+visiting+NitraMitra!+🙌;Start+the+repo+✅;Share+it+with+others+🌍;Contribute+and+grow+🛠️;Happy+Coding+✨!", https://github.com/VAIBHAVBABELE/vaibhavbabele.github.io/stargazers", https://reporoster.com/stars/VAIBHAVBABELE/vaibhavbabele.github.io?type=svg&limit=200&names=false", https://github.com/VAIBHAVBABELE/vaibhavbabele.github.io/network/members", https://img.shields.io/github/contributors/VAIBHAVBABELE/vaibhavbabele.github.io?style=for-the-badge, https://github.com/VAIBHAVBABELE/vaibhavbabele.github.io/graphs/contributors, https://github.com/VAIBHAVBABELE/vaibhavbabele.github.io/graphs/contributors", https://contrib.rocks/image?repo=VAIBHAVBABELE/vaibhavbabele.github.io", https://github.com/VAIBHAVBABELE/vaibhavbabele.github.io, https://github.com/VAIBHAVBABELE/vaibhavbabele.github.io", https://github.com/VAIBHAVBABELE/vaibhavbabele.github.io/issues, https://capsule-render.vercel.app/api?type=waving&color=gradient&height=65&section=footer"/
- **Description:** Nitra Mitra is a student-centric academic platform developed by students of NITRA Technical Campus, designed to streamline study resources for AKTU learners. Its primary focus is on simplifying academics by offering well-organized notes, previous year question papers, semester-wise material, and exam preparation tools—all tailored to the AKTU
- **Owner:** shoaib2000857
- **Primary language:** HTML
- **Detected stack:** Python, JavaScript, Flask
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2025-07-23T10:11:19Z / 2026-04-14T03:24:46Z / 2026-04-14T03:24:39Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-04-14T03:24:37Z
- **Latest commit SHA:** e73c5f4f8712ea782c6c93825bba982e550e9ba2
- **Latest commit message:** Auto-update MERGED_PRS.md [skip ci]
- **README path:** README.md
- **Tree entries:** 376 
- **Top-level dirs:** .github, backend, css, docs, favicon, games, images, js, pages
- **Top-level files:** .gitignore, .htaccess, .htaccess.backup, CNAME, CODE_OF_CONDUCT.md, CONTACT_FORM_SETUP.md, CONTRIBUTION.md, DEPLOYMENT.md, LEADERBOARD.md, LICENSE, MERGED_PRS.md, README.md, _htaccess, eslint.config.js, gssoc25-logo.jpg, index.css, index.html, index.js, language.js, nitra-mitra-logo.png, package-lock.json, package.json
- **Important files:** .github/workflows/auto-close-inactive-issues.yml, .github/workflows/auto-comment-merge-conflict.yml, .github/workflows/document-merged-prs.yml, .github/workflows/issue_created.yml, .github/workflows/pr-comment.yml, .github/workflows/update-leaderboard.yml, README.md, index.html, package-lock.json, package.json
- **Deployment hints:** github_pages, vercel
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
# 🚀 Nitra Mitra

> **Nitra Mitra** is an **open-source student initiative** from NITRA Technical Campus, Ghaziabad aimed at **simplifying academic and non-academic life** for students.  
From **syllabus tracking** to **AI-powered study tools**, and from **event management** to **career guidance**, everything resides under one open, collaborative platform.

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

**📊 Project Insights**
<table align="center">
    <thead align="center">
        <tr>
            <td><b>🌟 Stars</b></td>
            <td><b>🍴 Forks</b></td>
            <td><b>🐛 Issues</b></td>
            <td><b>🔔 Open PRs</b></td>
            <td><b>🔕 Closed PRs</b></td>
            <td><b>🛠️ Languages</b></td>
            <td><b>👥 Contributors</b></td>
        </tr>
     </thead>
    <tbody>
         <tr>
            <td><img alt="Stars" src="https://img.shields.io/github/stars/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&logo=github"/></td>
            <td><img alt="Forks" src="https://img.shields.io/github/forks/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&logo=github"/></td>
            <td><img alt="Issues" src="https://img.shields.io/github/issues/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&logo=github"/></td>
            <td><img alt="Open PRs" src="https://img.shields.io/github/issues-pr/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&logo=github"/></td>
            <td><img alt="Closed PRs" src="https://img.shields.io/github/issues-pr-closed/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&color=critical&logo=github"/></td>
            <td><img alt="Languages Count" src="https://img.shields.io/github/languages/count/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&color=green&logo=github"></td>
            <td><img alt="Contributors Count" src="https://img.shields.io/github/contributors/VAIBHAVBABELE/vaibhavbabele.github.io?style=flat&color=blue&logo=github"/></td>
        </tr>
    </tbody>
</table>

</div>
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

<h1 align="center">Supported By <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Folded%20Hands%20Light%20Skin%20Tone.png" alt="Folded Hands Light Skin Tone" width="25" height="25" /></h1>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## 📚 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Contribution Guidelines](#-contribution-guidelines)
- [Contributors](#-contributors)
- [License](#-license)

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&duration=30
```


### shoaib2000857/notesvault-gssoc

- **Repo link:** https://github.com/shoaib2000857/notesvault-gssoc
- **Homepage:** https://opensource-society.github.io/notesvault/
- **Deployment links:** https://opensource-society.github.io/notesvault/
- **Description:** Your Smart Study Locker
- **Owner:** shoaib2000857
- **Primary language:** HTML
- **Detected stack:** JavaScript
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2025-07-22T17:15:16Z / 2025-07-22T17:43:45Z / 2025-07-22T17:43:41Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-07-22T17:44:26Z
- **Latest commit SHA:** 0c111b10338ea5f16d16c2242100a8f7171ffc0f
- **Latest commit message:** Modified Overview Styling
- **README path:** README.md
- **Tree entries:** 47 
- **Top-level dirs:** .github, assets, components, data, pages, styling
- **Top-level files:** CODE_OF_CONDUCT.md, CONTRIBUTING.md, GETTING_STARTED.md, LICENSE, README.md, SECURITY.md, about.css, about.html, index.html, jotpad.html, notepad.png, script.js, search.html, studentAccount.css, studentAccount.html, studentAccount.js, styles.css, styles.css.map, styles.scss, upload.html
- **Important files:** .github/workflows/static.yml, README.md, index.html
- **Deployment hints:** github_pages
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
# 📚 NotesVault – Academic Notes & PYQs Manager

**NotesVault** is a beginner-friendly, open-source web app designed to help students **store, browse, and manage academic notes and previous year questions (PYQs)** in one place. This project is perfect for contributors who want to build and grow a useful educational tool from scratch.

---

## ✨ Features (Planned)

* Browse notes and PYQs by subject/semester
* Search and filter by keywords
* Add new notes manually (or from JSON for demo)
* Responsive design for all devices
* Dark/light mode toggle
* Upload UI and metadata editing
* Tag-based filtering

---

## 📁 Folder Structure (Suggested)

```
notesvault/
├── index.html         # Homepage UI
├── style.css          # Global styles and theming
├── script.js          # Application logic (load/display/filter)
├── data/              # JSON files for notes/PYQs
│   └── notes.json
├── assets/            # Icons, PDFs, static files
└── README.md
```

---

## 🛠️ Getting Started (Development)

1. **Clone the repository**

    ```bash
    git clone https://github.com/opensource-society/NotesVault.git
    cd NotesVault
    ```

2. **Open the app**

Simply open `index.html` in your browser. All data is stored locally via JSON or localStorage.

3. **Develop and test**

* Edit `notes.json` to simulate new data
* Modify layout or logic in `style.css` and `script.js`
* Use browser DevTools to inspect results

---

## 🧑‍💻 Contributing

We welcome all kinds of contributions, especially from beginners! Since the project is in early stages, **you can help build core features from scratch**.

**Good first issues:**

* Setup basic UI structure or card layout
* Add new subjects or notes to JSON
* Implement search and filtering logic
* Improve design responsiveness
* Add support for dark mode
* Add upload simulation with preview

See [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Let's build NotesVault together — an open-source resource that helps thousands of students revise and succeed. 🚀
```


### shoaib2000857/Opencontribute

- **Repo link:** https://github.com/shoaib2000857/Opencontribute
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** TypeScript
- **Detected stack:** JavaScript, TypeScript, React, Next.js
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 1 / 0 / 1
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-04-30T18:41:05Z / 2025-05-01T18:32:45Z / 2025-05-01T18:32:41Z
- **Default branch:** master
- **Latest release:** —
- **Latest commit date:** 2025-05-01T18:32:56Z
- **Latest commit SHA:** 87a0e0cf007a310f9cd7ebfefe5b976a5c8ae7ee
- **Latest commit message:** Merge branch 'master' of https://github.com/shoaib2000857/Opencontribute
- **README path:** README.md
- **Tree entries:** 48 
- **Top-level dirs:** collab-sphere
- **Top-level files:** .gitignore, CollabSphere.mp4, README.md
- **Important files:** README.md
- **Deployment hints:** vercel

#### README excerpt

```markdown
# Collab Sphere

## Project Overview

COLLAB-SPHERE is a web application designed to facilitate collaboration among students interested in contributing to open-source projects. The platform allows users to create accounts, share project ideas, and express interest in various projects. Each project post includes a dedicated discussion area for collaboration and queries, making it easier for students to connect and work together.

## Features

- User Authentication: Users can create accounts and log in to the platform.
- Project Sharing: Users can share their project ideas along with the required skillsets.
- Interest Expression: Other students can express interest in projects via an "I'm Interested" button.
- Discussion Area: Each project post includes a dedicated discussion area for collaboration and queries.
- User Profiles: Users can view and edit their profiles, including their skills and interests.
- Search and Filter: Users can search for projects based on keywords and filter them by required skills.
- Notifications: Users receive notifications for new project posts and replies in the discussion area.
- Responsive Design: The application is designed to be responsive and user-friendly on various devices.
- Secure Authentication: Clerk based authentication is used to provide secure authentication and user management

## Tech Stack

- Next.js: A React framework for building server-rendered applications.
- MongoDB: A NoSQL database for storing user and project data.
- Clerk: A modern authentication solution for secure user management and session handling.
```


### shoaib2000857/Placify-Smarter_Placements-Sharper_Talent-gssoc

- **Repo link:** https://github.com/shoaib2000857/Placify-Smarter_Placements-Sharper_Talent-gssoc
- **Homepage:** https://placify-smarter-placements-sharper-gamma.vercel.app
- **Deployment links:** https://placify-smarter-placements-sharper-gamma.vercel.app, https://placifyapp.netlify.app/, http://www.monishraman.netlify.app
- **Description:** Placify is an AI-powered recruitment and skill-assessment platform that streamlines 60–70% of campus placements by automating resume screening, adaptive assessments, and personalized feedback. It bridges the gap between industry needs and candidate readiness for students, colleges, and recruiters.
- **Owner:** shoaib2000857
- **Primary language:** JavaScript
- **Detected stack:** Python, JavaScript, React, Next.js, Vue, FastAPI, Django, Data Science / ML
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2025-07-31T11:53:57Z / 2025-07-31T14:11:15Z / 2025-07-31T14:11:12Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-07-31T14:10:51Z
- **Latest commit SHA:** 769411a179c886b51e79611ee2c4d3a18cd8d2bb
- **Latest commit message:** Chatbot, Full Functionality
- **README path:** README.md
- **Tree entries:** 105 
- **Top-level dirs:** ml_modules, public, server, src
- **Top-level files:** .gitignore, CODE_OF_CONDUCT.md, CONTRIBUTING.md, EMAIL_SETUP.md, LICENSE, README.md, eslint.config.js, index.html, jsconfig.json, package-lock.json, package.json, postcss.config.js, start-server.bat, tailwind.config.js, vite.config.js
- **Important files:** README.md, index.html, package-lock.json, package.json, postcss.config.js, tailwind.config.js, vite.config.js
- **Deployment hints:** github_pages, vercel
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
# Placify by Innovision Technologies Pvt Ltd - GSSoC 2025

![GSSoC 2025](https://img.shields.io/badge/GSSoC-2025-blue.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status: Active](https://img.shields.io/badge/status-active-success.svg)
[![GitHub issues](https://img.shields.io/github/issues/MonishRaman/Placify-Smarter_Placements-Sharper_Talent)](https://github.com/MonishRaman/Placify-Smarter_Placements-Sharper_Talent/issues)
[![GitHub forks](https://img.shields.io/github/forks/MonishRaman/Placify-Smarter_Placements-Sharper_Talent)](https://github.com/MonishRaman/Placify-Smarter_Placements-Sharper_Talent/network)
[![GitHub stars](https://img.shields.io/github/stars/MonishRaman/Placify-Smarter_Placements-Sharper_Talent)](https://github.com/MonishRaman/Placify-Smarter_Placements-Sharper_Talent/stargazers)
[![Join our Discord](https://img.shields.io/badge/Join_Discord-7289DA?logo=discord\&logoColor=white)](https://discord.gg/WdAdQPAB)


Welcome to the official repository for **Placify**, a project by **Innovision Technologies Pvt Ltd**, participating in **GirlScript Summer of Code (GSSoC) 2025**. We're thrilled to have you join our mission!

**Tagline:** *Unboxing New Ideas*

**Vision:** *"Reinventing campus placement through AI-powered intelligent interviewing."*

---

## ✨ Live Demo

🔗 **[Placify Live App](https://placifyapp.netlify.app/)**

---

## 📖 Table of Contents

* [😫 The Problem](#-the-problem)
* [💡 The Solution: Placify](#-the-solution-placify)
* [🚀 Key Features](#-key-features)
* [👥 Primary Beneficiaries](#-primary-beneficiaries)
* [🛠️ Technology Stack (Proposed)](#️-technology-stack-proposed)
* [🗺️ Project Roadmap](#️-project-roadmap)
* [🏆 Achievements](#-achievements)
* [🏁 Getting Started](#-getting-started)
* [🤝 How to Contribute](#-how-to-contribute)
* [🧑‍💻 Our Team](#-our-team)
* [📄 License](#-license)
* [📞 Contact](#-contact)

---

## 😫 The Problem

The traditional campus hiring process is inefficient and outdated:

* ⏱️ **Time-Consuming:** Interviewing 500+ students can take weeks.
* 🎯 **Subjectivity:** Human evaluation varies widely.
* ❌ **Lack of Feedback:** Students often get no insights post-interview.
* 📉 **No Data:** Institutions miss critical improvement metrics.

**Result?** Talented students go unnoticed, companies lose time and resources, and placement records fall short.

---

## 💡 The Solution: Placify

**Placify** is an AI-powered, full-stack assessment platform that automates and elevates the campus placement process. It mimics real interviews and evaluates candidates on:

* 📹 Facial expressions
* 🎤 Voice tone, clarity, and confidence
* 🧠 Technical accuracy
* 👥 Behavioral traits

⏩ Evaluate **40+ students per hour**, fairly and consistently!

---

## 🚀 Key Features

* ⚡ **10x Faster Interviews:** Complete 500 interviews in under 48 hours.
* 🤖 **AI-Based Scoring:** Removes human bias, ensures consistency.
* 📊 **Real-Time Analysis:** Monitors webcam & audio inputs for tone, clarity, logic, a
```


### tanishqDevx/praklap

- **Repo link:** https://github.com/tanishqDevx/praklap
- **Description:** —
- **Owner:** tanishqDevx
- **Primary language:** Python
- **Detected stack:** Python
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 1 / 0 / 1
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-03-26T10:26:23Z / 2025-04-25T10:44:28Z / 2025-04-25T10:44:24Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-04-25T10:44:18Z
- **Latest commit SHA:** 191d5d1b839d01caa858bd7e43fcbc3c79094c6c
- **Latest commit message:** face recongnition code
- **README path:** README.md
- **Tree entries:** 11 
- **Top-level dirs:** mcqq
- **Top-level files:** .gitignore, README.md, hi.py, lidar_test.py, yd.py, yd1.py
- **Important files:** README.md
- **Deployment hints:** —

#### README excerpt

```markdown
# praklap
```


### shoaib2000857/PyTorch-Workshop

- **Repo link:** https://github.com/shoaib2000857/PyTorch-Workshop
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Jupyter Notebook
- **Detected stack:** Data Science / ML
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-09-16T17:25:56Z / 2025-09-17T18:14:08Z / 2025-09-17T18:14:04Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-09-17T18:13:58Z
- **Latest commit SHA:** dc3389535ddecf91992c02d2af9426011a149cef
- **Latest commit message:** CNN
- **README path:** README.md
- **Tree entries:** 26 
- **Top-level dirs:** .ipynb_checkpoints, .virtual_documents, anaconda_projects, data
- **Top-level files:** .gitignore, README.md, ann.pt, torch-day1.ipynb, torch-day2.ipynb, torch-day3.ipynb
- **Important files:** README.md
- **Deployment hints:** —

#### README excerpt

```markdown
![Python](https://img.shields.io/badge/python-3.12-blue)
![PyTorch](https://img.shields.io/badge/PyTorch-2.x-red)
![License](https://img.shields.io/badge/license-MIT-green)


---

# 🧠 Deep Learning with PyTorch – Hands-On Workshop

This repository contains my implementations from a multi-day **Deep Learning with PyTorch workshop**, covering fundamental architectures like **Artificial Neural Networks (ANNs), Convolutional Neural Networks (CNNs), and Recurrent Neural Networks (RNNs)**.

I’m documenting my journey here as I build and train models from scratch using PyTorch.

---

## 📌 Day 2: Artificial Neural Network (ANN)

### ✨ What I built

* Implemented a **fully-connected feedforward neural network** (ANN) in PyTorch.
* Trained it on the **MNIST dataset** (handwritten digits).
* Debugged and learned about:

  * Device management (`cpu` vs `cuda`)
  * Training loops (forward, loss, backward, optimizer step)
  * Inference workflow (`model.eval()`, `torch.no_grad()`)

### 📊 Results

* Achieved \~**96% accuracy** on MNIST test set with a simple ANN.
* First successful end-to-end deep learning project 🎉

### 🚀 Inference Example

```python
model.eval()
with torch.no_grad():
    X, y = test_dataset[0]
    X = X.unsqueeze(0).to(device)
    pred = model(X).argmax(dim=1).item()

print(f"True Label: {y}, Predicted: {pred}")
```

---

## 📌 Upcoming Days

* **Day 2+:** Extend to CNNs for image classification.
* **Day 3+:** Explore RNNs for sequential data.
* Final day: Combine learnings into a mini-project.

---

## 🛠️ Tech Stack

* **Language:** Python 3.12
* **Framework:** PyTorch
* **Dataset:** MNIST (via `torchvision.datasets`)
* **Hardware:** Trained on GPU (`cuda`)

---

## 📂 Project Structure

```
├── torch-day1.ipynb    # Jupyter notebook: Basics of Pytorch and DL
├── torch-day2.ipynb    # Jupyter notebook: ANN on MNIST (Day 1)
├── ann.pt              # Saved ANN model weights
├── data/               # Directory for datasets (e.g., MNIST)
└── README.md
```
```

---

## 📈 Learning Outcomes

* How to implement, train, and evaluate deep learning models in PyTorch.
* Understanding of forward/backward passes, optimizers, and loss functions.
* Practical debugging of device mismatches and training stability issues.

---

## 🙌 Acknowledgements

Thanks to the IITM workshop mentors for guiding this journey and to the PyTorch community for excellent documentation.

---

⚡ *This repo is a work in progress — stay tuned as I add CNNs, RNNs, and more experiments!*
```


### Vigneshrdy/rag-vm

- **Repo link:** https://github.com/Vigneshrdy/rag-vm
- **Description:** —
- **Owner:** Vigneshrdy
- **Primary language:** Python
- **Detected stack:** Python
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2026-01-01T10:30:29Z / 2026-01-01T10:34:16Z / 2026-01-18T18:09:57Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-01-01T10:33:21Z
- **Latest commit SHA:** 25d0bb26894d2ab59212e8d96f29bc8c8ea88f9e
- **Latest commit message:** vm-digital-ocean
- **README path:** —
- **Tree entries:** 6 
- **Top-level dirs:** —
- **Top-level files:** index_documents.py, rag_api.py, requirements.txt, requirements.vm.txt, test.py, test_groq.py
- **Important files:** requirements.txt
- **Deployment hints:** —
- **Notes:** No README found via API.

#### README excerpt

_No README text found._


### shoaib2000857/rakshak-website

- **Repo link:** https://github.com/shoaib2000857/rakshak-website
- **Homepage:** https://rakshak-website.vercel.app
- **Deployment links:** https://rakshak-website.vercel.app
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** TypeScript
- **Detected stack:** JavaScript, TypeScript, React, Next.js
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 1 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-05-30T14:06:49Z / 2025-06-05T19:13:00Z / 2025-06-05T19:12:58Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-06-05T19:12:51Z
- **Latest commit SHA:** 8dc6e9ae2418e51b9d8d62cc1a0dcd0f2f68c6d4
- **Latest commit message:** piccccccccccccccccccccccccccccccccccccccccccccccccsssssssssssssssssssssssssssssssssssssssssss
- **README path:** —
- **Tree entries:** 99 
- **Top-level dirs:** app, components, hooks, lib, public, styles
- **Top-level files:** .gitignore, components.json, next.config.mjs, package-lock.json, package.json, pnpm-lock.yaml, postcss.config.mjs, tailwind.config.ts, tsconfig.json
- **Important files:** next.config.mjs, package-lock.json, package.json, pnpm-lock.yaml, postcss.config.mjs, tailwind.config.ts, tsconfig.json
- **Deployment hints:** vercel
- **Notes:** No README found via API.

#### README excerpt

_No README text found._


### shoaib2000857/ROE

- **Repo link:** https://github.com/shoaib2000857/ROE
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python, FastAPI
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-11-09T07:46:48Z / 2025-11-09T07:50:28Z / 2025-11-09T07:50:25Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-11-09T07:50:25Z
- **Latest commit SHA:** dea41080d850fc17939fed6bd8e0388e5024ca17
- **Latest commit message:** Add email address to README
- **README path:** README.md
- **Tree entries:** 6 
- **Top-level dirs:** .github
- **Top-level files:** README.md, q-fastapi-timeseries-cache.csv, q2.py
- **Important files:** .github/workflows/matrix.yml, README.md
- **Deployment hints:** —

#### README excerpt

```markdown
24f2000857@ds.study.iitm.ac.in
```


### Exp-Intro-to-GitHub-Flow-Cohort-1/series-intro-to-github-flow-shoaib2000857

- **Repo link:** https://github.com/Exp-Intro-to-GitHub-Flow-Cohort-1/series-intro-to-github-flow-shoaib2000857
- **Description:** series-intro-to-github-flow-shoaib2000857 created by GitHub Classroom
- **Owner:** Exp-Intro-to-GitHub-Flow-Cohort-1
- **Primary language:** —
- **Detected stack:** —
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 1
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2024-06-16T05:38:35Z / 2024-06-16T05:48:38Z / 2025-12-01T02:16:50Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2024-06-16T05:48:34Z
- **Latest commit SHA:** 6de17cf785d638ab685cf87bbf948fdf3547358b
- **Latest commit message:** Update to X in STEP and README.md
- **README path:** README.md
- **Tree entries:** 38 
- **Top-level dirs:** .github, images
- **Top-level files:** .gitignore, LICENSE, PROFILE.md, README.md
- **Important files:** .github/workflows/0-welcome.yml, .github/workflows/1-create-a-branch.yml, .github/workflows/2-commit-a-file.yml, .github/workflows/3-open-a-pull-request.yml, .github/workflows/4-merge-your-pull-request.yml, .github/workflows/classroom.yml, README.md
- **Deployment hints:** —

#### README excerpt

```markdown
<header>

<!--
  <<< Author notes: Course header >>>
  Include a 1280×640 image, course title in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Add your open source license, GitHub uses MIT license.
-->

# Introduction to GitHub

_Get started using GitHub in less than an hour._

</header>

<!--
  <<< Author notes: Finish >>>
  Review what we learned, ask for feedback, provide next steps.
-->

## Finish

_Congratulations, you've completed this course and joined the world of developers!_

<img src=https://octodex.github.com/images/collabocats.jpg alt=celebrate width=300 align=right>

Here's a recap of your accomplishments:

- You learned about GitHub, repositories, branches, commits, and pull requests.
- You created a branch, a commit, and a pull request.
- You merged a pull request.
- You made your first contribution! :tada:

### What's next?

If you'd like to make a profile README, use the quickstart instructions below or follow the instructions in the [Managing your profile README](https://docs.github.com/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme) article.

1. Make a new public repository with a name that matches your GitHub username.
2. Create a file named `README.md` in its root. The "root" means not inside any folder in your repository.
3. Edit the contents of the `README.md` file.
4. If you created a new branch for your file, open and merge a pull request on your branch.
5. Lastly, we'd love to hear what you thought of this course [in our discussion board](https://github.com/orgs/community/discussions/categories/github-education).

Check out these resources to learn more or get involved:

- Are you a student? Check out the [Student Developer Pack](https://education.github.com/pack).
- [Take another GitHub Skills course](https://github.com/skills).
- [Read the GitHub Getting Started docs](https://docs.github.com/en/get-started).
- To find projects to contribute to, check out [GitHub Explore](https://github.com/explore).

<footer>

<!--
  <<< Author notes: Footer >>>
  Add a link to get support, GitHub status page, code of conduct, license link.
-->

---

Get help: [Post in our discussion board](https://github.com/orgs/community/discussions/categories/github-education) &bull; [Review the GitHub status page](https://www.githubstatus.com/)

&copy; 2023 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

</footer>
```


### shoaib2000857/sharevolume

- **Repo link:** https://github.com/shoaib2000857/sharevolume
- **GitHub Pages guess:** https://shoaib2000857.github.io/sharevolume/
- **Deployment links:** https://shoaib2000857.github.io/sharevolume/
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** HTML
- **Detected stack:** —
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-10-22T13:19:11Z / 2025-10-22T13:20:23Z / 2025-10-22T13:20:20Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-22T13:20:19Z
- **Latest commit SHA:** c77b217a11029b95627877212ff329485b24ee0c
- **Latest commit message:** Task ShareVolume - Round 1: LLM-generated app update/creation
- **README path:** README.md
- **Tree entries:** 4 
- **Top-level dirs:** —
- **Top-level files:** LICENSE, README.md, index.html, uid.txt
- **Important files:** README.md, index.html
- **Deployment hints:** github_pages

#### README excerpt

```markdown
# SEC Shares Outstanding Viewer

This single-file web application allows users to view the highest and lowest common stock shares outstanding for a given company, fetched directly from the U.S. Securities and Exchange Commission (SEC) API. It focuses on data from fiscal years after 2020.

## Features

-   **Dynamic CIK Input**: Fetches data for Amazon (CIK: 0001018724) by default, or for any specified CIK via a URL parameter.
-   **SEC API Integration**: Retrieves `EntityCommonStockSharesOutstanding` data from the SEC's XBRL API.
-   **Data Filtering**: Processes data, specifically looking for entries with `fiscal year (fy)` greater than 2020 and a valid numeric `value (val)`.
-   **Max/Min Value Display**: Clearly presents the highest and lowest shares outstanding values along with their corresponding fiscal years.
-   **Responsive Design**: Utilizes Tailwind CSS for a modern, mobile-friendly user interface.
-   **Client-Side Processing**: All data fetching and rendering logic is handled directly in the browser using vanilla JavaScript.
-   **Proxy Support**: Automatically uses a CORS proxy (AllOrigins) when fetching data for CIKs provided via URL parameters, to bypass cross-origin restrictions.

## Usage

1.  **Open `index.html`**: Simply open the `index.html` file in your web browser. By default, it will display data for Amazon.

2.  **Specify a Custom CIK**: To view data for a different company, append `?CIK=YOUR_CIK_NUMBER` to the URL in your browser's address bar. For example:
    -   `index.html?CIK=0001018724` (Amazon)
    -   `index.html?CIK=0000320193` (Apple Inc.)
    -   `index.html?CIK=0001659166` (Google/Alphabet Inc.)

    The application will then fetch and display data for the specified CIK without requiring a page reload.

## Technical Details

-   **HTML**: Provides the structure of the web page.
-   **Tailwind CSS (CDN)**: Used for styling, ensuring a clean and responsive design.
-   **JavaScript (inline)**: Handles the fetching, processing, and rendering of SEC data. It includes:
    -   Parsing URL parameters to get the CIK.
    -   Making `fetch` requests to the SEC API.
    -   Filtering data based on `fy > 2020` and numeric `val`.
    -   Identifying and displaying max/min values.
    -   Error handling for network or data issues.

### SEC User-Agent Guidance

The SEC requests that applications accessing their API provide a descriptive `User-Agent` string. While this application attempts to set a `User-Agent` for direct API calls, modern browsers often restrict client-side JavaScript from setting arbitrary `User-Agent` headers for security reasons. When a proxy is used (for custom CIKs), the `User-Agent` will be handled by the proxy service (e.g., AllOrigins) and may not reflect the application's specific `User-Agent` string. This client-side limitation does not typically prevent data retrieval.

## Local Development

No specific server setup is required. You can simply open `index.html` directly in your browser.
```


### shoaib2000857/Shoaib-Portfolio-Site

- **Repo link:** https://github.com/shoaib2000857/Shoaib-Portfolio-Site
- **Homepage:** https://shoaib2000857.github.io/Shoaib-Portfolio-Site/
- **GitHub Pages guess:** https://shoaib2000857.github.io/Shoaib-Portfolio-Site/
- **Deployment links:** https://shoaib2000857.github.io/Shoaib-Portfolio-Site/, http://{github-username}.github.io/{repo-name}`,
- **Description:** Main Host on https://shoaibssm.me
- **Owner:** shoaib2000857
- **Primary language:** TypeScript
- **Detected stack:** JavaScript, TypeScript, React
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2024-08-03T10:12:34Z / 2025-08-25T16:56:18Z / 2025-08-25T16:56:15Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-08-25T16:56:30Z
- **Latest commit SHA:** 06eaba6778c084e62d37649182e14cb2e646cdd1
- **Latest commit message:** Fixes v2
- **README path:** README.md
- **Tree entries:** 95 
- **Top-level dirs:** .devcontainer, .github, __images__, app, src, translations
- **Top-level files:** .eslintrc, .gitignore, .prettierrc, CODE_OF_CONDUCT.md, LICENSE, README.md, SECURITY.md, SUPPORT.md, package-lock.json, package.json, postcss.config.js, slides.pptx, tailwind.config.ts, tsconfig.json
- **Important files:** .github/workflows/azure-static-web-apps-ashy-river-0fb97fa1e.yml, .github/workflows/azure-static-web-apps-brave-island-0ccc63200.yml, .github/workflows/azure-static-web-apps-delightful-meadow-0e5275a1e.yml, .github/workflows/azure-static-web-apps-delightful-river-0b8ea701e.yml, .github/workflows/azure-static-web-apps-icy-meadow-03f04aa1e.yml, .github/workflows/azure-static-web-apps-icy-meadow-05589541e.yml, .github/workflows/azure-static-web-apps-lively-sand-0c83b5b1e.yml, .github/workflows/azure-static-web-apps-mango-water-00197fb1e.yml, .github/workflows/azure-static-web-apps-purple-stone-0205fee00.yml, .github/workflows/azure-static-web-apps-red-dune-0521bd900.yml, .github/workflows/azure-static-web-apps-salmon-tree-080b1b500.yml, .github/workflows/azure-static-web-apps-white-cliff-0f366481e.yml, .github/workflows/close-pull-requests.yml, README.md, package-lock.json, package.json, postcss.config.js, tailwind.config.ts, tsconfig.json
- **Deployment hints:** docker, github_pages

#### README excerpt

```markdown
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526682619)

# JavaScript Portfolio Site with GitHub Codespaces and Copilot

> View these instructions in [Spanish](/translations/es/README.md) or [Portuguese](/translations/pt-BR/README.md)

_Create, customize and deploy your own portfolio website in minutes._ ✨

In this template repository we have the development environment and base set and ready to go. So that you can immediately launch your [Codespace](https://github.com/features/codespaces/) environment and start customizing your site using [Copilot](https://copilot.github.com) to help you write code faster.

- **Who is this for?** **Anyone** looking to create a portfolio site, learn web development, or test out Codespaces.
- **How much experience do you need?** **Zero**. You decide how much you want to customize based on your experience, and time available.
- **Tools needed:** _None_. No need to install anything! All you need is a web browser.
- **Prerequisites:** _None_. This template includes your development environment and deployable web app for you to create your own site.

## About this portfolio template

In this "choose your own adventure" template portfolio, we have a [React](https://reactjs.org/) based web application ready for you to easily customize and deploy using only your web browser.

![JavaScript profile web application](/__images__/js-portfolio-site.gif "JavaScript profile web application")

### Quick Start

1. Click the **Use this Template** button and then **Create a new repository** as can be seen in the image below.
   Note: Make sure you've signed in to GitHub otherwise, you wouldn't see the **Use this Template** button.
   ![JavaScript profile web application](/__images__/use-this-template.png "Use this Template Image Guide")
1. Select the repository owner (e.g. your GitHub account)
1. Enter a unique name for your new repository
1. Click the **Code** button
1. Click **Create Codespace on main** button
1. [Customize your portfolio site](#-customize-your-site-in-3-steps) with Copilot
1. [Deploy your site](#-deploy-your-web-application)

<details>
   <summary><b>🎥 To learn more about Codespaces, watch our video tutorial series</b></summary>

[![Codespaces Tutorial](https://img.youtube.com/vi/ozuDPmcC1io/0.jpg)](https://aka.ms/CodespacesVideoTutorial "Codespaces Tutorial")

</details>

<br />

## 🗃️ JavaScript Portfolio template

This repo is a GitHub template to build a JavaScript personal portfolio frontend web application using the React framework. The goal is to give you a template that you can immediately utilize to create your own website through Codespaces.

The repo contains the following:

- `/.devcontainer`
  - `.devcontainer/Dockerfile`: Configuration file used by Codespaces to determine operating system and other details.
  - `.devcontainer/devcontainer.json`: Configuration file used by Codespaces to configure Visual S
```


### shoaib2000857/shoaib2000857

- **Repo link:** https://github.com/shoaib2000857/shoaib2000857
- **Deployment links:** https://capsule-render.vercel.app/api?type=rect&color=gradient&height=4&section=header&reversal=true&animation=twinkling", https://github-readme-stats-fast.vercel.app/api/wakatime?username=a85deef6-2e94-465d-998e-c54914c040a2&theme=tokyonight&layout=compact&hide_border=true", https://github-readme-stats-fast.vercel.app/api?username=shoaib2000857&show_icons=true&theme=tokyonight", https://github-readme-stats-fast.vercel.app/api/top-langs/?username=shoaib2000857&layout=compact&theme=tokyonight", https://github-readme-stats-fast.vercel.app/api/streak?username=shoaib2000857&theme=tokyonight", https://github-profile-trophy.vercel.app/?username=shoaib2000857&theme=tokyonight&no-frame=true&margin-w=15&column=6", https://github-readme-activity-graph.vercel.app/graph?username=shoaib2000857&bg_color=0d1117&color=00f7ff&line=8a2be2&point=00f7ff&area=true&hide_border=true, https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight", https://capsule-render.vercel.app/api?type=waving&color=0:00F7FF,100:8A2BE2&height=100&section=footer"
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** —
- **Detected stack:** React, Next.js, Vue, FastAPI, Flask
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2024-06-13T11:59:54Z / 2026-01-06T09:47:59Z / 2026-01-06T09:47:56Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-01-06T09:47:56Z
- **Latest commit SHA:** 0b7f89331541183317f51b09034eab94f641a23e
- **Latest commit message:** Update README.md
- **README path:** README.md
- **Tree entries:** 4 
- **Top-level dirs:** .github
- **Top-level files:** README.md
- **Important files:** .github/workflows/waka-readme.yml, README.md
- **Deployment hints:** github_pages, vercel

#### README excerpt

```markdown
<!-- Cinematic Animated Header -->
<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=35&duration=3000&pause=800&color=00F7FF&center=true&vCenter=true&width=800&lines=Welcome+to+My+Digital+Space;I'm+Shoaib+Sadiq+Salehmohamed;AI+%26+Data+Science+Explorer;Full+Stack+Developer;Robotics+%26+Automation+Enthusiast;Always+Evolving+%F0%9F%9A%80" alt="Typing Animation" />
</h1>

<!-- Animated Gradient Divider -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&height=4&section=header&reversal=true&animation=twinkling" />
</p>



## 👨‍💻 About Me
<p align="center">
Hi! I’m <b>Shoaib</b> — a curious mind blending <b>Data Science</b>, <b>Software Engineering</b>, and <b>Robotics</b> to craft innovative solutions.  
I believe in learning by doing, automating the boring stuff, and building tech that makes life better.  
When I’m not coding, you’ll find me exploring <i>AI concepts</i>, tinkering with <i>IoT devices</i>, or brewing strong coffee ☕.
</p>



<!-- Animated Gradient Divider -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&height=4&section=header&reversal=true&animation=twinkling" />
</p>

## 📊 WakaTime Activity (Last 7 Days)
<p align="center">
  <a href="https://wakatime.com/@a85deef6-2e94-465d-998e-c54914c040a2">
    <img src="https://github-readme-stats-fast.vercel.app/api/wakatime?username=a85deef6-2e94-465d-998e-c54914c040a2&theme=tokyonight&layout=compact&hide_border=true" />
  </a>
</p>



<!-- Animated Gradient Divider -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&height=4&section=header&reversal=true&animation=twinkling" />
</p>

## 📈 GitHub Stats
<p align="center">
  <img src="https://github-readme-stats-fast.vercel.app/api?username=shoaib2000857&show_icons=true&theme=tokyonight" height="165" />
  <img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=shoaib2000857&layout=compact&theme=tokyonight" height="165" />
</p>


## 🔥 Streak & Achievements

<p align="center">
  <img
    src="https://github-readme-stats-fast.vercel.app/api/streak?username=shoaib2000857&theme=tokyonight"
    alt="GitHub Streak Stats"
  />
</p>

<p align="center">
  <img
    src="https://github-profile-trophy.vercel.app/?username=shoaib2000857&theme=tokyonight&no-frame=true&margin-w=15&column=6"
    alt="GitHub Trophies"
  />
</p>




<!-- Animated Gradient Divider -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&height=4&section=header&reversal=true&animation=twinkling" />
</p>

## 📊 Contribution Graph
[![Shoaib's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=shoaib2000857&bg_color=0d1117&color=00f7ff&line=8a2be2&point=00f7ff&area=true&hide_border=true)](https://github.com/ashutosh00710/github-readme-activity-graph)


## 🛠 Tech Stack

<div align="center">

<!-- Row 1 -->
<a href
```


### shoaib2000857/shoaib2000857.github.io

- **Repo link:** https://github.com/shoaib2000857/shoaib2000857.github.io
- **GitHub Pages guess:** https://shoaib2000857.github.io/
- **Deployment links:** https://shoaib2000857.github.io/
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** —
- **Detected stack:** —
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2024-08-07T06:46:05Z / 2024-08-07T08:30:07Z / 2024-08-07T08:30:04Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2024-08-07T08:30:04Z
- **Latest commit SHA:** 2d3d1bf6f3972e079f288507e3de83395503f2d6
- **Latest commit message:** Create CNAME
- **README path:** README.md
- **Tree entries:** 2 
- **Top-level dirs:** —
- **Top-level files:** CNAME, README.md
- **Important files:** README.md
- **Deployment hints:** —

#### README excerpt

```markdown
# shoaib2000857.github.io
```


### shoaib2000857/Smart-Kishi

- **Repo link:** https://github.com/shoaib2000857/Smart-Kishi
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** —
- **Detected stack:** —
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2024-12-24T09:16:50Z / 2024-12-24T09:17:05Z / 2024-12-24T09:17:02Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2024-12-24T09:16:53Z
- **Latest commit SHA:** a3f16194377c31ad6bd93d4d26812eff63363279
- **Latest commit message:** first commit
- **README path:** README.md
- **Tree entries:** 1 
- **Top-level dirs:** —
- **Top-level files:** README.md
- **Important files:** README.md
- **Deployment hints:** —
- **Notes:** No README found via API.

#### README excerpt

_No README text found._


### shoaib2000857/Subway-Surfers-controller

- **Repo link:** https://github.com/shoaib2000857/Subway-Surfers-controller
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 1 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2026-04-06T04:12:58Z / 2026-04-06T04:13:09Z / 2026-04-06T04:13:02Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-04-06T04:12:43Z
- **Latest commit SHA:** 0170260124466e85479dfd58f5194e1ff7aa772d
- **Latest commit message:** Init
- **README path:** —
- **Tree entries:** 1 
- **Top-level dirs:** —
- **Top-level files:** gesture_game_controller.py
- **Important files:** —
- **Deployment hints:** —
- **Notes:** No README found via API.

#### README excerpt

_No README text found._


### shoaib2000857/Sudhanshu-Chaturvedi-Portfolio

- **Repo link:** https://github.com/shoaib2000857/Sudhanshu-Chaturvedi-Portfolio
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** TypeScript
- **Detected stack:** JavaScript, TypeScript, React, Next.js
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 1 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-12-23T20:04:39Z / 2025-12-23T20:04:46Z / 2025-12-23T20:04:42Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-12-23T20:04:11Z
- **Latest commit SHA:** e535f40e99210f9a67ed906214d64c01b2a416da
- **Latest commit message:** Init
- **README path:** README.md
- **Tree entries:** 20 
- **Top-level dirs:** public, src
- **Top-level files:** .gitignore, README.md, eslint.config.mjs, next.config.ts, package-lock.json, package.json, postcss.config.mjs, tsconfig.json
- **Important files:** README.md, next.config.ts, package-lock.json, package.json, postcss.config.mjs, tsconfig.json
- **Deployment hints:** vercel

#### README excerpt

```markdown
## Sudhanshu Chaturvedi — Portfolio

A Next.js (App Router, TypeScript, Tailwind) portfolio for Sudhanshu Chaturvedi, PhD Research Scholar in Thermal Engineering at IIT (BHU) Varanasi. The site highlights CFD, heat transfer, sustainable energy work, experience, education, skills, and certifications.

### Getting started

```bash
npm install
npm run dev
# visit http://localhost:3000
```

### Tech stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4
- next/font with Playfair Display + Manrope
- ESLint

### Customization hints

- Update the contact section in `src/app/page.tsx` with direct email/links.
- Add publications, projects, or downloads as new sections or cards.
- Tailwind utilities are available globally via `globals.css`; `.card-surface` provides the glassy card style.

### Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the build
- `npm run lint` — lint the codebase
```


### shoaib2000857/Sundarbans-House_Vue

- **Repo link:** https://github.com/shoaib2000857/Sundarbans-House_Vue
- **Homepage:** https://sundarbans-house-vue.vercel.app
- **Deployment links:** https://sundarbans-house-vue.vercel.app
- **Description:** A centralized platform for managing events, resources, team collaboration, and digital initiatives of Sundarbans House.
- **Owner:** shoaib2000857
- **Primary language:** —
- **Detected stack:** JavaScript, React, Vue
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2026-04-14T06:07:26Z / 2026-04-14T06:07:26Z / 2026-04-13T20:38:53Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2026-04-13T20:38:53Z
- **Latest commit SHA:** 0b192b0646c77d03e0d0548a4a653b2e50cc0bfd
- **Latest commit message:** Update MeetupsView template and script
- **README path:** README.md
- **Tree entries:** 337 
- **Top-level dirs:** public, src, sundarbans, teams
- **Top-level files:** .gitignore, README.md, index.html, package-lock.json, package.json, vite.config.js
- **Important files:** README.md, index.html, package-lock.json, package.json, vite.config.js
- **Deployment hints:** github_pages
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
Sundarbans-House
A centralized platform for managing events, resources, team collaboration, and digital initiatives of Sundarbans House.

<img width="1432" height="783" alt="Screenshot 2026-04-02 at 10 53 46" src="https://github.com/user-attachments/assets/04fef05d-a7f3-4fe1-8ef9-20a104ec3600" />


<img width="1060" height="660" alt="Screenshot 2026-04-02 at 10 55 34" src="https://github.com/user-attachments/assets/eb5873b4-ba36-400d-8ff6-d162f89ffbeb" />

<img width="1470" height="728" alt="Screenshot 2026-04-02 at 10 57 30" src="https://github.com/user-attachments/assets/890ea9bb-9ed4-4cb8-b451-e50d6f2c563f" />

<img width="1352" height="685" alt="Screenshot 2026-04-02 at 10 59 07" src="https://github.com/user-attachments/assets/18ef2136-596a-470a-9ced-f9abae453d6f" />



Structure

```
sundarbans-vue/
├── index.html
├── vite.config.js
├── package.json
├── sundarbans
├── public/
│   └── assets/          
│       └── teams/      
└── src/
    ├── main.js
    ├── App.vue           ← Global shell: preloader, cursor, particles, navbar, search, notifications, theme
    ├── assets/
    │   └── style.css     ← Full style_premium.css (Black + Gold brand theme)
    ├── router/
    │   └── index.js      ← All routes mapped to views
    ├── composables/
    │   └── useAnimations.js  ← useScrollReveal(), useCounters(), useCountdown()
    ├── components/
    │   └── AppFooter.vue ← Shared footer
    └── views/
        ├── HomeView.vue      → /
        ├── AboutView.vue     → /about
        ├── EventsView.vue    → /events
        ├── StudyView.vue     → /study
        ├── TeamsView.vue     → /teams
        ├── GalleryView.vue   → /gallery
        ├── MeetupsView.vue   → /meetups
        ├── CommunityView.vue → /community
        ├── ContactView.vue   → /contact
        ├── SocialView.vue    → /social
        └── LoginView.vue     → /members
```

<img width="1470" height="470" alt="Screenshot 2026-03-26 at 23 43 59" src="https://github.com/user-attachments/assets/22307785-dffc-403b-8264-a64838d91c6b" />
```


### shoaib2000857/TDS-Project

- **Repo link:** https://github.com/shoaib2000857/TDS-Project
- **Deployment links:** https://user.github.io/chess-game",, https://username.github.io/unique-task-id"
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python, FastAPI, Docker
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-10-17T15:53:23Z / 2025-10-17T15:54:06Z / 2025-10-17T15:54:03Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-17T15:54:02Z
- **Latest commit SHA:** d84dffa8bc457b1c28ccefb497c9abe5e6d7c963
- **Latest commit message:** Add files via upload
- **README path:** README.md
- **Tree entries:** 7 
- **Top-level dirs:** —
- **Top-level files:** Dockerfile, LICENSE, README.md, config.py, main.py, models.py, requirements.txt
- **Important files:** Dockerfile, README.md, main.py, requirements.txt
- **Deployment hints:** docker, github_pages

#### README excerpt

```markdown
---
title: Gemini Task Automation
emoji: 🤖
colorFrom: blue
colorTo: purple
sdk: docker
app_port: 8080
pinned: false
---

# 🤖 Gemini Task Automation System

**An AI-powered task automation service that receives task descriptions, generates complete web applications using Gemini AI, and automatically deploys them to GitHub Pages.**

## 🎯 What Does This Project Do?

This is an **automated code generation and deployment pipeline** that:

1. **Receives Task Requests** via REST API (POST /ready endpoint)
2. **Generates Code** using Google's Gemini AI based on natural language descriptions
3. **Creates GitHub Repositories** automatically for each task
4. **Deploys to GitHub Pages** making the generated apps instantly accessible
5. **Notifies Completion** by sending deployment details to a callback URL

### 🔄 Complete Workflow

```
User sends task request → API validates → Gemini generates code → 
Creates GitHub repo → Commits & pushes → Enables GitHub Pages → 
Sends notification with live URL
```

## ✨ Key Features

- **Fully Generic** - No hardcoded templates, pure AI-driven generation
- **Background Processing** - Returns HTTP 200 immediately, processes asynchronously
- **Round-based Updates** - Round 1 creates new repos, Round 2+ updates existing ones
- **Attachment Support** - Can include images (logos, mockups, sample data) for AI context
- **Robust Error Handling** - Detailed logging with specific error types
- **JSON Schema Enforcement** - Ensures structured, parseable AI responses
- **Exponential Backoff** - Retries for GitHub API operations
- **Docker Ready** - Production-ready containerization

## 📋 How It Works (Technical Deep Dive)

### 1️⃣ Request Reception
```json
POST /ready
{
  "email": "user@example.com",
  "secret": "auth-token",
  "task": "chess-game",
  "round": 1,
  "brief": "Create a chess game with...",
  "checks": ["Has license", "Works in browser"],
  "evaluation_url": "https://callback.example.com",
  "attachments": []
}
```

### 2️⃣ AI Code Generation
- Sends task brief + checks + attachments to **Gemini 2.5 Flash**
- Uses **JSON schema** to enforce structured output
- AI generates all files (HTML, CSS, JS, README, LICENSE)
- Returns: `{"files": [{"path": "index.html", "content": "..."}]}`

### 3️⃣ GitHub Repository Setup
- **Round 1:** Creates new repository via GitHub API
- **Round 2+:** Clones existing repo, updates files
- Configures git with user credentials
- Commits with descriptive messages

### 4️⃣ Deployment
- Pushes to GitHub with retry logic (5 attempts, exponential backoff)
- Enables GitHub Pages via API
- Waits for Pages to become active

### 5️⃣ Notification
- POSTs deployment results to `evaluation_url`:
```json
{
  "email": "user@example.com",
  "task": "chess-game",
  "repo_url": "https://github.com/user/chess-game",
  "pages_url": "https://user.github.io/chess-game",
  "commit_sha": "abc123..."
}
```

## 🚀 Deployment Options

### Option 1: Docker (Recommended)
```bash
docker build -t gemini-automation .
dock
```


### shoaib2000857/TDS-Project1-llm-code-deployment

- **Repo link:** https://github.com/shoaib2000857/TDS-Project1-llm-code-deployment
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-10-15T12:04:24Z / 2025-10-17T13:20:24Z / 2025-10-17T13:20:20Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-17T13:20:16Z
- **Latest commit SHA:** b3a4726707ffafcdb62c9330602d06d9a95ef5f2
- **Latest commit message:** try
- **README path:** —
- **Tree entries:** 17 
- **Top-level dirs:** __pycache__, app, shared
- **Top-level files:** .env.example, mock_eval.py, requirements.txt, task.json, task_round2.json
- **Important files:** requirements.txt
- **Deployment hints:** —
- **Notes:** No README found via API.

#### README excerpt

_No README text found._


### shoaib2000857/TDS-work

- **Repo link:** https://github.com/shoaib2000857/TDS-work
- **Homepage:** https://tds-work-rho.vercel.app
- **GitHub Pages guess:** https://shoaib2000857.github.io/TDS-work/
- **Deployment links:** https://tds-work-rho.vercel.app, https://shoaib2000857.github.io/TDS-work/
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** Python
- **Detected stack:** Python
- **Topics:** hacktoberfest
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-09-21T10:52:33Z / 2025-10-29T13:42:02Z / 2025-10-29T13:41:59Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-10-29T13:41:58Z
- **Latest commit SHA:** 180dac52faa523061b85d21f7a11b0d64a8ce5cd
- **Latest commit message:** Update CI badge link in README.md
- **README path:** README.md
- **Tree entries:** 20 
- **Top-level dirs:** .devcontainer, .github, api, tests
- **Top-level files:** .gitignore, README.md, email.json, index.html, streak.py, vercel.json
- **Important files:** .github/workflows/cache.yml, .github/workflows/ci.yml, .github/workflows/main.yml, .github/workflows/pytest.yml, README.md, index.html, vercel.json
- **Deployment hints:** github_pages, vercel

#### README excerpt

```markdown
![CI](https://github.com/shoaib2000857/TDS-work/actions/workflows/ci.yml/badge.svg)
```


### shoaib2000857/TeamGChatBot

- **Repo link:** https://github.com/shoaib2000857/TeamGChatBot
- **Homepage:** https://ai-study-assistant.vercel.app
- **Deployment links:** https://ai-study-assistant.vercel.app
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** JavaScript
- **Detected stack:** JavaScript, React, Next.js
- **Topics:** —
- **License:** GNU General Public License v3.0
- **Stars / Forks / Watchers:** 1 / 0 / 1
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2024-09-30T08:29:43Z / 2024-12-15T11:26:39Z / 2024-11-01T11:38:27Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2024-11-01T11:38:26Z
- **Latest commit SHA:** 1e0e4fbeeeb381662cbedffe468f694730644d8c
- **Latest commit message:** Merge branch 'main' of https://github.com/shoaib2000857/TeamGChatBot
- **README path:** README.md
- **Tree entries:** 54 
- **Top-level dirs:** app, components, lib, models, public
- **Top-level files:** .eslintrc.json, .gitignore, LICENSE, README.md, env.semple, jsconfig.json, middleware.js, next.config.mjs, package-lock.json, package.json, postcss.config.js, postcss.config.mjs, tailwind.config.js
- **Important files:** README.md, next.config.mjs, package-lock.json, package.json, postcss.config.js, postcss.config.mjs, tailwind.config.js
- **Deployment hints:** vercel

#### README excerpt

```markdown
[<div><Img alt="Purr-fessor" src='public/hackathon.jpg'></div>](https://ai-study-assistant.vercel.app)

# Purr-fessor: Your AI Cat Teaching Assistant 🐾✨

Purr-fessor is an AI-powered teaching assistant chatbot designed to make learning both fun and engaging. With its adorable feline personality, Purr-fessor brings a playful and charming twist to education, offering academic support, study tips, and constant encouragement — all with a dash of cat-inspired charisma! 🐱📚

**Theme Catchline:** "Where curiosity meets education — one paw at a time!"

## 📋 Table of Contents

- [Getting Started 🛠️](#getting-started-🛠️)
- [Key Features 🐾](#key-features-🐾)
- [Chatbot Personality Traits 😸](#chatbot-personality-traits-😸)
- [Cat-themed Elements 🐱](#cat-themed-elements-🐱)
- [Tech Stack 🖥️](#tech-stack-🖥️)
- [Features Coming Soon 🚀](#features-coming-soon-🚀)
- [Contributor 🙌](#contributor-🙌)
- [License 📜](#license-📜)

## Getting Started 🛠️

This project is built using [Next.js](https://nextjs.org/).

1. **Clone the repository:** `git clone https://github.com/shoaib2000857/TeamGChatBot.git`
2. **Install dependencies:** `npm install`
3. **Run the development server:** `npm run dev`

## Key Features 🐾

- **Meow-tivational Messages:** Sends uplifting and encouraging messages to keep students inspired.
- **Whisker-smart Answers:** Provides clear and concise explanations to academic questions, making learning a breeze.
- **Purr-sonal Study Plans:** Helps students create custom study schedules that cater to their unique needs.
- **Tail-ored Resources:** Recommends relevant materials and resources to enhance learning.
- **Feline Feedback:** Offers constructive feedback on assignments — always with a playful twist!

## Chatbot Personality Traits 😸

- **Curious and inquisitive 🧐:** Always eager to explore and learn, encouraging students to think deeply.
- **Patient and supportive 💖:** Never gets frustrated, patiently guides users through concepts, and offers encouragement.
- **Playful and witty 😸:** Uses cat-themed puns and jokes to make learning fun and engaging.
- **Knowledgeable yet approachable 🧠:** Highly knowledgeable but maintains a friendly and relatable demeanor.

## Cat-themed Elements 🐱

- **User Greeting:** “Meow there! Ready to pounce on some knowledge?” 🐾
- **Loading Message:** “Just grooming my thoughts, give me a moment...” 🐈
- **Error Message:** “Uh-oh, I got distracted by a laser pointer! Let's try again.” 😹
- **Task Completion:** “Purr-fect! You’ve mastered this concept!” 🏆🐾

## Tech Stack 🖥️

- **JavaScript:** Provides the logic and interactivity of the chatbot. It handles user input, generates responses, and manages the dynamic elements of the application.
- **Next.js:** A powerful React framework for building web applications. It simplifies development with features like server-side rendering, routing, and data fetching,
- **Axios:** A library used for making HTTP requests. It enables the chatbot to communicate with external APIs and fetch necessary d
```


### shoaib2000857/Weather-API-gssoc

- **Repo link:** https://github.com/shoaib2000857/Weather-API-gssoc
- **Deployment links:** https://weather-available.netlify.app, https://weather-api-ex1z.onrender.com, https://weather-api-ex1z.onrender.com/delhi
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** JavaScript
- **Detected stack:** JavaScript, Docker
- **Topics:** —
- **License:** MIT License
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / True / False
- **Created / Updated / Pushed:** 2025-07-31T13:22:08Z / 2025-07-31T13:48:35Z / 2025-07-31T13:48:31Z
- **Default branch:** main
- **Latest release:** —
- **Latest commit date:** 2025-07-31T13:48:30Z
- **Latest commit SHA:** 4d07198c912ad2548ed28f29178f7b72ee9e48f3
- **Latest commit message:** Update script.js
- **README path:** README.md
- **Tree entries:** 39 
- **Top-level dirs:** .github, public, test
- **Top-level files:** .env.example, .gitignore, Code of Conduct.md, Contributing.md, Dockerfile, LICENSE.md, README.md, Security.md, babel.config.js, docker-compose.yaml, eslint.config.js, jest.config.js, jest.setup.js, package-lock.json, package.json, server.js
- **Important files:** .github/workflows/dependency.yml, .github/workflows/lint.yml, .github/workflows/test.yml, .github/workflows/uptime.yml, Dockerfile, README.md, docker-compose.yaml, package-lock.json, package.json
- **Deployment hints:** docker, github_pages
- **Notes:** Repository is a fork.

#### README excerpt

```markdown
# 🌦️ Weather API - Your Personal Weather Scraper!

<a name="top"></a>
A simple yet powerful weather scraper built with **Node.js, Express, and Cheerio**. This project dynamically fetches real-time weather data for any city, scrapes the necessary details, and presents them on an intuitive user interface. 🌍☀️🌧️

---

## ✨ Features That Shine

🔹 **Real-Time Weather Data:** Get instant updates on:

- 📅 Date
- 🌡️ Temperature (Current, Min & Max)
- 💧 Humidity
- 🔽 Pressure

🔹 **Express-Powered API:** A lightweight and efficient API built with Express.js.

🔹 **Web Scraping Magic:** Uses Axios to fetch and Cheerio to extract weather details effortlessly.

🔹 **Beautiful & Responsive UI:** Clean, minimal, and user-friendly interface for seamless interaction.

---

## 🔧 Prerequisites

Before you get started, ensure you have:

✅ [Node.js](https://nodejs.org/) (v12 or later recommended)
✅ [npm](https://www.npmjs.com/) (Comes bundled with Node.js)

---

## 🚀 Quick Installation

1️⃣ **Clone the repository:**

```bash
git clone https://github.com/GauravKarakoti/weather-api.git
cd weather-api
```

2️⃣ **Install dependencies:**

```bash
npm install
```

3️⃣ **Set up environment variables:**

```bash
cp .env.example .env
```

_(Update `.env` with required API endpoint, CSS selectors, and server port.)_

---

## 🌐 Live Demo & Usage

### 🎯 Try It Online!

🚀 **[Live Frontend Demo](https://weather-available.netlify.app)** – Just enter a city name and get weather details instantly!

### 🖥️ Running Locally

1️⃣ **Start the server:**

```bash
node server.js
```

_(Server runs on the port specified in `.env`, default: `3003`)_

2️⃣ **Launch the Frontend:**

- Open `index.html` in a browser.
- Or use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for better performance.

3️⃣ **Get Weather Updates:**

- Enter a city name 📍
- Click **Get Weather** ☁️
- See real-time weather info! 🌡️

### 🔗 Backend API (Deployed)

🌍 **[Weather API Backend](https://weather-api-ex1z.onrender.com)** – Fetch weather details via endpoints.

Example: **[Delhi Weather](https://weather-api-ex1z.onrender.com/delhi)**

---

## 📂 Project Structure

```
weather-api/
│-- frontend/
│   ├── index.html      # User Interface
│   ├── styles.css      # Styling
│   ├── script.js       # API Handling
│
│-- server/
│   ├── server.js       # Express Backend
│   ├── scraper.js      # Web Scraping Logic
│   ├── .env            # Configurations
│   ├── package.json    # Dependencies
│
└── README.md           # Documentation
```

---

## 🔧 Tech Stack & Dependencies

🛠️ **Built With:**

- **Express.js** – Fast & lightweight web framework 🚀
- **Axios** – Fetching HTML content effortlessly 🌐
- **Cheerio** – Scraping and parsing made easy 🧐
- **CORS** – Secure cross-origin requests 🔄
- **dotenv** – Manages environment variables 🔐
- **Jest** - Efficient And RObut management for testing 💪🏻

---

## 🤝 Contributions Welcome!

💡 Have suggestions or improvements? Open an issue or submit a 
```


### shoaib2000857/who-kmit

- **Repo link:** https://github.com/shoaib2000857/who-kmit
- **Homepage:** https://who-kmit.vercel.app
- **Deployment links:** https://who-kmit.vercel.app
- **Description:** —
- **Owner:** shoaib2000857
- **Primary language:** JavaScript
- **Detected stack:** JavaScript, Next.js
- **Topics:** —
- **License:** —
- **Stars / Forks / Watchers:** 0 / 0 / 0
- **Open issues:** 0
- **Archived / Fork / Private:** False / False / False
- **Created / Updated / Pushed:** 2025-08-26T03:26:09Z / 2025-08-27T03:24:20Z / 2025-08-27T03:23:33Z
- **Default branch:** master
- **Latest release:** —
- **Latest commit date:** 2025-08-27T03:23:28Z
- **Latest commit SHA:** 1fa1f445b9eafb82d4a3ce225eefe6965481aa1e
- **Latest commit message:** build fix
- **README path:** README.md
- **Tree entries:** 38 
- **Top-level dirs:** app, public, server
- **Top-level files:** .gitignore, README.md, eslint.config.mjs, jsconfig.json, next.config.mjs, package-lock.json, package.json, postcss.config.mjs
- **Important files:** README.md, next.config.mjs, package-lock.json, package.json, postcss.config.mjs
- **Deployment hints:** github_pages, vercel

#### README excerpt

```markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```
