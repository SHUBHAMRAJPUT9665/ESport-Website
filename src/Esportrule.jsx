import React from 'react';
import POSTER from './POSTER.png'
import QR from './QR.png'

const Esportrule = () => {

  return (
    <div className="flex flex-col md:flex-row bg-black text-white p-8 rounded-lg shadow-lg">
      <div className="md:w-1/3 mr-6 mb-6 md:mb-0">
        <img src={QR} alt="Event Poster" className="w-2/3 rounded-lg" />
        <h1 className='font-bold'>Pay Using Above QR Code </h1>
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
          <span className="font-bold">Date & Time:</span> <span className="text-yellow-400">5 April 2024, 10:00 AM onwards</span><br />
          <span className="font-bold">Venue:</span> <span className="text-yellow-400">MCA Department kk wagh college,Nashik</span> <br />
          <span className="font-bold">Entry Fees:</span> <span className="text-yellow-400">200 Rs per team</span>
          <br />
          <span className="font-bold">Slots:</span> <span className="text-yellow-500">only 25 teams slots are available</span> 
          <br />
          <span className="text-yellow-400">for more inquiries please contact us...</span>
        </p>
        <a href=""><button  className="mt-4 flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          <img src='data:image/png;base64,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' alt="PDF Icon" className="w-6 h-6 mr-2" />
           Refer this file for Rules & Points table
        </button></a>
      </div>
    </div>
  );
};

export default Esportrule;
