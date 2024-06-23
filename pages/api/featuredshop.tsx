import { NextApiRequest, NextApiResponse } from 'next';
import csv from 'csv-parser';
import fs from 'fs';

interface Store {
  name: string;
  logo: string;
  description: string;
  location: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const stores: Store[] = [];

  const filePath = './archive/localStores.csv'; // Path to your CSV file

  // Read the CSV file
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      stores.push({
        name: row.name,
        logo: row.logo,
        description: row.description,
        location: row.location,
      });
    })
    .on('end', () => {
      res.status(200).json(stores);
    });
}
