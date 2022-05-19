import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (
        <div>
            <Container>

                <footer className='footer'>
                    <div className='footer--container'>
                        <div className='footer--row'>
                            <div className='footer--col'>
                                <h4>Online Shopping</h4>
                                <ul>
                                    <li><a>Men</a></li>
                                    <li><a>Women</a></li>
                                    <li><a>Kids</a></li>
                                    <li><a>Home & Living</a></li>
                                    <li><a>Beauty</a></li>
                                    <li><a>Gift Cards</a></li>
                                    <li><a>Myntra Insider</a></li>
                                </ul>
                            </div>
                            <div className='footer--col'>
                                <h4>Use full links</h4>
                                <ul>
                                    <li><a>Men</a></li>
                                    <li><a>Women</a></li>
                                    <li><a>Kids</a></li>
                                    <li><a>Home & Living</a></li>
                                    <li><a>Beauty</a></li>
                                    <li><a>Gift Cards</a></li>
                                    <li><a>Myntra Insider</a></li>
                                </ul>
                            </div>
                            <div className='footer--col'>
                                <h4>Experience myntra app on mobile</h4>
                                <ul>
                                    <li><a>Men</a></li>
                                    <li><a>Women</a></li>
                                </ul>
                            </div>
                            <div className='footer--col'>
                                <h4>Keep in touch</h4>
                                <div>
                                    <a><i class="fa-brands fa-facebook-square"></i></a>
                                    <a><i class="fa-brands fa-twitter"></i></a>
                                    <a><i class="fa-brands fa-youtube"></i></a>
                                    <a><i class=" fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Container>
        </div>
    )
}

export default Footer