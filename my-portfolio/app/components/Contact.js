// app/components/Contact.js
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h2>Contact Information</h2>
      <p>Email: sebindream@gmail.com</p>
      <p>Phone: +1-323-974-4446</p>
      <p>
        LinkedIn:{" "}
        <Link href="https://www.linkedin.com/in/sebin-lee-4758542b0/" target="_blank">
          https://www.linkedin.com/in/sebin-lee-4758542b0/
        </Link>
      </p>
    </div>
  );
}
