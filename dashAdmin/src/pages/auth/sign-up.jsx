import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Typography, Checkbox } from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";

export function SignUp() {
const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agreeTerms: false
});
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
    toast.error("You must agree to the terms and conditions");
    return;
    }

    setLoading(true);

    try {
    const response = await axios.post("http://localhost:5000/auth/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password
    });

    toast.success("Registration successful!");
    navigate("/auth/sign-in");
    } catch (error) {
    toast.error(error.response?.data?.message || "Registration failed");
    } finally {
    setLoading(false);
    }
};

return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
          alt="Decoration"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Join Us Today</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Enter your email and password to register.
          </Typography>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Username
            </Typography>
            <Input
              name="username"
              size="lg"
              placeholder="Your username"
              value={formData.username}
              onChange={handleChange}
              required
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              name="email"
              type="email"
              size="lg"
              placeholder="name@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              name="password"
              type="password"
              size="lg"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Checkbox
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          <Button 
            type="submit" 
            className="mt-6" 
            fullWidth
            disabled={loading}
          >
            {loading ? "Registering..." : "Register Now"}
          </Button>

          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign in</Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;