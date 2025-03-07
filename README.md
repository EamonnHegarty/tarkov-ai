# Tarkov AI Dashboard (Working Title)

This project aims to be a full-stack Next.js application that pulls in data about Escape from Tarkov from multiple sources (e.g., Reddit, Wikis, patch notes, etc.), stores it in a vector database, and then provides both an AI-powered chatbot interface and data visualizations to help players get insights into the game.

This version 1 of the readme serves as a guide for what I want to build and how it will work.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
   - [1. Chatbot powered by AI](#1-chatbot-powered-by-ai)
   - [2. Data Ingestion & Storage](#2-data-ingestion--storage)
   - [3. Visualizations & Analytics](#3-visualizations--analytics)
   - [4. Quest Flow Tracker](#4-quest-flow-tracker)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Development](#development)
5. [How It Works](#how-it-works)
   - [Data Pipeline](#data-pipeline)
   - [AI Processing](#ai-processing)
   - [Visualization Layer](#visualization-layer)
6. [Future Ideas](#future-ideas)
7. [Contributing](#contributing)
8. [License](#license)

---

## Overview

The main purpose of this app is to demonstrate how AI tooling (particularly LLMs) can be integrated into a typical Next.js web application to provide intelligent features. The project pulls real-time (or periodic) data from various sources—like the /r/EscapefromTarkov subreddit, official patch notes, or user-contributed data—and makes that information queryable through a chatbot UI. We also plan to visualize interesting metrics such as sentiment, quest progression, or post volume over time.

## Features

### 1. Chatbot Powered by AI

- **Conversational Q&A:** Users can ask about Tarkov gameplay, items, or patch changes, and the chatbot uses a large language model (e.g., OpenAI GPT) to respond.
- **Context-Aware:** By storing data in a vector database, the chatbot can reference existing posts, patch notes, and other textual data for more accurate answers.
- **User Engagement:** Encourages user engagement by offering an interactive way to learn about the game.

### 2. Data Ingestion & Storage

- **Reddit Data:** Automatically pull JSON data from the Tarkov subreddit (e.g., top posts, new posts, etc.).
- **Patch Notes / Wiki Data:** Integrate official patch note APIs or wiki data to capture changes in the game.
- **Vector Database:** Store data embeddings in a vector DB (like Pinecone, Weaviate, Chroma, or a local solution) to facilitate semantic search and advanced Q&A.
- **Scheduled Updates:** Use cron jobs or Next.js API routes to refresh data periodically.

### 3. Visualizations & Analytics

- **Sentiment Analysis:** Track how the subreddit reacts to different patches or events over time (positive vs. negative).
- **Engagement Over Time:** Show number of posts, comment volume, or upvote trends per patch or date range.
- **Patch Impact:** Compare timeline of patch releases with spikes in subreddit activity or sentiment swings.
- **Bugs/Issues Frequency:** Visualize how often certain bugs or issues are mentioned in the data.

### 4. Quest Flow Tracker

- **Quest Dependencies:** Provide a flowchart/graph of Tarkov quests, with pre-requisites and follow-up tasks.
- **User State:** Users can select (or type) which quests they’ve completed or are currently on, and see what’s next.
- **AI Assistance:** The system can leverage a knowledge base of quests so that if a user types “I completed Tarkov Shooter Pt. 3; what’s next?” the AI can provide the next quest steps or important items to keep in your stash.

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org), React, TypeScript
- **AI/LLM Integration:** [OpenAI API](https://platform.openai.com/docs/introduction) or other LLM service
- **Data Storage:** Vector database Upstash
- **Visualization:**Chart.js is most likely to be used
- **Styling:** Tailwind CSS & Chadcn

## Getting Started

### Prerequisites

- **Node.js** >= 16
- **npm/yarn/pnpm** (whichever you prefer)
- **OpenAI API key** (or relevant AI service credentials)

### Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/tarkov-ai-dashboard.git
   cd tarkov-ai-dashboard
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. **Configure environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add your OpenAI (or other LLM) API key and any other required keys:
     ```bash
     OPENAI_API_KEY=YOUR_KEY_HERE
     VECTOR_DB_API_KEY=YOUR_KEY_HERE
     ```

### Development

To run the development server locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How It Works

### Data Pipeline

1. **Data Extraction:**
   - Pull from subreddit JSON endpoints (e.g., /r/EscapefromTarkov/.json).
   - Optionally, scrape or fetch official patch notes.
2. **Preprocessing & Embeddings:**
   - Clean up the text (remove duplicates, formatting, etc.).
   - Generate embeddings using an LLM endpoint.
3. **Vector DB Insertion:**
   - Store the embeddings and metadata in your chosen vector database.

### AI Processing

1. **User Query:**
   - A user types a question: “What’s the sentiment on the latest wipe?”
2. **Vector Search:**
   - The system runs the user query through an embedding model, searches the vector DB for the closest matches, and returns relevant chunks of text.
3. **LLM Answer Generation:**
   - These chunks (e.g., top 5 matches) are combined into a prompt for the LLM.
   - The LLM composes a final, contextually aware answer.

### Visualization Layer

1. **Analytics Endpoint:**
   - Next.js API route aggregates data (e.g., daily post volumes, sentiment analysis results) into a format suitable for rendering.
2. **Frontend Rendering:**
   -Chart.js to visualize the aggregated data on charts, timelines, or heatmaps.

---

## Future Ideas

- **Item Recommendation Engine**
- **Live Wipe-Related Stats**
- **Quest Auto-Completion Suggestions**
- **User-Submitted Data**

---

## Contributing

Contributions and suggestions are welcome!

---

## License

[MIT License](LICENSE)
