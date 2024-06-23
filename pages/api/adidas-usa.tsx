import { NextApiRequest, NextApiResponse } from 'next';
import csv from 'csv-parser';
import fs from 'fs';

interface Product {
  index: number;
  url: string;
  name: string;
  sku: string;
  selling_price: number;
  original_price: number;
  currency: string;
  availability: string;
  color: string;
  category: string;
  source: string;
  source_website: string;
  breadcrumbs: string;
  description: string;
  brand: string;
  images: string[];
  country: string;
  language: string;
  average_rating: number;
  reviews_count: number;
  crawled_at: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const products: Product[] = [];

  const filePath = './archive/adidas_usa.csv'; 
  // Correct if the file is in the public/archive directory

  // Read the CSV file
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
     products.push({
       index: parseInt(row.index, 10),
       url: row.url,
       name: row.name,
       sku: row.sku,
       selling_price: parseFloat(row.selling_price),
       original_price: parseFloat(row.original_price),
       currency: row.currency,
       availability: row.availability,
       color: row.color,
       category: row.category,
       source: row.source,
       source_website: row.source_website,
       breadcrumbs: row.breadcrumbs,
       description: row.description,
       brand: row.brand,
       images: row.images? row.images.split(';') : [], // Only split if row.images is defined
       country: row.country,
       language: row.language,
       average_rating: parseFloat(row.average_rating),
       reviews_count: parseInt(row.reviews_count, 10),
       crawled_at: row.crawled_at,
     });
    })
    .on('end', () => {
      res.status(200).json(products);
    });
}
