import React from "react";

export default function ContactUs() {
  return (
    <div className="py-12">
      <h1 className="text-3xl md:text-6xl text-themeOrange text-center mb-16">
        Contact Us
      </h1>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-8 mt-4">
        <div className="px-10 md:px-32 ">
          <div className="flex flex-col gap-4">
            <h3>CONTACT US</h3>
            <strong>Better yet, see us in person!</strong>
            <p>
              We love our customers, so feel free to visit during normal
              business hours.
            </p>
            <strong>BLAC & CO REAL ESTATE LLC DUBAI</strong>
            <address>
              Office 2108, Conrad business tower, Sheikh Zayed Road - Dubai -
              United Arab Emirates
            </address>
            <a href="tel:+971 4 3827888">+971 4 3827888</a>
          </div>
          <div>
            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-2 text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <div>
                    <input
                      type="text"
                      className="block w-full p-4 text-sm text-gray-900 border border-gray-400 rounded-md bg-gray-50 "
                      placeholder="John Smith"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <div>
                    <input
                      type="email"
                      className="block w-full p-4 text-sm text-gray-900 border border-gray-400 rounded-md bg-gray-50 "
                      placeholder="waqar@gmail.com"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <textarea className="block w-full p-4 text-sm text-gray-900 border border-gray-400 rounded-md bg-gray-50 " cols="30" rows="5"></textarea>
              </div>
              <div className="my-6">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <iframe
            className="h-[70vh] w-full"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.6864783474376!2d55.282747973374995!3d25.2260936311449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f690d086774f5%3A0xb87ab6af4aed2819!2sAlzameli%20Immigration%20Consultancy%20LLC!5e0!3m2!1sen!2s!4v1695489894223!5m2!1sen!2s"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
