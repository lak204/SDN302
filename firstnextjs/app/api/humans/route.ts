import { NextResponse } from 'next/server';

// Mock data for humans
const humans = [
    { id: 1, name: 'John Doe', age: 30, occupation: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', age: 25, occupation: 'Data Scientist' },
    { id: 3, name: 'Mike Johnson', age: 35, occupation: 'Product Manager' },
    { id: 4, name: 'Sarah Williams', age: 28, occupation: 'UX Designer' },
];

export async function GET() {
    return NextResponse.json(humans);
}
