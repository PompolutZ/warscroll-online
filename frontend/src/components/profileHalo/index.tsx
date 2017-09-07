import * as React from 'react';
import './index.css';

export const ProfileHalo = (props: any) => {
    return (
        <div className="parent">
            <div className="child">
                <div className="stat move-stat">
                    <p>{`${props.stat.move}"`}</p>    
                </div>  
                <div className="stat wound-stat">
                    <p>{props.stat.wounds}</p>    
                </div>  
                <div className="stat bravery-stat">
                    <p>{props.stat.bravery}</p>    
                </div>  
                <div className="stat save-stat">
                    <p>{`${props.stat.save}+`}</p>    
                </div>  
            </div>
        </div>
    );
}