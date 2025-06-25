import { useState } from "react"

export const FormReg = () => {
    const [firstName, setFirstName] = useState("")
    const [lasttName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [contactInfo, setContactInfo] = useState("")
    const [subjects, setSubjects] = useState()
    return (
        <div className=" w-full h-screen py-5 text-center">
            <form action="" className=" space-y-4">
                <div className="">
                <input type="text" className="border" placeholder="first name"/>
                </div>

                <div>
                <input type="text" className="border" placeholder="last name"/>
                </div>

                <div>
                <input type="email" className="border" placeholder="email"/>
                </div>

                <div>
                <input type="number" className="border" placeholder="contact info"/>
                </div>

                <div className="">
                <label className="block gap-2">Your best subject</label>
                <input type="checkbox" /> Maths
                <input type="checkbox" /> English
                <input type="checkbox" /> Science
                </div>

                <div>
                <label htmlFor="" className="block">Upload Resume</label>
                <input type="file" className="border "/>
                </div>

                <div>
                <input type="text" placeholder="enter url" className="border"/>
                </div>

                <div className="">
                <label className="block">Select Your Choice</label>
                <select name="" id="" className="border">
                    <option value="">Average</option>
                    <option value="">Good</option>
                    <option value="">Outstanding</option>
                </select>
                </div>

                <div className="">
                <label htmlFor="" className="block">About</label>
                <textarea name="" id="" className="p-2 border"></textarea>
                </div>

                <div className="">
                    <button className="">reset</button>
                    <button className="">submit</button>
                </div>
            </form>
        </div>
    )
}