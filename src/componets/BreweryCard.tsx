import { Button, Card, CardActions, CardContent, Container, Typography, styled, Tooltip, Chip } from "@mui/material"
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import React from "react";
import { color } from "@mui/system";
import GoogleMapReact from 'google-map-react';
import { Brewery } from "../../pages";
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PublicIcon from '@mui/icons-material/Public';



const BreweryCardWrapper = styled('div')({
    padding: '20px',

  });

interface BreweryCardProps {
    brewery: Brewery
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export const BreweryCard: React.FC<BreweryCardProps> = ({brewery}) => {
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      
    return (
        <BreweryCardWrapper>
            <Card variant="outlined" color="secondary" sx={{ minWidth: 500}}>
                <CardContent>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                        {brewery.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {`${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code}`}
                    </Typography>
                    <Chip label={brewery.brewery_type.charAt(0).toUpperCase() + brewery.brewery_type.slice(1)} variant="outlined" />
                </CardContent>
                <CardActions disableSpacing>
                    <Tooltip title={brewery.website_url}>    
                        <IconButton href={brewery.website_url} target="_blank">
                            <PublicIcon/>
                        </IconButton>
                    </Tooltip>
                    <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <div style={{ height: '200px', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyDXm04glEhcDzd69t90tZkJkv9mQQZJFtk' }}
                                defaultCenter={{lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude)}}
                                defaultZoom={11}
                                >
                                <SportsBarIcon color="secondary" fontSize="large"
                                    {...({lat:brewery.latitude, lng:brewery.longitude})}
                                />
                            </GoogleMapReact>
                        </div>
                    </CardContent>
                </Collapse>
            </Card>
        </BreweryCardWrapper>
    )
} 