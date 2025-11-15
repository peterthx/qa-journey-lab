# K6 API Load & Smoke Testing

This project contains **k6** performance and load tests for API endpoints. K6 is a modern load testing framework designed for testing APIs, microservices, and websites.

## 📋 Project Structure

```
k6-api/
├── README.md                 # This file
├── tests/
│   ├── load/
│   │   └── wh-load-test.js   # Load testing script with supplier CRUD operations
│   └── smoke/
│       └── smoke-test.js     # Smoke testing script for basic endpoint validation
├── utils/
│   └── helpers.js            # Helper functions for generating test data
└── .env/
    └── settings.js           # Configuration and API endpoints
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 14+ (for running k6)
- **k6** installed globally or via npm

Install k6:
```bash
# Using Homebrew (macOS)
brew install k6

# Using npm
npm install -g k6

# Or using docker
docker run -i grafana/k6 run - < script.js
```

### Installation

```bash
# Clone or navigate to the project
cd k6-api

# No dependencies to install (k6 is standalone)
# But if using local node modules:
npm install
```

## 📝 Available Tests

### 1. Smoke Test (`tests/smoke/smoke-test.js`)

Quick validation that basic API endpoints are healthy and responding.

**What it tests:**
- GET all products endpoint
- Response status code (200)
- Content-Type header
- Response time < 200ms
- Response body is not empty

**Run:**
```bash
k6 run tests/smoke/smoke-test.js
```

### 2. Load Test (`tests/load/wh-load-test.js`)

Comprehensive load testing with supplier CRUD operations and virtual user (VU) simulation.

**What it tests:**
- **POST** Create a new supplier with randomized data
- **DELETE** Remove the created supplier
- Virtual user context tracking (VU ID, iteration, scenario)
- Response validation and error handling
- Network behavior under load

**Features:**
- Configurable load stages (ramp-up, sustain, ramp-down)
- Module-scoped storage for supplier IDs per VU
- Defensive JSON parsing with try/catch
- Safe fallback for execution context variables

**Run with default settings:**
```bash
k6 run tests/load/wh-load-test.js
```

**Run with custom VU and duration:**
```bash
k6 run --vus 10 --duration 30s tests/load/wh-load-test.js
```

**Run with multiple stages (uncomment in script first):**
```bash
k6 run tests/load/wh-load-test.js
```

## ⚙️ Configuration

### Environment Settings (`.env/settings.js`)

Update API endpoints and service paths:

```javascript
export const BASE_URL = {
  ENDPOINT: "https://api.example.com"
};

export const SERVICE = {
  GET_ALL_PRODUCTS: "/api/products",
  GET_ALL_ORDERS: "/api/orders",
  POST_NEW_SUPPLIER: "/api/suppliers",
  DEL_SUPPLIER: "/api/suppliers"
};
```

### Load Test Stages

Edit `export const options` in `wh-load-test.js` to define load patterns:

```javascript
export const options = {
  stages: [
    { duration: '5m', target: 50 },   // Ramp up to 50 VUs
    { duration: '10m', target: 100 }, // Increase to 100 VUs
    { duration: '5m', target: 0 },    // Ramp down to 0 VUs
  ],
};
```

Or use simple settings:
```javascript
export const options = {
  vus: 10,       // Number of virtual users
  duration: "5m" // Test duration
};
```

## 🧪 Test Data Generation

The `utils/helpers.js` module provides realistic test data:

- **`randomSupplierName()`** — Random company names
- **`randomContactName()`** — Random person names
- **`randomEmail(name)`** — Random email addresses
- **`randomPhoneNumber()`** — Random phone numbers (555-XXX-XXXX format)
- **`randomAddress()`** — Random Bay Area addresses with streets, cities, and zip codes

**Usage:**
```javascript
import { randomSupplierName, randomEmail } from "../../utils/helpers.js";

const supplierName = randomSupplierName();
const email = randomEmail(supplierName);
```

## 📊 Understanding Results

After running a test, k6 outputs summary metrics:

```
data_sent..................: 12 MB
data_received..............: 8.5 MB
http_req_blocked...........: avg=2.3ms
http_req_connecting........: avg=1.1ms
http_req_duration..........: avg=145ms
http_req_failed............: 0.00%
http_req_receiving.........: avg=5.2ms
http_req_sending...........: avg=8.1ms
http_req_tls_handshaking...: avg=0.00ms
http_req_waiting...........: avg=131ms
http_reqs..................: 1200   @1.2s/s
http_res_time_p95..........: 280ms
http_res_time_p99..........: 350ms
iterations.................: 1200   @1.2/s
vus........................: 0
vus_max.....................: 10
```

**Key Metrics:**
- **http_req_duration** — Total request time
- **http_req_failed** — Percentage of failed requests
- **http_reqs** — Total requests completed
- **iterations** — Number of test iterations
- **vus_max** — Maximum virtual users reached

## 🔍 Common Issues & Solutions

### Issue: Import errors with relative paths
**Solution:** Ensure `.env/settings.js` exists and all helper functions are exported:
```javascript
export { randomSupplierName, randomContactName, randomEmail, randomPhoneNumber, randomAddress };
```

### Issue: "Cannot find module" errors
**Solution:** Check file paths are correct relative to the test script:
```javascript
import { BASE_URL, SERVICE } from "../../.env/settings.js";
```

### Issue: API endpoint timeouts
**Solution:** Increase timeout or reduce VU count:
```bash
k6 run --vus 5 --duration 30s tests/load/wh-load-test.js
```

### Issue: "No supplier id available to delete"
**Solution:** This is expected if the POST request fails. Check API response:
```javascript
// Check console logs for "Supplier ID not found in POST response"
k6 run tests/load/wh-load-test.js --verbose
```

## 📈 Best Practices

1. **Start small:** Test with low VU counts and short durations first
2. **Baseline first:** Run smoke tests to ensure API is healthy
3. **Ramp gradually:** Use stages to simulate real-world traffic patterns
4. **Monitor responses:** Check JSON parsing and validation warnings in logs
5. **Use thresholds:** Define success criteria:
   ```javascript
   export const options = {
     thresholds: {
       http_req_duration: ['p(95)<500', 'p(99)<1000'],
       http_req_failed: ['rate<0.1'],
     },
   };
   ```

## 🐳 Docker Usage

Run k6 tests in a container:

```bash
# Run smoke test
docker run -i grafana/k6 run - < tests/smoke/smoke-test.js

# Run load test with options
docker run -i grafana/k6 run --vus 10 --duration 1m - < tests/load/wh-load-test.js
```

## 🔗 Resources

- [K6 Official Documentation](https://k6.io/docs/)
- [K6 API Documentation](https://k6.io/docs/javascript-api/)
- [Load Testing Best Practices](https://k6.io/blog/load-testing-best-practices/)
- [Performance Testing Guide](https://k6.io/blog/load-testing-guide/)

## 📝 License

This project is part of the QA Journey Lab. See main repository LICENSE for details.

## 💬 Contributing

- Keep tests maintainable and well-documented
- Use meaningful test names and comments
- Update this README when adding new tests
- Test locally before committing

---

**Last Updated:** November 2025
