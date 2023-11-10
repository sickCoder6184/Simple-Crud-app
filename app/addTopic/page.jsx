"use client";

import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();

      if (!session) {
        signIn();
      }
    };
    securePage();
  }, []);

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("tittle and description needed");
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("failed in adding topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        onChange={(e) => settitle(e.target.value)}
        value={title}
        placeholder="Topic Tittle"
        className=" text-green-600 border border-slate-500 px-8 py-2 mt-3"
      />

      <input
        type="text"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        placeholder="Topic Description"
        className=" text-green-600 border border-slate-500 px-8 py-2 "
      />

      <button type="submit" className="bg-green-500 rounded-2xl w-fit p-3">
        Add Task
      </button>
    </form>
  );
};

export default page;
