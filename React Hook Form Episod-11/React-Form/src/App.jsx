import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    // API call ko Simulate krte hay
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the Form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: true,
            minLength: { value: 8, message: "Min length atleast 8" },
          })}
        />
        {errors.firstName && (
          <p className="msg-error">{errors.firstName.message}</p>
        )}
      </div>
      <br />
      <div>
        <label>Middle Name:</label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("middleName")}
        />
      </div>
      <br />
      <div>
        <label>Last Name"</label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last Name is not as per the Rules or regex",
            },
          })}
        />
        {errors.lastName && (
          <p className="msg-error">{errors.lastName.message}</p>
        )}
      </div>
      <input
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting" : "Submit"}
      />
    </form>
  );
}

export default App;
