import diary from "../assets/diary.png";
import how from "../assets/how.png";
import take from "../assets/take.png";

const Project = () => {

  return (
    <div className="flex flex-col mt-7 pb-5 border">
        <h1 className="text-center text-3xl">Projects</h1>
      <div className="flex gap-3 p-3">
        <img src={diary} alt="Diary" className="w-1/3" />

        <img src={how} alt="howUdoin" className="w-1/3" />

        <img src={take} alt="TakeMeWithU" className="w-1/3" />
      </div>
      <div className="flex justify-between p-3 items-center">
       <a href="https://mylife-5a9ffa7a8d1c.herokuapp.com/accounts/login/?next=/" className="bg-black text-white rounded-md m-3 p-3">Diary App</a>
       <a href="https://howudoin-fa786f7b4a41.herokuapp.com/auth/login" className="bg-black text-white rounded-md m-3 p-3">HowUdoin?</a>
       <a href="https://take-me-with-you-2ffc640dfa66.herokuapp.com/" className="bg-black text-white rounded-md m-3 p-3">TakeMeWithYou</a>

      </div>
    </div>
  );
};

export default Project;
