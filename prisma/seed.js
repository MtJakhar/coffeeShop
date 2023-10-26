import { brands } from './brands'
import { coffees } from './coffees'
import { countries } from './countries'
import { regions } from './regions'

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