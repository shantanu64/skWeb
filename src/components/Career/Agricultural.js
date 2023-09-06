import React from 'react'
import RoomIcon from '@mui/icons-material/Room';
// import { NavLink } from 'react-router-dom';
import { NavLink, useNavigate } from "react-router-dom"
import MainData from './JsonServer.json'

function Agricultural(props) {
    const navigate = useNavigate();

    const navigateToPage = (index) => {
        const resp = MainData.rolesData.find(ele => ele.id == index)

        navigate(`/career/${resp?.name}`);
    }

    return (
        // <div>

        //     <h1 className='text-xl text-black font-bold'>
        //         Cluster Officer
        //     </h1>
        //     <div className="flex flex-col mb-4">
        //     <button className="self-end mr-4 text-black w-20">More🡪</button>
        //         <p className="text-black">
        //             We are looking for a Cluster Officer to coordinate agricultural development initiatives in a specific <br></br>geographic
        //             area to enhance
        //             productivity and
        //             foster sustainable
        //             practices.
        //         </p> </div>


        //     <div className="flex">
        //         <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
        //             <RoomIcon color='action' className="mr-1"></RoomIcon>
        //             <span className="text-sm text-black font-bold mr-1">OnSite</span>
        //         </div>
        //         <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
        //             <h1 className="text-sm text-black font-bold">⌚Full Time</h1>
        //         </div>

        //         </div>

        //     <br></br>
        //     <div className='m-1'>
        //         <hr className='border border-black' />
        //     </div>

        //     <h1 className='text-xl text-black font-bold'>Development Officer</h1>
        //     <div className="flex flex-col  mb-4">
        //         <button className="self-end mr-4 text-black w-20">More🡪</button>

        //         <p className="text-black">We are looking for a
        //             Development
        //             Officer to
        //             coordinate and
        //             facilitate
        //             agricultural
        //             development<br></br>
        //             initiatives to
        //             enhance
        //             productivity and
        //             foster sustainable
        //             practices.</p> </div>
        //     <div className="flex">
        //         <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
        //             <RoomIcon color='action' className="mr-1"></RoomIcon>
        //             <span className="text-sm text-black font-bold mr-1">OnSite</span>
        //         </div>
        //         <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
        //             <h1 className="text-sm text-black font-bold">⌚Full Time</h1>
        //         </div>
        //     </div><br></br>
        //     <div className='m-1'>
        //         <hr className='border border-black' />
        //     </div>

        //     <h1 className='text-xl text-black font-bold'>Dealership Manager</h1>
        //     <div className="flex flex-col  mb-4">
        //         <button className="self-end mr-4 text-black w-20">More🡪</button>
        //         <p className="text-black">We are looking for a Dealership Manager
        //             to develop and
        //             maintain strong
        //             relationships with<br></br>
        //             agricultural dealers,
        //             distributors, and
        //             retailers.</p> </div>
        //     <div className="flex">
        //         <div className="inline-block mt-2 p-1 rounded-full border-2 mr-2 border-black bg-white-500 border-solid flex items-center">
        //             <RoomIcon color='action' className="mr-1"></RoomIcon>
        //             <span className="text-sm text-black font-bold mr-1">OnSite</span>
        //         </div>
        //         <div className="inline-block mt-2 p-2 border-2 rounded-full border-black bg-white-500 border-solid">
        //             <h1 className="text-sm text-black font-bold">⌚Full Time</h1>
        //         </div>
        //     </div><br></br>
        //     <div className='m-1'>
        //         <hr className='border border-black' />
        //     </div>

        // </div>
        <div>
            <h1 className='text-xl ml-3 text-black font-bold'>
                Cluster Officer
            </h1>
            <div className="flex flex-col mb-4">
                <div className="flex items-end justify-end">
                    {/* <NavLink to={'/ClusterOfficer'}>  */}
                    <button className="self-end mr-4 text-black w-20" onClick={() => navigateToPage(0)}>More🡪</button>
                    {/* </NavLink> */}
                </div>
                <p className="text-black ml-3">
                    We are looking for a Cluster Officer to coordinate agricultural development initiatives in a specific <br></br>geographic
                    area to enhance
                    productivity and
                    foster sustainable
                    practices.
                </p> </div>


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
                    <a href="/pdf/Cluster Officer_JD.pdf" download="Cluster_Officer_JD.pdf">
                        <button className="mr-4 rounded-lg border-2 bg-green-700 text-white p-2 ml-4">Download JD</button>
                    </a>
                </div>


            </div>

            <br></br>
            <div className='m-1'>
                <hr className='border border-black' />
            </div>

            <h1 className='text-xl ml-3 text-black font-bold'>Development Officer</h1>
            <div className="flex flex-col  mb-4">
                <div className="flex items-end justify-end">
                    {/* <NavLink to={'/DevelopmentOfficer'}> */}
                    <button className="self-end mr-4 text-black w-20" onClick={() => navigateToPage(2)}>More🡪</button>

                    {/* </NavLink> */}
                </div>
                <p className=" ml-3 text-black">We are looking for a
                    Development
                    Officer to
                    coordinate and
                    facilitate
                    agricultural
                    development<br></br>
                    initiatives to
                    enhance
                    productivity and
                    foster sustainable
                    practices.</p> </div>
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
                    <a href="/pdf/Development Officer_JD.pdf" download="Development_Officer_JD.pdf">
                        <button className="mr-4 rounded-lg border-2 bg-green-700 text-white p-2 ml-4">Download JD</button>
                    </a>
                </div>
            </div><br></br>
            <div className='m-1'>
                <hr className='border border-black' />
            </div>

            <h1 className='text-xl ml-3 text-black font-bold'>Dealership Manager</h1>
            <div className="flex flex-col  mb-4">
                <div className="flex items-end justify-end">
                    {/* <NavLink to={'/DealershipManager'}> */}
                    <button className="self-end mr-4 text-black w-20" onClick={() => navigateToPage(3)}>More🡪</button>
                    {/* </NavLink> */}
                </div>
                <p className="text-black ml-3">We are looking for a Dealership Manager
                    to develop and
                    maintain strong
                    relationships with<br></br>
                    agricultural dealers,
                    distributors, and
                    retailers.</p> </div>
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
                    <a href="/pdf/Dealership Management_JD.pdf" download="Dealership_Management_JD.pdf">
                        <button className="mr-4 rounded-lg border-2 bg-green-700 text-white p-2 ml-4">Download JD</button>
                    </a>
                </div>
            </div><br></br>
        </div>
    )
}

export default Agricultural