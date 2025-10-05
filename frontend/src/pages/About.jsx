import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 capitalize">
          <p>
            Welcome to MediConnect+ your trusted partner in simplifying doctor appointment bookings and healthcare access. At MediConnect+, we understand the challenges individuals face when it comes to finding the right doctor and scheduling appointments with ease.
          </p>
          <p>
            MediConnect+ is committed to excellence in healthcare technology. We continuously enhance our platform with the latest innovations to ensure a smooth and reliable user experience. Whether you’re booking your very first appointment or managing regular visits, MediConnect+ is here to support you every step of the way
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at MediConnect+ is to create a seamless connection between patients and healthcare providers. We aim to make healthcare more accessible, ensuring you get the right care at the right time—without the hassle.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p className="uppercase">
          Why <span className="text-gray-700 font-semibold">Choose Us</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
