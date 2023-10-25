const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

}

main().catch(e => {
  console.log(e)
  process.exit(1)
}).finally(() => {
  prisma.$disconnect();
})