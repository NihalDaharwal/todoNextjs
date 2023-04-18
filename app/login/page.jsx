import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="email" placeholder="enter email" />
          <input type="password" placeholder="enter password" />
          <button type="submit">Login</button>
          <p>OR</p>
          <Link href={"/register"}>New User</Link>
        </form>
      </section>
    </div>
  );
};

export default page;

export const metadata = {
  title: "login",
  description: "this is login todo",
};
