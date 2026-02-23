# Playwright Automation Testing Framework

A comprehensive test automation framework built with Playwright and TypeScript, featuring web UI automation, API testing, MCP server integration, and Docker support for local testing environments.

## 🎯 Features

- **Web UI Automation**: Cross-browser testing with Playwright (Chromium, Firefox, WebKit)
- **API Testing**: Comprehensive REST API endpoint testing with axios
- **Type Safety**: Full TypeScript support with strict type checking
- **MCP Server Integration**: Model Context Protocol server for AI-assisted testing
- **Docker Support**: Containerized testing environment with Docker Compose
- **CI/CD Ready**: GitHub Actions compatible configuration
- **Code Quality**: ESLint and Prettier for code formatting and linting
- **Comprehensive Utilities**: Reusable helpers for common testing tasks

## 📋 Prerequisites

- **Node.js**: v18+ (LTS recommended)
- **npm**: v9+
- **Docker** (optional): For containerized testing
- **Docker Compose** (optional): For orchestrating test services

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Project

```bash
npm run build
```

### 3. Run Tests

```bash
# Run all Playwright tests
npm test

# Run tests with browser visible
npm run test:headed

# Run tests in debug mode
npm run test:debug

# Run API tests
npm run api:test

# Run Web UI tests
npm run web:test
```

## 📁 Project Structure

```
.
├── src/
│   ├── index.ts                 # Main entry point
│   ├── mcp/
│   │   └── server.ts           # MCP Server implementation
│   ├── tests/
│   │   ├── api/
│   │   │   └── sample-api.test.ts
│   │   └── web/
│   │       └── sample-web.test.ts
│   └── utils/
│       ├── api-client.ts       # API client utility
│       └── web-helper.ts       # Web testing helpers
├── .vscode/
│   ├── settings.json           # VS Code settings
│   └── mcp.json               # MCP server configuration
├── Dockerfile                  # Container image definition
├── docker-compose.yml         # Multi-service Docker setup
├── playwright.config.ts       # Playwright configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## 🧪 Available Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm test` | Run all Playwright tests |
| `npm run test:debug` | Run tests in debug mode with inspector |
| `npm run test:headed` | Run tests with browser visible |
| `npm run api:test` | Execute API tests |
| `npm run web:test` | Execute web UI tests |
| `npm run mcp-server` | Start MCP server |
| `npm run mcp-server:dev` | Start MCP server in development mode |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run docker:build` | Build Docker images |
| `npm run docker:up` | Start Docker containers |
| `npm run docker:down` | Stop Docker containers |
| `npm run docker:test` | Run tests in Docker |

## 🐳 Docker Usage

### Build and Run All Services

```bash
# Build Docker images
npm run docker:build

# Start all services
npm run docker:up

# Run tests in Docker
npm run docker:test

# Stop all services
npm run docker:down
```

### Available Docker Services

- **tests**: Runs all Playwright tests in container
- **api-tests**: Dedicated service for API testing
- **web-tests**: Dedicated service for web UI testing
- **mcp-server**: MCP server running in container
- **sample-app**: Sample Nginx web application for testing

## 🤖 MCP Server

The project includes an MCP (Model Context Protocol) Server that enables AI-assisted test automation.

### Available Tools

- **run_web_tests**: Execute Playwright web UI tests
- **run_api_tests**: Execute API endpoint tests
- **get_test_results**: Retrieve latest test execution results

### Starting the MCP Server

```bash
# Development mode
npm run mcp-server:dev

# Production mode
npm run mcp-server

# In Docker
docker-compose up mcp-server
```

The MCP server configuration is defined in `.vscode/mcp.json` for VS Code integration.

## 📊 Test Examples

### Web Testing Example

```typescript
import { test, expect } from '@playwright/test';

test('should navigate to website', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
```

### API Testing Example

```typescript
import { ApiClient } from '../../utils/api-client';

const apiClient = new ApiClient({
  baseURL: 'https://api.example.com',
});

const response = await apiClient.get('/users/1');
console.log(response.data);
```

## 🛠️ Configuration Files

### Playwright Configuration
- **File**: `playwright.config.ts`
- **Browsers**: Chromium, Firefox, WebKit
- **Base URL**: http://localhost:3000
- **Reporting**: HTML report generation

### TypeScript Configuration
- **File**: `tsconfig.json`
- **Target**: ES2020
- **Module**: ESNext
- **Strict Mode**: Enabled

### Docker Configuration
- **Dockerfile**: Multi-stage build for optimized images
- **docker-compose.yml**: Orchestrates multiple test services and sample application

## 📝 Code Quality

The project includes ESLint and Prettier for consistent code formatting:

```bash
# Run linter
npm run lint

# Format code
npm run format
```

## 🔒 Environment Configuration

Create a `.env` file for environment-specific settings:

```env
NODE_ENV=test
PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=0
API_BASE_URL=https://api.example.com
```

## 📚 Dependencies

### Production
- `@modelcontextprotocol/sdk`: ^1.0.0 - MCP server SDK

### Development
- `@playwright/test`: ^1.48.2 - Web automation and testing
- `typescript`: ^5.7.2 - TypeScript compiler
- `ts-node`: ^10.9.2 - TypeScript execution
- `axios`: ^1.7.9 - HTTP client
- `eslint`: ^9.20.0 - Code linter
- `prettier`: ^3.4.2 - Code formatter

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

**Issue**: Tests timing out
- **Solution**: Increase timeout in `playwright.config.ts` or use `test.setTimeout()`

**Issue**: Docker build failures
- **Solution**: Ensure Docker daemon is running and sufficient disk space available

**Issue**: MCP Server connection errors
- **Solution**: Verify `.vscode/mcp.json` configuration and check server logs

## 📖 Additional Resources

- [Playwright Documentation](https://playwright.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [MCP Protocol Documentation](https://modelcontextprotocol.io)
- [Docker Documentation](https://docs.docker.com)

## ✨ Tips & Best Practices

1. **Use page objects** for complex UI interactions
2. **Implement retry logic** for flaky tests
3. **Parallelize tests** for faster execution
4. **Mock external APIs** for reliability
5. **Keep tests independent** - no test should depend on another
6. **Use descriptive test names** - clear intent from test description
7. **Generate reports** for CI/CD integration
8. **Version lock dependencies** for consistency

---

**Last Updated**: February 2026
**Version**: 1.0.0
