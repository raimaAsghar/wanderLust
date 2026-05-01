# 🌍 WanderLust
 
> A full-featured Airbnb-inspired property listing platform where users can explore, create, and review travel accommodations — built with Node.js, Express, MongoDB, and deployed on Railway.
 
![Tech Stack](https://img.shields.io/badge/Stack-Node.js%20%2B%20Express%20%2B%20MongoDB-green?style=for-the-badge)
![Deployed](https://img.shields.io/badge/Deployed-Railway-blueviolet?style=for-the-badge)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)
 
🔗 **Live Demo:** [wanderlust-production-a316.up.railway.app/listings](https://wanderlust-production-a316.up.railway.app/listings)
 
---
 
## ✨ Features
 
- 🏠 **Browse Listings** — Explore properties by category (Trending, Rooms, Mountains, Castles, Farms, Arctic & more)
- ➕ **Create & Manage Listings** — Authenticated users can add, edit, and delete their own listings
- 🖼️ **Image Uploads** — Upload listing photos via Multer + Cloudinary CDN
- 🔐 **User Authentication** — Register, Login & Logout with Passport.js (local strategy)
- 💬 **Reviews System** — Leave and manage reviews on any listing
- 🗂️ **Category Filtering** — Filter by type (Pools, Camping, Domes, Iconic Cities, etc.)
- 💰 **GST Toggle** — Show total price after 18% GST tax
- 🛡️ **Authorization** — Only listing/review owners can edit or delete their content
- ✅ **Server-side Validation** — Joi schema validation on all inputs
- ⚡ **Flash Messages** — Success & error notifications via connect-flash
- 🌐 **Deployed on Railway** — Production-ready with MongoDB Atlas
---
 
## 🏗️ Tech Stack
 
| Technology | Purpose |
|---|---|
| Node.js + Express 5 | Backend server & routing |
| MongoDB Atlas + Mongoose | Database & ODM |
| EJS + EJS-Mate | Server-side templating & layouts |
| Passport.js + passport-local | User authentication |
| passport-local-mongoose | User model with hashed passwords |
| Multer + Cloudinary | Image upload & cloud storage |
| Joi | Server-side schema validation |
| express-session + connect-mongo | Session management & persistence |
| connect-flash | Flash messages |
| method-override | Support PUT/DELETE in HTML forms |
| Railway | Deployment & hosting |
 
---
 
## 📁 Project Structure
 
```
wanderLust/
├── controllers/
│   ├── listings.js        # Listing CRUD logic
│   ├── reviews.js         # Review logic
│   └── users.js           # Auth (register, login, logout)
├── models/
│   ├── listing.js         # Listing schema
│   ├── review.js          # Review schema
│   └── user.js            # User schema (passport-local-mongoose)
├── routes/
│   ├── listing.js         # /listings routes
│   ├── review.js          # /listings/:id/reviews routes
│   └── user.js            # /signup, /login, /logout routes
├── views/
│   ├── layouts/           # EJS-Mate base layout
│   ├── listings/          # index, show, new, edit views
│   ├── users/             # signup & login views
│   └── error.ejs
├── public/
│   ├── css/               # Stylesheets
│   └── js/                # Client-side scripts
├── utils/
│   ├── ExpressError.js    # Custom error class
│   └── wrapAsync.js       # Async error wrapper
├── init/
│   └── data.js            # Database seed data
├── middleware.js           # isLoggedIn, isOwner, isReviewAuthor
├── schema.js               # Joi validation schemas
├── cloudConfig.js          # Cloudinary config
├── app.js                  # Express app entry point
└── .env                    # Environment variables (not committed)
```
 
---
 
## 🔄 App Flow
 
```
Visit /listings
     ↓
Browse all listings (filter by category)
     ↓
Click a listing → /listings/:id
     ↓
  ┌──────────────────────┐
  │  Read reviews        │
  │  Leave a review ✅   │  (login required)
  └──────────────────────┘
     ↓
Create listing → /listings/new  (login required)
Edit / Delete  → owner only
```
 
---
 
## 🚀 Getting Started
 
### Prerequisites
 
- Node.js v22+
- MongoDB Atlas account
- Cloudinary account
### 1. Clone the Repo
 
```bash
git clone https://github.com/raimaAsghar/wanderLust.git
cd wanderLust
```
 
### 2. Install Dependencies
 
```bash
npm install
```
 
### 3. Configure Environment Variables
 
Create a `.env` file in the root:
 
```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret_key
 
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```
 
### 4. Seed the Database (Optional)
 
```bash
node init/data.js
```
 
### 5. Start the Server
 
```bash
npm start
```
 
App will be running at `http://localhost:8080/listings`
 
---
 
## 📡 Routes Overview
 
### Listings — `/listings`
 
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/listings` | Browse all listings | ❌ |
| GET | `/listings/new` | New listing form | ✅ |
| POST | `/listings` | Create listing | ✅ |
| GET | `/listings/:id` | View single listing | ❌ |
| GET | `/listings/:id/edit` | Edit listing form | ✅ Owner |
| PUT | `/listings/:id` | Update listing | ✅ Owner |
| DELETE | `/listings/:id` | Delete listing | ✅ Owner |
 
### Reviews — `/listings/:id/reviews`
 
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| POST | `/` | Add a review | ✅ |
| DELETE | `/:reviewId` | Delete a review | ✅ Author |
 
### Users
 
| Method | Route | Description |
|--------|-------|-------------|
| GET/POST | `/signup` | Register |
| GET/POST | `/login` | Login |
| GET | `/logout` | Logout |
 
---
 
## 🔐 Auth & Authorization
 
- Sessions via **express-session** + **connect-mongo** (persists across server restarts)
- Passwords hashed automatically by **passport-local-mongoose**
- `isLoggedIn` → protects all create/edit/delete routes
- `isOwner` → only listing creator can modify it
- `isReviewAuthor` → only review author can delete it
---
 
## ☁️ Image Upload Flow
 
```
User selects image
     ↓
Multer parses multipart/form-data
     ↓
multer-storage-cloudinary uploads to Cloudinary
     ↓
URL + filename saved to MongoDB
     ↓
Image served via Cloudinary CDN
```
 
---
 
## 🛠️ Future Improvements
 
- [ ] Map integration for listing locations (Mapbox)
- [ ] Search & price range filter
- [ ] Booking / reservation system
- [ ] User profile page with their listings
- [ ] Wishlist / save listings feature
- [ ] Pagination for large listing sets
---
 
## 🤝 Contributing
 
1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request
---
 
## 👩‍💻 Author
 
**Raima Asghar**
- GitHub: [@raimaAsghar](https://github.com/raimaAsghar)
- Live: [wanderlust-production-a316.up.railway.app](https://wanderlust-production-a316.up.railway.app/listings)

---
 
<div align="center">
  <p>If you found this project helpful, please ⭐ star the repo!</p>
</div>
 
