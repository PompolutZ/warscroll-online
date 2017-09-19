import * as React from 'react';
import './index.css';

import { UnitCoreStats } from '../../types';

interface ProfileHaloProps {
    stats: UnitCoreStats;
}

export class ProfileHalo extends React.Component<ProfileHaloProps, {}> {
    render() {
        return (
            <div className="parent">
                <div className="child">
                    <div className="stat move-stat">
                        <p>{`${this.props.stats.move}"`}</p>    
                    </div>  
                    <div className="stat wound-stat">
                        <p>{this.props.stats.wounds}</p>    
                    </div>  
                    <div className="stat bravery-stat">
                        <p>{this.props.stats.bravery}</p>    
                    </div>  
                    <div className="stat save-stat">
                        <p>{`${this.props.stats.save}+`}</p>    
                    </div>  
                </div>
            </div>
        );
    }
}
