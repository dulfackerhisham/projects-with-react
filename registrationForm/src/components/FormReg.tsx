import { useState } from "react";

export const FormReg = () => {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [subjects, setSubjects] = useState({
    english: false,
    maths: true,
    physics: false,
  });
  const [about, setAbout] = useState("");
  const [url, setUrl] = useState("");
  const [resume, setResume] = useState("");

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContactInfo("");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setAbout("");
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lasttName,
      email,
      contactInfo,
      subjects,
      about,
      resume,
      url
    );
  };
  return (
    <div className=" w-full h-screen py-5 text-center">
      <form action="" className=" space-y-4">
        <div className="">
          <input
            type="text"
            className="border"
            placeholder="first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            className="border"
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            className="border"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            className="border"
            placeholder="contact info"
            onChange={(e) => setContactInfo(e.target.value)}
          />
        </div>

        <div className="">
          <label className="block gap-2">Your best subject</label>
          <input
            type="checkbox"
            checked={subjects.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          />{" "}
          Maths
          <input
            type="checkbox"
            checked={subjects.english === true}
            onChange={(e) => handleSubjectChange("english")}
          />{" "}
          English
          <input
            type="checkbox"
            checked={subjects.physics === true}
            onChange={(e) => handleSubjectChange("physics")}
          />{" "}
          Physics
        </div>

        <div>
          <label htmlFor="" className="block">
            Upload Resume
          </label>
          <input type="file" className="border " onChange={(e) =>
                            setResume(e.target.files[0])
                        }/>
        </div>

        <div>
          <input
            type="text"
            placeholder="enter url"
            className="border"
            onChange={(e) => setUrl(e.target.value)}
          />
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
          <label htmlFor="" className="block">
            About
          </label>
          <textarea
            name="about"
            cols={30}
            rows={4}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About Your Self"
            className="p-2 border"
          ></textarea>
        </div>

        <div className="">
          <button type="reset" onClick={() => handleReset()} className="">
            reset
          </button>
          <button type="submit" onClick={(e) => handleSubmit(e)} className="">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
