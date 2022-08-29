import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Detail = () => {

    const [image, setImage] = useState({
        profileImg: `https://d2v9ipibika81v.cloudfront.net/uploads/sites/210/Profile-Icon-350x350.png`
    })


    const fileInput = useRef(null)


    const imgHandler = (e) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
        setImage({ profileImg: reader })
    }
    // console.log(image)

    const imgAdd = (e) => {
        e.preventDefault();
        fileInput.current.click();
    }
    // const {profileImg}=image

    return (
        <div>
            <form className='container'>
                <div>
                    <img src={image} alt="#" id='img' className='img' onClick={imgAdd} />
                </div>
                <input style={{ position: "absolute", top: "250px", left: "450px" }} accept="image/*" type="file" name="file" id="file" ref={fileInput} onChange={imgHandler} />
                <div class="row g-3">
                    <div class="col">
                        <label for="firstname">First Name</label><br />
                        <input type="text" class="form-control" name="firstname" id="firstname"
                            placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col">
                        <label for="lastname">Last Name</label><br />
                        <input type="text" name="lastname" class="form-control" aria-label="Last name" id="lastname"
                            placeholder='Last Name' />
                    </div>
                </div>
                <div className='row g-3'>
                    <div class="col-md-6">
                        <label for="email">Email ID</label><br />
                        <input type="email" name="email" id="email" placeholder='Email Id' class="form-control" />
                    </div>
                    <div class="col-md-6">
                        <label for="phone">Number</label><br />
                        <input type="tel" class="form-control" placeholder='Phone Number' name="phone" id="phone" />
                    </div>
                </div>
                <div>
                    <br />
                    <button type="submit">Submit</button>
                </div>
            </form>
            <NavLink to="/"><button className='logout'>Logout</button></NavLink>
        </div>
    )
}

export default Detail