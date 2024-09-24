const About = () => {
  return (
    <section className="bg-gray-100">
      <div className=" min-h-screen py-12 container max-w-screen-lg mx-auto">
        {/* Page Heading */}
        <div className=" text-center">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover the story behind our bookstore and the passion that drives
            us.
          </p>
        </div>

        {/* Section 1: Our Story */}
        <div className="container mx-auto mt-12 px-4">
          <div className="lg:flex lg:items-center lg:gap-8">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                alt="Bookstore Interior"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Story
              </h2>
              <p className="mt-4 text-gray-600">
                Welcome to **Your Bookstore Name**, where a love for literature
                meets a passion for community. Our bookstore was founded with
                the vision to create a welcoming space for book lovers of all
                ages, where stories come to life.
              </p>
              <p className="mt-4 text-gray-600">
                Whether you’re looking for the latest bestseller or a timeless
                classic, our curated collection offers something for everyone.
                Our knowledgeable staff is always here to guide you through your
                literary journey.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Our Mission */}
        <div className="container mx-auto mt-16 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission is to foster a love for reading, ignite imaginations,
              and connect readers with stories that enrich their lives. Through
              carefully selected books, community events, and author readings,
              we strive to create a space where ideas flourish and readers find
              joy in every page.
            </p>
          </div>
        </div>

        {/* Section 3: Our Team */}
        <div className="container mx-auto mt-16 px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Meet Our Team
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="w-full md:w-1/3 lg:w-1/4 text-center">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                alt="Team member"
                className="rounded-full h-40 w-40 mx-auto object-cover shadow-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Jane Doe
              </h3>
              <p className="text-gray-600">Founder & Chief Curator</p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 text-center">
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
                alt="Team member"
                className="rounded-full h-40 w-40 mx-auto object-cover shadow-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                John Smith
              </h3>
              <p className="text-gray-600">Marketing & Events Manager</p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 text-center">
              <img
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263"
                alt="Team member"
                className="rounded-full h-40 w-40 mx-auto object-cover shadow-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Emily Clark
              </h3>
              <p className="text-gray-600">Customer Relations Specialist</p>
            </div>
          </div>
        </div>

        {/* Section 4: Call to Action */}
        <div className="container mx-auto mt-16 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Join Our Community
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that books have the power to connect people and foster
              a sense of belonging. Join our community by visiting us, signing
              up for our newsletter, or attending one of our many events!
            </p>
            <button className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
