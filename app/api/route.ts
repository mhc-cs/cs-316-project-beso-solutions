import {NextResponse} from 'next/server';
import {ProductModel} from './db';

// Gets all language data from the DB
export async function GET(request: Request) {
  const res = await ProductModel.find({});
  return NextResponse.json(res || {});
}