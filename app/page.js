import TopicsList from "@/components/TopicList";
import { useSession } from "next-auth/react";
import React from "react";

const Page = () => {


  return (
    <>
      <TopicsList/>
    </>
  );
};

export default Page;
