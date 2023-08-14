// import React from 'react';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


// const RecordFeedback = () => {
//     return (
//         <div>
//             <Box
//                 component="form"
//                 sx={{
//                     '& > :not(style)': { m: 1, width: '25ch' },
//                 }}
//                 noValidate
//                 autoComplete="off"
//             >
//                 <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//                 <TextField id="filled-basic" label="Filled" variant="filled" />
//                 <TextField id="standard-basic" label="Standard" variant="standard" />
//             </Box>
//         </div>
//     );
// };

// export default RecordFeedback;
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const RecordFeedback = () => {
    return (
        <div className='w-100 h-20px bg-dan   '>
              <div className=''
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 'w-100' },
      }}
      noValidate
      autoComplete="off">
        <div className="">
      <TextField className='' id="filled-basic" label="نام و  نام خانوادگی" variant="filled" />
    </div>
        </div>
        </div>
    );
};

export default RecordFeedback;