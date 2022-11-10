import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    

  return (
    
    <Container>
        <a>
            <img src='/images/logo.svg' alt="" />
        </a>
        <Menu>
             <a href="#">Model S</a>
             <a href="#">Model 3</a>
             <a href="#">Model X</a>
             <a href="#">Model Y</a>
        </Menu>
        <RightMenu>
            <a href="https://shop.tesla.com/" target="_blank">Shop</a>
            <a href="https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US" target="_blank">Account</a>
            <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={() => setBurgerStatus(false)} />
            </CloseWrapper>
            <li><a href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=28079&range=200" target="_blank">Existing Inventory</a></li>
            <li><a href="https://www.tesla.com/inventory/used/m3?arrangeby=plh&zip=28079" target="_blank">Used Inventory</a></li>
            <li><a href="https://auth.tesla.com/oauth2/v1/authorize?client_id=teslaweb&response_type=code&scope=openid%20email%20ou_code%20profile&redirect_uri=https%3A//www.tesla.com/openid-connect/generic&state=k-XWAaaRDMcVi5YHdBLVnqQZVOvJYLx1j05pcfdK5Gg&locale=en-US" target="_blank">Trade In</a></li>
            <li><a href="https://www.tesla.com/drive" target="_blank">Test Drive</a></li>
            <li><a href="https://www.tesla.com/insurance" target="_blank">Insurance</a></li>
            <li><a href="https://www.tesla.com/cybertruck" target="_blank">Cybertruck</a></li>
            <li><a href="https://www.tesla.com/roadster" target="_blank">Roadster</a></li>
            <li><a href="https://www.tesla.com/semi" target="_blank">Semi</a></li>
            <li><a href="https://www.tesla.com/charging" target="_blank">Charging</a></li>
            <li><a href="https://www.tesla.com/powerwall" target="_blank">Powerwall</a></li>
            <li><a href="https://www.tesla.com/commercial" target="_blank">Commercial Energy</a></li>
            <li><a href="https://www.tesla.com/utilities" target="_blank">Utilities</a></li>
            <li><a href="https://www.tesla.com/findus?v=2&bounds=54.88795900215465%2C-57.079102750000004%2C21.020893216720236%2C-141.45410275&zoom=5&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger%2Cbodyshop%2Cparty" target="_blank">Find Us</a></li>
            <li><a href="https://www.tesla.com/support" target="_blank">Support</a></li>
            <li><a href="https://ir.tesla.com/#quarterly-disclosure" target="_blank">Investor Relations</a></li>
        </BurgerNav>
    </Container>
    
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    
    
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }

`


const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.2s ease-in-out;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`

const Provider = styled.div``