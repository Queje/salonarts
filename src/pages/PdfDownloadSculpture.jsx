import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { PdfFileSculpture } from './PdfFileSculpture';
import { Button } from "react-bootstrap";

const PdfDownloadSculpture = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const REACT_APP_EMAIL = process.env.REACT_APP_EMAIL;
    
  return (
    <div className='PdfDownloadSculpture'>
      <PdfFileSculpture ref={componentRef} />
      <div className="text-center">
        <Button className="buttoncustom" onClick={handlePrint}>Créer votre Pdf</Button>
        <h6 className="text-center">
          Une fois votre formulaire rempli, envoyer le nous par
        </h6>
        <Button 
          className="buttoncustom" 
          href={`mailto:${REACT_APP_EMAIL}?subject=inscription`}>
            Email  
        </Button>
      </div>
    </div>
  );
};
    
export default PdfDownloadSculpture;