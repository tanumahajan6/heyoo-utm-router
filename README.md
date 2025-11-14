# **UTM Traffic Router for Heyoo (Express.js)**

A lightweight Express.js application that acts as a **traffic router** for marketing links.
It captures **UTM parameters**, logs them to a file, and then performs a **301 redirect** to a destination URL.

This project focuses on **clean structure, readability, and maintainability**.

---

## 🚀 Features

* Extracts and logs UTM parameters from incoming requests
* Logs stored in `/logs/utm.log` (one JSON entry per line)
* Supports **static** or **dynamic** destination URLs
* Performs **301 redirects** while preserving all query parameters
* Minimal, easy-to-understand codebase

---

## 📁 Project Structure

```
src/
  app.js
  logger.js
routes/
  redirect.js
logs/
  utm.log        (auto-created)
.env             (optional)
package.json
README.md
```

---

## ⚙️ Installation

```bash
git clone https://github.com/tanumahajan6/heyoo-utm-router.git
cd heyoo-utm-router
npm install
```

---

## 🔧 Environment Variables (optional)

Create a `.env` file:

```
PORT=3000
DESTINATION_URL=https://google.com
```

`DESTINATION_URL` is used as the **static redirect target** when no `destination` query param is provided.

---

## ▶️ Running the App

### Development mode (auto-reload)

```bash
npm run dev
```

### Production mode

```bash
npm start
```

Server starts at:

```
http://localhost:3000
```

---

## 🔍 Usage Examples

### **1. Using static destination (from .env)**

Request:

```
http://localhost:3000/?utm_source=google&utm_campaign=spring
```

Redirects to:

```
https://google.com?utm_source=google&utm_campaign=spring
```

---

### **2. Using dynamic destination (via query param)**

Request:

```
http://localhost:3000/?destination=https://yahoo.com&utm_source=facebook
```

Redirects to:

```
https://yahoo.com?utm_source=facebook
```

---

## 📓 Logging

All UTM parameters are appended to:

```
logs/utm.log
```

Each entry is a JSON object with:

```json
{
  "timestamp": "2025-01-01T12:00:00.000Z",
  "ip": "::1",
  "path": "/?utm_source=google&utm_campaign=spring",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "spring",
  "utm_term": null,
  "utm_content": null
}
```
