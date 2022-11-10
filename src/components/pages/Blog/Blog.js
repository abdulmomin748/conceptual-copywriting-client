import React from 'react';
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const Blog = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <section className="md:pt-20 pt-16 accordion min-h-[80vh] px-5 lg:px-4 flex justify-center flex-col max-w-[730px] m-auto text-center">
            <title>F Blog</title>
            <meta name="description" content="Helmet application" />
            <h1 className="text-4xl text-center font-bold uppercase mb-16">
                Questions
            </h1>
            <div className='pt-8 pb-16 text-left '>
                <Fragment>
                    <Accordion open={open === 1}>
                        <AccordionHeader className='' onClick={() => handleOpen(1)}>
                            Difference between SQL and NoSQL?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] font-medium custom-accordion'>
                            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        </AccordionBody>
                    </Accordion>    
                    <Accordion open={open === 2}>
                        <AccordionHeader className='text-left' onClick={() => handleOpen(2)}>
                            What is JWT, and how does it work?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px]  font-medium '>
                            JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader className='' onClick={() => handleOpen(3)}>
                            What is the difference between javascript and NodeJS?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px]  h-32 font-medium '>
                            JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Node. On the other hand, Js is a server-side scripting language built on the V8 engine.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4}>
                        <AccordionHeader className='' onClick={() => handleOpen(4)}>
                            How does NodeJS handle multiple requests at the same time?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px]  h-32 font-medium '>
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>
        </section>
    );
};

export default Blog;