#!/bin/bash

# Run Prisma migration
echo "Running Prisma migration..."
npx prisma migrate deploy

# Run Prisma database seeding
echo "Running Prisma database seeding..."
npx prisma db seed

echo "Deployment and seeding completed."
