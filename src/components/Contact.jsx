import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full m-auto md:pl-20 p-4 py-16 bg-[#001b5e]">
      <h1 className="py-4 text-xl font-bold text-center text-white">
        Leave me a Message
      </h1>
      <form
        action="https://getform.io/f/a1dc59e8-b586-4997-9bb5-28c283330a9a"
        method="POST"
        encType="multipart/form-data"
        className="flex flex-col items-center md:w-96 w-full mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-4 py-2 w-full">
          <div className="flex flex-col w-full">
            <input
              className="border-b-blue-400 text-white border-b-2 pt-1 pb-1 text-sm outline-none flex bg-transparent"
              type="text"
              name="name"
              placeholder="Full Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="border-b-blue-400 text-white border-b-2 pt-1 pb-1 text-sm outline-none flex bg-transparent"
              type="text"
              name="phone"
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <input
            className="border-b-blue-400 text-white border-b-2 pt-1 pb-1 text-sm outline-none flex bg-transparent"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col w-full mt-2">
          <textarea
            className="border-b-blue-400 text-white border-b-2 pt-1 pb-1 text-sm outline-none  flex bg-transparent"
            rows="5"
            name="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="bg-blue-400 hover:bg-orange-500 text-[#001b5e] font-semibold text-sm  mt-4 w-full p-2 ">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
