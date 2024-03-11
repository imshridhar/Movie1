import { Component } from "react";
import Styled from 'styled-components'


const Nav =Styled.div`
    height: 70px;
    background: linear-gradient(90deg,green,blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`
const CartIcon =Styled.img`
    height: 48px;
    margin-right:20px ;

`
const Imgcart =Styled.div``

const Title =Styled.div`
    font-size: 30px;
    color: #fff;
    font-family:"Montserrat", sans-serif ;
    text-transform: uppercase;
    margin-left: 20px;
    &:hover{
        color:blue;
    }
`
const CartCount =Styled.span`
    background: yellow;
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: 10px; 
    font-size: 15px;
    visibility:{(props)=>(props.show?"visible":"hidden")}
    `


class Navbar extends Component {


    render() {
        return (
            <Nav>
            <Title>Movie-App</Title>
            <Imgcart>
              <CartIcon               
                src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                alt="cart-icon"
              />
              <CartCount show={true}>{this.props.cartcount}</CartCount>  
              
            </Imgcart>
          </Nav>);
    }
}

// const styles={
//     container:{ height: 70,
//                 background: "#4267b2",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 position: "relative" 
//             },
//     movieapp:{ fontSize: 30,
//                 color: "#fff",
//                 fontWeight: 600,
//                 fontFamily: '"Montserrat", sans-serif',
//                 textTransform: "uppercase",
//                 marginLeft: 20 
//             }
// }



export default Navbar;