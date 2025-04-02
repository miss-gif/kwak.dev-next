import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AddCreateButton = () => {
  return (
    <Button variant={"outline"} className="w-full" asChild>
      <Link href={"/notice/create"}>+ New Page</Link>
    </Button>
  );
};

export default AddCreateButton;
