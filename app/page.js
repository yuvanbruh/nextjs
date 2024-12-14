"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { submitAction } from "../app/actions/form";

export default function Home() {
  const { data: session } = useSession();

  const handleClick = async () => {
    const data = {
      name: "ihatethat",
      role: "wanker",
    };

    let response = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      {/* Authentication Section */}
      <div className="auth-section">
        {session ? (
          <>
            <p>Signed in as {session.user.email}</p>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <p>Not signed in</p>
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </div>

      {/* Form and Fetch Section */}
      <form action={submitAction}>
        <button type="button" onClick={handleClick}>
          Click me
        </button>
        <div className="form">
          <label htmlFor="name">What is the username</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="add">Password</label>
          <input type="text" name="add" id="add" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
