import { NextApiRequest, NextApiResponse } from 'next';
import csv from 'csv-parser';
import fs from 'fs';

interface CafeItem {
  DrinkThumb: string;
  Drink: string;
  Price: number;
  Ingredients: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cafeItems: CafeItem[] = [];

  // Path to your CSV file
  const filePath = './archive/Drinks.csv';  // Assuming the 'archive' folder is in the root of your Next.js project

  // Read the CSV file
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      cafeItems.push({
        DrinkThumb: row.DrinkThumb,
        Drink: row.Drink,
        Ingredients: row.Ingredients,
        Price: parseFloat(row.Price),
      });
    })
    .on('end', () => {
      res.status(200).json(cafeItems);
    });
}
