"use client";

import React from "react";
import {
  ArrowRight,
  BookOpen,
  Code,
  Database,
  MessageSquare,
  BarChart,
  Shield,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 text-text">
      <header className="mb-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-tarkov-secondary mb-4">
          Tarkov AI Dashboard Documentation
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          A comprehensive guide to the AI-powered Tarkov companion application
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="flex flex-col items-center text-center">
            <MessageSquare className="h-12 w-12 text-tarkov-secondary mb-4" />
            <CardTitle>AI Chat System</CardTitle>
            <CardDescription>
              Intelligent conversational interface powered by AI to answer
              questions about Escape from Tarkov
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Link href="#chat-section">
              <Button variant="link" className="text-tarkov-secondary">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-col items-center text-center">
            <BarChart className="h-12 w-12 text-tarkov-secondary mb-4" />
            <CardTitle>Data Analytics</CardTitle>
            <CardDescription>
              Visual insights and trend analysis for the Tarkov community and
              gameplay statistics
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Link href="#analytics-section">
              <Button variant="link" className="text-tarkov-secondary">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-col items-center text-center">
            <Database className="h-12 w-12 text-tarkov-secondary mb-4" />
            <CardTitle>Vector Database</CardTitle>
            <CardDescription>
              Semantic search capabilities powered by embeddings and Pinecone
              vector storage
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Link href="#database-section">
              <Button variant="link" className="text-tarkov-secondary">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <section id="overview-section" className="mb-16">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-tarkov-secondary" />
              <CardTitle className="text-3xl font-bold text-tarkov-secondary">
                Project Overview
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-text-secondary">
              The Tarkov AI Dashboard is a full-stack Next.js application that
              leverages AI technology to provide insights, analysis, and
              assistance for Escape from Tarkov players. The application pulls
              data from multiple sources including the Tarkov subreddit, and
              uses advanced language models to make this information accessible
              and actionable for players.
            </p>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Key Features
            </h3>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                AI-powered chat system for answering Tarkov-related queries
              </li>
              <li>
                Data visualization and analytics of Tarkov subreddit content
              </li>
              <li>Vector database for semantic search capabilities</li>
              <li>User authentication and token usage tracking</li>
              <li>
                Admin panel for managing user permissions and token limits
              </li>
              <li>Responsive and modern user interface</li>
            </ul>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Technology Stack
            </h3>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                <strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind
                CSS, shadcn/ui, Recharts
              </li>
              <li>
                <strong>Backend:</strong> Next.js API Routes, Prisma ORM
              </li>
              <li>
                <strong>Database:</strong> PostgreSQL (primary storage),
                Pinecone (vector database)
              </li>
              <li>
                <strong>AI/ML:</strong> OpenAI API, LangChain, Vector embeddings
              </li>
              <li>
                <strong>Authentication:</strong> Clerk
              </li>
              <li>
                <strong>State Management:</strong> Redux Toolkit
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="chat-section" className="mb-16">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-8 w-8 text-tarkov-secondary" />
              <CardTitle className="text-3xl font-bold text-tarkov-secondary">
                AI Chat System
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-text-secondary">
              The chat system uses OpenAI&#39;s models to provide contextual and
              knowledgeable responses to questions about Escape from Tarkov. The
              system is designed to assist players with game mechanics,
              strategies, quest information, and more.
            </p>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Architecture
            </h3>
            <p className="text-text-secondary">
              The chat functionality follows a client-server architecture where
              the frontend React components communicate with Next.js API routes,
              which in turn interact with OpenAI&#39;s API and the database.
            </p>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Key Components
            </h3>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                <strong>Chat UI:</strong> A responsive interface with message
                history, input area, and token usage meter
              </li>
              <li>
                <strong>Chat API:</strong> Next.js API routes for creating chats
                and sending/receiving messages
              </li>
              <li>
                <strong>Context Management:</strong> Maintains conversation
                history for contextual understanding
              </li>
              <li>
                <strong>Token Usage Tracking:</strong> Monitors and limits API
                usage to control costs
              </li>
            </ul>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Implementation Details
            </h3>
            <p className="text-text-secondary">
              Chat conversations are stored in a PostgreSQL database using
              Prisma ORM. Each chat has a title and contains a series of
              messages with roles (user/assistant). The application uses Redux
              Toolkit for state management across components.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="analytics-section" className="mb-16">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart className="h-8 w-8 text-tarkov-secondary" />
              <CardTitle className="text-3xl font-bold text-tarkov-secondary">
                Data Analytics
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-text-secondary">
              The analytics system provides visual insights into Tarkov-related
              data, primarily from the r/EscapefromTarkov subreddit. Users can
              ask questions about trends, popular topics, and community
              sentiment to get data-driven answers and visualizations.
            </p>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Data Pipeline
            </h3>
            <ol className="list-decimal pl-6 text-text-secondary space-y-2">
              <li>
                <strong>Data Collection:</strong> Scripts periodically fetch
                posts from the Tarkov subreddit
              </li>
              <li>
                <strong>Processing:</strong> Text is cleaned and transformed
                into embeddings using OpenAI&#39;s embedding models
              </li>
              <li>
                <strong>Storage:</strong> Embeddings are stored in a Pinecone
                vector database for semantic retrieval
              </li>
              <li>
                <strong>Query Processing:</strong> User queries are converted to
                embeddings and used to fetch relevant content
              </li>
              <li>
                <strong>Analysis:</strong> OpenAI processes the retrieved
                content to extract insights and generate visualizations
              </li>
            </ol>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Visualization Types
            </h3>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                <strong>Bar Charts:</strong> For comparing quantities across
                categories (e.g., weapon popularity)
              </li>
              <li>
                <strong>Line Charts:</strong> For tracking trends over time
                (e.g., topic mentions)
              </li>
              <li>
                <strong>Pie Charts:</strong> For showing proportions (e.g., map
                preferences)
              </li>
              <li>
                <strong>Scatter Plots:</strong> For visualizing relationships
                between variables
              </li>
            </ul>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Recharts Integration
            </h3>
            <p className="text-text-secondary">
              The application uses Recharts, a composable charting library built
              on React components, to render dynamic and responsive
              visualizations. Chart configurations are generated by the AI based
              on the query context.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="database-section" className="mb-16">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-8 w-8 text-tarkov-secondary" />
              <CardTitle className="text-3xl font-bold text-tarkov-secondary">
                Vector Database
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-text-secondary">
              The application uses a dual database approach: PostgreSQL for
              structured data (users, chats, messages) and Pinecone for vector
              embeddings that enable semantic search capabilities.
            </p>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              PostgreSQL Schema
            </h3>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>
                <strong>User:</strong> Stores user information, authentication
                details, and token usage limits
              </li>
              <li>
                <strong>Chat:</strong> Contains chat sessions with titles and
                user associations
              </li>
              <li>
                <strong>Message:</strong> Stores individual messages within
                chats, with content and role
              </li>
              <li>
                <strong>TokenUsage:</strong> Tracks daily token consumption for
                rate limiting
              </li>
            </ul>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Pinecone Vector DB
            </h3>
            <p className="text-text-secondary">
              Pinecone stores vector embeddings generated from Tarkov subreddit
              content. These embeddings capture the semantic meaning of the
              text, allowing for similarity-based searches that go beyond simple
              keyword matching.
            </p>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Embedding Process
            </h3>
            <ol className="list-decimal pl-6 text-text-secondary space-y-2">
              <li>
                Text content is processed through OpenAI&#39;s embedding models
              </li>
              <li>
                The resulting high-dimensional vectors (1536 dimensions) capture
                semantic meaning
              </li>
              <li>
                Vectors are stored in Pinecone along with metadata about the
                source content
              </li>
              <li>
                Queries are converted to the same vector space to find similar
                content
              </li>
            </ol>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Data Refreshing
            </h3>
            <p className="text-text-secondary">
              A scheduled script periodically fetches new content from the
              Tarkov subreddit, generates embeddings, and updates the vector
              database to keep information current.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="user-management-section" className="mb-16">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-tarkov-secondary" />
              <CardTitle className="text-3xl font-bold text-tarkov-secondary">
                Authentication & User Management
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-text-secondary">
              The application uses Clerk for authentication and implements a
              custom user management system for tracking token usage and
              managing access levels.
            </p>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Authentication Flow
            </h3>
            <ol className="list-decimal pl-6 text-text-secondary space-y-2">
              <li>
                Users sign up or sign in through Clerk&#39;s authentication
                interface
              </li>
              <li>
                On first login, a new user record is created in the PostgreSQL
                database
              </li>
              <li>
                The Clerk user ID is linked to the internal user record for
                future reference
              </li>
              <li>
                Protected routes use Clerk middleware to ensure authentication
              </li>
            </ol>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Token Management
            </h3>
            <p className="text-text-secondary">
              To control API usage costs, the application implements a token
              limit system:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>Each user has a daily token limit (default 10,000 tokens)</li>
              <li>Token usage is tracked for each API call to OpenAI</li>
              <li>Users can view their remaining tokens through the UI</li>
              <li>
                When limits are reached, appropriate error messages are
                displayed
              </li>
            </ul>

            <h3 className="text-xl font-bold text-tarkov-secondary">
              Admin Panel
            </h3>
            <p className="text-text-secondary">
              The application includes an admin panel with the following
              capabilities:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2">
              <li>View all users and their token usage statistics</li>
              <li>Adjust individual user&apos;s daily token limits</li>
              <li>
                Mark users as &quot;trusted&quot; to grant them additional
                privileges
              </li>
              <li>Monitor system-wide token consumption</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="api-section" className="mb-16">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code className="h-8 w-8 text-tarkov-secondary" />
              <CardTitle className="text-3xl font-bold text-tarkov-secondary">
                API Reference
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="chat">
              <TabsList className="mb-4">
                <TabsTrigger value="chat">Chat API</TabsTrigger>
                <TabsTrigger value="analytics">Analytics API</TabsTrigger>
                <TabsTrigger value="user">User API</TabsTrigger>
              </TabsList>

              <TabsContent value="chat" className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-tarkov-secondary mb-2">
                    GET /api/chat
                  </h3>
                  <p className="text-text-secondary mb-2">
                    Fetches all chat sessions for the authenticated user.
                  </p>
                  <h4 className="font-semibold text-tarkov-secondary mt-4 mb-2">
                    Response
                  </h4>
                  <pre className="bg-background-2 p-4 rounded-md overflow-x-auto">
                    {
                      '[{"id": "string", "title": "string", "createdAt": "string"}]'
                    }
                  </pre>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold text-tarkov-secondary mb-2">
                    POST /api/chat/create
                  </h3>
                  <p className="text-text-secondary mb-2">
                    Creates a new chat session with an initial message.
                  </p>
                  <h4 className="font-semibold text-tarkov-secondary mt-4 mb-2">
                    Request Body
                  </h4>
                  <pre className="bg-background-2 p-4 rounded-md overflow-x-auto">
                    {'{"userMessage": "string"}'}
                  </pre>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold text-tarkov-secondary mb-2">
                    POST /api/chat/[chatId]/message
                  </h3>
                  <p className="text-text-secondary mb-2">
                    Sends a message in an existing chat session.
                  </p>
                  <h4 className="font-semibold text-tarkov-secondary mt-4 mb-2">
                    Request Body
                  </h4>
                  <pre className="bg-background-2 p-4 rounded-md overflow-x-auto">
                    {`{
  "userMessage": "string"
}`}
                  </pre>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold text-tarkov-secondary mb-2">
                    GET /api/chat/[chatId]/message
                  </h3>
                  <p className="text-text-secondary mb-2">
                    Retrieves all messages in a specific chat session.
                  </p>
                  <h4 className="font-semibold text-tarkov-secondary mt-4 mb-2">
                    Response
                  </h4>
                  <pre className="bg-background-2 p-4 rounded-md overflow-x-auto">
                    {
                      '[{"id": "string", "content": "string", "role": "user or assistant", "createdAt": "string"}]'
                    }
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-tarkov-secondary mb-2">
                    POST /api/analytics
                  </h3>
                  <p className="text-text-secondary mb-2">
                    Analyzes Tarkov subreddit data based on a user query.
                  </p>
                  <h4 className="font-semibold text-tarkov-secondary mt-4 mb-2">
                    Request Body
                  </h4>
                  <pre className="bg-background-2 p-4 rounded-md overflow-x-auto">
                    {'{"prompt": "string"}'}
                  </pre>
                  <h4 className="font-semibold text-tarkov-secondary mt-4 mb-2">
                    Response
                  </h4>
                  <pre className="bg-background-2 p-4 rounded-md overflow-x-auto">
                    {
                      '{"answer": "string", "charts": [{"type": "bar/line/pie/scatter", "title": "string", "xAxis": "string", "yAxis": "string", "data": [{"x": "value", "y": 0}]}], "tokensUsed": 0, "tokensRemaining": 0}'
                    }
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="user" className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-tarkov-secondary mb-2">
                    GET /api/user/token-usage
                  </h3>
                  <p className="text-text-secondary mb-2">
                    Retrieves token usage statistics for the current user.
                  </p>
                  <h4 className="font-semibold text-tarkov-secondary mt-4 mb-2">
                    Response
                  </h4>
                  <pre className="bg-background-2 p-4 rounded-md overflow-x-auto">
                    {
                      '{"tokensUsed": 0, "tokensRemaining": 0, "tokenLimit": 0, "history": [{"date": "2023-05-01", "tokensUsed": 0, "percentOfLimit": 0}], "isTrustedUser": false}'
                    }
                  </pre>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-bold text-tarkov-secondary mb-2">
                    PUT /api/user/token-usage
                  </h3>
                  <p className="text-text-secondary mb-2">
                    Updates a user&apos;s token limit (admin only).
                  </p>
                  <h4 className="font-semibold text-tarkov-secondary mt-4 mb-2">
                    Request Body
                  </h4>
                  <pre className="bg-background-2 p-4 rounded-md overflow-x-auto">
                    {'{"userId": "string", "newLimit": 0}'}
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
