# 🛠️ API Backend - Eventku Website.

A repository backend REST API for Eventku website. This API is for handling authentication, events, participants orders and payments management.

---

## 🚀 Features

- 🔐 User authentication (JWT)
- 🔃 Refresh Token
- 👤 Role-based access (Participants, Organizers & Admin)
- 📝 CRUD Events, Talents event, Events organizer, Payment & Categories event 
- 📄 Apply Event
- 🔎 Filter & Search
- 📟 Pagination
- 🛡️ validation
- 🔢 OTP Authentication
- 📩 Notification to Gmail
- And Many More

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Auth**: JWT + Bcrypt
- **Environment**: dotenv
- **GMAIL Notification**: Nodemailer

---

## 📁 Folder Structure

```bash
├── app/        
  ├── api/v1/ # Handler services, schema & API routing
      ├──auth
      ├──categories
      ├──events
      ├──images
      ├──orders
      ├──organizers
      ├──participants
      ├──payments
      ├──talents
      ├──users          
  ├── db/ # DB Configuration
  ├── errors/ # Custom error
  ├── middlewares/ # Auth, handle-error, multer & not-found middleware
  ├── services # Handler logic mongooDB & mail configuration
    ├── mail          
    ├── mongoose
  ├── utils 
  ├── views # Ui for gmail notification
    ├── email
  ├── uploads # Storage folder for image
└── README.md
└── .env.example
└── .gitignore
└── app.js
└── package-lock.json
└── package.json
```
## ⚙️ Getting Started

``` bash
git clone https://github.com/Mustofaadni04040/https://github.com/Mustofaadni04040/semina-server.git
cd project-name
npm install
```
## 🔢 Environment Variables

``` bash
PORT= # Your local port
URL_MONGODB_DEV= # Your mongooDB connection
JWT_SECRET_KEY= # Your JWT secret
JWT_EXPIRATION= # Expired time for JWT
GMAIL= # Your gmail for nodemailer configuration
PASSWORD= # Your gmail password for nodemailer configuration
```

## ▶️ Running Server
``` bash
npm run dev
```

## 🧪 API Endpoints (Sample)

#### Categories

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | /localhost:9000/api/v1/cms/categories | Add category event           |
| PUT   | /localhost:9000/api/v1/cms/categories/:id    | Edit category event               |
| DELETE   | /localhost:9000/api/v1/cms/categories/:id    | Delete category event |
| GET   | /localhost:9000/api/v1/cms/categories    | Get all categories|
| GET   | /localhost:9000/api/v1/cms/categories/:id    | Get category by id|

#### Events

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | /localhost:9000/api/v1/cms/events | Add event          |
| PUT   | /localhost:9000/api/v1/cms/events/:id    | Edit event              |
| DELETE   | /localhost:9000/api/v1/cms/events/:id    | Delete event |
| GET   | /localhost:9000/api/v1/cms/events    | Get all events|
| GET   | /localhost:9000/api/v1/cms/events/:id    | Get event by id|

#### Image

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | /localhost:9000/api/v1/cms/images | Upload image          |

#### Orders

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| GET   | /localhost:9000/api/v1/cms/orders | Get all events order          |

#### Organizers

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | /localhost:9000/api/v1/cms/organizers | Create organizer          |
| POST   | /localhost:9000/api/v1/cms/users | Create admin          |

#### Participants

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | /localhost:9000/api/v1/auth/signup | Sign up for user         |
| POST   | /localhost:9000/api/v1/auth/signup   | Sign in for user              |
| PUT   | /localhost:9000/api/active   | Activate user using otp |
| GET   | /localhost:9000/api/v1/events    | Get all events for user|
| GET   | /localhost:9000/api/v1/events/:id    | Get detail event for user|
| GET   | /localhost:9000/api/v1/orders    | Get events order for user|
| POST   | /localhost:9000/api/v1/checkout    | Checkout event|

#### Payments

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | /localhost:9000/api/v1/cms/payments | Add payment         |
| PUT   | /localhost:9000/api/v1/cms/payments/:id    | Edit payment             |
| DELETE   | /localhost:9000/api/v1/cms/payments/:id    | Delete payment |
| GET   | /localhost:9000/api/v1/cms/payments    | Get all payments|
| GET   | /localhost:9000/api/v1/cms/payments/:id    | Get payment by id|

#### Talents

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | /localhost:9000/api/v1/cms/talents | Add talent event         |
| PUT   | /localhost:9000/api/v1/cms/talents/:id    | Edit talent event             |
| DELETE   | /localhost:9000/api/v1/cms/talents/:id    | Delete talent event |
| GET   | /localhost:9000/api/v1/cms/talents    | Get all talents|
| GET   | /localhost:9000/api/v1/cms/talents/:id    | Get talent by id|


## 📝 License
MIT License © 2025 Mustofa Adny
