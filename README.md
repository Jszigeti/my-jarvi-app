# My Jarvi App

This project is a **Next.js 15 application** that displays messaging statistics using **Hasura (GraphQL), Apollo Client, and Nhost** for authentication. The app fetches and visualizes user response rates per message type over time using **ShadCN (UI components) and Recharts (graphs)**.

The project is structured to follow **best practices in GraphQL, Next.js, and TypeScript**, optimizing performance both in the frontend and backend.

## Features

- **Authentication with Nhost** (automatic login for demo purposes)
- **GraphQL integration with Apollo Client**
- **Messaging statistics visualization**
- **Filtering data by time range**
- **Optimized SQL query using an indexed view for fast data retrieval**
- **Responsive UI with ShadCN components**

## **Tech Stack**

- **Next.js 15** (React 19)
- **Nhost (Auth & Hasura GraphQL)**
- **Apollo Client** (GraphQL API)
- **ShadCN UI** (UI Components)
- **Recharts** (Data visualization)
- **TailwindCSS** (Styling)

## Reflection and Approach

### 1. SQL Query Optimization and Hasura Integration

#### Query Analysis and Challenges

- The goal was to calculate response rates for different message types.
- The initial query was inefficient due to **excessive memory reads** and **sequential scans**.
- `CASE WHEN` statements were slowing down aggregations.

#### Optimizations Implemented

- **Replaced `CASE WHEN` with `FILTER (WHERE…)`** to improve aggregation speed.
- **Created a covering index** to eliminate unnecessary table lookups.
- **Stored the query as a SQL view** to allow direct querying from Hasura.

#### Performance Improvement

- **Before optimization:** ~7 seconds
- **After optimization:** ~38 milliseconds

### 2. Frontend Development Strategy

- **GraphQL with Apollo Client** → To efficiently fetch statistics with minimal re-renders.
- **State management with hooks** → `useResponseRates.ts` handles fetching and transforming data.
- **Data visualization with Recharts & ShadCN** → Ensuring an accessible and interactive UI.
- **Modularized structure** → Components, hooks, and utilities are split logically for scalability.

## **Installation & Setup**

### **1. Clone the Repository**

```sh
git clone https://github.com/Jszigeti/my-jarvi-app.git
cd my-jarvi-app
```

### **2. Install Dependencies**

```sh
pnpm install  # or npm install / yarn install
```

### **3. Configure Environment Variables**

Rename `.env.example` to `.env` and fill in your **Nhost & Hasura credentials**:

```ini
NEXT_PUBLIC_NHOST_SUBDOMAIN=your_nhost_subdomain
NEXT_PUBLIC_NHOST_REGION=your_nhost_region
NEXT_PUBLIC_NHOST_AUTH_EMAIL=your_default_user_email
NEXT_PUBLIC_NHOST_AUTH_PASSWORD=your_default_user_password
NEXT_PUBLIC_NHOST_GRAPHQL_URL=your_hasura_graphql_url
```

### **4. Start the Development Server**

```sh
pnpm dev  # or npm run dev / yarn dev
```

> The app will be available at `http://localhost:3000`

## **Project Structure**

```
src/
 ├── components/                 # UI Components (Table, Chart, Filters)
 │   ├── DateFilter.tsx          # Date range picker component
 │   ├── StatsChart.tsx          # Chart displaying response rates over time
 │   ├── StatsDashboard.tsx      # Main dashboard component combining filters, chart, and table
 │   ├── StatsTable.tsx          # Table displaying response rates per message type
 │   └── ui/                     # ShadCN UI components
 ├── constants/                  # Constants and static data
 │   └── messageTypes.ts         # Message type translations and color mapping
 ├── graphql/                    # GraphQL queries and mutations
 │   └── historyEntriesStats.ts  # Query to fetch response rate statistics from Hasura
 ├── hooks/                      # Custom hooks for state management and data fetching
 │   └── useResponseRates.ts     # Hook to fetch and process response rates data
 ├── lib/                        # Library functions for external integrations
 │   ├── apollo.ts               # Apollo Client setup for GraphQL
 │   ├── nhost.ts                # Nhost authentication and API setup
 │   └── ...
 ├── providers/                  # Context providers for app-wide state management
 │   ├── ApolloProvider.tsx      # Apollo Provider wrapper for GraphQL queries
 │   └── NhostProvider.tsx       # Nhost Provider wrapper for authentication
 ├── types/                      # TypeScript type definitions
 │   ├── tables.ts               # Types for table data
 │   ├── charts.ts               # Types for chart data
 │   └── ...
 └── utils/                      # Utility functions
     ├── dateHelpers.ts          # Functions for date manipulation and formatting
     └── formatResponseStats.ts  # Functions for processing response stats data
```

## **Build & Start Production Server**

```sh
pnpm build
pnpm start
```

## **License**

This project is unlicensed.

## **Contributing**

Contributions are welcome! Feel free to open an issue or a pull request.

## **Contact**

**Author:** [Jonas](https://github.com/Jszigeti)

**Email:** jonas.szigeti@icloud.com

**GitHub:** [GitHub Repo](https://github.com/Jszigeti/my-jarvi-app)

---

**Enjoy coding!**
