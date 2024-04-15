import FullBody from "../assets/FullBody.png";
import UpperBody from "../assets/UpperBody.png";
import FullBodyWorkout from '../assets/FullBodyWorkout.png';
import Caution from "../assets/Caution.svg";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import StyledFooterMenu from "../components/FooterMenu";
import Chart from "../components/Chart";

function UpcomingWorkoutCard({ image, title, date }) {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="flex gap-5 justify-between px-4 py-3.5 mt-4 w-full bg-white rounded-xl shadow-lg">
      <div className="flex gap-2.5 font-medium">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="shrink-0 rounded-full aspect-square w-[50px]"
        />
        <div className="flex flex-col my-auto">
          <div className="text-xs text-zinc-800">{title}</div>
          <div className="mt-3 text-xs text-zinc-500">{date}</div>
        </div>
      </div>
      
      
      <div className="flex flex-col justify-center my-auto">
      <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-500' : 'bg-blue-300'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
      </div>
    </div>
  );
}

UpcomingWorkoutCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

function TrackingPage() {
  const upcomingWorkouts = [
    {
      image: FullBody,
      title: "Full Body Workout",
      date: "Today 3pm",
    },
    {
      image: UpperBody,
      title: "Upper Body Workout",
      date: "4 Feb, 3:30 pm",
    },
  ];

  return (
    <div className="main">
      <header className="flex flex-col px-4 w-full">
        <div className="flex gap-5 font-semibold text-center">
          <div className="flex flex-auto items-start text-base tracking-tight whitespace-nowrap text-neutral-800">
            <Link className="mt-11  w-4 h-4 aspect-square fill-zinc-100" to="/SchedulePage" ><KeyboardArrowLeftOutlinedIcon /></Link>
            <div className="flex flex-col grow shrink-0 self-start text-xl basis-0 text-zinc-800 w-fit">
              <h1 className="mt-10">Workout Tracker</h1>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col px-3 mt-1 w-full">
        
        <Chart className='w-full' />


        <div className=" flex gap-2 py-2 px-2 mt-6 text-sm font-medium rounded-xl bg-gradient-to-r from-[#bac9ff] via-[#e3e3e3] to-[#fffafa] border-opacity-0 text-zinc-800">
          <img
            loading="lazy"
            src={Caution}
            alt=""
            className="shrink-0 my-auto w-5 aspect-square"
          />
          <div className="flex-auto">
            You've burned fewer calories than yesterday. Time to get moving!{" "}
            
          </div>
        </div>
        <section>
          <div className="flex gap-5 mt-14">
            <h2 className="flex-auto text-base font-semibold text-zinc-800">
              Upcoming Workout
            </h2>
            <button className="text-xs font-medium text-zinc-500">See more</button>
          </div>
          {upcomingWorkouts.map((workout, index) => (
            <UpcomingWorkoutCard
              key={index}
              image={workout.image}
              title={workout.title}
              date={workout.date}
            />
          ))}
        </section>
        <section>
          <h2 className="mt-5 text-base font-semibold text-zinc-800">
            What Do You Want to Train
          </h2>
          <div className="flex flex-col pt-4 mt-5 w-full rounded-xl shadow-lg bg-blue-300 bg-opacity-60">
            <div className="flex gap-5 px-px  mx-3.5 text-xs font-medium text-zinc-800">
              <div className="flex flex-col flex-1 self-start">
                <div className="text-xs">Full Body Workout</div>
                <div className="mt-3.5">Lower Body Workout</div>
                <div className="mt-3.5">Arms</div>
                <div className="mt-3.5">Chest</div>
                <div className="mt-3.5">Back</div>
              </div>
              <img
                loading="lazy"
                src={FullBodyWorkout}
                alt="Full body workout"
                className="shrink-0 max-w-full rounded-full aspect-square w-[110px] mb-4"
              />
            </div>
          </div>
        </section>
        <StyledFooterMenu />
      </main>
    </div>
  );
}


export default TrackingPage;