import React, { useEffect } from "react";

import { useQuery } from "react-query";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
    useEffect(() => {
        props.setPageTitle("Home Page");
    }, []);

    const {
        data: catData,
        isLoading,
        isError,
        refetch,
    } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    if (isError) {
        return <h1> Sorry, there was an error</h1>;
    }

    if (isLoading) {
        return <h1> Loading ...</h1>;
    }

    return (
        <div className="my-4">
            <h2 className="text-xl"> A Ramdom Cat Fact</h2>
            <p>{catData?.fact}</p>
            <p className="mt-2">
                <button
                    onClick={refetch}
                    className="font-bold py-2 px-4 rounded border"
                >
                    Update data
                    <FontAwesomeIcon icon={faRefresh} className="ml-2" />
                </button>
            </p>
        </div>
    );
};

export default Home;
