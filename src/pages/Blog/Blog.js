import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='my-10 p-5 shadow-lg border-solid border-2 border-gray-300 rounded-lg'>
                <h1 className='text-3xl'><strong>Question-1: </strong> Difference between SQL and NoSQL ?</h1>
                <p><strong>Answare: </strong>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className='my-10 p-5 shadow-lg border-solid border-2 border-gray-300 rounded-lg'>
                <h1 className='text-3xl'><strong>Question-2: </strong> What is JWT, and how does it work? </h1>
                <p><strong>Answare: </strong>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). <br /> <strong>It's work :</strong>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. <br />*User sign-in using username and password or google/facebook. <br />
                    *Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                    *User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                    *Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
            </div>
            <div className='my-10 p-5 shadow-lg border-solid border-2 border-gray-300 rounded-lg'>
                <h1 className='text-3xl'><strong>Question-3: </strong> What is the difference between javascript and NodeJS?</h1>
                <p><strong>Answare: </strong>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className='my-10 p-5 shadow-lg border-solid border-2 border-gray-300 rounded-lg'>
                <h1 className='text-3xl'><strong>Question-4: </strong> How does NodeJS handle multiple requests at the same time?</h1>
                <p><strong>Answare: </strong>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;