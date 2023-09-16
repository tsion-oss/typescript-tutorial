import { useState, ChangeEvent, FormEvent } from "react"


interface Meal {
  date: string;
  breakfast: string;
  lunch: string;
  dinner: string;
}

export default function Main() {

const initialMeal = {
  date: '',
  breakfast: '',
  lunch: '',
  dinner: '',

};

const [meal, setMeal] = useState<Meal>(initialMeal)

console.log(meal)

const handleSubmit = (e: FormEvent) => {
 e.preventDefault()

 console.log("Meal Submitted:", meal);
}
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  console.log(value)

  setMeal({ ...meal, [name]: value})
}

 return(
   <div>
     <header>

     </header>
     
     <div className="bg-blue-500 p-4 text-white">
       <h1 className="text-3xl font-bold underline">Add new meal plan</h1>

      <form onSubmit={handleSubmit}
        
            >
            <label>Breakfast</label>
            <input type="text"
                   onChange={handleChange}
                   name='breakfast'
                   value={meal.breakfast}
                   />

            <label>Lunch</label>
            <input onChange={handleChange}
                   name='lunch'
                   value={meal.lunch}
                   type="text"/>

            <label>Dinner</label>
            <input onChange={handleChange}
                   name='dinner'
                   value={meal.dinner}
                   type="text"/>
            <input type="date"
                   value={meal.date}
                   onChange={handleChange}
                   name="date"/>

            <input type="submit" value='submit'/>

       </form>


     </div>
   </div>
 )
}