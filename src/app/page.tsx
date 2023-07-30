"use client"
import Alert from '@/components/alert';
import { useState } from 'react';
/**
 * @notice Insert input data to "postgres DB" via "Drizzle ORM" using tasks API
*/
export default function Home() {
  const [taskname, setTaskname] = useState('');
  const [isDone, setIsDone] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
  
    // Connecting to inputproject API for data inserting into DB
    try {
      const response = await fetch('/api/tasks', {
        method: "POST",
        body: JSON.stringify({
          taskname: taskname,
          isDone: isDone
        }),
        headers: {
          'Content-Type': 'application/json',
        }
        
      });

      if (response.ok) {
        // Data inserted successfully
        // You can redirect the user to a success page or display a success message
        setIsAdded(true);
        // alert("Task added successfully");
        
      } else {
        // Handle error (e.g., display error message to the user)
      }
    } catch (error) {
      console.log("Error :( ", error);
      
      // Handle network or server error
    }


  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        {/* Form fields and input elements */}
        <input
          type="text"
          value={taskname}
          onChange={(e) => setTaskname(e.target.value)}
          className=' border border-red-600'
          // ...
        /> <br/><br/>

        <input
          type="text"
          value={isDone}
          onChange={(e) => setIsDone(e.target.value)}
          className=' border border-red-600'
          // ...
        /><br/><br/>

        {/* Click button to insert data to vercel postgres DB via drizzle ORM using "tasks API" */}
        <button type="submit" className=' bg-red-600 w-20 text-white'>Submit</button><br/><br/>

        {/* {isAdded ?<div>DATA is added huhu</div>:<div>SORRY :(</div>} */}
        {isAdded ?<div><Alert msg="New task is added !!" /></div>:<div></div>}


        <div>Task name: {taskname}</div>
        <div>Is done ?: {isDone}</div>
      </form>
    </div>
  )
}
