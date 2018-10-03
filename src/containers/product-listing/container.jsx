import React, { Component } from 'react';
import { Media } from 'react-bootstrap';

class ProductListing extends Component {
    render() {
        const wellStyles = {margin: '10px', lineHeight: '20px', maxHeight: '700px', overflow:'auto' };

        return (
            <div style={wellStyles}>
                <Media>
                    <Media.Left align="top">
                        <img width={80} height={50} src="https://img1s.cpsimg.com/is/image/Autos/k33332129_is?$80x50$" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>K&N 33 Series 33-2129 Air Filter - Cotton Gauze Oiled, Reusable, Sold Individually</Media.Heading>
                        <p>
                            33-2129
                        </p>

                        <p style={{color:"green"}}>
                            <strong>$50.99</strong>
                        </p>
                    </Media.Body>
                </Media>
                <Media>
                    <Media.Left align="top">
                        <img width={80} height={50} src="https://img1s.cpsimg.com/is/image/Autos/k333320312_is?$80x50$" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>K&N 33 Series 33-2031-2 Air Filter - Cotton Gauze Oiled, Reusable, Sold Individually</Media.Heading>
                        <p>
                            33-2031-2
                        </p>

                        <p style={{color:"green"}}>
                            <strong>$50.99</strong>
                        </p>
                    </Media.Body>
                </Media>
                <Media>
                    <Media.Left align="top">
                        <img width={80} height={50} src="https://img1s.cpsimg.com/is/image/Autos/k33332385_is?$80x50$" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>K&N 33 Series 33-2385 Air Filter - Cotton Gauze Oiled, Reusable, Sold Individually</Media.Heading>
                        <p>
                            33-2385
                        </p>

                        <p style={{color:"green"}}>
                            <strong>$53.99</strong>
                        </p>
                    </Media.Body>
                </Media>
                <Media>
                    <Media.Left align="top">
                        <img width={80} height={50} src="https://img1s.cpsimg.com/is/image/Autos/k33332395_is?$80x50$" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>K&N 33 Series 33-2395 Air Filter - Cotton Gauze Oiled, Reusable, Sold Individually</Media.Heading>
                        <p>
                            33-2395
                        </p>

                        <p style={{color:"green"}}>
                            <strong>$51.99</strong>
                        </p>
                    </Media.Body>
                </Media>
                <Media>
                    <Media.Left align="top">
                        <img width={80} height={50} src="https://img1s.cpsimg.com/is/image/Autos/k33332135_is?$80x50$" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>K&N 33 Series 33-2135 Air Filter - Cotton Gauze Oiled, Reusable, Sold Individually</Media.Heading>
                        <p>
                            33-2135
                        </p>

                        <p style={{color:"green"}}>
                            <strong>$55.99</strong>
                        </p>
                    </Media.Body>
                </Media>
                <Media>
                    <Media.Left align="top">
                        <img width={80} height={50} src="https://img1s.cpsimg.com/is/image/Autos/k33332443_is?$80x50$" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>K&N 33 Series 33-2443 Air Filter - Cotton Gauze Oiled, Reusable, Sold Individually</Media.Heading>
                        <p>
                            33-2443
                        </p>

                        <p style={{color:"green"}}>
                            <strong>$5.99</strong>
                        </p>
                    </Media.Body>
                </Media>
                <Media>
                    <Media.Left align="top">
                        <img width={80} height={50} src="https://img1s.cpsimg.com/is/image/Autos/k33e0945_is?$80x50$" alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>K&N E-Series E-0945 Air Filter - Cotton Gauze Oiled, Reusable, Sold Individually</Media.Heading>
                        <p>
                            E-0945
                        </p>

                        <p style={{color:"green"}}>
                            <strong>$60.99</strong>
                        </p>
                    </Media.Body>
                </Media>
            </div>
        )
    }
}

export default  ProductListing;