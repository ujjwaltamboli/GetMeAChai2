import React from 'react'

const page = () => {
  return (
    <>
    <div className="bg-gray-100 text-gray-800">
    
    {/* <!-- Header Section --> */}
    <header className="bg-indigo-600 text-white text-center py-8">
        <h1 className="text-4xl font-bold fade-in">Get Me A Chai</h1>
        <p className="text-lg mt-4 fade-in">A crowdfunding platform designed for creators to fund their projects with the support of their fans.</p>
    </header>

    {/* <!-- Description Section --> */}
    <section className="max-w-7xl mx-auto my-12 p-6 bg-white rounded-lg shadow-lg slide-up">
        <h2 className="text-3xl font-semibold text-center mb-4">What is Get Me A Chai?</h2>
        <p className="text-lg text-center">It's a space where your fans can directly contribute to your creative endeavors by buying you a chai. Unlock the potential of your fanbase and bring your projects to life.At Get Me A Chai, we are committed to fostering a vibrant community where developers, creators, and influencers can thrive. Our crowdfunding platform is designed to connect talented individuals with supporters who believe in their vision and want to help bring their projects to life. We understand that financial support is crucial for creativity and innovation, and we strive to make the process seamless and rewarding for both creators and backers.</p>
    </section>

    {/* <!-- Benefits Section --> */}
    <section className="max-w-6xl mx-auto my-12 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* <!-- Creators Benefits --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg slide-up">
                <h3 className="text-2xl font-semibold mb-3 text-indigo-600">Benefits for Creators</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Direct support from your fanbase.</li>
                    <li>Flexible funding options.</li>
                    <li>Grow your creative projects with ease.</li>
                    <li>Maintain creative control and independence.</li>
                </ul>
            </div>

            {/* <!-- Fans Benefits --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg slide-up">
                <h3 className="text-2xl font-semibold mb-3 text-indigo-600">Benefits for Fans</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Engage with your favorite creators.</li>
                    <li>Contribute to projects you love.</li>
                    <li>Exclusive access to creator content.</li>
                    <li>Be a part of something bigger.</li>
                </ul>
            </div>

            {/* <!-- Collaboration & Community Engagement --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg slide-up">
                <h3 className="text-2xl font-semibold mb-3 text-indigo-600">Collaboration & Community Engagement</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Foster a community of like-minded individuals.</li>
                    <li>Collaborate on creative projects.</li>
                    <li>Strengthen the bond between creators and fans.</li>
                    <li>Create a vibrant, engaged community.</li>
                </ul>
            </div>

        </div>
    </section>

    {/* <!-- Footer Section --> */}
    <footer className="bg-indigo-600 text-white text-center py-6">
        <p>&copy; 2024 Get Me A Chai. All rights reserved.</p>
    </footer>
    </div>
    </>
  )
  
}

export default page
