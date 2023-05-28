import React, { useEffect } from "react";

const Profile = (props) => {
    useEffect(() => {
        props.setPageTitle("Profile Page");
    }, []);

    return <div>Profile</div>;
};

export default Profile;
