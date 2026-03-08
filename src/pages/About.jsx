
  const About = () => {
  return (
    <div className="bg-base-100">

      {/* Hero Section */}
      <div className="hero bg-base-200 py-20">
        <div className="hero-content text-center max-w-4xl">
          <div>
            <h1 className="text-5xl font-bold">About FreelancerDesk</h1>
            <p className="py-6 text-lg">
              FreelancerDesk is a modern freelance service platform that connects
              businesses with skilled professionals. We provide reliable digital
              solutions including web development, custom software development,
              and network maintenance services.
            </p>
          </div>
        </div>
      </div>


      {/* Mission Section */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4">
            Our mission is to empower businesses and individuals by providing
            high-quality freelance services through a trusted digital platform.
            We aim to build long-term partnerships by delivering reliable,
            scalable, and innovative technology solutions.
          </p>
          <p>
            FreelancerDesk focuses on quality, transparency, and client
            satisfaction while helping professionals showcase their skills
            and grow their careers.
          </p>
        </div>

      </div>


      {/* Stats Section */}
      <div className="bg-base-200 py-16">
        <div className="stats stats-vertical lg:stats-horizontal shadow flex justify-center">

          <div className="stat">
            <div className="stat-title">Projects Completed</div>
            <div className="stat-value">250+</div>
            <div className="stat-desc">Successful projects delivered</div>
          </div>

          <div className="stat">
            <div className="stat-title">Happy Clients</div>
            <div className="stat-value">150+</div>
            <div className="stat-desc">Clients worldwide</div>
          </div>

          <div className="stat">
            <div className="stat-title">Freelancers</div>
            <div className="stat-value">80+</div>
            <div className="stat-desc">Skilled professionals</div>
          </div>

        </div>
      </div>


      {/* Services */}
      <div className="max-w-6xl mx-auto py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">Our Core Services</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Web Development</h3>
              <p>
                Modern responsive websites and scalable web applications built
                with the latest technologies.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Software Development</h3>
              <p>
                Custom software systems designed to automate business processes
                and improve productivity.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Network Maintenance</h3>
              <p>
                Secure and reliable network configuration, monitoring, and
                maintenance services.
              </p>
            </div>
          </div>

        </div>

      </div>


      {/* Team Section */}
      <div className="bg-base-200 py-20">

        <div className="max-w-6xl mx-auto text-center px-6">

          <h2 className="text-3xl font-bold mb-10">Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.pravatar.cc/200?img=1"
                  className="rounded-full w-24"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Project Manager</h3>
                <p>Ensures project delivery and client satisfaction.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.pravatar.cc/200?img=2"
                  className="rounded-full w-24"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Lead Developer</h3>
                <p>Responsible for software architecture and development.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.pravatar.cc/200?img=3"
                  className="rounded-full w-24"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Network Engineer</h3>
                <p>Handles network setup, security, and maintenance.</p>
              </div>
            </div>

          </div>

        </div>

      </div>


      {/* Call To Action */}
      <div className="py-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>

        <p className="mb-6">
          Join FreelancerDesk today and connect with professional developers
          and technology experts.
        </p>

        <button className="btn btn-primary">Get Started</button>

      </div>

    </div>
  );
};

export default About;
