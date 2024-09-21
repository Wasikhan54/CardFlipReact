import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function CardSection() {
    const [show, setShow] = useState('This is some text within a card body.');   
    const  handleShow = () => setShow('hello');
  return (
   [1,2,3,4,5,6].map(() => {return (<Card onClick={handleShow}>  This is some text within a card body.</Card>)})
  );
}

export default CardSection;