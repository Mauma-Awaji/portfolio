import React, { useState } from "react";
export default function Contact({
  /**
   * This component renders a contact form that allows users to send messages.
   * It simulates a network request time to demonstrate asynchronous behavior.
   *
   * @param {number} simulateNetworkRequestTime - The time in milliseconds to simulate a network request.
   */
  simulateNetworkRequestTime,
}) {
  // State to manage the email input and messages
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage(""); // Clear previous message
      setBusy(true);
      // Wait 2 seconds (simulating a network request)
      await new Promise((resolve) =>
        setTimeout(resolve, simulateNetworkRequestTime || 2000)
      );
      setMessage(`Thanks for your message, ${name}!`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <section>
        <h2>Contact Me</h2>
        <form
          className="text-gray-700"
          onSubmit={handleSubmit}
          autoComplete={"false"}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded mb-4 w-full"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={busy}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded mb-4 w-full"
            required
            disabled={busy}
          />
          <textarea
            placeholder="Your Message"
            className="border p-2 rounded mb-4 w-full"
            rows="4"
            required
            disabled={busy}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
            disabled={busy}
          >
            {busy ? "Sending..." : "Send"}
          </button>
        </form>
        {/*-- Form message that will be attached to a js event*/}
        <p>{message}</p>
      </section>
    </>
  );
}
