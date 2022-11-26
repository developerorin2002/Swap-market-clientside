import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseBuyer from '../Utilities/UseBuyer/UseBuyer';

const BuyerPrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = UseBuyer(user?.email)
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

    if (loading || isBuyerLoading) {
        return (<Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progress} />
        </Box>
        )
    }

    if (isBuyer) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default BuyerPrivateRoute;