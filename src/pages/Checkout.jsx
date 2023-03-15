import React from "react";
import CommonSection from "../components/UI/CommonSection"
import { Container,Row , Col ,Form ,FormGroup} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import '../styles/checkout.css'
import { useSelector } from "react-redux";


const Checkout = () => {


  const totalQty = useSelector(state=>state.cart.totalQuantity)
  
  const totalAmount = useSelector(state=>state.cart.totalAmount)


  return (
      
      <Helmet title="Checkout">
        <CommonSection title="Checkout"/>
        <section>
          <Container>
            <Row>
              <Col lg = '8'>
                <h6 className="mb-4 fw-bold"> Billing  Information</h6>

                <Form>
                  <FormGroup className="form__group">
                    <input type="text" placeholder="Enter your name " />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="email" placeholder="Enter your Email " />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="number" placeholder="Enter your Number " />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="text" placeholder="Enter your Address " />
                  </FormGroup>
                    
                  <FormGroup className="form__group">
                    <input type="text" placeholder="Enter your City " />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="text" placeholder="Enter your Postal code " />
                  </FormGroup>


                </Form>
              </Col>
              <Col lg = '4'>
                <div className="checkout__cart">
                  <h6>Total quantity : 
                   <span> {totalQty} items</span>
                   </h6>
                  <h6>Sub-Total :  
                  <span> ${totalAmount}</span>
                  </h6>
                  <h6>
                  <span>

                  Shipping : 

                  <br/>Free shipping 
                  </span> 
                  <span> $ 0</span>
                  </h6>

                  <h4>Total Cost : 
                   <span> ${totalAmount}</span>
                  </h4>
                  <br />
                  
                <button className="buy__btn auth__btn w-10">Place an order</button>

                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    
  );
};

export default Checkout
