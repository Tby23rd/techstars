import { NextRequest, NextResponse } from 'next/server';
import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';

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

export async function GET(request: NextRequest) {
  const products: Product[] = [];
  const filePath = path.resolve('./archive/adidas_usa.csv'); // Ensure the path is correctly resolved

  try {
    await new Promise<void>((resolve, reject) => {
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
            images: row.images ? row.images.split(';') : [], // Only split if row.images is defined
            country: row.country,
            language: row.language,
            average_rating: parseFloat(row.average_rating),
            reviews_count: parseInt(row.reviews_count, 10),
            crawled_at: row.crawled_at,
          });
        })
        .on('end', () => {
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read the CSV file' }, { status: 500 });
  }
}
