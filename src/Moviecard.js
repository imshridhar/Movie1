import {Component} from "react";
import Styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const Body =createGlobalStyle 
`body{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                 sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
    background: #f1f1f1;
}`

const Main =Styled.div`
width: 70%;
margin: 0 auto;
margin-top: 30px;
padding: 0 20px;
box-sizing: border-box;`

const Moviecard = Styled.div`
 background: #fff;
padding: 0;
border: none;
border-radius: 10px;
display: flex;
&:not(:first-child){
    margin-top: 20px;}
&:last-child{ 
    margin-bottom: 50px}`



const Left =Styled.div 
`flex: 1;
padding: 5px`

const LeftImg =Styled.img 
`height: 250px;`


const Right=Styled.div 
`position: relative;
flex: 10;`

const Title =Styled.div 
`padding: 10px 20px;
font-size: 25px;
font-weight: 600;`

const Plot =Styled.div 
`margin-top: 20px;
padding: 0 20px;`

const Price =Styled.div 
`margin-top: 20px;
padding: 0 20px;
font-weight: 500;
color: rgb(0, 75, 0)`

const Footer =Styled.div 
`position: absolute;
bottom: 0;
display: flex;
width: 100%;
padding: 10px 20px;
box-sizing: border-box;`

const Rating =Styled.div 
`font-size: 20px;
font-weight: 600;
flex:1`




const StarDis=Styled.div 
`font-size: 20px;
font-weight: 600;
flex:1;
position: relative;`


const StarCount =Styled.span 
   `font-size: 25px;
    font-weight: 600;
    position:absolute;
    left: 50;
    margin: -5px 0px 5px 5px;`




const ImgBtn =Styled.img 
   `width: 20px;
    height: 20px`

const Btn1 =Styled.button 
`font-size: 15px;
padding: 7px 10px;
text-shadow: none;
border-radius: 3px;
border: none;
font-weight: 600;
margin:7px;
background-color: ${(props) => (props.color ? '#db2828' : '#bc16dd')};
color: ${(props) => (props.color ? 'white' : 'white')};
`


const Btn2 =Styled.button
`font-size: 15px;
padding: 7px 10px;
text-shadow: none;
border-radius: 3px;
border: none;
font-weight: 600;
margin:7px;
background-color: ${(props) => (props.color ? 'green' : '#251bb1')};
color: ${(props) => (props.color ? 'white' : 'white')};`

class MovieCard extends Component{
   
    render(){
        // console.log(this.state);
        // console.log(this.props.movies);
        const {Shridhar,handleFav,handleCart,AddStar,DeStar}=this.props;
        const {title,plot,poster,rating,price,stars,fav,isInCart} = Shridhar;
        return(
            <>
            <Body/>
            <Main>
                <Moviecard>
                    <Left>                        
                        <LeftImg alt="poster" src={poster} />
                    </Left>
                    <Right>
                        <Title>{title}</Title>
                        <Plot>{plot}</Plot>
                        <Price> Rs. {price} </Price>
                        <Footer>
                            <Rating>{rating}</Rating>
                            <StarDis>
                                <ImgBtn alt="Decrease" onClick={()=>DeStar(Shridhar)} src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3237057/subtract-circle-icon-md.png"/>
                                <ImgBtn alt="Star" src="https://th.bing.com/th/id/R.964268cfd99806b31a3f38904f7be238?rik=IH54Dx1NIzHB%2fg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fstar-icon.png&ehk=1nuTFvTOLZ1JxvxRy9Gr09rDbwRrkRKKPZSBjsjW5Hc%3d&risl=&pid=ImgRaw&r=0"/>
                                <ImgBtn alt="increase" onClick={()=>AddStar(Shridhar)} src="https://th.bing.com/th/id/OIP.lILRBbn-tHan8fFgPoaw-AHaHa?w=980&h=982&rs=1&pid=ImgDetMain" />
                                <StarCount>{stars}</StarCount>
                            </StarDis>
                            <Btn1 color={fav} onClick={()=>handleFav(Shridhar)}>{fav?"Un-favourite":"Favourite"}</Btn1>
                            <Btn2 color={isInCart} onClick={()=>handleCart(Shridhar)}>{isInCart?"Remove-To-Cart":"Add-To-Cart"}</Btn2>
                        </Footer>
                    </Right>
                </Moviecard>
                </Main>           
            </>
        )
    }
}

export default MovieCard;