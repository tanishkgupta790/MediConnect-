import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("");
  const [fees, setFees] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [about, setAbout] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Please upload a doctor image.");
      }
      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName("");
        setEmail("");
        setPassword("");
        setExperience("");
        setFees("");
        setSpeciality("");
        setDegree("");
        setAddress1("");
        setAddress2("");
        setAbout("");
      }
    } catch (err) {
      if (err.response?.data?.message?.includes("E11000 duplicate key error")) {
        toast.error(`A doctor with this email: "${email}" already exists!`);
      } else {
        toast.error(
          err.response?.data?.message ||
            "Something went wrong, please try again."
        );
      }
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p>Upload Doctor picture</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor name</p>
              <input
                className="border rounded px-3 py-2 border-gray-300"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor email</p>
              <input
                className="border rounded px-3 py-2 border-gray-300"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor password</p>
              <input
                className="border rounded px-3 py-2 border-gray-300"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                className="border rounded px-3 py-2 border-gray-300"
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                required
              >
                <option value="">Select years</option>
                <option value="1 year">1 year</option>
                <option value="2 years">2 years</option>
                <option value="3 years">3 years</option>
                <option value="4 years">4 years</option>
                <option value="5 years">5 years</option>
                <option value="6 years">6 years</option>
                <option value="7 years">7 years</option>
                <option value="8 years">8 years</option>
                <option value="9 years">9 years</option>
                <option value="10 years">10 years</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Fee</p>
              <input
                className="border rounded px-3 py-2 border-gray-300"
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                type="number"
                placeholder="Fee"
                required
              />
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                className="border rounded px-3 py-2 border-gray-300"
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                required
              >
                <option value="">Select speciality</option>
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input
                className="border rounded px-3 py-2 border-gray-300"
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                type="text"
                placeholder="Education"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                className="border rounded px-3 py-2 border-gray-300"
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                type="text"
                placeholder="Address line 1"
                required
              />
              <input
                className="border rounded px-3 py-2 border-gray-300"
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                type="text"
                placeholder="Address line 2"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="mt-4 mb-2 text-gray-600">About doctor</p>
          <textarea
            className="w-full border rounded px-4 pt-2 border-gray-300"
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            placeholder="Write about doctor"
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-10 py-3 mt-4 rounded-full"
        >
          Add doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
