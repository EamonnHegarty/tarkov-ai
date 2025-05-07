import React from "react";
import {
  BookOpen,
  MessageSquare,
  BarChart,
  Database,
  Code,
  Shield,
  Share2,
} from "lucide-react";

export const SectionTitle = ({ icon, title }) => {
  return (
    <div className="mb-6 ">
      <div className="flex items-center">
        <span className="mr-3 text-tarkov-secondary">{icon}</span>
        <h1 className="text-2xl font-bold text-tarkov-secondary">{title}</h1>
      </div>
    </div>
  );
};

export const SubSection = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-tarkov-secondary mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
};

export const FeatureList = ({ items }) => {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2 mt-1 text-tarkov-secondary">•</span>
          <span className="text-text-secondary">{item}</span>
        </li>
      ))}
    </ul>
  );
};

const OverviewSection = () => {
  return (
    <div className="bg-ai-chat-message-background border border-[#444444] rounded-lg p-6">
      <SectionTitle
        icon={<BookOpen className="w-6 h-6" />}
        title="Project Overview"
      />

      <div className="max-w-none mb-8">
        <p className="text-text-secondary">
          The Tarkov AI Dashboard is a full-stack Next.js application that
          leverages AI technology to provide insights, analysis, and assistance
          for Escape from Tarkov players. The application pulls data from
          multiple sources including the Tarkov subreddit, and uses advanced
          language models to make this information accessible and actionable for
          players.
        </p>
      </div>

      <SubSection title="Key Features">
        <FeatureList
          items={[
            "AI-powered chat system for answering Tarkov-related queries",
            "Data visualization and analytics of Tarkov subreddit content",
            "Vector database for semantic search capabilities",
            "User authentication and token usage tracking",
            "Admin panel for managing user permissions and token limits",
            "Responsive and modern user interface",
          ]}
        />
      </SubSection>

      <SubSection title="Technology Stack">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-text mb-2">Frontend</h3>
            <FeatureList
              items={[
                "Next.js, React, TypeScript",
                "Tailwind CSS, shadcn/ui",
                "Recharts",
              ]}
            />
          </div>
          <div>
            <h3 className="font-medium text-text mb-2">Backend</h3>
            <FeatureList
              items={["Next.js API Routes", "Prisma ORM", "Redux Toolkit"]}
            />
          </div>
          <div>
            <h3 className="font-medium text-text mb-2">Database</h3>
            <FeatureList
              items={[
                "PostgreSQL (primary storage)",
                "Pinecone (vector database)",
              ]}
            />
          </div>
          <div>
            <h3 className="font-medium text-text mb-2">AI/ML & Auth</h3>
            <FeatureList
              items={[
                "OpenAI API, LangChain",
                "Vector embeddings",
                "Clerk authentication",
              ]}
            />
          </div>
        </div>
      </SubSection>
    </div>
  );
};

const ChatSection = () => {
  return (
    <div className="bg-ai-chat-message-background border border-[#444444] rounded-lg p-6">
      <SectionTitle
        icon={<MessageSquare className="w-6 h-6" />}
        title="AI Chat System"
      />

      <div className="max-w-none mb-8">
        <p className="text-text-secondary">
          The chat system uses OpenAI's models to provide contextual and
          knowledgeable responses to questions about Escape from Tarkov. The
          system is designed to assist players with game mechanics, strategies,
          quest information, and more.
        </p>
      </div>

      <SubSection title="Architecture">
        <p className="text-text-secondary">
          The chat functionality follows a client-server architecture where the
          frontend React components communicate with Next.js API routes, which
          in turn interact with OpenAI's API and the database.
        </p>
      </SubSection>

      <SubSection title="Key Components">
        <FeatureList
          items={[
            "Chat UI: A responsive interface with message history, input area, and token usage meter",
            "Chat API: Next.js API routes for creating chats and sending/receiving messages",
            "Context Management: Maintains conversation history for contextual understanding",
            "Token Usage Tracking: Monitors and limits API usage to control costs",
          ]}
        />
      </SubSection>

      <SubSection title="Implementation Details">
        <p className="text-text-secondary">
          Chat conversations are stored in a PostgreSQL database using Prisma
          ORM. Each chat has a title and contains a series of messages with
          roles (user/assistant). The application uses Redux Toolkit for state
          management across components.
        </p>
      </SubSection>
    </div>
  );
};

const AnalyticsSection = () => {
  return (
    <div className="bg-ai-chat-message-background border border-[#444444] rounded-lg p-6">
      <SectionTitle
        icon={<BarChart className="w-6 h-6" />}
        title="Data Analytics"
      />

      <div className="max-w-none mb-8">
        <p className="text-text-secondary">
          The analytics system provides visual insights into Tarkov-related
          data, primarily from the r/EscapefromTarkov subreddit. Users can ask
          questions about trends, popular topics, and community sentiment to get
          data-driven answers and visualizations.
        </p>
      </div>

      <SubSection title="Data Pipeline">
        <ol className="list-decimal space-y-2 pl-5">
          <li className="text-text-secondary">
            <strong className="text-text">Data Collection:</strong> Scripts
            periodically fetch posts from the Tarkov subreddit
          </li>
          <li className="text-text-secondary">
            <strong className="text-text">Processing:</strong> Text is cleaned
            and transformed into embeddings using OpenAI's embedding models
          </li>
          <li className="text-text-secondary">
            <strong className="text-text">Storage:</strong> Embeddings are
            stored in a Pinecone vector database for semantic retrieval
          </li>
          <li className="text-text-secondary">
            <strong className="text-text">Query Processing:</strong> User
            queries are converted to embeddings and used to fetch relevant
            content
          </li>
          <li className="text-text-secondary">
            <strong className="text-text">Analysis:</strong> OpenAI processes
            the retrieved content to extract insights and generate
            visualizations
          </li>
        </ol>
      </SubSection>

      <SubSection title="Visualization Types">
        <FeatureList
          items={[
            "Bar Charts: For comparing quantities across categories (e.g., weapon popularity)",
            "Line Charts: For tracking trends over time (e.g., topic mentions)",
            "Pie Charts: For showing proportions (e.g., map preferences)",
            "Scatter Plots: For visualizing relationships between variables",
          ]}
        />
      </SubSection>
    </div>
  );
};

const DatabaseSection = () => {
  return (
    <div className="bg-ai-chat-message-background border border-[#444444] rounded-lg p-6">
      <SectionTitle
        icon={<Database className="w-6 h-6" />}
        title="Vector Database"
      />

      <div className="max-w-none mb-8">
        <p className="text-text-secondary">
          The application uses a dual database approach: PostgreSQL for
          structured data (users, chats, messages) and Pinecone for vector
          embeddings that enable semantic search capabilities.
        </p>
      </div>

      <SubSection title="PostgreSQL Schema">
        <FeatureList
          items={[
            "User: Stores user information, authentication details, and token usage limits",
            "Chat: Contains chat sessions with titles and user associations",
            "Message: Stores individual messages within chats, with content and role",
            "TokenUsage: Tracks daily token consumption for rate limiting",
          ]}
        />
      </SubSection>

      <SubSection title="Pinecone Vector DB">
        <p className="text-text-secondary">
          Pinecone stores vector embeddings generated from Tarkov subreddit
          content. These embeddings capture the semantic meaning of the text,
          allowing for similarity-based searches that go beyond simple keyword
          matching.
        </p>

        <h3 className="font-medium text-text mt-4 mb-2">Embedding Process</h3>
        <ol className="list-decimal space-y-2 pl-5">
          <li className="text-text-secondary">
            Text content is processed through OpenAI's embedding models
          </li>
          <li className="text-text-secondary">
            The resulting high-dimensional vectors (1536 dimensions) capture
            semantic meaning
          </li>
          <li className="text-text-secondary">
            Vectors are stored in Pinecone along with metadata about the source
            content
          </li>
          <li className="text-text-secondary">
            Queries are converted to the same vector space to find similar
            content
          </li>
        </ol>
      </SubSection>
    </div>
  );
};

const ToolsSection = () => {
  return (
    <div className="bg-ai-chat-message-background border border-[#444444] rounded-lg p-6">
      <SectionTitle
        icon={<Code className="w-6 h-6" />}
        title="Advanced AI Tools"
      />

      <div className="max-w-none mb-8">
        <p className="text-text-secondary">
          The application incorporates several specialized AI tools that enhance
          the user experience and provide valuable gameplay assistance beyond
          basic chat functionality.
        </p>
      </div>

      <SubSection title="Barter Trade Analysis">
        <p className="text-text-secondary">
          The barter trade tool helps players identify profitable trades in the
          Tarkov economy by:
        </p>
        <FeatureList
          items={[
            "Fetching real-time barter trade data from the Tarkov.dev API",
            "Calculating profitability based on current flea market prices",
            "Filtering out trades involving unbuyable items (e.g., Bitcoin, GP coins)",
            "Ranking trades by profit margin or return on investment (ROI)",
            "Providing detailed breakdowns of required items and their costs",
          ]}
        />
      </SubSection>

      <SubSection title="Image Generation">
        <p className="text-text-secondary">
          Using OpenAI's DALL-E 3 model, the image generation tool allows users
          to:
        </p>
        <FeatureList
          items={[
            "Create visual representations of Tarkov maps, locations, and concepts",
            "Generate custom illustrations for specific game scenarios",
            "Visualize weapon builds, character loadouts, and tactical setups",
            "Create reference images for extraction points or loot locations",
          ]}
        />
      </SubSection>

      <SubSection title="Reddit Data Analysis">
        <p className="text-text-secondary">
          This tool fetches and analyzes real-time data from the Escape from
          Tarkov subreddit to provide:
        </p>
        <FeatureList
          items={[
            "Current community discussions, trends, and hot topics",
            "Popular posts ranked by engagement metrics",
            "Community sentiment about game features, updates, or issues",
            "Common questions and concerns from other players",
          ]}
        />
      </SubSection>
    </div>
  );
};

const AuthSection = () => {
  return (
    <div className="bg-ai-chat-message-background border border-[#444444] rounded-lg p-6">
      <SectionTitle
        icon={<Shield className="w-6 h-6" />}
        title="Authentication & User Management"
      />

      <div className="max-w-none mb-8">
        <p className="text-text-secondary">
          The application uses Clerk for authentication and implements a custom
          user management system for tracking token usage and managing access
          levels.
        </p>
      </div>

      <SubSection title="Authentication Flow">
        <ol className="list-decimal space-y-2 pl-5">
          <li className="text-text-secondary">
            Users sign up or sign in through Clerk's authentication interface
          </li>
          <li className="text-text-secondary">
            On first login, a new user record is created in the PostgreSQL
            database
          </li>
          <li className="text-text-secondary">
            The Clerk user ID is linked to the internal user record for future
            reference
          </li>
          <li className="text-text-secondary">
            Protected routes use Clerk middleware to ensure authentication
          </li>
        </ol>
      </SubSection>

      <SubSection title="Token Management">
        <p className="text-text-secondary">
          To control API usage costs, the application implements a token limit
          system:
        </p>
        <FeatureList
          items={[
            "Each user has a daily token limit (default 10,000 tokens)",
            "Token usage is tracked for each API call to OpenAI",
            "Users can view their remaining tokens through the UI",
            "When limits are reached, appropriate error messages are displayed",
          ]}
        />
      </SubSection>

      <SubSection title="Admin Panel">
        <FeatureList
          items={[
            "Protected Route",
            "View all users and their token usage statistics",
            "Adjust individual user's daily token limits",
            "Mark users as 'trusted' to grant them additional privileges",
            "Monitor system-wide token consumption",
          ]}
        />
      </SubSection>
    </div>
  );
};

const ApiSection = () => {
  return (
    <div className="bg-ai-chat-message-background border border-[#444444] rounded-lg p-6">
      <SectionTitle
        icon={<Share2 className="w-6 h-6" />}
        title="API Reference"
      />

      <div className="max-w-none mb-8">
        <p className="text-text-secondary">
          The application exposes several API endpoints that can be used to
          interact with the system programmatically. Below is a comprehensive
          reference of all available endpoints.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-tarkov-secondary mb-4">
            Chat API
          </h2>

          <div className="space-y-6">
            <div className="border border-[#444444] rounded-md overflow-hidden">
              <div className="bg-background-2 px-4 py-2 border-b border-[#444444]">
                <div className="flex items-center">
                  <span className="text-tarkov-secondary font-mono text-sm mr-2">
                    GET
                  </span>
                  <span className="font-medium text-text">/api/chat</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-text-secondary mb-4">
                  Fetches all chat sessions for the authenticated user.
                </p>
                <h4 className="font-medium text-text mb-2">Response</h4>
                <pre className="bg-background-2 p-3 rounded-md text-sm overflow-x-auto text-text-secondary">
                  {`[
  {
    "id": "string",
    "title": "string",
    "createdAt": "string"
  }
]`}
                </pre>
              </div>
            </div>

            <div className="border border-[#444444] rounded-md overflow-hidden">
              <div className="bg-background-2 px-4 py-2 border-b border-[#444444]">
                <div className="flex items-center">
                  <span className="text-tarkov-secondary font-mono text-sm mr-2">
                    POST
                  </span>
                  <span className="font-medium text-text">
                    /api/chat/create
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-text-secondary mb-4">
                  Creates a new chat session with an initial message.
                </p>
                <h4 className="font-medium text-text mb-2">Request Body</h4>
                <pre className="bg-background-2 p-3 rounded-md text-sm overflow-x-auto text-text-secondary">
                  {`{
  "userMessage": "string"
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-tarkov-secondary mb-4">
            Analytics API
          </h2>

          <div className="border border-[#444444] rounded-md overflow-hidden">
            <div className="bg-background-2 px-4 py-2 border-b border-[#444444]">
              <div className="flex items-center">
                <span className="text-tarkov-secondary font-mono text-sm mr-2">
                  POST
                </span>
                <span className="font-medium text-text">/api/analytics</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-text-secondary mb-4">
                Analyzes Tarkov subreddit data based on a user query.
              </p>
              <h4 className="font-medium text-text mb-2">Request Body</h4>
              <pre className="bg-background-2 p-3 rounded-md text-sm overflow-x-auto text-text-secondary">
                {`{
  "prompt": "string"
}`}
              </pre>
              <h4 className="font-medium text-text mt-4 mb-2">Response</h4>
              <pre className="bg-background-2 p-3 rounded-md text-sm overflow-x-auto text-text-secondary">
                {`{
  "answer": "string",
  "charts": [
    {
      "type": "bar/line/pie/scatter",
      "title": "string",
      "xAxis": "string",
      "yAxis": "string",
      "data": [
        {
          "x": "value",
          "y": 0
        }
      ]
    }
  ],
  "tokensUsed": 0,
  "tokensRemaining": 0
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContentSections = ({ activeSection }) => {
  switch (activeSection) {
    case "overview":
      return <OverviewSection />;
    case "chat":
      return <ChatSection />;
    case "analytics":
      return <AnalyticsSection />;
    case "database":
      return <DatabaseSection />;
    case "tools":
      return <ToolsSection />;
    case "auth":
      return <AuthSection />;
    case "api":
      return <ApiSection />;
    default:
      return <OverviewSection />;
  }
};
