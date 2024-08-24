import Image from "next/image";
import prisma from "@/lib/prisma";
import EntryCard from "@/components/EntryCard";

export default async function Home() {
  const entries = await prisma.entry.findMany({
    orderBy:{
      createdAt:"desc"
    }
  });
  return (
    <>
    {
    entries.map(entry => 
      <EntryCard key={entry.id} {...entry} />
    )
    }
    </>
  );
}
