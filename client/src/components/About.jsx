import React from 'react';
import { ProfileCard } from './sub-components/ProfileCard';


const About = () => {
  return (
    <>
        <div className='flex flex-wrap justify-center mt-20 gap-20'>
          <ProfileCard image_link="https://media.licdn.com/dms/image/D5603AQGk1IcPa0-G_g/profile-displayphoto-shrink_400_400/0/1700127327417?e=1705536000&v=beta&t=MYWJm8GfFdMZKYn-ZguXZv5WPc9AMtn77r-H5wq10z4" name="Anshdeep Singh" home="Shubash Nagar, Delhi" workplace="My Side Team" college="Guru Tegh Bahadur Institute of Technology" linkedin="https://www.linkedin.com/in/anshdeep-singh-5763091ba/" github="https://github.com/Ansh-2002" instagram="https://www.instagram.com/anshdeep_5ingh/"/>
          <ProfileCard image_link="https://media.licdn.com/dms/image/D4D03AQG11UoklB2fNQ/profile-displayphoto-shrink_400_400/0/1700520178447?e=1706140800&v=beta&t=_AZDjXyElI2sBBAKgAnnqFlr7geoLpqp3IxwEAmCqjU" name="Ekaspreet Singh" home="Narayana Vihar, Delhi" workplace="BasketHunt Pvt. Ltd." college="Guru Tegh Bahadur Institute of Technology" linkedin="https://www.linkedin.com/in/ekaspreet-singh-a979bb195/" github="https://github.com/EkaspreetSingh" instagram="https://www.instagram.com/singh_ekaspreet/"/>
        </div>
        <div className='flex flex-wrap justify-center gap-10'>
          <ProfileCard image_link="https://media.licdn.com/dms/image/D4D03AQFqlG4bn8rn6A/profile-displayphoto-shrink_400_400/0/1675432541643?e=1705536000&v=beta&t=bwKk6P0kMUcTwm9latiCiUo9Zs0ra6CDqQBex4qYLJU" name="Bhagavath M S" home="Vaishali, Ghaziabad" workplace="Dataman Computer Systems" college="Guru Tegh Bahadur Institute of Technology" linkedin="https://www.linkedin.com/in/bhagavath-m-s-0aa482217/" github="https://github.com/bhagavathms" instagram="https://www.instagram.com/bhagavath.ms/"/>
          <ProfileCard image_link="https://media.licdn.com/dms/image/D4D03AQF2C6kJOb5DWw/profile-displayphoto-shrink_400_400/0/1692419814095?e=1705536000&v=beta&t=wzo-wwJrpy91ZxaxYm9ia7Vc799-GI9gi8FvrNWoQcI" name="Bharat Budhori" home="Sagarpur, Delhi" workplace="Les Transformation" college="Guru Tegh Bahadur Institute of Technology" linkedin="https://www.linkedin.com/in/bharat-budhori/" github="https://github.com/bharatbudhori/" instagram="https://www.instagram.com/bharat_budhori/"/>
        </div>
    </>

  )
}

export default About


