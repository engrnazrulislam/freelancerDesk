const Contact = () => {
  return (
    <div className="bg-base-100">

      {/* Hero Section */}
      <div className="hero bg-base-200 py-20">
        <div className="hero-content text-center max-w-4xl">
          <div>
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg">
              Have questions or need assistance? Reach out to the FreelancerDesk team.
              We’re here to help you with your projects, services, and platform inquiries.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div className="bg-base-200 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">

            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea placeholder="Your Message" className="textarea textarea-bordered w-full h-32"></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">Send Message</button>

          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>

          <div className="flex items-start space-x-4">
            <span className="text-xl">📍</span>
            <p>123 FreelancerDesk Avenue, Dhaka, Bangladesh</p>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-xl">📧</span>
            <p>support@freelancerdesk.com</p>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-xl">📞</span>
            <p>+880 123 456 789</p>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-xl">⏰</span>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>

          {/* Map Placeholder */}
          <div className="mt-6 w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-700">
            Map Placeholder
          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="py-20 text-center bg-base-200">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-6">Contact us today and let's build something amazing together.</p>
        <button className="btn btn-primary btn-lg">Get in Touch</button>
      </div>

    </div>
  );
};

export default Contact;