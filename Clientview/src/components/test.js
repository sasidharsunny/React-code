import React, { useState } from 'react';

const data = {
    "Student": [
      { id: '', text: 'Select' },
      { id: 'Internship', text: 'Internship' },
      { id: 'Projects', text: 'Projects' },
      { id: 'Workshop', text: 'Workshop' },
      { id: 'Seminars', text: 'Seminars' }
    ],
    "Organization": [
      { id: '', text: 'Select' },
      { id: 'Internship', text: 'Internship' },
      { id: 'Technical Support', text: 'Technical Support' },
      { id: 'Workshop', text: 'Workshop' },
      { id: 'Seminars', text: 'Seminars' },
      { id: 'JobPosting', text: 'JobPosting' }
    ],
    "Individual": [
      { id: '', text: 'Select' },
      { id: 'Internship', text: 'Internship' },
      { id: 'Technical Support', text: 'Technical Support' },
      { id: 'Workshop', text: 'Workshop' },
      { id: 'Seminars', text: 'Seminars' }
    ]
  }
class Test  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showField: false,
      showField1:false,
      showField2:false,
      dataValue: this.state
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ 
      showField: value === "Organization",
      showField1: value === "Student",
      showField2: value === "Individual",
      dataValue: value
     });
  }

  render() {
    const { dataValue,showField, showField1,showField2} = this.state;
    const options = data[dataValue];
    return (
      <div>
        <label>Are You:</label>
        <select onChange={this.onChange}>
          <option value ="">--Select--</option>
          <option value="Student">Student</option>
          <option value="Organization">Organization</option>
          <option value="Individual">Individual</option>
        </select>
       
        <div class= "row">
        
        { showField ? (
          <div>
            <div> 

        
             <label>Looking For:</label>
           <select>
          {options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
        </select>
        </div>
        <br/><br/>
    
        
        <input type ="text" name="Location" id="Location" placeholder="Location" style={{width:'200px'}}/>
       </div>
    
        ) : null }
  
        </div>
       
        <br/>
       

        { showField1 ? (
          <div> 
             <label>Looking For:</label>
            <select>
          {options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
        </select>
        
              <label>Qualification</label>
              <select>
                    <option value="BSC">BSC</option>
                    <option value="BTech">BTech</option>
                    <option value="MTech">MTech</option>
                    <option value="Degree">Degree</option>
                    <option value="MSC">MSC</option>
              </select>
              <br/>
              <br/>
              <div class="row">
                <div class="col-6">
            <input type ="text" name="University" id="University"placeholder="University" style={{width:'200px'}}/><br/><br/>
            </div>

            <div class="col-6">

            <input type ="text" name="Location" id="Location"placeholder="Location" style={{width:'200px'}}/>
            </div>
            </div>
            </div>
          ) : null } 
          
          { showField2 ? (
          <div> 
             <label >Looking For:</label>
            <select>
          {options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
        </select>
        <br/>
        <br/>
               <div class="row">
                 <div class="col-6">
              <input type ="text" name="Skills" id="Skills"placeholder="Skill Set" style={{width:'200px'}}/><br/><br/>
              </div>

              <div class="col-6">
          
          <input type ="text" name="Location" id="Location"placeholder="Location" style={{width:'200px'}}/>
          </div>
            </div>
            </div>
          ) : null }
       
      </div>
    );
  }
}


export default Test;




























