import React from 'react'
import '../css/Section7.css'
const Section7 = () => {

    return (
        <>
            <div className="form-con">
                <h2 className='text-center mb-3'>Get in Touch</h2>
                <form>
                    <div class="form-group mb-2">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                    </div>
                    <div class="form-group mb-2">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    <div class="form-group mb-2">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" />
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message"  rows="3"></textarea>
                    </div>
                    <div className='text-center'><button type="submit" class="border-0 mt-2 btn btn-primary">Submit</button></div>
                </form>
            </div>
        </>
    )
}

export default Section7
