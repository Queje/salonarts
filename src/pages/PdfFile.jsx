import React from "react";
import { Row, Col, FormCheck } from "react-bootstrap";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

const REACT_APP_PRICE = process.env.REACT_APP_PRICE;

export class PdfFile extends React.PureComponent {
  render() {
    return (
      <div className="PdfFile">
        <h2 id="formtitle" className="text-center">Salon des Arts - Carantec - Peinture</h2>
        <br></br>
        <p className="font-weight-bold mt-1">Formulaire d'inscription pour l'exposition du 13/07/25 au 17/08/25, Tarif : {REACT_APP_PRICE} </p>
        <p>Surface réservée à chaque artiste : 1m20 sur 1m80 (horizontal ou vertical)</p>
        <br></br>
        <Form>
          <FormGroup className="group1" as={Row}>
            <FormLabel className="label" column sm="2">
              Nom :
            </FormLabel>
            <Col className="textinput" sm="4">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              Prénom :
            </FormLabel>
            <Col className="textinput" sm="4">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <FormGroup className="group1" as={Row}>
            <FormLabel className="label" column sm="2">
              N° de téléphone :
            </FormLabel>
            <Col className="textinput" sm="4">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              Courriel :
            </FormLabel>
            <Col className="textinput" sm="4">
              <FormControl type="email"/>
            </Col>
          </FormGroup>
          <FormGroup className="group1" as={Row}>
            <FormLabel className="label" column sm="2">
              Adresse :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <FormGroup className="group1" as={Row}>
            <FormLabel className="label" column sm="2">
              Code Postal :
            </FormLabel>
            <Col className="textinput" sm="4">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              Ville :
            </FormLabel>
            <Col className="textinput" sm="4">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <FormGroup className="group1" as={Row}>
            <FormLabel className="label" column sm="2">
              Site internet :
            </FormLabel>
            <Col className="textinput" sm="4">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              N° de SIRET :
            </FormLabel>
            <Col className="textinput" sm="4">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <br></br>
          <h6><b>Oeuvre n°1 :</b></h6>
          <hr></hr>
          <FormGroup className="group1" as={Row}>
            <FormLabel className="label" column sm="2">
              Titre :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              Technique :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              Dimension :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              Prix :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <hr></hr>
          <br></br>
          <h6><b>Oeuvre n°2 :</b></h6>
          <hr></hr>
          <FormGroup className="group1" as={Row}>
            <FormLabel className="label" column sm="2">
              Titre :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              Technique :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              Dimension :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              Prix :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <hr></hr>
          <br></br>
          <h6><b>Oeuvre n°3 :</b></h6>
          <hr></hr>
          <FormGroup className="group1" as={Row}>
            <FormLabel className="label" column sm="2">
              Titre :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              Technique :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              Dimension :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
            <FormLabel className="label" column sm="2">
              Prix :
            </FormLabel>
            <Col className="textinputlarge" sm="10">
              <FormControl type="text"/>
            </Col>
          </FormGroup>
          <hr></hr>
          <FormGroup>
            <FormCheck inline label="Assurera une permanence"/>
            <FormCheck inline label="Réalisera une démonstration"/>
            <FormCheck inline label="confirme que mes œuvres exposées sont bien assurées"/>
            <FormCheck inline label="Possibilité de faire un après-midi vente - dédicace de vos livres (prévenir à l’avance pour l’annoncer dans la presse)"/>
            <FormCheck inline label="Déclare avoir pris connaissance du règlement du salon d’Eté 2025 de Carantec auquel je souhaite participer et en accepte les clauses"/>
          </FormGroup>
          <FormLabel column sm="2">
            Signature:
          </FormLabel>
        </Form> 
      </div>
    );
  };
};