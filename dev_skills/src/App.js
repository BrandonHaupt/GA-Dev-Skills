import React, { useState } from "react";

export default function App() {
  const [skills, setSkills] = useState([{ skill: "JavaScript", level: 4 }])

  // Should match the properties of my form (Skill and level)
  const [form, setForm] = useState({
    skill: "", 
    level: "1"
  })

  function addSkill() {
    alert("ADD SKILL CLICKED");
  }

  function handleChange(event) {
    // console.log(event.target) // targets what the function is attached to
    // console.log(event.target.value) // Grabs the value of what is being typed into the box'

    //* takes the new state's name and set it equals to the current event (What we are typing/selecting)
    // newState[event.target.name] = event.target.value

    //*Sets the form to the new state (allows us to type/select what we want)
    //setForm(newState)


    //* You cannot update the form, because React just skips it you need to copy the current state and then update that and push it
    //* Make a copy of the current state
    //* the ... is the spread operator that allows us to take all the pieces and put it in a new state

    //? const newState = {...form}
    //? newState[event.target.name] = event.target.value
    //? setForm(newState)

   
    //console.log(form) // Shows us what the form is doing

    //! This does the same thing as above but in 1 line
    setForm({...form, [event.target.name]:event.target.value})
  }

  return (
    <section>
      <h2>DEV SKILLS</h2>
      <hr />
      {/* maps over the skills state and displays it on the screen with the article and divs */}
      {skills.map((s) => (
        <article key={s.skill}>
          <div>{s.skill}</div> <div>{s.level}</div>
        </article>
      ))}
      <hr />
      <form>
        <label>
          <span>SKILL</span>
          <input name="skill" value={form.skill} onChange={handleChange}/>
        </label>
        <label>
          <span>LEVEL</span>
          <select name="level" value={form.level} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        {/* as long as the button is inside of the Form tag it will be treated as a submit */}
        <button>ADD SKILL</button>
      </form>
    </section>
  );
}