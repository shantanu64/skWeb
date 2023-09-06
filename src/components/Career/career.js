// import React, { useState } from 'react'
// import NavFinal from '../NavBar/NavFinal'
// import LgFooter from '../Home/Footer'
// import { Button, ButtonGroup } from '@material-ui/core'
// import Job from './job'
// import CEO from './CEO'
// import Agricultural from './Agricultural'



// const Career = () => {

//     const [activeButton, setActiveButton] = useState('View All');

//     const handeledClick = (buttonName) => {
//         setActiveButton(buttonName);
//     };
//     const [demo, setDemo] = useState(true)
//     const [demo2, setDemo2] = useState(false)
//     const [demo3, setDemo3] = useState(false)
//     const handeledClick1 = () => {
//         setDemo(true)
//         setDemo2(false)
//         setDemo3(false)
//     }
//     const handeledClick2 = () => {
//         setDemo2(true)
//         setDemo(false)
//         setDemo3(false)


//     }
//     const handeledClick3 = () => {
//         setDemo3(true)
//         setDemo2(false)
//         setDemo(false)

//     }





//     return (
//         <div>
//             <NavFinal />
//             <div className="inline-block  mt-10  m-12 p-4  rounded-full  border-headGreen   border-4">
//                 <h1 className="text-3xl text-black font-bold ">We're Hiring!</h1>
//             </div>

//             <div className='m-12 '>
//                 <h1 className='text-7xl text-headGreen font-bold mb-6' >Calling all <span className=' text-heroYellow'>Innovators,</span> <br></br>we want you on our team.</h1>
//             </div>
//             <p className=" m-16 text-3xl text-headGreen">Everyone Wants To Future With Us, Change Now</p>
//             <div className='m-12 text-xl text-headGreen '>


//                 <div style={{ display: 'flex', gap: '10px' }}>
//                     <Button variant='contained' color='default'
//                         onClick={() => handeledClick1('View All')}
//                         style={{
//                             borderRadius: '20px',
//                             backgroundColor: activeButton === 'View All' ? '#000000' : 'white',
//                             color: activeButton === 'View All' ? 'white' : '#000000',
//                             border: '2px solid #000000',
//                             fontWeight: 'bold'
//                         }}>View All</Button>
//                     <Button variant='contained' color='default'
//                         onClick={() => handeledClick2('CEO Office')}
//                         style={{
//                             borderRadius: '20px',
//                             backgroundColor: activeButton === 'CEO Office' ? '#000000' : 'white',
//                             color: activeButton === 'CEO Office' ? 'white' : '#000000',
//                             border: '2px solid #000000',
//                             fontWeight: 'bold'
//                         }}>CEO Office</Button>
//                     <Button variant='contained' color='default'
//                         onClick={() => handeledClick3('Agricultural Operation')}
//                         style={{
//                             borderRadius: '20px',
//                             backgroundColor: activeButton === 'Agricultural Operation' ? '#000000' : 'white',
//                             color: activeButton === 'Agricultural Operation' ? 'white' : '#000000',
//                             border: '2px solid #000000',
//                             fontWeight: 'bold'
//                         }}>Agricultural Operation</Button>
//                 </div>





//                 <br></br>

//                 <div className='m-1'>
//                     <hr className='border border-black' />
//                 </div>

//                 {demo && <Job />}
//                 {demo2 && <CEO />}
//                 {demo3 && <Agricultural />}


//             </div>

//             <LgFooter />
//         </div >
//     )

// }

// export default Career
import React, { useState } from 'react';
import NavFinal from '../NavBar/NavFinal';
import LgFooter from '../Home/Footer';
import { Button } from '@material-ui/core';
import Job from './job';
import CEO from './CEO';
import Agricultural from './Agricultural';

const Career = () => {
    const [activeButton, setActiveButton] = useState('View All');
    const [demo, setDemo] = useState(true);
    const [demo2, setDemo2] = useState(false);
    const [demo3, setDemo3] = useState(false);

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const handeledClick1 = () => {
        handleClick('View All');
        setDemo(true);
        setDemo2(false);
        setDemo3(false);
    };

    const handeledClick2 = () => {
        handleClick('CEO Office');
        setDemo2(true);
        setDemo(false);
        setDemo3(false);
    };

    const handeledClick3 = () => {
        handleClick('Agricultural Operation');
        setDemo3(true);
        setDemo2(false);
        setDemo(false);
    };

    return (
        <div>
            <NavFinal />
            <div className="inline-block ml-16 mt-10 m-12 p-4 rounded-full border-headGreen border-4">
                <h1 className="text-3xl  text-black font-bold">We're Hiring!</h1>
            </div>

            <div className="m-12 ml-16">
                <h1 className="text-7xl text-headGreen font-bold mb-6">
                    Calling all <span className="text-heroYellow">Innovators,</span> <br />
                    we want you on our team.
                </h1>
            </div>
            <p className="m-16 ml-16 text-3xl text-headGreen">Everyone wants to change the future, with us: Change Now.


            </p>
            <div className="m-12 text-xl text-headGreen">
                <div className='ml-2' style={{ display: 'flex', gap: '10px' }}>
                    <Button
                        variant="contained"
                        color="default"
                        onClick={handeledClick1}
                        style={{
                            borderRadius: '20px',
                            backgroundColor: activeButton === 'View All' ? '#000000' : 'white',
                            color: activeButton === 'View All' ? 'white' : '#000000',
                            border: '2px solid #000000',
                            fontWeight: 'bold'
                        }}
                    >
                        View All
                    </Button>
                    <Button
                        variant="contained"
                        color="default"
                        onClick={handeledClick2}
                        style={{
                            borderRadius: '20px',
                            backgroundColor: activeButton === 'CEO Office' ? '#000000' : 'white',
                            color: activeButton === 'CEO Office' ? 'white' : '#000000',
                            border: '2px solid #000000',
                            fontWeight: 'bold'
                        }}
                    >
                        CEO Office
                    </Button>
                    <Button
                        variant="contained"
                        color="default"
                        onClick={handeledClick3}
                        style={{
                            borderRadius: '20px',
                            backgroundColor: activeButton === 'Agricultural Operation' ? '#000000' : 'white',
                            color: activeButton === 'Agricultural Operation' ? 'white' : '#000000',
                            border: '2px solid #000000',
                            fontWeight: 'bold'
                        }}
                    >
                        Agricultural Operation
                    </Button>
                </div>
                <br />
                <div className="m-1">
                    <hr className="border border-black" />
                </div>
                {demo && <Job />}
                {demo2 && <CEO />}
                {demo3 && <Agricultural />}
            </div>
            <LgFooter />
        </div>
    );
};

export default Career;

