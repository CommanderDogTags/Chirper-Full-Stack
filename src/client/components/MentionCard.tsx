import * as React from 'react';
import * as moment from 'moment';

const MentionCard: React.FC<MentionCardProps> = props => {

    return (
        <>
            <div className="col-md-6 offset-md-3">
                <article className="card my-2 shadow-sm border border-primary">
                    <div className="card-body text-center">
                        <h4 className="card-title text-info">{props.mention.author} chirped:</h4>
                        <p className="card-text text-info">{props.mention.text}</p>
                    </div>
                    <div className="card-footer text-center bg-secondary">
                        <p className="text-white mb-0">chirped on: {moment(props.mention._created).format("MMM Do YYYY")}</p>
                    </div>
                </article>
            </div>
        </>
    );
}

interface MentionCardProps { 
    mention: { id: number, text: string, author: string, _created: string }
}

export default MentionCard;