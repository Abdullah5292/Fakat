import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        backgroundColor: '#ee2df',
        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)', // Drop shadow
        padding: '1rem',
    },
    rating: {
        color: '#FFD700', // Gold color for stars
    },
});

const OutlinedCard = () => {
    const classes = useStyles();

    // Star rating component
    const renderRating = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<StarIcon key={i} className={classes.rating} />);
        }
        for (let i = rating; i < 5; i++) {
            stars.push(<StarBorderIcon key={i} className={classes.rating} />);
        }
        return stars;
    };

    return (
        <Box sx={{ minWidth: 275 }} className="mt-8"> {/* Added Tailwind margin top */}
            <Card variant="outlined" className={classes.card}>
                <CardContent>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        Name of Customer
                    </Typography>
                    <Typography variant="h5" component="div">
                        BSCS 25
                    </Typography>
                    {/* Render star rating */}
                    <div>{renderRating(4)}</div>
                    <Typography variant="body2">
                        The whole review of the customer will be here.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default OutlinedCard;
