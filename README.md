# COMP.SE.200-2024-2025-1 - Software Testing

[![Coverage Status](https://coveralls.io/repos/github/jarmlari/COMP.SE.200-2024-2025-1/badge.svg?branch=main)](https://coveralls.io/github/jarmlari/COMP.SE.200-2024-2025-1?branch=main)

## Purpose of this repository

This is a project template for students participating in the Software Testing course at Tampere University.

The repository contains:
- Source code under test (in the `src/` folder)
- The tests for the `src/` functions (in the `__tests__/` folder)
- The github action for publishing the test coverage reports (in the `.github/workflows` folder)
- Content required to run the said tests

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

To generate a coverage report:

```sh
npx c8 --reporter=lcov npm test
```

The HTML coverage report will be available [here](./coverage/lcov-report/index.html).  
Open it on a browser to see the results.

## Report

Here you can find the reports for the course:

- [Part 1](https://tuni-my.sharepoint.com/:w:/r/personal/jalmari_mieho_tuni_fi/_layouts/15/Doc.aspx?sourcedoc=%7B89EE7178-D0C2-4649-A030-AD01B2BC07A7%7D&file=H299715_153938689_2025_part1.docx&action=default&mobileredirect=true&DefaultItemOpen=1)  
- [Part 2](https://tuni-my.sharepoint.com/:w:/r/personal/jalmari_mieho_tuni_fi/_layouts/15/Doc.aspx?sourcedoc=%7B5423C7EC-D94E-47DB-B278-A0410105716F%7D&file=H299715_153938689_2025_part2.docx&fromShare=true&action=default&mobileredirect=true)