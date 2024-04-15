import StyledFooterMenu from "../components/FooterMenu";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Link } from "react-router-dom";
import Events  from "../components/Events";


function SchedulePage() {
  // const workouts = [
  //   { time: "7:30am", name: "Ab Workout" },
  //   { time: "9am", name: "Upperbody Workout" },
  //   { time: "3pm", name: "Lowerbody Workout" },
  // ];

  return (
    <div className="main">
      <header className="flex flex-col px-4 w-full">
        <div className="flex gap-5 font-semibold text-center">
          <div className="flex flex-auto items-start text-base tracking-tight whitespace-nowrap text-neutral-800">
            <Link className="mt-11  w-4 h-4 aspect-square fill-zinc-100" to="/TrackingPage" ><KeyboardArrowLeftOutlinedIcon /></Link>
            <div className="flex flex-col grow shrink-0 self-start text-xl basis-0 text-zinc-800 w-fit">
              <h1 className="mt-10">Workout Schedule</h1>
            </div>
          </div>
        </div>
      </header>
      
      <Events className='z-0' />
      <StyledFooterMenu className="z-10 fixed bottom-0" />
    </div>
  );
}

export default SchedulePage;