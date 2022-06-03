import React from 'react'
import './Forms.css'
import Map from './Map'

const Form = () => {
return (
    <div className='forms row'>
        <p style={{color: 'darkblue', textAlign: 'center'}}>Let's calculate <span style={{fontWeight: 'bold', color: 'darkblue'}}>distance</span> from Google maps</p>
        <form className='col-md-6'>
            <div className="div1">
                <div className="form-group">
                    <label for="">Origin</label>
                    <input type="text" class="form-control" placeholder="Enter Origin"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Destination</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
            </div>
            <div className="div2">
                <button type="submit" class="btn btn-primary">Calculate</button>
            </div>
        </form>

        <div className='col-md-6 map'>
            <Map/>
        </div> 
         
        <div className='dist'>
        <div  className="display">
            <p><span className='text'>Distance</span><span className='distance'>0 Kms</span></p>
        </div>
        <small class="form-text text-muted">The distance between <span style={{fontWeight: 'bold'}}>{}</span> and <span style={{fontWeight: 'bold'}}>{}</span> is <span style={{fontWeight: 'bold'}}>{}</span> kms.</small>
        </div>
    </div>
)
}

export default Form