import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full m-auto md:pl-20 p-4 py-16 bg-[#001b5e]">
      <h1 className="py-4 text-4xl font-bold text-center text-white">
        Contact
      </h1>
      <form
        action="https://getform.io/f/a1dc59e8-b586-4997-9bb5-28c283330a9a"
        method="POST"
        encType="multipart/form-data"
        className="flex flex-col items-center md:w-2/4 w-full rounded-md mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-4 py-2 w-full">
          <div className="flex flex-col w-full">
            <label className="uppercase text-white text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-2 flex bg-slate-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-white text-sm py-2">
              Phone Number
            </label>
            <input
              className="border-2 rounded-lg p-2 flex bg-slate-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <label className="uppercase text-white text-sm py-1">Email</label>
          <input
            className="border-2 rounded-lg p-2 flex bg-slate-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label className="uppercase text-white text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-2 flex bg-slate-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col w-full ">
          <label className="uppercase text-white text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-2 flex bg-slate-300"
            rows="5"
            name="message"
          ></textarea>
        </div>
        <button className="bg-white text-[#001b5e] rounded-lg mt-4 w-full p-4">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
