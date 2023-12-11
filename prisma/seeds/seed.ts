import { PrismaClient } from '@prisma/client'
import {v4 as uuidv4} from 'uuid'
const prisma = new PrismaClient()
async function main() {
  const requestForms = [
    {
        uuid: uuidv4(),
        name: "Nguyen Thai Quan",
        email: "thaiquan24@gmail.com",
        phone: null,
        note: null
    },
    {
        uuid: uuidv4(),
        name: null,
        email: "thalabodihet@gmail.com",
        phone: null,
        note: null
    },
    {
        uuid: uuidv4(),
        name: "Quan Hoang",
        email: "hoangquan38@gmail.com",
        phone: "834556723",
        note: null
    },
    {
        uuid: uuidv4(),
        name: "Kim Bang",
        email: "bangbangchiu22@gmail.com",
        phone: "834442668",
        note: "Muốn tư vấn thiết kế nội thất"
    }
]

  const createData = await prisma.FormRequest.create({ data: requestForms })
  console.log(createData)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })