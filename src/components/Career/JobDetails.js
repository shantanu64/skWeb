// import React from 'react'
import LgFooter from '../Home/Footer'
import RoomIcon from '@mui/icons-material/Room';
import BusinessIcon from '@mui/icons-material/Business';
import BasicTabs from './JobListing';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import newworkimg from '../../assets/newworking.jpg'
// import LgFooter from "./Footer"; 
import { useParams } from 'react-router-dom';
import MainData from './JsonServer.json'
import Show from './show';





const JobDetails = () => {

    let { id } = useParams();


    const resp = MainData.rolesData.find(ele => ele.id == id)
    console.log("edrftgh", resp)
    return (



        // <div


        //     style={{
        //         background:
        //             "linear-gradient(110.31deg, #0E7240 11.4%, #21A74D 108.31% )",
        //     }}
        //     className="mx-6 md:mx-14 lg:h-100 rounded-3xl  md:rounded-br-heroRadius mt-14"
        // >

        //     <div className="" style={{ display: 'flex', flexDirection: 'row' }}>
        //         <div className="w-1/2 flex flex-col gap-4 md:gap-4 justify-evenly py-16 md:py-20 px-6 md:px-24  xl:pl-32">
        //             <div className="mb-14">
        //                 <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-5xl font-sans font-bold text-white">
        //                     Agriculture Operations Manager


        //                 </h1>

        //             </div>
        //             <div className="md:text-sm lg:text-lg xl:text-xl text-white">
        //                 <p className=" mb-16 font-sans">

        //                     We are looking for an Agri Operational Manager who can apply scientific principles to
        //                     improve agricultural practices and maximize crop production.
        //                 </p>
        //             </div>
        //             <div className="flex gap-2 md:gap-8">
        //                 <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnqHxWTJHHGgjcxcPNZBCxdtgsfcGrnsXkjzgXLJtBjQSRLVzdNqZQWsNCRSgtwnHtCdGZ">
        //                     <div className="border-2  border-heroYellow rounded-md p-2 md:p-2 lg:p-3 lg:px-7 bg-heroYellow text-white font-semibold">
        //                         <button>Apply</button>
        //                     </div>
        //                 </a>
        //             </div><br></br>


        //             <div className='flex flex-row items-center'>
        //                 <div className="flex flex-col items-center mr-20">
        //                     <div className="flex items-center">
        //                         <RoomIcon color='black' className="text-3xl  mr-1" style={{ fontSize: '3rem', color: 'white' }} />

        //                         <div className="flex flex-col ml-2">
        //                             <span className="text-xl font-sans text-white font-bold">Location:</span>
        //                             <p className="m-0 font-sans mt-0.8" style={{ color: 'white' }}>Mumbai</p>
        //                         </div>
        //                     </div>
        //                 </div>


        //                 <div className="flex flex-col items-center mr-20">
        //                     <div className="flex items-center">
        //                         <BusinessIcon color='black' className="text-3xl mr-1" style={{ fontSize: '3rem', color: 'white' }} />
        //                         <div className="flex flex-col ml-2">
        //                             <span className="text-xl font-sans text-white font-bold">Department:</span>
        //                             <p className="m-0 font-sans mt-0.8" style={{ color: 'white' }}>CEO Office</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col items-center mr-20">
        //                     <div className="flex items-center">
        //                         <AccessTimeIcon color='white' className="text-3xl mr-1" style={{ fontSize: '3rem', color: 'white' }} />
        //                         <div className="flex flex-col ml-2">
        //                             <span className="text-xl font-sans text-white font-bold">Salary:</span>
        //                             <p className="m-0 font-sans mt-0.8" style={{ color: 'white', whiteSpace: 'nowrap' }}>7-10LPA</p>


        //                         </div>
        //                     </div>
        //                 </div>

        //             </div>
        //         </div>

        //         <div className='"w-1/2"'>
        //             <img
        //                 src={newworkimg}
        //                 alt="Work"
        //                 className=" py-5 mx-10 mt-14 h-96  w-full rounded-4xl md:rounded-br-Radius"
        //             />
        //         </div>

        //     </div>

        //     <div className=' mt-0'>
        //     </div>

        //     <BasicTabs data={resp} />

        // </div>
        <Show data={resp} />


    )
}

export default JobDetails
