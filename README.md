# Building a Modern Version of SocialCalc using Node.js, Go, or Django with AI Tools like Copilot

This README provides an overview of the project, including team details, relevant links, tasks completed, tech stack, key features, and steps to run the project locally.

## Team Details

**Team Name:** NERD NINZAS

**Team Leader:** [@Prabal-verma](https://github.com/Prabal-verma)

**Team Members:**

- **Prabal Verma** - 2022UIC3672 - [@Prabal-verma](https://github.com/Prabal-verma)
- **Vijay Pratap Singh** - 2022UIC3664 - [@Vijaysingh1621](https://github.com/Vijaysingh1621)
- **Tanya Sharma** - 2022UEC4145 - [@tanyasharma1283](https://github.com/tanyasharma1283)
- **Aayush Goyal** - 2022UIC3673 - [@Aayush8212](https://github.com/aayush8212)
- **Ankita** - 2022UEC2532 - [@CodingHerWay](https://github.com/codingherway)
- **Vishal** - 2022UIC3613 - [@Vishukaneki](https://github.com/Vishukaneki)

## Project Links

- **Internal Presentation:** [Internal Presentation](./files/Internal_PPT_Nerd_Ninzas.pdf).
- **Video Demonstration:** [Watch Video](UNLISTED YOUTUBE LINK)
- **Live Deployment:** [View Deployment](https://socialcalc.vercel.app/).
- **Source Code:** [GitHub Repository](https://github.com/Prabal-verma/SIH_INTERNAL_ROUND_1_NERD_NINZAS).
- **Figma Link** [Figma Link](https://www.figma.com/design/6at4zdVslBTI8mC01dtC5L/Untitled).
- **Architecture Diagram** [Diagram Link](https://app.eraser.io/workspace/9tp9HmW6gtxPN4jDRS3Q).

## Tasks Completed

1. **Feature Development:** Spreadsheet features similar to Excel have been developed. Real-time collaboration is currently in progress.
2. **Authentication Integration:** Implemented Clerk for user authentication also planning to implement authentication using NextAuth.
3. **Database Management:** Used MongoDB with Mongoose for managing data.
4. **Backend Setup:** Built using Node.js with Express; considered Go and Django for alternatives.
5. **Containerization:** Dockerized the application for better deployment management.
6. **Scaling:** Planned to scale using AWS EC2 clusters to handle increased loads efficiently.
7. **AI Integration:** Leveraged AI tools like GitHub Copilot to enhance development productivity.

## Tech Stack

- **Frontend:** React, Tailwind CSS, Syncfusion Spreadsheet Component, Aceternity UI, ShadCN
- **Backend:** Next.js, Express, MongoDB, Mongoose, Firebase (for file storage)
- **Authentication:** Clerk, NextAuth
- **Containerization:** Docker, AWS E2R
- **Deployment and Scaling:** AWS EC2 Clusters
- **AI Tools:** GitHub Copilot

## Key Features

- Collaborative spreadsheet functionality (real-time collaboration in progress).
- User authentication and authorization using Clerk.
- Scalable architecture with AWS EC2 for managing high traffic.
- Persistent storage of spreadsheets in Firebase.
- Responsive UI with dark mode for enhanced user experience.

## Steps to Run the Project Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Prabal-verma/SIH_INTERNAL_ROUND_1_NERD_NINZAS
   cd SIH_INTERNAL_ROUND_1_NERD_NINZAS/code/SocialCalc-SIH
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Setup Environment Variables:**
   Create a `.env` file in the root directory with the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   FIREBASE_CONFIG=your_firebase_configuration
   CLERK_FRONTEND_API=your_clerk_frontend_api_key
   ```

4. **Run the Application:**
   ```bash
   npm run dev
   ```

5. **Access the Application:**
   Open your browser and go to `http://localhost:3000`.

6. **Docker Setup (Optional):**
   - Build the Docker image:
     ```bash
     docker build -t your_image_name .
     ```
   - Run the Docker container:
     ```bash
     docker run -p 3000:3000 your_image_name
     ```

7. **Scaling with AWS EC2 (Future Plans):**
   - Use AWS EC2 clusters for scaling the application in production.
   - Implement auto-scaling policies to handle varying workloads.

## Contact

For any queries or further information, please contact the team leader: [@Prabal-verma](https://github.com/Prabal-verma) (Prableverma@gmail.com)
