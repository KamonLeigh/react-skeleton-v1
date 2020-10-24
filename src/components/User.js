import React, { useState, useEffect } from 'react'
import SkeletonProfile from '../skeletons/SkeletonProfile';

function User() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setTimeout( async () => {
            const data = await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json();
            setProfile(data);
        }, 5000)
    },[])
    return (
        <div className="user">
            <h2>user</h2>

            {profile && (
                <div className="profile">
                    <h3>{profile.username }</h3>
                    <p>{profile.email}</p>
            <a href={profile.website}>{profile.website}</a>
                </div>
            )}
            {!profile && (<SkeletonProfile/>)}
            
        </div>
    )
}

export default User
