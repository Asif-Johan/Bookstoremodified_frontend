import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="p-8 rounded-lg w-[80vw] mx-auto border border-spacing-2 border-green-600 rounded-2xl">
      <h2 className="text-3xl font-bold mb-6 py-1 text-green-600">About ISR Islamic Library</h2>
      <p className="mb-4">
        Welcome to the ISR Islamic Library, a project under the <Link to={"https://www.facebook.com/Islamic.Society.of.RUET"} className='text-green-600 underline underline-offset-2'>Islamic Society of RUET</Link>'s Library Team. Our primary goal is to provide access to Islamic knowledge and facilitate the spread of the Deen of Islam.
      </p>
      <p className="mb-4">
        At ISR Islamic Library, we are committed to collecting, preserving, and disseminating a wide range of Islamic literature, resources, and materials. Whether you are a student or anyone interested in learning more about Islam, our library offers a diverse collection to cater to your needs.
      </p>
      <p className="mb-4">
        Our library team is dedicated to curating content that covers various aspects of Islamic studies, including theology, jurisprudence, history, spirituality, and more. We strive to create a welcoming environment where individuals can engage with Islamic texts, explore different perspectives, and deepen their understanding of the faith.
      </p>
      <p className="mb-4">
        We believe that access to authentic Islamic knowledge is essential for individuals to develop a comprehensive understanding of Islam and its teachings. Through our efforts, we aim to empower people to enrich their spiritual journey, strengthen their connection to their faith, and contribute positively to society.
      </p>
      <p>
        Thank you for visiting the ISR Islamic Library. We invite you to explore our collection, participate in our events, and join us in our mission to promote Islamic learning and understanding.
      </p>
<hr  className='bg-green-400 my-4 shadow-2xl'/>
      <p> You can visit our page: <Link to={"https://www.facebook.com/Islamic.Society.of.RUET"} className='text-green-600 underline underline-offset-2'>Islamic Society of RUET</Link></p>
    </div>
  );
};

export default About;
