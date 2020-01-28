import React, {useState} from 'react';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open}/>
        </div>
    );
}

export default BurgerMenu;