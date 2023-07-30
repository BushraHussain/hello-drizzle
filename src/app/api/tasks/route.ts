import { pgTable, serial, text, timestamp, varchar, boolean} from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { InferModel, eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres'

const db = drizzle(sql);

// Create table variable
const tasks = pgTable('tasks', {
    id: serial('id').primaryKey(),
    taskname: text('taskname'),
    createdat: timestamp('createdat').defaultNow().notNull(),
    isdone: boolean('isdone').notNull()
});

// Define types
type Task = InferModel<typeof tasks>;
type NewTask = InferModel<typeof tasks, 'insert'>;


//------------------- GET -------------------//

export async function GET(req:any) {
    // Get all entries from table
    const allTasks = await db.select().from(tasks);
    return NextResponse.json(allTasks);
}

//------------------- POST -------------------//

export async function POST(request:NextRequest) {
    const req = await request.json();

    // Create a new task
    const newTask: NewTask = {
        taskname: req.taskname,
        isdone: req.isDone,
        createdat: new Date()
    };

    // Insert task to postgres DB via drizzle ORM
    const insertedUsers = await db.insert(tasks).values(newTask).returning();
    
    return NextResponse.json(insertedUsers)
}