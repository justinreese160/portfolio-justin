import React from 'react';
import '../styles/site.css'
import '../styles/contact.css'
import {  Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <div className="contact1 background">
      <h1 className="title" >Contact Me</h1>
    <ul className="contacts">
        <li className='contactButton'><Button href="mailto:justinreese160@gmail.com" variant="dark" size="lg" >Email</Button></li>
        <li className='contactButton'><Button href="https://github.com/justinreese160" variant="dark" size="lg">GitHub</Button></li>
        <li className='contactButton'> <Button href="https://www.linkedin.com/in/justin-reese-849510213" variant="dark" size="lg">LinkedIn</Button></li>
        <li className='contactButton'><Button href="https://docs.google.com/document/d/1thdfRXJHbZm469PoNUGJV5aaSnLmpt3E/edit?usp=sharing&ouid=118167267838735308249&rtpof=true&sd=true" variant="dark" size="lg">Resume</Button></li>
    </ul>
</div>
);
}
