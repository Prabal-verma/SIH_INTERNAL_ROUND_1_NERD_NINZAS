import Head from 'next/head';
import Link from 'next/link';

export default function Docs() {
  return (
    <>
      <Head>
        <title>Documentation - SocialCalc</title>
        <meta name="description" content="Documentation for SocialCalc, a real-time collaborative spreadsheet application." />
      </Head>
      <div className='bg-black'>
      <div className="p-8 max-w-5xl mx-auto bg-black text-white">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">SocialCalc Documentation</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="mb-4">
            SocialCalc is a modern web application that allows for real-time collaboration on spreadsheets, similar to Excel. It offers features for live editing, user management, and collaboration.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Real-time collaboration with multiple users</li>
            <li>Customizable spreadsheets with various formatting options</li>
            <li>Sidebar with tools for saving, loading, exporting, and importing data</li>
            <li>Responsive design for desktop and mobile use</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Getting Started</h2>
          <p className="mb-4">
            To get started with SocialCalc, follow these steps:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              <strong>Clone the Repository:</strong> Clone the SocialCalc repository from GitHub.
              <pre className="bg-gray-800 text-white p-4 rounded-md mt-2"><code>git clone https://github.com/Prabal-verma/SocialCalc-SIH</code></pre>
            </li>
            <li>
              <strong>Install Dependencies:</strong> Navigate to the project directory and install the necessary dependencies.
              <pre className="bg-gray-800 text-white p-4 rounded-md mt-2"><code>cd Socialcalc-SIH{'\n'}npm install</code></pre>
            </li>
            <li>
              <strong>Run the Development Server:</strong> Start the development server.
              <pre className="bg-gray-800 text-white p-4 rounded-md mt-2"><code>npm run dev</code></pre>
            </li>
            <li>
              <strong>Open the Application:</strong> Open your browser and navigate to <Link href="http://localhost:3000" className="text-blue-500 hover:underline">http://localhost:3000</Link>.
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Using SocialCalc</h2>
          <p className="mb-4">
            Once you have SocialCalc running, you can start using it by navigating to the spreadsheet page. Here, you can:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Edit cells and format them as needed.</li>
            <li>Collaborate with other users in real-time.</li>
            <li>Use the toolbar to undo, redo, format, and search data.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">API Reference</h2>
          <p className="mb-4">
            Currently, SocialCalc does not have a public API. All interactions are handled via real-time WebSocket connections.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Troubleshooting</h2>
          <p className="mb-4">
            If you encounter issues, consider the following steps:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Check the console for error messages.</li>
            <li>Ensure that your Socket.IO server is running and properly configured.</li>
            <li>Verify that your network settings allow WebSocket connections.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Contributing</h2>
          <p className="mb-4">
            If you&apos;d like to contribute to SocialCalc, please follow these guidelines:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Fork the repository and create a new branch.</li>
            <li>Make your changes and test them thoroughly.</li>
            <li>Submit a pull request with a clear description of your changes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="mb-4">
            For any questions or feedback, please reach out to us at <a href="mailto:support@socialcalc.com" className="text-blue-500 hover:underline">support@socialcalc.com</a>.
          </p>
        </section>
      </div>
      </div>
    </>
  );
}