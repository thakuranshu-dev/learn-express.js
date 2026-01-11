Below are **progressively challenging problem statements**, each with a **clear step-by-step solution guide** (not full code dumps, so you can implement and test yourself).

---

## 🟢 Level 1: Express Basics

### **Problem 1: Hello Express API**

**Goal:** Create a basic Express server that responds with text.

#### Requirements

* Server runs on port `3000`
* `GET /` → returns `"Welcome to Express"`
* `GET /health` → returns JSON `{ status: "OK" }`

#### Step-by-Step Guide

1. Initialize a Node.js project (`npm init`)
2. Install Express
3. Import Express and create an app instance
4. Use `app.get()` to define routes
5. Use `res.send()` for text and `res.json()` for JSON
6. Start server with `app.listen()`

🧠 **Concepts tested:** routing, responses, server setup

---

## 🟡 Level 2: Route Parameters & Query Strings

### **Problem 2: User Profile API**

**Goal:** Handle route params and query params.

#### Requirements

* `GET /users/:id`
* Return:

```json
{
  "userId": "123",
  "role": "admin"
}
```

* `role` comes from query string (`?role=admin`)
* If `role` is missing, default to `"user"`

#### Step-by-Step Guide

1. Define route using `:id`
2. Access route params via `req.params`
3. Access query params via `req.query`
4. Use default values when query is missing
5. Send structured JSON response

🧠 **Concepts tested:** params, query strings, defaults

---

## 🟡 Level 3: Middleware

### **Problem 3: Request Logger**

**Goal:** Log every incoming request.

#### Requirements

* Log method, URL, and timestamp
* Apply middleware globally
* Example log:

```
[2026-01-07T10:30:00Z] GET /users/1
```

#### Step-by-Step Guide

1. Create a middleware function `(req, res, next)`
2. Extract `req.method` and `req.originalUrl`
3. Generate timestamp using `new Date().toISOString()`
4. Log to console
5. Call `next()` to continue request flow
6. Register middleware using `app.use()`

🧠 **Concepts tested:** middleware, request lifecycle

---

## 🟠 Level 4: POST Requests & Body Parsing

### **Problem 4: Create a User**

**Goal:** Accept JSON data via POST request.

#### Requirements

* `POST /users`
* Request body:

```json
{
  "name": "Alice",
  "email": "alice@test.com"
}
```

* Response:

```json
{
  "message": "User created",
  "user": { ... }
}
```

#### Step-by-Step Guide

1. Use built-in JSON middleware (`express.json()`)
2. Create POST route using `app.post()`
3. Access data via `req.body`
4. Validate required fields (name, email)
5. Send success response

🧠 **Concepts tested:** body parsing, POST routes, validation

---

## 🔴 Level 5: Error Handling

### **Problem 5: Centralized Error Handler**

**Goal:** Handle errors gracefully.

#### Requirements

* Throw error if `/users/:id` is not a number
* Return:

```json
{
  "error": "Invalid user ID"
}
```

* Use centralized error-handling middleware

#### Step-by-Step Guide

1. Validate `req.params.id`
2. Use `next(error)` when validation fails
3. Create error-handling middleware with 4 parameters
4. Set HTTP status code (400)
5. Return structured error JSON

🧠 **Concepts tested:** error middleware, validation

---

## 🔵 Level 6: Router & Modular Structure

### **Problem 6: Modular User Routes**

**Goal:** Organize routes using `express.Router`.

#### Requirements

* Move user routes into `/routes/users.js`
* Support:

  * `GET /users`
  * `POST /users`
* Import router into main app

#### Step-by-Step Guide

1. Create `routes/users.js`
2. Use `express.Router()`
3. Define routes on router object
4. Export router
5. Mount router using `app.use('/users', router)`

🧠 **Concepts tested:** routers, project structure

---

## ⚫ Level 7: Authentication Middleware

### **Problem 7: API Key Protection**

**Goal:** Protect routes using middleware.

#### Requirements

* Require header: `x-api-key`
* Valid key: `"secret123"`
* If missing or invalid → `401 Unauthorized`
* Protect `/admin` route only

#### Step-by-Step Guide

1. Create auth middleware
2. Read headers via `req.headers`
3. Validate API key
4. Send 401 response on failure
5. Attach middleware to specific route

🧠 **Concepts tested:** headers, middleware chaining, auth

---

## 🧪 Bonus Challenge: Mini REST API

### **Problem 8: In-Memory Notes API**

**Goal:** Build a CRUD API without database.

#### Requirements

* `GET /notes`
* `POST /notes`
* `PUT /notes/:id`
* `DELETE /notes/:id`
* Store notes in an array

#### Step-by-Step Guide

1. Create in-memory array
2. Generate IDs manually
3. Implement CRUD routes
4. Handle missing resources
5. Return correct HTTP status codes

🧠 **Concepts tested:** REST, state management, HTTP semantics

---

## ✅ How to Self-Evaluate

You should be comfortable if you can:

* Explain **middleware flow**
* Choose correct **status codes**
* Structure project cleanly
* Handle errors centrally
* Protect routes securely

