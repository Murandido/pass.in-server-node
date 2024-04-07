import { prisma } from "../src/lib/prisma";
import { faker } from "@faker-js/faker";

async function seed() {
  await prisma.event.create({
    data: {
      id: "b3a7c9a1-ec76-4ba3-9e58-df340139c335",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento p/ devs apaixonados(as) por código!",
      maximumAttendees: 120,
    },
  });

  await prisma.attendee.createMany({
    data: Array.from({ length: 120 }).map(() => {
      return {
        email: faker.internet.email().toLocaleLowerCase(),
        eventId: "b3a7c9a1-ec76-4ba3-9e58-df340139c335",
        name: faker.person.fullName(),
        createdAt: faker.date.recent({ days: 30 }),
      };
    }),
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
