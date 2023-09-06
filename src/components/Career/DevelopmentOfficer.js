import RoomIcon from '@mui/icons-material/Room';
import BusinessIcon from '@mui/icons-material/Business';
import BasicTabs from './JobListing';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Show from './show';
import { useParams } from 'react-router-dom';
import MainData from './JsonServer.json'

const DevelopmentOfficer = () => {
    let { id } = useParams();


    const resp = MainData.rolesData.find(ele => ele.id == id)
    return (

        // <div


        //     style={{
        //         background:
        //             "linear-gradient(110.31deg, #0E7240 11.4%, #21A74D 108.31% )",
        //     }}
        //     className="mx-6 md:mx-14 lg:h-100 rounded-3xl  md:rounded-br-heroRadius mt-10"
        // >
        //     <div className="w-1/2 flex">
        //         <div className="flex flex-col gap-4 md:gap-4 justify-evenly py-16 md:py-20 px-6 md:px-24 xl:pl-32">
        //             <div className="mb-14">
        //                 <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-5xl font-bold text-white">
        //                     Development Officer


        //                 </h1>

        //             </div>
        //             <div className="md:text-sm lg:text-lg xl:text-xl text-white">
        //                 <p className=" mb-16">

        //                     We are looking for a
        //                     Development
        //                     Officer to
        //                     coordinate and
        //                     facilitate
        //                     agricultural
        //                     development
        //                     initiatives to
        //                     enhance
        //                     productivity and
        //                     foster sustainable
        //                     practices.
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
        //                         <RoomIcon color='black' className="text-3xl mr-1" style={{ fontSize: '3rem', color: 'white' }} />

        //                         <div className="flex flex-col ml-2">
        //                             <span className="text-xl text-white font-bold">Location:</span>
        //                             <p className="m-0 mt-0.8" style={{ color: 'white' }}>Maharashtra</p>
        //                         </div>
        //                     </div>
        //                 </div>


        //                 <div className="flex flex-col items-center mr-20">
        //                     <div className="flex items-center">
        //                         <BusinessIcon color='black' className="text-3xl mr-1" style={{ fontSize: '3rem', color: 'white' }} />
        //                         <div className="flex flex-col ml-2">
        //                             <span className="text-xl text-white font-bold">Department:</span>
        //                             <p className="m-0 mt-0.8" style={{ color: 'white' }}>Agricultural</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col items-center mr-20">
        //                     <div className="flex items-center">
        //                         <AccessTimeIcon color='white' className="text-3xl mr-1" style={{ fontSize: '3rem', color: 'white' }} />
        //                         <div className="flex flex-col ml-2">
        //                             <span className="text-xl text-white font-bold">Salary:</span>
        //                             <p className="m-0 mt-0.8" style={{ color: 'white', whiteSpace: 'nowrap' }}>1.8-2.4 LPA</p>


        //                         </div>
        //                     </div>
        //                 </div>

        //             </div>
        //             {/* <div
        //         style={{
        //             background:
        //                 "linear-gradient(110.31deg, #0E7240 11.4%, #21A74D 108.31% )",
        //         }}
        //         className="mx-6 md:mx-14 lg:h-100 rounded-3xl md:rounded-br-heroRadius mt-10 relative"
        //     >
        //         <div className="w-1/2 flex">
        //             {/* ... Other content ... */}











        //         </div>

        //     </div>
        //     <div className=' mt-36'>
        //     </div>

        //     <BasicTabs />
        // </div>
        <Show data={resp} />

    )
}
export default DevelopmentOfficer