import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return(
        <div>
            <p classname='f3'>
                {`This magic brain will detect faces in your pictures`}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' /><br/>
                    <button className='w-30 grow f4 link ph3 pv dib white bg-light-purple tc'>Detect</button>
                </div>
                </div>
        </div>
    )
};

export default ImageLinkForm;