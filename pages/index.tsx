import { Card, CardContent, Typography, CardActions, Button, styled } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BreweryCard } from '../src/componets/BreweryCard'
import { Header } from "../src/componets/Header/Header"
import { Footer } from '../src/componets/Footer'
import { useEffect, useState } from 'react'
import { json } from 'stream/consumers'

export interface Brewery {
  address_2: string;
  address_3: string;
  brewery_type: string;
  city: string;
  country: string;
  county_province: string;
  created_at: string;
  id: string;
  latitude: string;
  longitude: string;
  name: string;
  phone: string;
  postal_code: string;
  state: string;
  street: string;
  updated_at: string;
  website_url: string;
}

const HeaderPaddingWrapper = styled('div')({
  paddingTop: '70px'
});


const Home: NextPage = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  useEffect(()=>{
    fetch('/api/breweries?by_city=kansas_city&per_page=50')
      .then((response) => response.json())
      .then((breweries) => setBreweries(breweries))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header/>
        <HeaderPaddingWrapper>
          {breweries.map((b) => {
            return (
              <BreweryCard key={b.id} brewery={b} />
            );
          })}
      </HeaderPaddingWrapper>
      <Footer/>
    </>
  )
}

export default Home

