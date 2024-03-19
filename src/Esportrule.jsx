import React from 'react';
import POSTER from './POSTER.png'

const Esportrule = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white p-8 rounded-lg shadow-lg">
      <div className="md:w-1/3 mr-6 mb-6 md:mb-0">
        <img src={POSTER} alt="Event Poster" className="w-full rounded-lg" />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>Esports Event Rules & Regulations</h2>
        <ul className="list-disc pl-6 mb-4" style={{ fontSize: '1.3rem', fontFamily: 'Arial, sans-serif' }}>
          <li className="mb-2 font">Respect all players and event staff.</li>
          <li className="mb-2">Cheating or exploiting game mechanics is strictly prohibited.</li>
          <li className="mb-2">Follow the tournament schedule and be punctual for matches.</li>
          <li className="mb-2">Teams must submit their rosters and equipment configurations before the event starts.</li>
          <li className="mb-2">Any form of harassment or inappropriate behavior will result in immediate disqualification.</li>
        </ul>
        <p className="text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
          By participating in this event, you agree to abide by these rules and accept the decisions made by the event organizers.
        </p>
        <p className="text-lg mt-6" style={{ fontFamily: 'Arial, sans-serif' }}>
          <span className="font-bold">Date & Time:</span> <span className="text-yellow-400">3 April 2024, 10:00 AM onwards</span><br />
          <span className="font-bold">Venue:</span> <span className="text-yellow-400">MCA Department kk wagh college,Nashik</span> <br />
          <span className="font-bold">Entry Fees:</span> <span className="text-yellow-400">200 Rs per team</span>
          <br />

          <span className="font-bold">Slots:</span> <span className="text-yellow-500">only 25 teams slots are available</span> 
          <br />

        <span className="text-yellow-400">for more inquiries please contact us...</span>

          



        </p>
      </div>
    </div>
  );
};

export default Esportrule;
