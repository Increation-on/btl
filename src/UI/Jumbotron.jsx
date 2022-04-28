import { Container } from 'react-bootstrap';
import image from '../images/shrek.jpg';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo {
        background: url(${image}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`



const Jumbotron = () => {
    return (
        <>
            <Styles>
                <div className="jumbo container-fluid mb-5">
                    <div className="overlay"></div>
                        <Container>
                            <h1 className="display-4">Hello, world!</h1>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.
                                asdhashgdjjashkdjashkjdhaksjdjsfdvhasvdjhasd. SAjhasdjhasdjavbsdnbavbncvnbvghasdgjkashdjshak.
                                It uses utility classes for typography and spacing to space content out within the larger container.
                                asdhashgdjjashkdjashkjdhaksjdjsfdvhasvdjhasd. SAjhasdjhasdjavbsdnbavbncvnbvghasdgjkashdjshak.
                                It uses utility classes for typography and spacing to space content out within the larger container.
                                asdhashgdjjashkdjashkjdhaksjdjsfdvhasvdjhasd. SAjhasdjhasdjavbsdnbavbncvnbvghasdgjkashdjshak.
                                It uses utility classes for typography and spacing to space content out within the larger container.
                                asdhashgdjjashkdjashkjdhaksjdjsfdvhasvdjhasd. SAjhasdjhasdjavbsdnbavbncvnbvghasdgjkashdjshak.
                            </p>
                        </Container>
                </div>
            </Styles>
        </>
    )
}

export default Jumbotron;