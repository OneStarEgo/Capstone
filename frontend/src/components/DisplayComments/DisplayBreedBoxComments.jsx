import React, { useEffect } from 'react';

const DisplayComments = (props) => {

    useEffect(() => {
        let tempPostData = props.comments.map(entry => {
            return [entry.dog, entry.comment];
        });
        setPostData(tempPostData);
    }, [props.comment])
}

export default DisplayComments;