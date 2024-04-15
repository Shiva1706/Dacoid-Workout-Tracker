import * as React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function GoalOption({ label, checked, onChange }) {
  return (
    <div className="flex gap-5 justify-between px-5 py-3.5 mt-4 rounded-xl bg-zinc-100">
      <div className="my-auto text-xs font-semibold text-zinc-800">{label}</div>
      <div className="flex flex-col justify-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="shrink-0 rounded border border-violet-500 border-solid h-6 w-4"
        />
      </div>
    </div>
  );
}

GoalOption.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

function GoalsPage() {
  const [selectedGoals, setSelectedGoals] = React.useState([]);

  const goalOptions = [
    "Weight Loss",
    "Muscle Gain",
    "Flexibility and Mobility",
    "General Fitness",
    "Event - specific training",
    "Mindfulness and Mental Health",
  ];

  const handleGoalChange = (goal) => {
    const updatedGoals = selectedGoals.includes(goal)
      ? selectedGoals.filter((g) => g !== goal)
      : [...selectedGoals, goal];
    setSelectedGoals(updatedGoals);
  };

  return (
    <div className="main">
      <main>
        <h1 className="self-center mt-11 text-xl font-semibold text-zinc-800">
          What are your goals?
        </h1>
        <section>
          {goalOptions.map((goal) => (
            <GoalOption
              key={goal}
              label={goal}
              checked={selectedGoals.includes(goal)}
              onChange={() => handleGoalChange(goal)}
            />
          ))}
        </section>
        <Link to="/TrackingPage">
        <button
            type="submit"
            className="justify-center w-full items-center px-16 py-3 mt-24 text-base font-semibold text-center text-white rounded-xl bg-gradient-to-r from-[#95BEFF] ] to-[#7B91FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Confirm
        </button></Link>
      </main>
    </div>
  );
}

export default GoalsPage;