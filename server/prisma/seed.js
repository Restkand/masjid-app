const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('Lc6263It', 10); // Hash password

  const user = await prisma.userLogin.create({
    data: {
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword, // Simpan password yang sudah di-hash
      role: 'Admin',
    },
  });

  console.log('User created:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });