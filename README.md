# Node.js Server Error: Response Timeout

This repository demonstrates a common issue in Node.js servers where a request takes longer than 30 seconds to respond. This often leads to errors and unexpected behavior.  The example simulates a long-running process using `setTimeout` to reproduce the issue. The solution focuses on implementing proper timeout handling to gracefully manage such scenarios.

## Bug Description

A Node.js HTTP server is created.  A request handler simulates a delay of 5 seconds. The server itself may implicitly time out requests that take longer than 30 seconds, resulting in an error. This is often a hidden issue as servers rarely report them. This bug showcases how to handle such request timeouts and provides a resolution.