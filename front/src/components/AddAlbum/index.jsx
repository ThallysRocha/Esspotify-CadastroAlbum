import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'
const AddAlbum = () => {
    const navigate = useNavigate();
    return(
        <div className="AddAlbum" onClick={()=>navigate("/createAlbum")}>
        <div className="Button-AddAlbum" ><div className="Cross">+</div></div>   
        <label className="AddAlbum-Label">Adicionar</label>    
        </div>
    );
};

export default AddAlbum;