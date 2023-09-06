// import React from 'react'
import LgFooter from '../Home/Footer'
import Data from './Data'
import RoomIcon from '@mui/icons-material/Room';
import BusinessIcon from '@mui/icons-material/Business';
import BasicTabs from './JobListing';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import newworkimg from '../../assets/newworking.jpg'
// import LgFooter from "./Footer"; 
import { useParams } from 'react-router-dom';
import MainData from './JsonServer.json'
import Show from './show';


const ClusterOfficer = () => {

    let { id } = useParams();
    console.log("here", id)
    const resp = MainData.rolesData.find(ele => ele.name == id)
    // console.log("first", resp)

    return (


        <div>

            <Show data={resp} />
            <BasicTabs data={resp} />
        </div>


    )
}

export default ClusterOfficer
