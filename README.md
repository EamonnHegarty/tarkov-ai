# Tarkov AI Dashboard

This project is a full-stack Next.js application that pulls in data about Escape from Tarkov from multiple sources (e.g., Reddit, Wikis), stores it in a vector database, and provides both an AI-powered chatbot interface and data visualizations to help players get insights into the game.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
   - [1. Chatbot powered by AI](#1-chatbot-powered-by-ai)
   - [2. Data Ingestion & Storage](#2-data-ingestion--storage)
   - [3. Visualizations & Analytics](#3-visualizations--analytics)
   - [4. Quest Tracking System](#4-quest-tracking-system)
   - [5. Admin Management](#5-admin-management)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Development](#development)
5. [How It Works](#how-it-works)
   - [Data Pipeline](#data-pipeline)
   - [AI Processing](#ai-processing)
   - [Visualization Layer](#visualization-layer)
6. [External APIs](#external-apis)
7. [Contributing](#contributing)
8. [License](#license)

---

## Overview

The main purpose of this app is to demonstrate how AI tooling (particularly LLMs) can be integrated into a Next.js web application to provide intelligent features. The project pulls data from the /r/EscapefromTarkov subreddit and makes that information queryable through a chatbot UI. It also visualizes metrics such as sentiment, quest progression, and post volume over time.

## Features

### 1. Chatbot Powered by AI

- **Conversational Q&A:** Users can ask about Tarkov gameplay, items, or patch changes, and the chatbot uses OpenAI's models to respond.
- **Context-Aware:** By storing data in a vector database, the chatbot can reference existing posts and other textual data for more accurate answers.
- **User Engagement:** Encourages user engagement by offering an interactive way to learn about the game.

### 2. Data Ingestion & Storage

- **Reddit Data:** Automatically pulls data from the Tarkov subreddit.
- **Vector Database:** Stores data embeddings in Pinecone to facilitate semantic search and advanced Q&A.
- **Scheduled Updates:** Uses scripts to refresh data periodically.

### 3. Visualizations & Analytics

- **Sentiment Analysis:** Track how the subreddit reacts to different patches or events over time.
- **Engagement Analysis:** Show number of posts, comment volume, or upvote trends.
- **Interactive Charts:** Bar charts, line charts, pie charts, and scatter plots built with Recharts.
- **Natural Language Queries:** Ask questions about Tarkov data in plain English.

### 4. Quest Tracking System

- **Kappa Container Tracking:** Monitor progress toward the coveted Kappa secure container.
- **Quest Management:** Track the status of all quests in the game.
- **AI-Powered Updates:** Use natural language to update multiple quests at once.
- **Prerequisite Detection:** Auto-complete prerequisite quests when later quests are marked complete.
- **Detailed Quest Information:** View quest objectives, locations, and required keys.

### 5. Admin Management

- **User Control:** Monitor and manage user accounts and permissions.
- **Token Usage:** Set daily limits for AI token usage to control costs.
- **Analytics Dashboard:** Track system-wide usage patterns.

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org), React, TypeScript
- **AI/LLM Integration:** [OpenAI API](https://platform.openai.com/docs/introduction)
- **Data Storage:** PostgreSQL, Pinecone Vector Database
- **Authentication:** Clerk
- **Visualization:** Recharts
- **Styling:** Tailwind CSS & shadcn/ui

## Getting Started

### Prerequisites

- **Node.js** >= 16
- **npm/yarn/pnpm** (whichever you prefer)
- **OpenAI API key**
- **Pinecone API key**
- **PostgreSQL database**

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
   - Add required API keys:
     ```bash
     DATABASE_URL=YOUR_KEY_HERE
     OPENAI_API_KEY=YOUR_KEY_HERE
     PINECONE_API_KEY=YOUR_KEY_HERE
     PINECONE_INDEX_NAME=tarkov-data
     CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
     CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
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
   - Pull from subreddit endpoints
   - Process text content into suitable chunks
2. **Preprocessing & Embeddings:**
   - Clean up the text (remove duplicates, formatting, etc.)
   - Generate embeddings using OpenAI
3. **Vector DB Insertion:**
   - Store the embeddings and metadata in Pinecone
   - Update regularly to keep data fresh

### AI Processing

1. **User Query:**
   - A user types a question: "What's the sentiment on the latest wipe?"
2. **Vector Search:**
   - The system runs the user query through an embedding model, searches the vector DB for the closest matches, and returns relevant text chunks.
3. **LLM Answer Generation:**
   - These chunks are combined into a prompt for the OpenAI model
   - The LLM composes a final, contextually aware answer.

### Visualization Layer

1. **Analytics Endpoint:**
   - Next.js API route aggregates data into a format suitable for rendering.
2. **Frontend Rendering:**
   - Recharts visualizes the aggregated data on charts, timelines, or pie charts.

---

## External APIs

This project integrates with several external APIs to enhance functionality:

1. **Tarkov.dev API:** Used for barter trade analysis, providing real-time data on item prices and market values.

2. **OpenAI API:** Powers the core AI functionality, including:

   - GPT models for conversational AI
   - Embeddings API for vector storage and retrieval

3. **Reddit Data:** Used to gather community discussions and sentiment from the Escape from Tarkov subreddit.

4. **Tarkov Wiki:** Used for the kappa page.

---

## Contributing

Contributions and suggestions are welcome!

---

## License

[MIT License](LICENSE)
