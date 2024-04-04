import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "b3a7c9a1-ec76-4ba3-9e58-df340139c335",
      title: "Unite Sumit",
      slug: "unite-sumit",
      details: "Um evento p/ devs apaixonados(as por código!",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
