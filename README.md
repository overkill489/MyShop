
# 🛒 MyShop | E-Commerce REST API

A modular e-commerce backend application built with **Node.js, Express, and JavaScript**, integrating the Fake Store API for product information and Stripe for payment checkout sessions.

## 📖 Overview

MyShop is a backend-focused e-commerce project demonstrating REST API development, third-party API integration, payment processing integration, and organized server architecture.

The application retrieves product information from the Fake Store API and provides endpoints for browsing products, retrieving individual product details, and creating Stripe Checkout sessions.

## 🛠️ Tech Stack

| Category | Technologies |
| --- | --- |
| Backend | Node.js, Express 5 |
| Language | JavaScript (ES Modules) |
| HTTP Client | Axios |
| Product Data | Fake Store API |
| Payments | Stripe Checkout |
| Middleware | CORS, Express JSON |
| Configuration | Dotenv |
| Development | Nodemon, npm, Git, GitHub |

## ✨ Features

- RESTful product listing endpoint
- Individual product lookup by ID
- Fake Store API integration
- Product data normalization
- Stripe Checkout session creation
- Environment-based configuration
- Modular controllers, services, and routes
- Centralized server error handling
- Custom 404 responses
- Cross-origin resource sharing with CORS
- Automatic development server restarting with Nodemon

## 📁 Project Structure

```text
MyShop/
├── backend/
│   ├── controllers/
│   │   ├── products.js
│   │   └── checkout.js
│   ├── middleware/
│   │   ├── error.js
│   │   └── notFound.js
│   ├── routes/
│   │   ├── products.js
│   │   └── checkout.js
│   ├── services/
│   │   ├── fakeStore.js
│   │   └── stripe.js
│   ├── app.js
│   ├── index.js
│   └── package.json
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git
- Stripe test-mode API key

### 1. Clone the Repository

```bash
git clone https://github.com/overkill489/MyShop.git
cd MyShop/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory:

```dotenv
PORT=3000
STRIPE_SECRET_KEY=your_stripe_test_secret_key
```

Never commit your actual Stripe secret key to GitHub.

### 4. Start the Development Server

```bash
npm run dev
```

The API starts at:

```text
http://localhost:3000
```

## 🔌 REST API Endpoints

### Get All Products

```http
GET /products
```

Retrieves product information from the Fake Store API and returns a normalized array of products.

### Get Product by ID

```http
GET /products/fake_1
```

Returns a matching product or a 404 response when the product cannot be found.

### Create Checkout Session

```http
POST /checkout
Content-Type: application/json
```

Example request body:

```json
{
  "items": [
    {
      "name": "Example Product",
      "price": 19.99,
      "quantity": 1
    }
  ]
}
```

The endpoint creates a Stripe Checkout session and returns its hosted checkout URL.

**Security note:** The current implementation uses client-provided product names and prices. Before accepting real payments, the backend must validate cart items and obtain prices from a trusted source.

## 🏗️ Backend Architecture

```text
Client Request
      |
      v
Express Router
      |
      v
Controller
      |
      v
Service Layer
      |
      +------> Fake Store API
      |
      +------> Stripe API
      |
      v
JSON Response
```

## 🧠 Technical Skills Demonstrated

- RESTful API design
- Express routing and middleware
- Node.js backend development
- Asynchronous JavaScript
- Axios HTTP requests
- Third-party API integration
- Stripe Checkout integration
- Controller/service architecture
- Error handling
- Environment variable management
- Git version control

## 🎯 Project Purpose

MyShop is a backend development portfolio project created to demonstrate practical knowledge of Node.js, Express, RESTful API design, and third-party service integration.

The project focuses on implementing core e-commerce backend functionality, including product retrieval, modular API architecture, and Stripe Checkout session creation.

**This application is intended for educational and portfolio demonstration purposes only. It is not designed for production use or live payment processing.**

## 👨‍💻 Developer

**Jeremiah Austin**

Software Developer | Full-Stack Web Development

- GitHub: [@overkill489](https://github.com/overkill489)
- Repository: [MyShop](https://github.com/overkill489/MyShop)

---

⭐ If you found this project interesting, consider starring the repository!
