import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function InputField({ label, type, placeholder }) {
  return (
    <div className="justify-center items-start px-5 py-5 mt-6 text-xs font-semibold rounded-xl bg-zinc-100 text-zinc-500">
      <label htmlFor={placeholder} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={placeholder}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
}

function Checkbox({ label }) {
  return (
    <div className="flex gap-2 mt-6">
      <div className="flex flex-col justify-center">
        <input
          type="checkbox"
          id={label}
          className="shrink-0 rounded border border-solid border-zinc-500 h-[22px] w-[22px]"
        />
      </div>
      <label
        htmlFor="terms"
        className="flex-auto my-auto text-xs font-semibold leading-5 text-zinc-800"
      >
        <span className="font-medium">By proceeding, I agree to all </span>
        <a href="#" className="font-medium text-indigo-300 underline">
          T&C
        </a>
        <span className="font-medium"> and </span>
        <a href="#" className="font-medium text-indigo-300 underline">
          Privacy Policy
        </a>
      </label>
    </div>
  );
}

function PasswordReset() {
  return (
    <a href="/LoginPage" className="text-gray-100 text-sm-2 underline">
      Forgot your password?
    </a>
  );
}
function SocialButton({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="shrink-0 w-11 p-2 rounded-lg border border-solid aspect-square border-zinc-500 cursor-pointer"
    />
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};

SocialButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function SignUp(data) {
  const dataID = data.id;

  const socialButtons = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRggzc9FcuZVIj2AE-1q3JXTp-HaYoXJBXXITWd-qwNg&s",
      alt: "Google login",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBB0P0LJuzrxF9dknX0hXp3gp_BieaohGWJv5PqICyRw&s",
      alt: "Facebook login",
    },
  ];
  return (
    <main className="main">
      <h1 className="mt-11 text-xl font-semibold text-zinc-800">
        {data.title}
      </h1>
      <form>
        {data.inputFields.map((field) => (
          <InputField
            key={field.label}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}

        <div>
          {dataID == "signup" ? <Checkbox label="terms" /> : <PasswordReset />}
        </div>

        <Link to={"/TrackingPage"}>
          <button
            type="submit"
            className="justify-center w-full items-center px-16 py-3 mt-24 text-base font-semibold text-center text-white rounded-xl bg-gradient-to-r from-[#95BEFF] ] to-[#7B91FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {data.btn}
          </button>
        </Link>
      </form>
      <div className="flex gap-2.5 mt-7 text-xs font-medium whitespace-nowrap text-zinc-800">
        <hr className="shrink-0 my-auto h-px border-t border-solid bg-zinc-500 border-zinc-500 w-[155px]" />
        <div className="flex-auto">Or</div>
        <hr className="shrink-0 my-auto h-px border-t border-solid bg-zinc-500 border-zinc-500 w-[155px]" />
      </div>
      <div className="flex gap-5 self-center mt-7">
        {socialButtons.map((button, index) => (
          <SocialButton key={index} src={button.src} alt={button.alt} />
        ))}
      </div>
      <div className="self-center mt-5 text-xs font-medium text-zinc-800">
        <span>{data.linkText} </span>
        <a href="/LoginPage" className="text-indigo-400 underline">
          {data.linkBtn}
        </a>
      </div>
    </main>
  );
}

export default SignUp;
