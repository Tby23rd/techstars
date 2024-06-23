import { NextRequest, NextResponse } from 'next/server';
import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';

interface Store {
  name: string;
  logo: string;
  description: string;
  location: string;
}

export async function GET(request: NextRequest) {
  const stores: Store[] = [];
  const filePath = path.resolve('./archive/stores.csv'); // Ensure the path is correctly resolved

  try {
    await new Promise<void>((resolve, reject) => {
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
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    });
    return NextResponse.json(stores, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read the CSV file' }, { status: 500 });
  }
}
