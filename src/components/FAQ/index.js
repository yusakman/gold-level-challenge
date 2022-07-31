import React from 'react';
import './style.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import 'bootstrap/dist/css/bootstrap.min.css';

const FAQ = (props) => {
  const { faq } = props;

    return ( 
        <div className='faq' id='faq'>
            <div className='faq-left'>
                <h2>Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='faq-right'>
              {
                faq.map((item) => (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panela-header"
                    >
                      <Typography>{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))
              }
              
            </div>
        </div>
     );
}
 
export default FAQ;