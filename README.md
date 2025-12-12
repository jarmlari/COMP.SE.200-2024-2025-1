# COMP.SE.200-2024-2025-1 - Software Testing

## Purpose of this repository

This is a project template for students participating in the Software Testing course at Tampere University.

The repository contains:
- Source code under test (in the `src/` folder)
- A `package.json` skeleton
- LICENSE file

**Important:** The `src/` folder contains a separate license file that must **NOT** be removed under any circumstances!

Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.


## Getting Started

1. **Clone the repository:**
	```sh
	git clone <repository-url>
	cd COMP.SE.200-2024-2025-1
	```

2. **Install dependencies:**
	```sh
	npm install
	```


## Running Tests

To run all tests:

```sh
npm test
```

To run tests for a specific function (e.g., `add.js`):

```sh
npm test add.js
```


## Viewing Coverage Details

[![Coverage Status](https://coveralls.io/repos/github/jarmlari/COMP.SE.200-2024-2025-1/badge.svg?branch=main)](https://coveralls.io/github/jarmlari/COMP.SE.200-2024-2025-1?branch=main)

To generate a coverage report:

```sh
npx c8 --reporter=lcov npm test
```

The HTML coverage report will be available [here](./coverage/lcov-report/index.html).  
Open it on a browser to see the results.
