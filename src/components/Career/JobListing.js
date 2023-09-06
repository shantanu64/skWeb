import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LgFooter from '../Home/Footer';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    console.log(props.title)

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default
    function BasicTabs(props) {
    // console.log("((((((((((((((", props?.data)
    const { data } = props
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <div>
            <Box className="m-2 ml-14 " sx={{ width: '92%' }}>
                <Box className="ml-14" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Role Details" {...a11yProps(0)} />
                        <Tab label="Our Misson" {...a11yProps(1)} />

                    </Tabs>
                </Box>
                <div className='border-4 border-green-500  mt-4'>
                    <CustomTabPanel value={value} index={0}>
                        <div className="flex p-3 ">
                            <div className="mr-44">
                                <h1 className='text-xl  text-green-800  font-bold'>Position:</h1>
                                <h1 className='text-1xl font-sans font-semibold'> {data.positon}</h1>
                            </div>
                            <div>
                                <h1 className='text-xl  text-green-800 font-bold'>Employment:</h1>
                                <h1 className='text-1xl font-sans font-semibold'>{data.Employment}</h1>
                            </div>

                        </div><br></br>
                        <div className='m-1'>
                            <hr className='border-1 border-green-500 ' />
                        </div>



                        <p>
                            <div className='p-3 font-semibold font-sans'> <span className=' text-xl  text-green-800 font-sans font-bold'>Role:</span><br></br>
                                {data.Role} </div>

                            <div className='m-1'>
                                <hr className='border-1 border-green-500 ' />
                            </div>

                            <div className='p-3 font-sans'> <span className='text-xl  text-green-800 font-sans font-bold'>Responsibilities:</span><br></br>
                                {data.responsibility.map((ele) => (
                                    <li className='font-sans'>
                                        {ele}
                                    </li>
                                ))}
                            </div>
                            <div className='m-1'>
                                <hr className='border-1 border-green-500 ' />
                            </div>

                            <div className='p-3 font-sans'><span className='text-xl  text-green-800 font-sans font-bold'>Qualifications:</span><br></br>

                                {data.qulification.map((ele) => (
                                    <li className='font-sans'>
                                        {ele}
                                    </li>
                                ))}


                            </div>
                            <div className="flex gap-2 md:gap-8">
                                <a href="mailto:hrdesk@salamkisan.com">
                                    <div className="border-2   rounded-md p-2 md:p-2 lg:p-3 lg:px-7 bg-green-800 text-white font-semibold">
                                        <button>Apply</button>
                                    </div>
                                </a>
                            </div>
                        </p>
                    </CustomTabPanel>


                    <CustomTabPanel value={value} index={1}>
                        <h1 className='text-xl font-bold font-sans text-green-800 '> Mission:</h1><h1 className='font-sans'> Transcending agriculture by bridging the fragmented agriculture value chain with data-
                            driven <br></br>insights, artificial intelligence, and end-to-end products and services.</h1>
                    </CustomTabPanel>
                </div>

            </Box>
            <LgFooter />
        </div>
    );
}
