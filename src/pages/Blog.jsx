const Blog = () => {
  return (
    <div className="bg-base-100">

      {/* Hero Section */}
      <div className="hero bg-base-200 py-20">
        <div className="hero-content text-center max-w-4xl">
          <div>
            <h1 className="text-5xl font-bold mb-4">FreelancerDesk Blog</h1>
            <p className="text-lg">
              Stay updated with the latest insights, tips, and tutorials in
              web development, software solutions, freelancing, and network
              management. Our blog helps professionals grow their skills
              and businesses thrive.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Post</h2>
        <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1581092580490-1787f1b7c247"
              alt="featured blog"
              className="w-full h-64 object-cover lg:h-auto"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-2xl font-bold">Top 10 Tips for Freelancers</h3>
            <p>
              Discover essential tips for freelancers to find clients, manage projects efficiently, and grow your career.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Posts */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">

          <div className="card bg-base-100 shadow-lg">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee9810"
                alt="blog 1"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">Building a Responsive Website</h3>
              <p>Learn how to create modern, responsive websites that look great on any device.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">Read More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1523475496153-3db0a9d7e376"
                alt="blog 2"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">Effective Freelancing Strategies</h3>
              <p>Tips and tricks to manage clients, projects, and grow your freelance career successfully.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">Read More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                alt="blog 3"
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">Maintaining a Secure Network</h3>
              <p>Best practices for keeping your network safe and reliable in business or home environments.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">Read More</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Call To Action */}
      <div className="py-20 text-center bg-base-200">
        <h2 className="text-3xl font-bold mb-4">Want More Insights?</h2>
        <p className="mb-6">
          Subscribe to the FreelancerDesk blog to receive updates, tips, and tutorials directly to your inbox.
        </p>
        <button className="btn btn-primary btn-lg">Subscribe Now</button>
      </div>

    </div>
  );
};

export default Blog;