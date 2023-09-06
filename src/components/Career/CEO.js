import RoomIcon from '@mui/icons-material/Room';
import Data from './Data'
import Job from './job'
import MainData from './JsonServer.json'
import { NavLink, useNavigate } from "react-router-dom"

function CEO(props) {
  const navigate = useNavigate();

  const navigateToPage = (index) => {

    const resp = MainData.rolesData.find(ele => ele.id == index)
    navigate(`/career/${resp?.name}`);
  }
  return (
    // <div>
    //   <h1 className='text-xl text-black font-bold'>Agriculture Operations Manager</h1>
    //   <div className="flex flex-col">
    //     <div className="flex items-end justify-end">
    //       <NavLink to={'/JobDetails'}>
    //         <button className="mr-4 text-black w-20">More 🡪</button>
    //       </NavLink>
    //     </div>


    //     <p className="text-black">We are looking for
    //       an Agri Operational
    //       Manager who can
    //       apply scientific
    //       principles to<br></br>
    //       improve agricultural
    //       practices and
    //       maximize crop
    //       production.</p> </div>
    //   <div className="flex">
    //     <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
    //       <RoomIcon color='action' className="mr-1"></RoomIcon>
    //       <span className="text-sm text-black font-bold mr-1">OnSite</span>
    //     </div>
    //     <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
    //       <h1 className="text-sm text-black font-bold">⌚Full Time</h1>
    //     </div>
    //   </div>
    //   <br></br>
    //   <div className='m-1'>
    //     <hr className='border border-black' />
    //   </div>

    //   <h1 className='text-xl text-black font-bold'>Agriculture Assistant</h1>
    //   <div className="flex flex-col">
    //     <button className="self-end mr-4 text-black w-20">More🡪</button>
    //     <p className="text-black">We are looking for
    //       an Agriculture
    //       Assistant to
    //       optimize
    //       agricultural
    //       practices, improve
    //       crop <br></br>production,
    //       and ensure
    //       sustainable land
    //       management.</p> </div>
    //   <div className="flex">
    //     <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
    //       <RoomIcon color='action' className="mr-1"></RoomIcon>
    //       <span className="text-sm text-black font-bold mr-1">OnSite</span>
    //     </div>
    //     <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
    //       <h1 className="text-sm text-black font-bold">⌚Full Time</h1>
    //     </div>
    //   </div>
    //   <br></br>
    //   <div className='m-1'>
    //     <hr className='border border-black' />
    //   </div>

    //   <h1 className='text-xl text-black font-bold'>Digital Media Marketer</h1>
    //   <div className="flex flex-col">
    //     <button className="self-end mr-4 text-black w-20">More🡪</button>
    //     <p className="text-black">We are looking for a
    //       Digital Media
    //       Marketer to
    //       develop and
    //       execute digital
    //       marketing<br></br>
    //       strategies that drive
    //       brand awareness,
    //       engagement, and
    //       lead generation.</p> </div>
    //   <div className="flex">
    //     <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
    //       <RoomIcon color='action' className="mr-1"></RoomIcon>
    //       <span className="text-sm text-black font-bold mr-1">OnSite</span>
    //     </div>
    //     <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
    //       <h1 className="text-sm text-black font-bold">⌚Full Time</h1>
    //     </div>
    //   </div>
    //   <br></br>
    //   <div className='m-1'>
    //     <hr className='border border-black' />
    //   </div>

    //   <div className="flex flex-col">
    //     <h1 className='text-xl text-black font-bold'>Entomologist - Pest
    //       and Disease
    //       Management</h1>
    //     <button className="self-end mr-4 text-black w-20">More🡪</button>
    //     <p className="text-black">We are looking for
    //       an Entomologist
    //       specializing in pest
    //       and disease
    //       management to
    //       study <br></br>and develop
    //       strategies for controlling and
    //       mitigating their
    //       impact on
    //       agricultural crops.</p>
    //   </div>
    //   <div className="flex">
    //     <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
    //       <RoomIcon color='action' className="mr-1"></RoomIcon>
    //       <span className="text-sm text-black font-bold mr-1">OnSite</span>
    //     </div>
    //     <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
    //       <h1 className="text-sm text-black font-bold">⌚Full Time</h1>
    //     </div>
    //   </div>
    //   <br></br>
    //   <div className='m-1'>
    //     <hr className='border border-black' />
    //   </div>

    //   <div className="flex flex-col">
    //     <h1 className='text-xl text-black font-bold'>Marketing Manager</h1>
    //     <button className="self-end mr-4 text-black w-20">More🡪</button>
    //     <p className="text-black">We are looking for a
    //       Marketing Manager
    //       to oversee and
    //       execute all aspects
    //       of the company&#39;s <br></br>
    //       brand strategy and
    //       marketing activities
    //       to drive brand
    //       awareness and
    //       growth.</p></div>
    //   <div className="flex">
    //     <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
    //       <RoomIcon color='action' className="mr-1"></RoomIcon>
    //       <span className="text-sm text-black font-bold mr-1">OnSite</span>
    //     </div>
    //     <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
    //       <h1 className="text-sm text-black font-bold">⌚Full Time</h1>
    //     </div>
    //   </div>
    //   <br></br>
    //   <div className='m-1'>
    //     <hr className='border border-black' />
    //   </div>

    //   <div className="flex flex-col">
    //     <h1 className='text-xl text-black font-bold'>Strategic Partnerships
    //       Manager</h1>
    //     <button className="self-end mr-4 text-black w-20">More🡪</button>
    //     <p className="text-black">We are looking for a
    //       Manager - Strategic
    //       Partnerships to
    //       drive growth and
    //       expansion by<br></br>
    //       identifying and
    //       pursuing new
    //       business
    //       opportunities to
    //       increase revenue
    //       and market share.</p></div>
    //   <div className="flex">
    //     <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
    //       <RoomIcon color='action' className="mr-1"></RoomIcon>
    //       <span className="text-sm text-black font-bold mr-1">OnSite</span>
    //     </div>
    //     <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
    //       <h1 className="text-sm text-black font-bold">⌚Full Time</h1>
    //     </div>
    //   </div>
    //   <br></br>
    //   <div className='m-1'>
    //     <hr className='border border-black' />
    //   </div>

    //   <div className="flex flex-col">
    //     <h1 className='text-xl text-black font-bold'>Business Analyst</h1>
    //     <button className="self-end mr-4 text-black w-20">More🡪</button>
    //     <p className="text-black">We are looking for a
    //       Business Analyst to
    //       analyze business
    //       processes, identify
    //       opportunities for<br></br>
    //       improvement, and
    //       provide insights for
    //       strategic decision-
    //       making.</p></div>
    //   <div className="flex">
    //     <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
    //       <RoomIcon color='action' className="mr-1"></RoomIcon>
    //       <span className="text-sm text-black font-bold mr-1">OnSite</span>
    //     </div>
    //     <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
    //       <h1 className="text-sm text-black font-bold">⌚Full Time</h1>
    //     </div>
    //   </div>
    //   <br></br>
    //   <div className='m-1'>
    //     <hr className='border border-black' />
    //   </div>

    // </div>
    <div>
      <h1 className='text-xl text-black ml-3 font-bold'>Agriculture Operations Manager</h1>
      <div className="flex flex-col">
        <div className="flex items-end justify-end">
          {/* <NavLink to={'/JobDetails'}> */}
          {/* <button className="mr-4 text-black w-20">More 🡪</button> */}

          <button className="self-end mr-4 text-black w-20" onClick={() => {
            console.log("sdrfgtrhytueyrt")
            navigateToPage(1)
          }}>More🡪</button>
          {/* </NavLink> */}
        </div>


        <p className="text-black ml-3">We are looking for
          an Agri Operational
          Manager who can
          apply scientific
          principles to<br></br>
          improve agricultural
          practices and
          maximize crop
          production.</p> </div>
      <div className="flex ml-2">
        <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
          <RoomIcon color='action' className="mr-1"></RoomIcon>
          <span className="text-sm text-black font-bold mr-1">OnSite</span>
        </div>
        <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
          <h1 className="text-sm text-black font-bold mt-1">⌚Full Time</h1>
        </div>
        <div className="flex-grow"></div>
        <div className="mt-2">
          <a href="/pdf/Agri Operational_JD" download="Agri_Operational_JD.pdf">
            <button className="mr-4 rounded-lg border-2 bg-green-700 text-white p-2 ml-4">Download JD</button>
          </a>
        </div>
      </div>
      <br></br>
      <div className='m-1'>
        <hr className='border border-black' />
      </div>

      <h1 className='text-xl ml-3 text-black font-bold'>Agriculture Assistant</h1>
      <div className="flex flex-col">
        <button className="self-end mr-4 text-black w-20" onClick={() => navigateToPage(4)}>More🡪</button>
        <p className="text-black ml-3">We are looking for
          an Agriculture
          Assistant to
          optimize
          agricultural
          practices, improve
          crop <br></br>production,
          and ensure
          sustainable land
          management.</p> </div>
      <div className="flex ml-2">
        <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
          <RoomIcon color='action' className="mr-1"></RoomIcon>
          <span className="text-sm text-black font-bold mr-1">OnSite</span>
        </div>
        <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
          <h1 className="text-sm text-black font-bold mt-1">⌚Full Time</h1>
        </div>
        <div className="flex-grow"></div>
        <div className="mt-2">
          <a href="/pdf/Agriculture Assistant_JD.pdf" download="Agriculture_Assistant_JD.pdf">
            <button className="mr-4 rounded-lg border-2 bg-green-700 text-white p-2 ml-4">Download JD</button>
          </a>
        </div>
      </div>
      <br></br>
      <div className='m-1'>
        <hr className='border border-black' />
      </div>

      <h1 className='text-xl ml-3 text-black font-bold'>Digital Media Marketer</h1>
      <div className="flex flex-col">
        <div className="flex items-end justify-end">
          {/* <NavLink to={'/DigitalMediaMarketer'}> */}
          <button className="self-end mr-4 text-black w-20" onClick={() => navigateToPage(5)}>More🡪</button>
          {/* </NavLink> */}
        </div>
        <p className="text-black ml-3">We are looking for a
          Digital Media
          Marketer to
          develop and
          execute digital
          marketing<br></br>
          strategies that drive
          brand awareness,
          engagement, and
          lead generation.</p> </div>
      <div className="flex ml-2">
        <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
          <RoomIcon color='action' className="mr-1"></RoomIcon>
          <span className="text-sm text-black font-bold mr-1">OnSite</span>
        </div>
        <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
          <h1 className="text-sm text-black font-bold mt-1">⌚Full Time</h1>
        </div>
        <div className="flex-grow"></div>
        <div className="mt-2">
          <a href="/pdf/Digital Media Marketer_JD.pdf" download="Digital Media_Marketer_JD.pdf">
            <button className="mr-4 rounded-lg border-2 bg-green-700 text-white p-2 ml-4">Download JD</button>
          </a>
        </div>
      </div>
      <br></br>
      <div className='m-1'>
        <hr className='border border-black' />
      </div>

      <div className="flex flex-col">
        <h1 className='text-xl ml-3 text-black font-bold'>Entomologist - Pest
          and Disease
          Management</h1>
        <div className="flex items-end justify-end">
          {/* <NavLink to={'/Entomologist'}> */}
          <button className="self-end mr-4 text-black w-20" onClick={() => navigateToPage(6)}>More🡪</button>
          {/* </NavLink> */}
        </div>
        <p className="text-black ml-3">We are looking for
          an Entomologist
          specializing in pest
          and disease
          management to
          study <br></br>and develop
          strategies for controlling and
          mitigating their
          impact on
          agricultural crops.</p>
      </div>
      <div className="flex ml-2">
        <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
          <RoomIcon color='action' className="mr-1"></RoomIcon>
          <span className="text-sm text-black font-bold mr-1">OnSite</span>
        </div>
        <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
          <h1 className="text-sm text-black font-bold mt-1">⌚Full Time</h1>
        </div>
        <div className="flex-grow"></div>
        <div className="mt-2">
          <a href="/pdf/Entomologist _JD.pdf" download="Entomologist__JD.pdf">
            <button className="mr-4 rounded-lg border-2 bg-green-700 text-white p-2 ml-4">Download JD</button>
          </a>
        </div>
      </div>
      <br></br>
      <div className='m-1'>
        <hr className='border border-black' />
      </div>

      <div className="flex flex-col">
        <h1 className='text-xl ml-3 text-black font-bold'>Marketing Manager</h1>
        <div className="flex items-end justify-end">
          <button className="self-end mr-4 text-black w-20" onClick={() => navigateToPage(7)}>More🡪</button>
        </div>
        <p className="text-black ml-3">We are looking for a
          Marketing Manager
          to oversee and
          execute all aspects
          of the company&#39;s <br></br>
          brand strategy and
          marketing activities
          to drive brand
          awareness and
          growth.</p></div>
      <div className="flex ml-2">
        <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
          <RoomIcon color='action' className="mr-1"></RoomIcon>
          <span className="text-sm text-black font-bold mr-1">OnSite</span>
        </div>
        <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
          <h1 className="text-sm text-black font-bold mt-1">⌚Full Time</h1>
        </div>
        <div className="flex-grow"></div>
        <div className="mt-2">
          <a href="/pdf/Marketing Manager_JD 2.pdf" download="Marketing_Manager_JD_2.pdf">
            <button className="mr-4 rounded-lg border-2 bg-green-700 text-white p-2 ml-4">Download JD</button>
          </a>
        </div>
      </div>
      <br></br>
      <div className='m-1'>
        <hr className='border border-black' />
      </div>

      <div className="flex flex-col">
        <h1 className='text-xl ml-3 text-black font-bold'>Strategic Partnerships
          Manager</h1>
        <div className="flex items-end justify-end">
          <button className="self-end mr-4 text-black w-20" onClick={() => navigateToPage(8)}>More🡪</button>
        </div>
        <p className="text-black ml-3">We are looking for a
          Manager - Strategic
          Partnerships to
          drive growth and
          expansion by<br></br>
          identifying and
          pursuing new
          business
          opportunities to
          increase revenue
          and market share.</p></div>
      <div className="flex ml-2">
        <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
          <RoomIcon color='action' className="mr-1"></RoomIcon>
          <span className="text-sm text-black font-bold mr-1">OnSite</span>
        </div>
        <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
          <h1 className="text-sm text-black font-bold mt-1">⌚Full Time</h1>
        </div>
        <div className="flex-grow"></div>
        <div className="mt-2">
          <a href="/pdf/Strategic Partnerships _JD.pdf" download="Strategic_Partnerships__JD.pdf">
            <button className="mr-4 rounded-lg border-2 bg-green-700 text-white p-2 ml-4">Download JD</button>
          </a>
        </div>
      </div>
      <br></br>
      <div className='m-1'>
        <hr className='border border-black' />
      </div>

      <div className="flex flex-col">
        <h1 className='text-xl ml-3 text-black font-bold'>Business Analyst</h1>
        <div className="flex items-end justify-end">
          <button className="self-end mr-4 text-black w-20" onClick={() => navigateToPage(9)}>More🡪</button>
        </div>
        <p className="text-black ml-3">We are looking for a
          Business Analyst to
          analyze business
          processes, identify
          opportunities for<br></br>
          improvement, and
          provide insights for
          strategic decision-
          making.</p></div>
      <div className="flex ml-2">
        <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
          <RoomIcon color='action' className="mr-1"></RoomIcon>
          <span className="text-sm text-black font-bold mr-1">OnSite</span>
        </div>
        <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
          <h1 className="text-sm text-black font-bold mt-1">⌚Full Time</h1>
        </div>
        <div className="flex-grow"></div>
        <div className="mt-2">
          <a href="/pdf/JD_Business Analyst.pdf" download="JD_Business_Analyst.pdf">
            <button className="mr-4 rounded-lg border-2 bg-green-700 text-white p-2 ml-4">Download JD</button>
          </a>
        </div>




      </div>

    </div>

    // <>
    // {
    //   Data.map((user)=>{
    //     console.log(user)
    //    return <Job {...user} />
    //   })
    // }
    // </>
  )
}

export default CEO