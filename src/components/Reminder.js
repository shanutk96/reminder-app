import React, { useState } from 'react'
import './Reminder.css';


function Reminder() {

  const [reminder, setReminder] = useState([])  // array to store list of reminders
  const [newReminder, setNewReminder] = useState("") // to hold the current input value from a text field.

  const handleInputchange = (event) => { //to store the data of input box using object called event.
    setNewReminder(event.target.value)  // automatically passed to the function whenever an event occurs

  }

  const handleAddReminder = () => {
    if (newReminder.trim()) { //checking newReminder is not just empty space  
      setReminder([...reminder, newReminder]) //merging 2 arays
      setNewReminder('') //changing the NewReminder to blank
    }
  }

  const handleDeleteReminder = (index) => {
    setReminder(reminder.filter((item, itemIndex) => itemIndex !== index)) //filter function to remove the item with given index

  }

  return (
    <body>

      <div className="app-container">
        <h1 className="app-title">Reminder App</h1>
        <div className="input-container">
          <input type="text"
            id="reminder-input"
            value={newReminder} //to blank the input field
            placeholder="Enter your reminder here..."
            onChange={handleInputchange} /> 
          <button className="add-button" onClick={handleAddReminder}>Add Reminder</button>
        </div>
        {
          reminder.length > 0? (
           <ul id="reminder-list" className="reminder-list">
           {
             reminder.map((reminder, index) => (
               <li key={index}>
                 {reminder} 
                 {/* displaying reminders one by one with delete button*/}
                 <button onClick={() => handleDeleteReminder(index)} className='delete-button'>Delete</button>
               </li>
             ))
           }
 
         </ul>)
         :
         <p>No reminders</p>
        }
       
      </div>

    </body>
  )
}

export default Reminder