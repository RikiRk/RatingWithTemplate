// import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Autocomplete from '@mui//material/Autocomplete';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
export default function Navbar() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" href="/">
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/getting-started/installation/"
                >
                    <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    library
                </Link>
            </Breadcrumbs>

            <Autocomplete
                // id="combo-box-demo"
                sx={{ width: 20, height: 10, marginLeft: '90%' }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </div>
    );
}
