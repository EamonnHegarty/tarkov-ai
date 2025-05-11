import React from "react";
import {
  BookOpen,
  MessageSquare,
  BarChart,
  Database,
  Code,
  Shield,
  Share2,
  Target,
} from "lucide-react";

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ icon, title }) => {
  return (
    <div className="mb-6 ">
      <div className="flex items-center">
        <span className="mr-3 text-tarkov-secondary">{icon}</span>
        <h1 className="text-2xl font-bold text-tarkov-secondary">{title}</h1>
      </div>
    </div>
  );
};

interface SubSectionProps {
  title: string;
  children: React.ReactNode;
}

export const SubSection: React.FC<SubSectionProps> = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-tarkov-secondary mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
};

interface FeatureListProps {
  items: string[];
}

export const FeatureList: React.FC<FeatureListProps> = ({ items }) => {
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

const OverviewSection: React.FC = () => {
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
            "Kappa quest tracking system with natural language updates",
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
                "Recharts for data visualization",
                "Redux Toolkit for state management",
              ]}
            />
          </div>
          <div>
            <h3 className="font-medium text-text mb-2">Backend</h3>
            <FeatureList
              items={[
                "Next.js API Routes",
                "Prisma ORM",
                "OpenAI integration",
                "Clerk Authentication",
              ]}
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
                "Vector embeddings for semantic search",
                "Token usage tracking and limiting",
              ]}
            />
          </div>
        </div>
      </SubSection>
    </div>
  );
};

const ChatSection: React.FC = () => {
  return (
    <div className="bg-ai-chat-message-background border border-[#444444] rounded-lg p-6">
      <SectionTitle
        icon={<MessageSquare className="w-6 h-6" />}
        title="AI Chat System"
      />

      <div className="max-w-none mb-8">
        <p className="text-text-secondary">
          The chat system uses OpenAI&lsquo;s models to provide contextual and
          knowledgeable responses to questions about Escape from Tarkov. The
          system is designed to assist players with game mechanics, strategies,
          quest information, and more.
        </p>
      </div>

      <SubSection title="Architecture">
        <p className="text-text-secondary">
          The chat functionality follows a client-server architecture where the
          frontend React components communicate with Next.js API routes, which
          in turn interact with OpenAI&apos;s API and the database.
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
          management across components and includes token usage monitoring to
          limit API costs.
        </p>
      </SubSection>
    </div>
  );
};

const AnalyticsSection: React.FC = () => {
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
            and transformed into embeddings using OpenAI&apos;s embedding models
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

      <SubSection title="Natural Language Queries">
        <p className="text-text-secondary">
          The system allows users to ask questions in plain English about the
          Tarkov subreddit data. The AI processes these natural language queries
          and returns both textual analysis and relevant visualizations to help
          understand community trends, popular topics, and player sentiment.
        </p>
        <div className="mt-3 bg-background-2 p-3 rounded-md">
          <p className="text-text-secondary italic">Example queries:</p>
          <ul className="mt-2 space-y-1.5">
            <li className="text-text-secondary text-sm">
              • &quot;What are the most discussed weapons on the
              subreddit?&quot;
            </li>
            <li className="text-text-secondary text-sm">
              • &quot;Which maps do players talk about most often?&quot;
            </li>
            <li className="text-text-secondary text-sm">
              • &quot;What issues are players complaining about this
              month?&quot;
            </li>
          </ul>
        </div>
      </SubSection>
    </div>
  );
};

const KappaSection: React.FC = () => {
  return (
    <div className="bg-ai-chat-message-background border border-[#444444] rounded-lg p-6">
      <SectionTitle
        icon={<Target className="w-6 h-6" />}
        title="Kappa Quest Tracker"
      />

      <div className="max-w-none mb-8">
        <p className="text-text-secondary">
          The Kappa Quest Tracker helps players monitor their progress toward
          obtaining the Kappa secure container, one of the most challenging
          achievements in Escape from Tarkov. This system offers comprehensive
          tracking of all required quests with an innovative natural language
          interface for updating progress.
        </p>
      </div>

      <SubSection title="Features">
        <FeatureList
          items={[
            "Quest Progress Tracking: Visually monitor progress toward the Kappa container",
            "Status Management: Mark quests as not started, in progress, or completed",
            "Natural Language Updates: Use conversational language to update multiple quests at once",
            "Automatic Prerequisites: System automatically marks prerequisite quests when a dependent quest is completed",
            "Filtering and Search: Easily find quests by trader, map, status, or keywords",
            "Detailed Quest Information: View comprehensive details about objectives, keys, and requirements",
          ]}
        />
      </SubSection>

      <SubSection title="Quest Chat Assistant">
        <p className="text-text-secondary">
          The Quest Chat Assistant provides a natural language interface for
          updating quest progress. Users can simply tell the assistant which
          quests they&apos;ve completed or are working on, and the system will
          automatically update the appropriate quest statuses.
        </p>
        <div className="mt-3 bg-background-2 p-3 rounded-md">
          <p className="text-text-secondary italic">Example inputs:</p>
          <ul className="mt-2 space-y-1.5">
            <li className="text-text-secondary text-sm">
              • &quot;I&apos;ve completed Debut and I&apos;m working on
              Checking&quot;
            </li>
            <li className="text-text-secondary text-sm">
              • &quot;Just finished all of Prapor&apos;s early quests&quot;
            </li>
            <li className="text-text-secondary text-sm">
              • &quot;I completed Gunsmith Part 10&quot;
            </li>
          </ul>
        </div>
      </SubSection>

      <SubSection title="Implementation">
        <p className="text-text-secondary">
          The system uses a combination of AI and a comprehensive database of
          Tarkov quests, including their prerequisites, requirements, and
          objectives. The quest data is sourced from the Tarkov.dev API and
          processed to create a structured dependency graph, allowing the system
          to automatically determine which prerequisite quests must be
          completed.
        </p>
      </SubSection>
    </div>
  );
};

const ToolsSection: React.FC = () => {
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

      <SubSection title="Quest Information Tool">
        <p className="text-text-secondary">
          This specialized tool provides detailed information about Tarkov
          quests:
        </p>
        <FeatureList
          items={[
            "Semantic search through the quest database for accurate information",
            "Detailed quest objectives, locations, and requirements",
            "Information about prerequisite quests and dependencies",
            "Required keys and special items needed for completion",
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

const DatabaseSection: React.FC = () => {
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
            "UserQuestStatus: Tracks the completion status of quests for each user",
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
            Text content is processed through OpenAI&apos;s embedding models
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

const AdminSection: React.FC = () => {
  return (
    <div className="bg-ai-chat-message-background border border-[#444444] rounded-lg p-6">
      <SectionTitle
        icon={<Shield className="w-6 h-6" />}
        title="Admin Management"
      />

      <div className="max-w-none mb-8">
        <p className="text-text-secondary">
          The application includes a comprehensive admin panel for managing
          users, monitoring system usage, and controlling access to features.
          This helps maintain system performance and control API usage costs.
        </p>
      </div>

      <SubSection title="User Management">
        <FeatureList
          items={[
            "View all registered users and their information",
            "Monitor individual token usage and consumption patterns",
            "Filter and search for specific users",
            "Set trusted user status for select accounts",
          ]}
        />
      </SubSection>

      <SubSection title="Token Limit Controls">
        <p className="text-text-secondary">
          To manage API costs effectively, the admin panel provides tools to:
        </p>
        <FeatureList
          items={[
            "Set custom daily token limits for individual users",
            "View overall token consumption across the entire system",
            "Identify high-usage accounts that may need attention",
            "Monitor remaining token allowance for all users",
          ]}
        />
      </SubSection>

      <SubSection title="Usage Statistics">
        <p className="text-text-secondary">
          The admin dashboard provides valuable insights into system usage
          patterns:
        </p>
        <FeatureList
          items={[
            "Total tokens used system-wide on a daily basis",
            "Average token consumption per user",
            "Percentage of daily limits being utilized",
            "Visual indicators for users approaching their limits",
          ]}
        />
      </SubSection>
    </div>
  );
};

const ApiSection: React.FC = () => {
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

        <div>
          <h2 className="text-xl font-semibold text-tarkov-secondary mb-4">
            Quest API
          </h2>

          <div className="space-y-6">
            <div className="border border-[#444444] rounded-md overflow-hidden">
              <div className="bg-background-2 px-4 py-2 border-b border-[#444444]">
                <div className="flex items-center">
                  <span className="text-tarkov-secondary font-mono text-sm mr-2">
                    GET
                  </span>
                  <span className="font-medium text-text">
                    /api/quests/status
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-text-secondary mb-4">
                  Retrieves the status of all quests for the authenticated user.
                </p>
              </div>
            </div>

            <div className="border border-[#444444] rounded-md overflow-hidden">
              <div className="bg-background-2 px-4 py-2 border-b border-[#444444]">
                <div className="flex items-center">
                  <span className="text-tarkov-secondary font-mono text-sm mr-2">
                    PUT
                  </span>
                  <span className="font-medium text-text">
                    /api/quests/status
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-text-secondary mb-4">
                  Updates the status of a specific quest for the authenticated
                  user.
                </p>
                <h4 className="font-medium text-text mb-2">Request Body</h4>
                <pre className="bg-background-2 p-3 rounded-md text-sm overflow-x-auto text-text-secondary">
                  {`{
  "questId": "string",
  "status": "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED"
}`}
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
                    /api/quests/chat
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-text-secondary mb-4">
                  Processes natural language descriptions of quest progress and
                  updates quest statuses accordingly.
                </p>
                <h4 className="font-medium text-text mb-2">Request Body</h4>
                <pre className="bg-background-2 p-3 rounded-md text-sm overflow-x-auto text-text-secondary">
                  {`{
  "message": "string"
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DocsContentSectionProps {
  activeSection: string;
}

export const DocsContentSection: React.FC<DocsContentSectionProps> = ({
  activeSection,
}) => {
  switch (activeSection) {
    case "overview":
      return <OverviewSection />;
    case "chat":
      return <ChatSection />;
    case "analytics":
      return <AnalyticsSection />;
    case "kappa":
      return <KappaSection />;
    case "database":
      return <DatabaseSection />;
    case "tools":
      return <ToolsSection />;
    case "admin":
      return <AdminSection />;
    case "api":
      return <ApiSection />;
    default:
      return <OverviewSection />;
  }
};

export default DocsContentSection;
