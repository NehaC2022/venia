import React from 'react'
import FilterColor from './FilterColor'

export default function Filter() {
  return (
    <div className='filter'>
      <h6>Filters</h6>
      <div className='filter-category'>
      <p>Attribute</p>
      <input type="checkbox" id="option1" name="" value="Option"/>
      <label htmlFor="option1"> Option</label><br></br>
      <input type="checkbox" id="option2" name="" value="Option"/>
      <label htmlFor="option2"> Option</label><br></br>
      <input type="checkbox" id="option3" name="" value="Option"/>
      <label htmlFor="option3"> Option</label><br></br>
      <input type="checkbox" id="option4" name="" value="Option"/>
      <label htmlFor="option4"> Option</label><br></br>
      <a href='.#'>Show more</a>
      </div>

      <div className='color'>
        <p>Color</p>
        <FilterColor/>
      </div>

      <div className='filter-category'>
      <p>Attribute</p>
      <input type="checkbox" id="option5" name="" value="Option"/>
      <label htmlFor="option5"> Option</label><br></br>
      <input type="checkbox" id="option6" name="" value="Option"/>
      <label htmlFor="option6"> Option</label><br></br>
      <input type="checkbox" id="option7" name="" value="Option"/>
      <label htmlFor="option7"> Option</label><br></br>
      <input type="checkbox" id="option8" name="" value="Option"/>
      <label htmlFor="option8"> Option</label><br></br>
      <input type="checkbox" id="option9" name="" value="Option"/>
      <label htmlFor="option9"> Option</label><br></br>
      <input type="checkbox" id="option10" name="" value="Option" className='mb-0'/>
      <label htmlFor="option10"> Option</label><br></br>
      </div>

      <div className='filter-category'>
      <p>Attribute</p>
      <input type="checkbox" id="option11" name="" value="Option"/>
      <label htmlFor="option11"> Option</label><br></br>
      <input type="checkbox" id="option12" name="" value="Option"/>
      <label htmlFor="option12"> Option</label><br></br>
      <input type="checkbox" id="option13" name="" value="Option"/>
      <label htmlFor="option13"> Option</label><br></br>
      <input type="checkbox" id="option14" name="" value="Option"/>
      <label htmlFor="option14"> Option</label><br></br>
      <input type="checkbox" id="option15" name="" value="Option"/>
      <label htmlFor="option15"> Option</label><br></br>
      <input type="checkbox" id="option16" name="" value="Option" className='mb-0'/>
      <label htmlFor="option16"> Option</label><br></br>
      </div>
    </div>
  )
}
