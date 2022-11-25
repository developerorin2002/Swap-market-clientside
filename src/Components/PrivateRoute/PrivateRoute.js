import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    if (loading) {
        return (<Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progress} />
        </Box>
        )
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;