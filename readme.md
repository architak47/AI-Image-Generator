# AI Image Generator

## Overview
This is a web application that allows users to generate imaginative and visually stunning images using AI. Users can create images by providing prompts, and share their creations with the community.

## Features
- Generate images using AI.
- Share generated images with the community.
- Browse a collection of images created by the community.
- Search for images by name or prompt.

## Technologies Used
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Image Hosting:** Cloudinary

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB instance running (local or cloud-based).
- Cloudinary account for image hosting.

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/architak47/AI-Image-Generator.git
   cd AI-Image-Generator
    ```
2. **Install dependencies for the server:**
    ```sh
   cd server
   #npm install
    ```
3. **Set up environment variables:**
    Create a .env file in the server directory with the following content:
    ```sh
    PORT=8000
    MONGODB_URL="mongodb_url"
    API_KEY="your_api_key_here"

    CLOUDINARY_CLOUD_NAME="cloud_name"
    CLOUDINARY_API_KEY="your_cloudinary_api_key"
    CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
    ```
4. **Start the server:**
    ```sh
    cd ../server
    npm start
    ```
5. **Install dependencies for the client:**
    ```sh
    cd ../client
    #npm install
    ```
6. **Start the client:**
    ```sh
    npm run dev
    ```
7. **Open your browser and navigate to http://localhost:5173**

```sh
dalle-clone
│
├── client               # React frontend
│   ├── public           # Public assets
│   ├── src              # Source files
│   │   ├── assets       # Static assets
│   │   ├── components   # Reusable components
│   │   ├── pages        # Page components
│   │   ├── utils        # Utility functions
│   │   ├── App.jsx      # Main App component
│   │   └── index.jsx    # Entry point
│   └── package.json     # Client dependencies
│
├── server               # Express backend
│   ├── db               # Database models
│   ├── routes           # API routes
│   ├── .env             # Environment variables
│   ├── index.js         # Entry point
│   └── package.json     # Server dependencies
│
|── .gitignore           # Files and directories to be ignored by Git
└── README.md            # Project documentation
```

## API Endpoints
### Image Generation (DALL-E)
#### POST /api/v1/ai

- Request Body: { "prompt": "Your image prompt" }
- Response: { "photo": "Generated image URL" }

### Community Posts
#### GET /api/v1/post
- Response: { "success": true, "data": [Array of posts] }

### POST /api/v1/post
- Request Body: { "name": "User's name", "prompt": "Image prompt", "photo": "Generated image URL" }
- Response: { "success": true, "data": { "new post object" } }

## Contributing
- Contributions are welcome! Please open an issue or submit a pull request

