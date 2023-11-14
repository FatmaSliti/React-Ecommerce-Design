// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import styles from './Support.module.css';

// const SupportForm = () => {
//     return (
//         <div className={styles.supportContainer}>
//         <h1 style={{textAlign: 'center',}}>Support</h1>
//         <Container style={{fontSize: '20px'}}>
//             <Row className="justify-content-md-center mt-5">
//                 <Col md={6}>
//                     <Form>
//                         <Form.Group controlId="name">
//                             <Form.Label>Name:</Form.Label>
//                             <Form.Control type="text" placeholder="Enter your name" required />
//                         </Form.Group>

//                         <Form.Group controlId="email">
//                             <Form.Label>Email:</Form.Label>
//                             <Form.Control type="email" placeholder="Enter your email" required />
//                         </Form.Group>

//                         <Form.Group controlId="phone">
//                             <Form.Label>Phone (optional):</Form.Label>
//                             <Form.Control type="tel" placeholder="Enter your phone number" />
//                         </Form.Group>

//                         <Form.Group controlId="orderNumber">
//                             <Form.Label>Order Number:</Form.Label>
//                             <Form.Control type="text" placeholder="Enter your order number" />
//                         </Form.Group>

//                         <Form.Group controlId="inquiryType">
//                             <Form.Label>Nature of Inquiry:</Form.Label>
//                             <Form.Control as="select" required>
//                                 <option value="orderStatus">Order Status</option>
//                                 <option value="productInquiry">Product Inquiry</option>
//                                 <option value="returns">Returns</option>
//                                 <option value="technicalIssue">Technical Issue</option>
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group controlId="description">
//                             <Form.Label>Description:</Form.Label>
//                             <Form.Control as="textarea" rows={4} placeholder="Describe your issue" required />
//                         </Form.Group>

//                         <Form.Group controlId="attachments">
//                             <Form.Label>Attachments (optional):</Form.Label>
//                             <Form.Control type="file" />
//                         </Form.Group>

//                         <Form.Group controlId="priority">
//                             <Form.Label>Priority:</Form.Label>
//                             <Form.Control as="select" required>
//                                 <option value="low">Low</option>
//                                 <option value="medium">Medium</option>
//                                 <option value="high">High</option>
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group controlId="contactMethod">
//                             <Form.Label>Preferred Contact Method:</Form.Label>
//                             <Form.Control as="select" required>
//                                 <option value="email">Email</option>
//                                 <option value="phone">Phone</option>
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group controlId="termsAndConditions" className="mb-3">
//                             <Form.Check type="checkbox" label="I have read and agree to the terms and conditions" required />
//                         </Form.Group>

//                         <Button variant="primary" type="submit">
//                             Submit
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//         </div>
//     );
// }

// export default SupportForm;

import styles from './Support.module.css';

import supportImage from '../../assets/support.jpg'

const SupportForm = () => {
    return (
        <div className={styles.PageContainer}>
        <div className={styles.support}>
            <img src={supportImage} alt="" />
        <div className={styles.supportContainer}>
            <h1 style={{ textAlign: 'center', color: '#8cbce3' }}>Support</h1>
            <div className={styles.container}>
                <div className={`${styles.row} ${styles.justifyContentMdCenter} ${styles.mt5}`}>
                    <div className={styles.colMd6}>
                        <form>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" placeholder="Enter your name" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" placeholder="Enter your email" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone (optional):</label>
                                <input type="tel" id="phone" placeholder="Enter your phone number" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="orderNumber">Order Number:</label>
                                <input type="text" id="orderNumber" placeholder="Enter your order number" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="inquiryType">Nature of Inquiry:</label>
                                <select id="inquiryType" required>
                                    <option value="orderStatus">Order Status</option>
                                    <option value="productInquiry">Product Inquiry</option>
                                    <option value="returns">Returns</option>
                                    <option value="technicalIssue">Technical Issue</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="description">Description:</label>
                                <textarea id="description" rows={4} placeholder="Describe your issue" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="attachments">Attachments (optional):</label>
                                <input type="file" id="attachments" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="priority">Priority:</label>
                                <select id="priority" required>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="contactMethod">Preferred Contact Method:</label>
                                <select id="contactMethod" required>
                                    <option value="email">Email</option>
                                    <option value="phone">Phone</option>
                                </select>
                            </div>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        </div>

        </div>
    );
}

export default SupportForm;
