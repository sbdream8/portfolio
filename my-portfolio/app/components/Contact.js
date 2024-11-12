// app/components/Contact.js
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h1>Contact Information</h1>
      <p>Email: sebindream@gmail.com</p>
      <p>Phone: +1-323-974-4446</p>
      <p>Phone: +82-010-9286-7429</p>
      <p>
        LinkedIn:{" "}
        <Link href="https://www.linkedin.com/in/sebin-lee-4758542b0/" target="_blank">
          https://www.linkedin.com/in/sebin-lee-4758542b0/
        </Link>
      </p>
    </div>
  );
}
