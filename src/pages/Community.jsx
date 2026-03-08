const Community = () => {
  return (
    <div className="bg-base-100">

      {/* Hero Section */}
      <div className="hero bg-base-200 py-20">
        <div className="hero-content text-center max-w-4xl">
          <div>
            <h1 className="text-5xl font-bold mb-4">FreelancerDesk Community</h1>
            <p className="text-lg">
              Join our growing community of freelancers, developers, and clients. 
              Share knowledge, discuss projects, and collaborate to grow your skills
              and network.
            </p>
          </div>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Community Guidelines</h2>
        <div className="grid md:grid-cols-3 gap-6">

          <div className="card bg-base-200 shadow-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Respectful Interaction</h3>
            <p>Maintain a positive and professional tone when interacting with others.</p>
          </div>

          <div className="card bg-base-200 shadow-xl p-6">
            <h3 className="font-semibold text-xl mb-2">Share Knowledge</h3>
            <p>Contribute insights, tips, and resources to help others grow.</p>
          </div>

          <div className="card bg-base-200 shadow-xl p-6">
            <h3 className="font-semibold text-xl mb-2">No Spam</h3>
            <p>Focus on meaningful discussions and avoid self-promotion or irrelevant posts.</p>
          </div>

        </div>
      </div>

      {/* Forums / Discussions */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest Discussions</h2>
        <div className="grid md:grid-cols-3 gap-6">

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Web Development Tips</h3>
              <p>Share your best practices, frameworks, and tools for building modern websites.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">Join Discussion</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Freelancing Strategies</h3>
              <p>Discuss ways to find clients, manage projects, and grow your freelancing career.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">Join Discussion</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Network & Security</h3>
              <p>Share tips on maintaining secure networks and troubleshooting connectivity issues.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">Join Discussion</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Join Community CTA */}
      <div className="py-20 text-center bg-base-200">
        <h2 className="text-3xl font-bold mb-4">Become a Part of Our Community</h2>
        <p className="mb-6">
          Connect with like-minded professionals, share knowledge, and grow your network.
        </p>
        <button className="btn btn-primary btn-lg">Join Now</button>
      </div>

    </div>
  );
};

export default Community;