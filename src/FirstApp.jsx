
import PropTypes from 'prop-types';
/// me define el tipo a las properties
/// primero lo instalo haciendo npm install prop-types


export const FirstApp = ({title, subTitle, name}) => {
    /// <> esto es un fragmento, un agrupador de elementos html. Como si fuera un div
    return (  
        <> 
            <h1> {title} </h1>
            <p>{subTitle}</p>
            <p>{name}</p>


        </>
        
       
    ); 

};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,

}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 1234,
    name: 'Emanuel Villegas',


}