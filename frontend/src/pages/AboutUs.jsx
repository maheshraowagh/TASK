const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-100 to-white p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
        <p className="text-lg font-light mb-8 text-gray-600 mt-10">
          Welcome to our website! We are dedicated to providing the best service
          and products to our customers. Our team is passionate about delivering
          quality and ensuring customer satisfaction. At [MAXSHOP], we
          are dedicated to revolutionizing the way you experience products. Our
          mission is to deliver innovative, high-quality solutions that enhance
          your daily life. With a team of experts and a passion for excellence,
          we meticulously design and test each product to meet the highest
          standards. Our commitment goes beyond just providing exceptional
          products—we strive to build lasting relationships with our customers,
          understanding their needs, and delivering personalized service. At the
          heart of our company is a relentless pursuit of quality and customer
          satisfaction. We believe in transparency, integrity, and
          sustainability, ensuring that every product we offer reflects our
          values and dedication. Join us on our journey to make a meaningful
          impact and experience the difference with [MAXSHOP].
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to deliver exceptional products and services to our
              customers. We strive to innovate and improve continuously while
              maintaining high standards of quality and integrity.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Vision
            </h2>
            <p className="text-gray-600">
              We envision becoming the leading provider in our industry, known
              for our commitment to excellence and customer satisfaction. Our
              vision drives us to push boundaries and explore new opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
