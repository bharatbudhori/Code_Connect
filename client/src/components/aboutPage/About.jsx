import React from 'react';
import { ProfileCard } from './AboutProfileCard';


const About = () => {
  return (
    <>
        <div className='flex flex-wrap justify-center mt-20 gap-20'>
          <ProfileCard image_link="ansh.jpeg" name="Anshdeep Singh" home="Shubash Nagar, Delhi" workplace="My Side Team" college="Guru Tegh Bahadur Institute of Technology" linkedin="https://www.linkedin.com/in/anshdeep-singh-5763091ba/" github="https://github.com/Ansh-2002" instagram="https://www.instagram.com/anshdeep_5ingh/"/>
          <ProfileCard image_link="ekas.jpeg" name="Ekaspreet Singh" home="Narayana Vihar, Delhi" workplace="BasketHunt Pvt. Ltd." college="Guru Tegh Bahadur Institute of Technology" linkedin="https://www.linkedin.com/in/ekaspreet-singh-a979bb195/" github="https://github.com/EkaspreetSingh" instagram="https://www.instagram.com/singh_ekaspreet/"/>
        </div>
        <div className='flex flex-wrap justify-center gap-10'>
          <ProfileCard image_link="bms.jpeg" name="Bhagavath M S" home="Vaishali, Ghaziabad" workplace="Dataman Computer Systems" college="Guru Tegh Bahadur Institute of Technology" linkedin="https://www.linkedin.com/in/bhagavath-m-s-0aa482217/" github="https://github.com/bhagavathms" instagram="https://www.instagram.com/bhagavath.ms/"/>
          <ProfileCard image_link="bharat.jpeg" name="Bharat Budhori" home="Sagarpur, Delhi" workplace="Les Transformation" college="Guru Tegh Bahadur Institute of Technology" linkedin="https://www.linkedin.com/in/bharat-budhori/" github="https://github.com/bharatbudhori/" instagram="https://www.instagram.com/bharat_budhori/"/>
        </div>
    </>

  )
}

export default About;


